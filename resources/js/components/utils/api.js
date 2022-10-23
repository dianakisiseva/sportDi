import axios from 'axios';
import { Inertia } from '@inertiajs/inertia';

export const api = axios;

api.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response && (error.response.status === 401 || error.response.status === 419)) {
        let message = {
            "code": error.response.status,
            "message": error.response.data.props.message
        };

        window.sessionStorage.setItem('exceptions', JSON.stringify(message));
        Inertia.visit('/');

        return false;
    } else {
        return Promise.reject(error);
    }
});
