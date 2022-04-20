import App from "./App.js";
import appEventListener from "./components/events.js";

const render = () => {
  document.getElementById('root').innerHTML = App();
  appEventListener();
};

render();