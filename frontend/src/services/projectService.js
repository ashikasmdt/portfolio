import api from "./api"

export const getFeaturedProjects = () => {
    return api.get("projects/?is_featured=true")
}

export const getProject = (slug) => {
    return api.get(`projects/${slug}/`)
}

export const getProjects = () => {
    return api.get("projects/")
}