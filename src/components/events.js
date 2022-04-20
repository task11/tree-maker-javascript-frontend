const transformStrToHTML = (str) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(str, 'text/html');
  return doc;
};

const printDOMTree = (str) => {
  const doc = transformStrToHTML(str);
  const $result = document.querySelector(".result");

  resetResult($result);
  $result.appendChild(searchNode(doc.body.childNodes));
};

const searchNode = (nodes) => {
  const ol = document.createElement("ol");

  for (let i = 0; i < nodes.length; i++) {
    const li = document.createElement("li");
    const text = document.createTextNode(
      "NODE NAME: " + nodes[i].nodeName
    );
    //+ `${nodes[i].textContent === "" ? "" : "  CONTENT: " + nodes[i].textContent}`
    li.appendChild(text);
    ol.appendChild(li);

    if (nodes[i].hasChildNodes()) {
      ol.append(searchNode(nodes[i].childNodes));
    }
  }

  return ol;
};

const resetResult = (parentNode) => {
  if (parentNode.hasChildNodes()) {
    while (parentNode.hasChildNodes()) {
      parentNode.removeChild(
        parentNode.firstChild
      );
    }
  }
};

const appEventListener = () => {
  const $contentForm = document.querySelector(".content-form");


  const submitInput = (e) => {
    e.preventDefault();
    const $inputForm = document.querySelector(".input-form");
    printDOMTree($inputForm.value);
  };

  $contentForm.addEventListener("submit", submitInput);
};

export default appEventListener;