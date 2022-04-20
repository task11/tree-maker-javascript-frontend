

const Header = () => {

  return `
    <header>
      <div class="container-header">
        <a aria-current="page" href="#">
          <h1>
            <img class="img-logo" src="https://user-images.githubusercontent.com/89209626/164180885-eb94c33e-5688-4bd8-8189-76c2ef56ab4c.png" alt="DOM tree generator logo">
            <div>DOM Tree Generator</div>
          </h1>
        </a>
        <div class="header-link">
          <a href="https://github.com/task11/tree-maker-javascript-frontend" target="blank">
            <div>
              <i class="fab fa-github"></i>
              Visit this Repo
            </div>
          </a>
          <a href="https://github.com/task11/tree-maker-javascript-frontend/fork"
            aria-label="Fork task11's DOM-tee-generator on GitHub" target="blank">
            <div>
              <i class="fas fa-code-branch"></i>
              Fork on GitHub
            </div>
          </a>
        </div>
      </div>
    </header>
  `;
};

export default Header;