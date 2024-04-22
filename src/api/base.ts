import axios, { AxiosInstance, AxiosResponse } from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;
const USER_API = '/users';

enum httpCodes {
    OK = 200
}

class BaseApi {
    api: AxiosInstance;

    constructor() {
        this.api = axios.create({
            baseURL: BASE_URL
        });
    }

    async fetchUsers() {
        try {
            const response: AxiosResponse = await this.api.get(USER_API);
            if (response.status !== httpCodes.OK) {
                throw new Error('Failed to fetch users');
            }
            return response.data; // Возвращаем свойство data для получения данных
        } catch (error) {
            throw new Error('Failed to fetch users');
        }
    }
}

export const baseApi = new BaseApi();



