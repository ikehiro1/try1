let nametext = document.querySelector("#answer-get-text");
const answer = prompt("入力する数字は？"+"1だよね？");

if(answer == "1") {
  alert("1が入力されました");
  nametext.innerHTML = "1が入力されました"
} else if(answer == "2") {
  alert("2が入力されました");
  nametext.innerHTML = "2が入力されました"
} else if(answer == "3"){
  alert("3が入力されましたか")
  nametext.innerHTML = "3が入力されました"
} else if (answer == "4"){
  nametext.innerHTML = "4です"
} else {
  alert("想定外の入力です");
  nametext.innerHTML = "想定外の入力です"
}
if( answer == 1 || answer == 2 || answer == 3){
  alert("入力されました")
}
if(answer != 1 ){
    alert("1以外です")
  }
