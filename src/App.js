import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Contents from "./components/Contents.js";
import Output from "./components/Output.js";


const App = () => {

  return `
    ${Header()}
    <section>
      ${Contents()}
      ${Output()}
    </section>
    ${Footer()}
  `;
};

export default App;