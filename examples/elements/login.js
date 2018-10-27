import { navigate } from "../node_modules/@wtnbass/slot-router/slot-router.esm.js";

class Login extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).innerHTML = `
      <h1>Login</h1>
      <button>Login</button>
    `;
  }

  connectedCallback() {
    this.shadowRoot.querySelector("button").addEventListener("click", () => {
      localStorage.setItem("login", true);
      navigate("/");
    });
  }
}

customElements.define("example-login", Login);
