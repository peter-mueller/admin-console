export class CountClient {
    findByClientName(name) {
        return fetch('///',).then(res => {
            return res.json()
        });
    }

    findAll() {
        return fetch('http://192.168.99.100:8080/chat-core/graphql?query={allCounts{id clientName receivedmessages}}').then(res => {
            return res.json();
        });
    }

    deleteAll() {
    	const data = {"query": "mutation{clearCount}"}
        return fetch("http://192.168.99.100:8080/chat-core/graphql", {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }
}