import BaseService from "@/services/base.service.js";

export const getAllPublications = async () => {
    return await BaseService.get("/publication");
}

export const postPublication = async (publication) => {
    return await BaseService.post("/publication", publication);
}

export const deletePublication = async (id) => {
    return await BaseService.delete("/publication/"+ id);
}

export const updatePublication = async (id, publication) => {
    return await BaseService.put("/publication/"+ id, publication);
}
