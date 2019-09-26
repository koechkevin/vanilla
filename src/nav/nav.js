import { setStore } from "../services/store";

export const template = `
<div class="nav">
<button id="nav-button">Click</button>
</div>
`;
let navId = document.getElementById('nav');

navId.innerHTML = template;

const button = document.getElementById('nav-button');
button.addEventListener('click', () => setStore({isLoggedIn: true}));

export const nav = navId;
