const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/sinngouao.jpg") {
    myImage.setAttribute("src", "images/sinngouaka.jpg");
  } else {
    myImage.setAttribute("src", "images/sinngouao.jpg");
  }
};

let myButton=document.querySelector("button");
let myHeading=document.querySelector("h1");
function setUserName(){
  let myName=prompt('Please enter your name.');
  if(myName){
    localStorage.setItem('name', myName);
    myHeading.innerHTML=`Webプログラミングへようこそ、${myName}`;
  }else{
    setUserName(); 
  }

}
if(localStorage.getItem('name')){
  const storedName=localStorage.getItem('name');
  myHeading.innerHTML=`Webプログラミングへようこそ、${storedName}`;
}else{
  setUserName();
}



myButton.onclick = function() {
  setUserName();
}