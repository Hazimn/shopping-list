// Espera o carregamento do HTML
document.addEventListener('DOMContentLoaded', function () {
    // Seleciona os elementos principais
    const inputField = document.querySelector('.add-new');
    const addButton = document.querySelector('.add-item');
    const list = document.querySelector('.list');
  
    // Cria e adiciona um novo item na lista
    function addItem(text) {
      const item = document.createElement('div');
      item.classList.add('item');
  
      item.innerHTML = `
        <div>
          <input type="checkbox" class="check">
          <span>${text}</span>
        </div>
        <button class="trash-can">
          <img src="./assets/icons/trash-can.svg" alt="">
        </button>
      `;
  
      // Remove o item ao clicar na lixeira
      const trashBtn = item.querySelector('.trash-can');
      trashBtn.addEventListener('click', function () {
        item.remove();
      });
  
      list.appendChild(item);
    }
  
    // Adiciona item ao clicar no botão
    addButton.addEventListener('click', function () {
      const text = inputField.value.trim();
      if (text !== '') {
        addItem(text);
        inputField.value = '';
      }
    });
  
    // Adiciona item ao pressionar Enter
    inputField.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        addButton.click();
      }
    });
  
    // Ativa a lixeira dos itens que já estão no HTML
    const existingTrashButtons = document.querySelectorAll('.trash-can');
    existingTrashButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        button.parentElement.remove();
      });
    });
  });