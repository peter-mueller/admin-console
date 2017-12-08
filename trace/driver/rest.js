export class TraceClient {
    findAll() {
        return fetch('http://192.168.99.100:8080/chat-core/graphql?query={allTraces{id clientthreadname serverthreadname message}}').then(res => {
            return res.json();
        });
    }

    deleteAll() {
    	const data = {query: "mutation{clearTrace}"}
        return fetch("http://192.168.99.100:8080/chat-core/graphql", {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }
}