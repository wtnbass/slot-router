class About2 extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).innerHTML = `
      <h2>About - 2</h2>
    `;
  }
}

customElements.define("example-about-2", About2);
