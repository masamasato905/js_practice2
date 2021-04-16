const timeElement = document.getElementById("time");
const start = document.getElementById("start");
const reset = document.getElementById("reset");
const result = document.getElementById("result");
const typedField = document.getElementById("typed");
const untypedField = document.getElementById("untyped");

const time = 10000;

let missTypeCount = 0;
let successTypeCount = 0;


const strs = [
  "helloworld",
  "googlechrome",
  "apple",
  "facebook"
];


function randomInt(max){
  return Math.floor(Math.random() * Math.floor(max));
}

function nextString(){
  const idx = randomInt(strs.length);
  return strs[idx];
}

function updateTextField(){
  typedField.textContent = typed;
  untypedField.textContent = untyped;
}

function next(){
  typed = "";
  untyped = nextString();
  updateTextField();
}

function updateTime(){
  const ms = remaining % 1000;
  const s = Math.floor(remaining / 1000) % 60;
  const m = Math.floor(remaining /(1000*60)) % 60;
  const h = Math.floor(remaining /(1000*60*60));

  const msStr = ms.toString().padStart(3,"0");
  const sStr = s.toString().padStart(2,"0");
  const mStr = m.toString().padStart(2,"0");
  const hStr = h.toString().padStart(2,"0");

  timeElement.innerHTML = hStr+":"+mStr+":"+sStr+":"+msStr;
}

function keyDownCallback(e){
  if(e.key !== untyped.substring(0,1)){
    missTypeCount += 1;
    return;
  }
  successTypeCount += 1;
  typed += untyped.substring(0,1);
  untyped = untyped.substring(1);
  updateTextField();

  if(untyped === ""){
    next();
  }
}

function gameStart(){
  let pre = new Date();
  intervalId = setInterval(function(){
    const now = new Date();
    remaining -= now - pre;

    if(remaining < 0){
      gameEnd();
    }

    pre = now;
    updateTime();
  }, 10);

    document.addEventListener("keydown", keyDownCallback);

    next();
  }



function gameEnd(){
  remaining = 0;
  updateTime();
  clearInterval(intervalId);
  intervalId = null;
  document.removeEventListener("keydown", keyDownCallback);
  result.textContent = "ミスタイプ数:"+missTypeCount+"総タイプ数"+(missTypeCount+successTypeCount),"リセットボタンを押してね";
}

let remaining = time;
let intervalId = null;


//タイマーについて
start.addEventListener("click", function(e){
  if(intervalId !== null){ return ;}
  gameStart();
});



reset.addEventListener("click", function(e){
  document.removeEventListener("keydown", keyDownCallback);

  clearInterval(intervalId);
  intervalId = null;
  remaining = time;
  updateTime();
  next();

  missTypeCount = 0;
  successTypeCount = 0;
  result.textContent = "";
});
