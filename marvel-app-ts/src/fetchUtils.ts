import axios from 'axios'


export interface Service<T> {
    status: string
    payload?: T
    error?: Error
}

export const get = <T>(endpoint: string): Promise<T> => {
    return axios.get(endpoint).then(response => response.data)
}
