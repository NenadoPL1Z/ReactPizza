import axios from "axios";

export const requestGetApi = (api: string) => {
  return axios.get(api).then(r => r.data)
}
