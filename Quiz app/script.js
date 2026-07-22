const questions = [

{
question:"Which fruit is yellow?",
options:["Apple","Banana","Orange","Grape"],
answer:"Banana"
},

{
question:"Which fruit is called the King of Fruits?",
options:["Mango","Apple","Pear","Orange"],
answer:"Mango"
},

{
question:"Which fruit is green outside and red inside?",
options:["Watermelon","Banana","Orange","Pineapple"],
answer:"Watermelon"
},

{
question:"Which fruit is used to make raisins?",
options:["Grape","Apple","Pear","Mango"],
answer:"Grape"
},

{
question:"Which fruit is very sour?",
options:["Lemon","Banana","Cherry","Mango"],
answer:"Lemon"
},

{
question:"Which fruit has a crown on its head?",
options:["Pineapple","Orange","Apple","Pear"],
answer:"Pineapple"
},

{
question:"Which fruit is rich in Vitamin C?",
options:["Orange","Apple","Pear","Grape"],
answer:"Orange"
},

{
question:"Which fruit is used to make guacamole?",
options:["Avocado","Banana","Cherry","Mango"],
answer:"Avocado"
},

{
question:"Which fruit has seeds on the outside?",
options:["Strawberry","Apple","Orange","Lemon"],
answer:"Strawberry"
},

{
question:"Which fruit grows in bunches?",
options:["Grape","Watermelon","Apple","Pawpaw"],
answer:"Grape"
},

{
question:"Which fruit is also called pawpaw?",
options:["Papaya","Mango","Pear","Cherry"],
answer:"Papaya"
},

{
question:"Which fruit has a fuzzy brown skin?",
options:["Kiwi","Apple","Orange","Banana"],
answer:"Kiwi"
},

{
question:"Which fruit is commonly used to make juice?",
options:["Orange","Apple","Mango","Grape"],
answer:"Orange"
},

{
question:"Which fruit is red and heart shaped?",
options:["Strawberry","Lemon","Grape","Coconut"],
answer:"Strawberry"
},

{
question:"Which fruit has a hard shell?",
options:["Coconut","Apple","Banana","Cherry"],
answer:"Coconut"
},

{
question:"Which fruit is small and round?",
options:["Cherry","Mango","Pineapple","Avocado"],
answer:"Cherry"
},

{
question:"Which fruit is commonly used in smoothies?",
options:["Banana","Onion","Garlic","Pepper"],
answer:"Banana"
},

{
question:"Which fruit is green and shaped like a pear?",
options:["Avocado","Orange","Grape","Cherry"],
answer:"Avocado"
},

{
question:"Which fruit can be red, green, or yellow?",
options:["Apple","Banana","Kiwi","Pear"],
answer:"Apple"
},

{
question:"Which fruit has orange flesh?",
options:["Papaya","Grape","Cherry","Blueberry"],
answer:"Papaya"
},

{
question:"Which fruit is small and blue?",
options:["Blueberry","Mango","Lemon","Pear"],
answer:"Blueberry"
},

{
question:"Which fruit has a spiky outside?",
options:["Durian","Apple","Orange","Grape"],
answer:"Durian"
},

{
question:"Which fruit is used to make lemonade?",
options:["Lemon","Mango","Banana","Grape"],
answer:"Lemon"
},

{
question:"Which fruit is large with black seeds?",
options:["Watermelon","Cherry","Apple","Kiwi"],
answer:"Watermelon"
},

{
question:"Which fruit is tropical and sweet?",
options:["Mango","Potato","Carrot","Onion"],
answer:"Mango"
},

{
question:"Which fruit is purple and used for juice?",
options:["Grape","Banana","Lemon","Orange"],
answer:"Grape"
},

{
question:"Which fruit has a sweet orange colour?",
options:["Peach","Garlic","Pepper","Onion"],
answer:"Peach"
},

{
question:"Which fruit looks like a star when cut?",
options:["Starfruit","Apple","Orange","Pear"],
answer:"Starfruit"
},

{
question:"Which fruit is green and sour?",
options:["Lime","Banana","Cherry","Mango"],
answer:"Lime"
},

{
question:"Which fruit is known as the forbidden fruit?",
options:["Apple","Orange","Grape","Kiwi"],
answer:"Apple"
},

{
question:"Which fruit is used on some pizzas?",
options:["Pineapple","Garlic","Potato","Onion"],
answer:"Pineapple"
},

{
question:"Which fruit is orange and easy to peel?",
options:["Tangerine","Apple","Grape","Pear"],
answer:"Tangerine"
},

{
question:"Which fruit contains many small seeds?",
options:["Pomegranate","Banana","Mango","Coconut"],
answer:"Pomegranate"
},

{
question:"Which fruit is popular in tropical areas?",
options:["Mango","Apple","Pear","Cherry"],
answer:"Mango"
},

{
question:"Which fruit is used to make wine?",
options:["Grape","Apple","Orange","Lemon"],
answer:"Grape"
},

{
question:"Which fruit has a sweet creamy texture?",
options:["Avocado","Lemon","Lime","Grape"],
answer:"Avocado"
},

{
question:"Which fruit is common in fruit salads?",
options:["Apple","Onion","Garlic","Pepper"],
answer:"Apple"
},

{
question:"Which fruit is famous in tropical islands?",
options:["Pineapple","Potato","Carrot","Beans"],
answer:"Pineapple"
},

{
question:"Which fruit is small purple and round?",
options:["Grape","Banana","Orange","Watermelon"],
answer:"Grape"
},

{
question:"Which fruit is used to make orange juice?",
options:["Orange","Apple","Pear","Kiwi"],
answer:"Orange"
},

{
question:"Which fruit has green skin and pink flesh?",
options:["Guava","Banana","Cherry","Apple"],
answer:"Guava"
},

{
question:"Which fruit is a citrus fruit?",
options:["Orange","Mango","Banana","Grape"],
answer:"Orange"
},

{
question:"Which fruit is sweet and eaten fresh?",
options:["Pear","Onion","Garlic","Potato"],
answer:"Pear"
},

{
question:"Which fruit is dried to make prunes?",
options:["Plum","Orange","Apple","Mango"],
answer:"Plum"
},

{
question:"Which fruit is used to make jam?",
options:["Strawberry","Potato","Carrot","Onion"],
answer:"Strawberry"
},

{
question:"Which fruit has rough brown skin?",
options:["Coconut","Apple","Grape","Cherry"],
answer:"Coconut"
},

{
question:"Which fruit is green and crunchy?",
options:["Apple","Banana","Mango","Orange"],
answer:"Apple"
},

{
question:"Which fruit is usually peeled before eating?",
options:["Banana","Grape","Cherry","Blueberry"],
answer:"Banana"
},

{
question:"Which fruit is sweet and yellow?",
options:["Mango","Lemon","Lime","Cherry"],
answer:"Mango"
}

];




