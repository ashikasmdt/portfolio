import api from "./api"


export const getProjects = (params = {}) => {

    if (params.url) {

        return api.get(params.url)

    }


    return api.get("projects/", {
        params,
    })

}


export const getProject = (slug) => {

    return api.get(`projects/${slug}/`)

}