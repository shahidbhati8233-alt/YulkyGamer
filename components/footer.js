class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background-color: #1a202c;
          color: #a0aec0;
          padding: 3rem 2rem;
          border-top: 1px solid #2d3748;
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }
        .footer-logo-icon {
          margin-right: 0.5rem;
          color: #48bb78;
        }
        .footer-logo-text {
          color: white;
          font-weight: bold;
          font-size: 1.25rem;
        }
        .footer-description {
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        .footer-heading {
          color: white;
          font-weight: bold;
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-link {
          margin-bottom: 0.75rem;
        }
        .footer-link a {
          color: #a0aec0;
          text-decoration: none;
          transition: color 0.3s;
        }
        .footer-link a:hover {
          color: #48bb78;
        }
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .social-link {
          color: #a0aec0;
          transition: color 0.3s;
        }
        .social-link:hover {
          color: #48bb78;
        }
        .footer-bottom {
          max-width: 1200px;
          margin: 3rem auto 0;
          padding-top: 1.5rem;
          border-top: 1px solid #2d3748;
          text-align: center;
          color: #718096;
          font-size: 0.875rem;
        }
        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
          }
        }
      </style>
      <footer>
        <div class="footer-container">
          <div class="footer-about">
            <div class="footer-logo">
              <i data-feather="cube" class="footer-logo-icon"></i>
              <span class="footer-logo-text">Yulky Gamer</span>
            </div>
            <p class="footer-description">
              Your ultimate portal for Minecraft downloads, tutorials, and community resources.
            </p>
            <div class="social-links">
              <a href="#" class="social-link"><i data-feather="twitter"></i></a>
              <a href="#" class="social-link"><i data-feather="youtube"></i></a>
              <a href="#" class="social-link"><i data-feather="instagram"></i></a>
              <a href="#" class="social-link"><i data-feather="github"></i></a>
            </div>
          </div>
          <div class="footer-section">
            <h3 class="footer-heading">Downloads</h3>
            <ul class="footer-links">
              <li class="footer-link"><a href="download-java.html">Java Edition</a></li>
              <li class="footer-link"><a href="download-bedrock.html">Bedrock Edition</a></li>
              <li class="footer-link"><a href="download-education edition.html">Education Edition</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3 class="footer-heading">Tutorials</h3>
            <ul class="footer-links">
              <li class="footer-link"><a href="https://youtu.be/N2D9TbHDeCY?si=rLbl2nQ0BEQ9VS4_">Beginner's Guide</a></li>
              <li class="footer-link"><a href="https://youtu.be/N2D9TbHDeCY?si=rLbl2nQ0BEQ9VS4_">Building Mastery</a></li>
              <li class="footer-link"><a href="https://youtu.be/N4AojLGXWe4?si=gTk5ydCm9OimAk11">Redstone Wonders</a></li>
              <li class="footer-link"><a href="https://youtu.be/bUudx1cPiAA?si=-78Ygf6a4aVovZsy">Survival Guide</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3 class="footer-heading">About us</h3>
            <ul class="footer-links">
            <div class="flex flex-wrap justify-center gap-4"> 
               <div>
                <a href="https://www.instagram.com/yulkygamer/?utm_source=ig_web_button_share_sheet" target="_blank">
                <img src="images/instagram logo.png" alt="logo" width="40" class="hover:scale-105">
                </a>
                </div>
                <div>
                <a href="https://www.instagram.com/yulkygamer/?utm_source=ig_web_button_share_sheet" target="_blank">
                <img src="images/telegram logo.png" alt="logo" width="35" class="hover:scale-105">
                </a>
                </div>
                <div>
                <a href="https://api.whatsapp.com/send?phone=917737261220"
   target="_blank"
   rel="noopener noreferrer">
  <img src="images/whatsapp logo.png"
       alt="Chat on WhatsApp"
       width="35"
       class="hover:scale-105">
</a>


                </div>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} Yulky Gamer. Not affiliated with Mojang or Microsoft.</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);





