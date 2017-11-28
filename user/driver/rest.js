export class UserClient {
    findAll() {
        return fetch('/users').then(res => {
            return res.json();
        });
    }

    deleteAll() {
        return fetch("/", {
            method: 'DELETE'
        });
    }
}