export class UserClient {
    findAll() {
        return fetch('http://localhost:8080/chat-core/graphql?query={allUsers{name}}').then(res => {
            return res.json();
        });
    }

    deleteAll() {
        return fetch("/", {
            method: 'DELETE'
        });
    }
}