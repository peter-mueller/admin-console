export class CountClient {
    findByClientName(name) {
        return fetch('///',).then(res => {
            return res.json()
        });
    }

    findAll() {
        return fetch('///').then(res => {
            return res.json();
        });
    }

    deleteAll() {
        return fetch("'''", {
            method: 'DELETE'
        });
    }
}