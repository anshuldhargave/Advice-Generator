let dataAdviceId = document.querySelector("#data-advice-id");
let dataAdviceMsg = document.querySelector("#data-advice-msg");


let btn = document.querySelector("#btn");


function populateData(data){
    console.log(data);
    dataAdviceId.innerText = data.slip.id;
    dataAdviceMsg.innerText = data.slip.advice;
}



function dice() {
    console.log("hello");


    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => populateData(data));


  // const data = res.json();
  // console.log(data);

}

btn.addEventListener("click", dice);

