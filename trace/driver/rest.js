export class TraceClient {
    findAllMessages() {
        return fetch('kkjj').then(res => {
            return res.json();
        });
    }

    deleteAll() {
        return fetch('kjkj',
            {
                method: 'DELETE'
            });
    }
}