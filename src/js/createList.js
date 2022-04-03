import {list} from './list.js';
 //Esta função cria os elementos da lista (nav) de acordo com os dados do array list importado de list.js
function createList(){
    const listagem = document.querySelector(".listagem");
    const ul = document.createElement("ul");
    listagem.appendChild(ul);
    
    list.forEach((lista) => {
      const li = document.createElement("li");
      li.setAttribute("class", lista.liClass);
      li.setAttribute("id", lista.liId);
    
      const img = document.createElement("img");
      img.src = lista.img.src;
      img.alt = lista.img.alt;
    
      const span = document.createElement("span");
      span.textContent = lista.nome;
    
      li.appendChild(img);
      li.appendChild(span);
      ul.appendChild(li)
    });
    }
    
    export default createList()