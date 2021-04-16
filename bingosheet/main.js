'use strict';

{
  const source2 = [];
  const setting = document.getElementById("setting");
  const table = document.querySelector('tbody');

  function number() {
    const source = [];
    for (let i = 0; i < 99; i++) {
      source[i] = i;
    }
    const column = [];
    for (let i = 0; i < 5; i++) {
      column[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    }
    return column;
  }

  function createColumns() {
    const columns = [];
    for (let i = 0; i < 5; i++) {
      columns[i] = number();
    }
    columns[2][2] = 'FREE';
    return columns;
  }

  function renderBingo(columns) {
    for (let row = 0; row < 5; row++) {
      const tr = document.createElement('tr');
      for (let col = 0; col < 5; col++) {
        const td = document.createElement('td');
        td.textContent = columns[col][row];
        tr.appendChild(td);
      }
      document.querySelector('tbody').appendChild(tr);
    }
  }

  function setting_number(){
    for(let i = 0; i < 98; i++){
      source2[i] = i+1;
    }
  }

  function deletetable(){
    let table = document.querySelector('tbody');
    while(table.lastChild){
      table.removeChild(table.lastChild);
    }
    create_number();
  }

  function create_number(){
    let number = source2.splice(Math.floor(Math.random() * source2.length), 1)[0];
    setting.textContent = number;
    create_table(number);
  }

  function create_table(number){
    for(let row=0; row < 5; row++) {
      const tr = document.createElement('tr');
      for (let col = 0; col < 5; col++) {
        const td = document.createElement('td');
        if(number === columns[col][row]){
          let r = row;
          let c = col;
          columns[c][r] = "";
        }
        td.textContent = columns[col][row];
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
  }


  const columns = createColumns();
  renderBingo(columns);
  setting_number();
  setting.addEventListener("click",deletetable);

}
