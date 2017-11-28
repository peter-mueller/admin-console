import { html, render } from '/node_modules/lit-html/lit-html.js';

const template = val => html`
<style>
    :host {
        display: block;
    }
    div {
        display: flex;
        flex-direction: row;
        padding: 1rem;
    }
    div + div {
        border-top: 1px solid #e5e5e5; 
    }
</style>

    ${val.map(user => html`
    <div>
        <span id="name">&#9749; ${user.name}</span>
    </div>
    `)}

    ${placeholder(val)}
`;

const placeholder = val  => {
    if (val == null || val.length === 0) {
        return html`<div>Keine User angemeldet</div>`;
    }
    return ``;
};

export class UserList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    set users(val) {
        render(template(val), this.shadowRoot);
    }
}

customElements.define('user-list', UserList);