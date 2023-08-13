// alert("Hello Welcome to Dice Game");

//GENRATING A RANDOM NUMBER BETWEEN O AND 5;

let random_num1= Math.floor(Math.random()*6)+1;

let selected_image1="dice"+random_num1+".png";

let selectedImage1="./images/"+selected_image1;

let image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",selectedImage1);

let random_num2= Math.floor(Math.random()*6)+1;

let selected_image2="dice"+random_num2+".png";

let selectedImage2="images/"+selected_image2;

let image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",selectedImage2);


if(random_num1>random_num2){
    document.querySelector("h1").innerHTML="🏁 Player 1 Wins!";
}
else if(random_num1<random_num2){
    document.querySelector("h1").innerHTML="🏁 Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML=" Oh Ohh Match Drawn! Refresh Me";
}



