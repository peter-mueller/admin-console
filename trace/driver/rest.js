export class TraceClient {
    findAll() {
        return fetch('http://localhost:8080/chat-core/graphql?query={allTraces{id clientthreadname serverthreadname message}}').then(res => {
            return res.json();
        });
    }

    deleteAll() {
    	const data = {query: "mutation={clearTraces}"}
        return fetch("http://localhost:8080/chat-core/graphql", {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }
}