const registerPage =
document.getElementById("registerPage");


const quizPage =
document.getElementById("quizPage");


const resultPage =
document.getElementById("resultPage");


const registerForm =
document.getElementById("registerForm");


const username =
document.getElementById("username");


const email =
document.getElementById("email");


const phone =
document.getElementById("phone");


const registerMessage =
document.getElementById("registerMessage");


const welcomeUser =
document.getElementById("welcomeUser");


const questionText =
document.getElementById("question");


const options =
document.querySelectorAll(".option");


const progress =
document.getElementById("progress");


const nextBtn =
document.getElementById("nextBtn");


const stopBtn =
document.getElementById("stopBtn");


const scoreText =
document.getElementById("score");


const resultMessage =
document.getElementById("resultMessage");


const reviewBtn =
document.getElementById("reviewBtn");


const reviewBox =
document.getElementById("reviewBox");


const restartBtn =
document.getElementById("restartBtn");


const newPlayerBtn =
document.getElementById("newPlayerBtn");








let currentQuestion = 0;

let score = 0;

let wrongAnswers = [];

let answered = false;









registerForm.addEventListener("submit",function(e){


e.preventDefault();



let name = username.value;

let mail = email.value;

let number = phone.value;




if(!name || !mail || !number){


registerMessage.textContent =
"Please fill all details";


}


else{


registerPage.classList.add("hidden");


quizPage.classList.remove("hidden");



welcomeUser.textContent =
"Welcome " + name + " 👋";



showQuestion();


}



});










