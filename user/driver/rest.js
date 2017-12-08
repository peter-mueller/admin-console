export class UserClient {
    findAll() {
        return fetch('http://192.168.99.100:8080/chat-core/graphql?query={allUsers{name}}').then(res => {
            return res.json();
        });
    }

    deleteAll() {
    	const data = {query: "mutation{clearUsers}"}
        return fetch("http://192.168.99.100:8080/chat-core/graphql", {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }
}