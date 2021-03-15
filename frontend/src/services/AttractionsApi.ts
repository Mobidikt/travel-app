import axios from 'axios'
import config from '../config'
import { AttractionType } from '../store/types/attraction'

type ResponseGetAllType = {
  data: Array<AttractionType>,
  status: number,
}

const getAll = async () => {
  const data = await axios.get<ResponseGetAllType>(`${config.API_URL || ''}/attraction/:countryId`)
  return data
}

const getByCountryId = async (id: string) => {
  const data = await axios.get(`${config.API_URL || ''}/attraction/${id}`)
  return data
}

export default {
  getAll,
  getByCountryId,
}
