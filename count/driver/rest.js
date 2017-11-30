export class CountClient {
    findByClientName(name) {
        return fetch('///',).then(res => {
            return res.json()
        });
    }

    findAll() {
        return fetch('http://localhost:8080/chat-core/graphql?query={allCounts{id clientName receivedmessages}}').then(res => {
            return res.json();
        });
    }

    deleteAll() {
    	const data = {"query": "mutation={clearCounts}"}
        return fetch("http://localhost:8080/chat-core/graphql", {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }
}