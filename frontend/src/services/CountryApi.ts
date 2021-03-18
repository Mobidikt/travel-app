import axios from 'axios'
import config from '../config'
import { CountryType } from '../store/types/countries'

type ResponseGetAllType = {
  data: Array<CountryType>,
  status: number,
}

const getAll = async () => {
  const data = await axios.get<ResponseGetAllType>(`${config.API_URL || ''}/country`)
  return data
}

export default {
  getAll,
}
