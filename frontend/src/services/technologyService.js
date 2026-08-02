import api from "./api"


export const getTechnologies = () => {
  return api.get("technologies/")
}