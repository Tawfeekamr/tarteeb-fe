import api from "@/utils/axiosConfig";

export const getMetaDate = () =>  api.get('/api/meta?locale=en&draft=false&depth=1')
