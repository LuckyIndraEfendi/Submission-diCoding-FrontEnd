class Navbar extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="logo">
    <h1>Navbar</h1>
    </div> 
    <ul class="menu">
       <li><a href="">Home</a></li>
       <li><a href="">Movie</a></li>
       <li><a href="">TvMovie</a></li>
       <li><a href="">More</a></li>
    </ul>`;
  }
}

customElements.define("my-navbar", Navbar);
