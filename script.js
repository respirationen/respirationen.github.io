// w3schools
function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

console.log("Hej hvorfor er du inde i konsolen?")

function check() {
  var c=0;
  var h=5;
  var q1=document.quiz.question1.value;
  var q2=document.quiz.question2.value;
  var q3=document.quiz.question3.value;
  var q4=document.quiz.question4.value;
  var q5=document.quiz.question5.value;
  var result=document.getElementById('result');
  if (q1=="1d") {c++}
  if (q2=="2b") {c++}
  if (q3=="3a") {c++}
  if (q4=="4b") {c++}
  if (q5=="5a") {c++}
  result.textContent=`Du fik ${c} rigtige ud af ${h} spørgsmål!`;
}