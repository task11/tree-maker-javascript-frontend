import Header from "./components/Header.js";
import Footer from "./components/Footer.js";


const App = () => {

  return `
    ${Header()}
    <div>
      <h1>Init Project</h1>
    </div>
    ${Footer()}
  `;
};

export default App;