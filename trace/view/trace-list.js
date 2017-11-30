import { html, render } from '../../node_modules/lit-html/lit-html.js';

const template = val => html`
<style>
    :host {
        display: block;
    }
    div {
        display: flex;
        flex-direction: column;
        padding: 1rem;
    }
    div + div {
        border-top: 1px solid #e5e5e5; 
    }
</style>

    ${val.map(trace => html`
    <div id="traceentry">
    	<span id="title">${trace.id} - <b>${trace.clientthreadname} (${trace.serverthreadname})</b></span>
        <span id="message">${trace.message}</span>
    </div>
    `)}

    ${placeholder(val)}
`;

const placeholder = val  => {
    if (val == null || val.length === 0) {
        return html`<div>Kein Traces vorhanden</div>`;
    }
    return ``;
};

export class TraceList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    set traces(val) {
        render(template(val), this.shadowRoot);
    }
}

customElements.define('trace-list', TraceList);