function shuffle(array){


return array.sort(()=> Math.random() - 0.5);


}









function showQuestion(){


answered = false;



let current =
questions[currentQuestion];



questionText.textContent =
current.question;



progress.textContent =
`Question ${currentQuestion + 1} / ${questions.length}`;






let mixedOptions =
shuffle([...current.options]);





options.forEach(function(button,index){



button.textContent =
mixedOptions[index];


button.disabled=false;


button.classList.remove("correct");


button.classList.remove("wrong");


});



}











options.forEach(function(button){


button.addEventListener("click",function(){



if(answered){

return;

}



answered=true;



let selected =
button.textContent;



let correct =
questions[currentQuestion].answer;





if(selected === correct){


score++;


button.classList.add("correct");


}


else{


button.classList.add("wrong");



wrongAnswers.push({

question:
questions[currentQuestion].question,


yourAnswer:
selected,


correctAnswer:
correct


});





options.forEach(function(btn){


if(btn.textContent === correct){

btn.classList.add("correct");


}


});



}







// AND example

if(selected === correct && score > 0){


console.log("Correct");


}





options.forEach(function(btn){

btn.disabled=true;


});



});



});












nextBtn.addEventListener("click",function(){



if(!answered){


alert("Select an answer first");


return;


}



currentQuestion++;




if(currentQuestion < questions.length){


showQuestion();


}

else{


showResult();


}



});











stopBtn.addEventListener("click",function(){


showResult();


});











function showResult(){



quizPage.classList.add("hidden");


resultPage.classList.remove("hidden");



scoreText.textContent =
`Your Score: ${score}/${questions.length}`;





if(score === questions.length){


resultMessage.textContent =
"Perfect Score! Fruit Expert 🍎";


}



else if(score >= questions.length / 2){


resultMessage.textContent =
"Great Job! Keep Learning 🍌";


}



else{


resultMessage.textContent =
"Practice More! You Can Improve 🍊";


}







switch(score){


case 10:

console.log("Perfect");

break;


case 5:

console.log("Average");

break;


default:

console.log("Keep trying");


}



}











reviewBtn.addEventListener("click",function(){



reviewBox.innerHTML="";



if(wrongAnswers.length === 0){


reviewBox.innerHTML =
"<h3>🎉 No mistakes!</h3>";


return;


}




wrongAnswers.forEach(function(item){



reviewBox.innerHTML += `


<div class="review-item">


<p><b>Question:</b> ${item.question}</p>


<p>❌ Your answer: ${item.yourAnswer}</p>


<p>✅ Correct answer: ${item.correctAnswer}</p>


</div>


`;



});


});











restartBtn.addEventListener("click",function(){


resetQuiz();


quizPage.classList.remove("hidden");


resultPage.classList.add("hidden");


showQuestion();


});












newPlayerBtn.addEventListener("click",function(){



resetQuiz();



resultPage.classList.add("hidden");


quizPage.classList.add("hidden");


registerPage.classList.remove("hidden");



username.value="";

email.value="";

phone.value="";


registerMessage.textContent="";



});












function resetQuiz(){


currentQuestion=0;


score=0;


wrongAnswers=[];


answered=false;


reviewBox.innerHTML="";


}