import api from "./api"

export const getFeaturedProjects = () => {
    return api.get("projects/?is_featured=true")
}