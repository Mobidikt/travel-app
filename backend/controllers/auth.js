const User = require('../models/User')
const errorHandler = require('../utils/errorHandler')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const { JWT_KEY } = require('../config')
const lang = require('../db/lang')

const generateAuthToken = (id) => {
  return jwt.sign({ userId: id }, JWT_KEY, {
    expiresIn: '24h',
  })
}

module.exports.login = async function (req, res) {
  try {
    const { email, password } = req.body
    const langCode = req.header('Language-Code')
    const user = await User.findOne({ email })

    if (!user) {
      return res
        .status(400)
        .json({ message: lang.auth['emailNotFound'][langCode] })
    }

    const validPassword = bcrypt.compareSync(password, user.password)

    if (!validPassword) {
      return res
        .status(400)
        .json({ message: lang.auth['wrongPassword'][langCode] })
    }

    const token = generateAuthToken(user._id)
    res.status(200).json({
      token: `Bearer ${token}`,
      email: user.email,
      photo: user.photo,
      name: user.name,
    })
  } catch (error) {
    errorHandler(error)
  }
}

module.exports.register = async function (req, res) {
  try {
    const errors = validationResult(req)
    const langCode = req.header('Language-Code')
    if (!errors.isEmpty()) {
      const e = errors.errors[0].param
      const eWithTranslation = lang.auth[e][langCode]
      return res.status(400).json({ message: eWithTranslation })
    }

    const { name, email, password } = req.body

    const candidate = await User.findOne({ email })

    if (candidate) {
      return res.status(400).json({ message: lang.auth['sameEmail'][langCode] })
    }

    const hashPassword = bcrypt.hashSync(password, 6)

    const photo = req.file ? req.file.path : null

    await new User({ email, name, password: hashPassword, photo }).save()

    res.status(201).json({ message: `Пользователь создан` })
  } catch (error) {
    errorHandler(error)
  }
}

module.exports.update = async (req, res) => {
  try {
    const { name, email } = req.body
    const photo = req.file ? req.file.path : null

    const updated = {
      name,
    }

    if (photo) updated.photo = photo

    const updatedUser = await User.findOneAndUpdate(
      {
        email: email,
      },
      {
        $set: updated,
      },
      {
        new: true,
      },
    )

    res.status(200).json({ name: updatedUser.name, photo: updatedUser.photo })
  } catch (e) {
    errorHandler(e)
  }
}
