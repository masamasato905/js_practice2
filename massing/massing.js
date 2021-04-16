(() =>{
const len = 10;
let count = 0;
let count2 = 0;
const problem = [len];
const problem2 = [len];
let sub = [len];
let sub2 = [len];
let result = 0;
let correct = 0;
let fault = 0;
let my_answer2 = null;
let judge = 0;

//回答の作成
let answer = new Array(len);
for(count=0; count<len; count++){
  answer[count] = new Array(len);
}
let my_answer = new Array(len);
for(count=0; count<len; count++){
  my_answer[count] = new Array(len);
}

//getElementById
const submit = document.getElementById("submit_corner");
const selecting = document.getElementById("00");
for(count = 0; count < len; count++){
  result = "0"+(count+1).toString();
  problem[count] = document.getElementById(result);
  result = (count+1).toString()+"0";
  problem2[count] = document.getElementById(result);
}
for(count = 0; count < len; count++){
  for(count2 = 0; count2 < len; count2++){
    if(count2+1 < 10){
      result = (((count+1)*10)+(count2+1)).toString();
      //console.log(result);
    }
    else if (count2+1 >= 10){
      result = (((count+1)*100)+(count2+1)).toString();
      //console.log(result);
    }
    my_answer[count][count2] = document.getElementById(result);
  }
}

function randomInt(max){
  return Math.floor(Math.random() * Math.floor(max));
}

function setup_game(){
  for(count = 0; count < len; count++){
    sub[count] = randomInt(9)+1;
    problem[count].innerHTML = sub[count];
    sub2[count] = randomInt(9)+1;
    problem2[count].innerHTML = sub2[count];
  }
  judge = randomInt(3);
  if(judge === 0){
    for(count = 0; count < len; count++){
      for(count2 = 0; count2 < len; count2++){
        answer[count][count2] = sub[count2]+sub2[count];
      }
    }
    selecting.innerHTML = "+";
  }
  else if(judge === 1){
    for(count = 0; count < len; count++){
      for(count2 = 0; count2 < len; count2++){
        answer[count][count2] = sub[count2]-sub2[count];
      }
    }
    selecting.innerHTML = "-";
  }
  if(judge === 3){
    for(count = 0; count < len; count++){
      for(count2 = 0; count2 < len; count2++){
        answer[count][count2] = sub[count2]*sub2[count];
      }
    }
    selecting.innerHTML = "✖︎";
  }
}

function checking(){
  for(count = 0; count < len; count++){
    for(count2 = 0; count2 < len; count2++){
      my_answer2 = parseInt(my_answer[count][count2].value);
      if(answer[count][count2] === my_answer2){
        correct++;
      }
      else if (answer[count][count2] !== my_answer2) {
        fault++;
      }
    }
  }
  window.alert("終了！あなたは"+correct+"門正解で"+fault+"問間違いでした!");
  setup_game();
}

setup_game();


submit.addEventListener("click", function(e){
  checking();
});

})();
