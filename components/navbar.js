class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background-color: rgba(26, 32, 44, 0.9);
          backdrop-filter: blur(10px);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 50;
          border-bottom: 1px solid rgba(74, 85, 104, 0.3);
        }
        .logo {
          color: #48bb78;
          font-weight: bold;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
        }
        .logo-icon {
          margin-right: 0.5rem;
          color: #48bb78;
        }
        .nav-links {
          display: flex;
          gap: 3rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-link a {
          color: #e2e8f0;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
          font-size: 1.1rem;
        }
        .nav-link a:hover {
          color: #48bb78;
        }
        .active a {
          color: #48bb78;
          font-weight: 600;
        }
        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
        .mobile-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background-color: rgba(26, 32, 44, 0.95);
          padding: 1rem;
          border-top: 1px solid rgba(74, 85, 104, 0.3);
        }
        .mobile-menu.open {
          display: block;
        }
        .mobile-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .mobile-link {
          padding: 0.75rem 0;
        }
        .mobile-link a {
          color: #e2e8f0;
          text-decoration: none;
          font-size: 1.1rem;
          display: block;
        }
        .mobile-link a:hover {
          color: #48bb78;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .mobile-menu-button {
            display: block;
          }
        }
      </style>
      <nav>
        <div class="logo">
          <i data-feather="cube" class="logo-icon"></i>
          Yuky Gamer
        </div>
        <ul class="nav-links">
          <li class="nav-link"><a href="index.html">Home</a></li>
          <li class="nav-link"><a href="#downloads">Downloads</a></li>
          <li class="nav-link"><a href="#tutorials">Tutorials</a></li>
          <li class="nav-link"><a href="#tutorials">  </a></li>
          <li class="nav-link"><a href="#tutorials">  </a></li>
        </ul>
        <button class="mobile-menu-button" data-collapse-toggle="mobile-menu">
          <i data-feather="menu"></i>
        </button>
        <div class="mobile-menu hidden" id="mobile-menu">
          <ul class="mobile-links">
            <li class="mobile-link"><a href="index.html">Home</a></li>
            <li class="mobile-link"><a href="#downloads">Downloads</a></li>
            <li class="mobile-link"><a href="#tutorials">Tutorials</a></li>
          </ul>
        </div>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);