import apiClient from './api-client';

interface Entity {
    id: number;
}

class HttpService {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll<T>() {
        const controller = new AbortController();
        const request = apiClient.get<T[]>(this.endpoint, {signal: controller.signal});
        return {request, cancel: () => controller.abort()};
    }

    create<T>(item: T) {
        return apiClient.post(this.endpoint, item)
    }

    update<T extends Entity>(item: T) {
        return apiClient.put(`${this.endpoint}/${item.id}`, item)
    }

    delete(id: number) {
        return apiClient.delete(`${this.endpoint}/${id}`)
    }
}

const create = (endpoint: string) => new HttpService(endpoint)

export default create;

