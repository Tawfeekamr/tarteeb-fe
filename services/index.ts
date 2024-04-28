import api from "@/utils/axiosConfig";

export const getMetaData = () =>  api.get('/api/meta?locale=en&draft=false&depth=1')
export const getPackagesData = () =>  api.get('/api/travel-packages?locale=en&draft=false&depth=1')
