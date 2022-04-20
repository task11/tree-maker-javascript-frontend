

const Contents = () => {
  return `
    <div class="main-content">
      <form class="content-form">
        <textarea type="text" class="input-form" placeholder="Input: upload your HTML..."></textarea>
        <button type="submit" name="print">Print Tree</button>
        <div class="form-btn">
          <div class="btn-selector">
            <input type="text" class="selector" placeholder="Input CSS Selector..">
            <button type="submit" name="selector" >Selector</button>
          </div>
          <div class="btn-id">
            <input type="text" class="id" placeholder="Input single ID..">
            <button type="submit" name="id">Get ID</button>
          </div>
        </div>
      </form>
    </div>
  `;
};

export default Contents;