import axios from 'axios'
import config from '../config'

type ResponseRegisterType = {
  data: string,
  status: number,
}

type LoginDataType = {
  token: string,
  email: string,
  photo: string,
}

type ResponseLoginType = {
  data: LoginDataType,
  status: number,
}

type UpdateResponse = {
  name: string,
  photo: string | null,
}

const register = async (name: string, email: string, password: string, photo: File | null) => {
  const fd = new FormData()
  fd.append('name', name)
  fd.append('email', email)
  fd.append('password', password)

  if (photo) {
    fd.append('photo', photo, photo.name)
  }

  const data = await axios.post<ResponseRegisterType>(`${config.API_URL || ''}/auth/register`, fd)
  return data
}

const login = async (email: string, password: string) => {
  const data = await axios.post<ResponseLoginType>(`${config.API_URL || ''}/auth/login`, {
    email,
    password,
  })
  return data
}

const update = async (email: string, name: string, photo: File | null) => {
  const fd = new FormData()

  fd.append('email', email)
  fd.append('name', name)

  if (photo) {
    fd.append('photo', photo, photo.name)
  }
  const data = await axios.patch<UpdateResponse>(`${config.API_URL || ''}/auth/update`, fd)
  return data
}

export default {
  register,
  login,
  update,
}
