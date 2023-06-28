const {
  generateCountriesTranslationOjbect,
  generateAttractionsTranslationOjbect,
} = require('./generateTranslateObject')

const countries = generateCountriesTranslationOjbect()

const attractions = generateAttractionsTranslationOjbect()

const auth = {
  sameEmail: {
    ru: 'Пользователь с такой почтой уже существует',
    en: 'A user with this email already exists',
    de: 'Ein Benutzer mit einer solchen E-Mail existiert bereits',
  },
  emailNotFound: {
    ru: 'Пользователь с такой почтой не найден',
    en: 'The user with such mail was not found',
    de: 'Der Benutzer mit dieser E-Mail wurde nicht gefunden',
  },
  wrongPassword: {
    ru: 'Вы ввели неверный пароль',
    en: 'You entered an invalid password',
    de: 'Sie haben ein falsches Passwort eingegeben',
  },
  password: {
    ru: 'Минимальная длина пароля 6 символов',
    en: 'The minimum password length is 6 characters',
    de: 'Mindestkennwortlänge 6 Zeichen',
  },
}

module.exports = {
  countries,
  attractions,
  auth,
}
