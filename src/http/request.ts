import instance from "./instance";

interface API {
    get<T>(url: string, params?: any): Promise<T>

    post<T>(url: string, params?: any): Promise<T>
}

const request: API = {
    get(url, params) {
        return new Promise((resolve, reject) => {
            instance.get(url, { params }).then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err.data);
            })
        })
    },
    post(url, params) {
        return new Promise((resolve, reject) => {
            instance.post(url, params).then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err.data);
            })
        })
    }
}

export default request;