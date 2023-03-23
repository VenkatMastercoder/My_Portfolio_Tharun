const formSubmit = document.getElementById("form-submit");
const emailEnt = document.getElementById("email");
const nameEnt = document.getElementById("name");
const commentsEnt = document.getElementById("comm");
const sumbitBtn = document.getElementById("form-btn-js");
const messageContent = document.getElementById("message-content");


nameEnt.addEventListener("change",function(event){
  if (event.target.value === "") {
    nameEnt.style.borderColor = "red";
    nameEnt.style.borderWidth = 1 + "px";
  } 
  else {
    nameEnt.style.borderColor = "#E7E6E6";
    nameEnt.style.borderWidth = 2 + "px";
  }
});

emailEnt.addEventListener("change",function(event){
  if (event.target.value === "") {
    emailEnt.style.borderColor = "red";
    emailEnt.style.borderWidth = 1 + "px";
   } 
  else {
    emailEnt.style.borderColor = "#E7E6E6";
    emailEnt.style.borderWidth = 2 + "px";
  }
});

commentsEnt.addEventListener("change",function(event){
  if (event.target.value === "") {
    commentsEnt.style.borderColor = "red";
    commentsEnt.style.borderWidth = 1 + "px";
  } 
  else {
    commentsEnt.style.borderColor = "#E7E6E6";
    commentsEnt.style.borderWidth = 2 + "px";
  }
});

function save(name, email, comments) {

  // From Validation 
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCgqkFGT3U6csUxnXF-5O71GCbxdjBD0Qk",
    authDomain: "my-portfolio-39d33.firebaseapp.com",
    databaseURL: "https://my-portfolio-39d33-default-rtdb.firebaseio.com",
    projectId: "my-portfolio-39d33",
    storageBucket: "my-portfolio-39d33.appspot.com",
    messagingSenderId: "461535429346",
    appId: "1:461535429346:web:26e842a24c45f1b62e54bb",
    measurementId: "G-KJZL473G6Q"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database().ref("Submitted-Form");

  var newRef = db.push();

  newRef.set(
    {
      name : name,
      email : email,
      comments : comments
    }
  );

}

function validateFormData(name, email, comments) {
  const regularExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!email.match(regularExpression)){
    emailEnt.style.borderColor = "red";
    emailEnt.style.borderWidth = 1 + "px";
  }
  if (name === ""){
    nameEnt.style.borderColor = "red";
    nameEnt.style.borderWidth = 1 + "px";
  }
 
  if (email === ""){
    emailEnt.style.borderColor = "red";
    emailEnt.style.borderWidth = 1 + "px";
  }

   if (comments === ""){
    commentsEnt.style.borderColor = "red";
    commentsEnt.style.borderWidth = 1 + "px";
  }
}

function submitFormData(name,email,comments) { 
  if (nameEnt.value !== "" && emailEnt.value !== "" && commentsEnt.value !== ""){
    messageContent.textContent = "Successfully Submitted";

    save(name, email, comments);

    setInterval(function(){ 
      messageContent.textContent = "";
    },6000);  

    formSubmit.reset();
  }
}

formSubmit.addEventListener("submit", function(event){
  event.preventDefault();

  const name = nameEnt.value;
  const email = emailEnt.value;
  const comments = commentsEnt.value;

  validateFormData(name,email,comments);
  submitFormData(name,email,comments);
});

let ut_changer = document.getElementById("linkto-ut");
let dt_changer = document.getElementById("linkto-dt");
let ac_changer = document.getElementById("linkto-ac");

let kebab1 = document.getElementById("t-dot-k1");
let kebab2 = document.getElementById("t-dot-k2");
let kebab3 = document.getElementById("t-dot-k3");


ut_changer.style.display = "none";
dt_changer.style.display = "none";
ac_changer.style.display = "none";

kebab1.addEventListener("click", function(){
  ut_changer.style.display = "block";
  kebab1.style.display = "none";
});

ut_changer.addEventListener("click", function(event){
  ut_changer.style.display = "none";
  kebab1.style.display = "";
});

kebab2.addEventListener("click", function(){
  dt_changer.style.display = "block";
  kebab2.style.display = "none";
});

dt_changer.addEventListener("click", function(event){
  dt_changer.style.display = "none";
  kebab2.style.display = "";
});

kebab3.addEventListener("click", function(){
  ac_changer.style.display = "block";
  kebab3.style.display = "none";
});

ac_changer.addEventListener("click", function(event){
  ac_changer.style.display = "none";
  kebab3.style.display = "";
});