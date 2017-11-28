class TraceClient {
    findAllMessages() {
        return fetch('').then(res => {
            return res.json();
        });
    }
    
    deleteAll() {
        return fetch('');
    }
}