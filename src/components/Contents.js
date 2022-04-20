

const Contents = () => {
  return `
    <div>
      <form class="content-form">
        <textarea style="width: 500px; height: 1050px;" type="text" class="input-form"></textarea>
        <button type="submit" name="print">Print Tree</button>
        <input type="text" class="selector">
        <button type="submit" name="selector">Query Selector</button>
        <input type="text" class="id">
        <button type="submit" name="id">Get ID</button>
      </form>
    </div>
  `;
};

export default Contents;