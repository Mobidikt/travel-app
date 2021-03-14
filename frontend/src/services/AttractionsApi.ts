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

export default {
  getAll,
}
