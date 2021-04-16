(() => {
  const doc = document.getElementById("calculation");
  const subject = document.getElementById('sub');
  const submit = document.getElementById("submit");
  const answer = document.getElementById("answer");

  //問題数
  let count = 0;
  let correct = 0;
  let fault = 0;
  let judge = 0;
  let s1 = 0;
  let s2 = 0;
  let my_answer = null;

  let check = 0;

  function randomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
  }

  function starting_game(){
    if(count <10){
      count++;
      subject.textContent = "第"+count+"問目";
      s1 = randomInt(99)+1;
      s2 = randomInt(99)+1;
      judge = randomInt(3);
      if(judge === 0){
        check = s1 + s2;
        calculation.textContent = s1  + "+" + s2 + "=";
      }
      else if(judge === 1){
        check = s1 - s2;
        calculation.textContent = s1  + "-" + s2 + "=";
      }
      else if(judge === 2){
        check = s1 * s2;
        calculation.textContent = s1  + "✖︎" + s2 + "=";
      }
    }
    else{
      finishing_game();
    }
  }

  function checking(){
    my_answer = parseInt(answer.value);
    if(check === my_answer){
      window.alert("正解！");
      correct++;

      starting_game();
    }
    else if (check !== my_answer){
      window.alert("不正解！");
      fault++;

      starting_game();
    }
    answer.value = "";
  }

  function finishing_game(){
    window.alert("終了! あなたの成績は"
    +correct+"問正解"+fault+"問不正解です!");
  }

  starting_game();

  submit.addEventListener("click", function(e){
    checking();
  });


})();
