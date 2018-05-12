window.onload=function(){
var dotEnv = require('dotenv');
dotEnv.config();
  // (function() {
    // Initialize Firebase
    var config = {
      apiKey:"AIzaSyAxsphhXHJg4lPCVyYX3X9gcVh-L0a1SB8",
      authDomain:"omega-e9b06.firebaseapp.com",
      databaseURL:"https://omega-e9b06.firebaseio.com",
      projectId:"omega-e9b06",
      storageBucket:"",
      messagingSenderId:"632251860755"
    };
    firebase.initializeApp(config);
    //   get elements
    
    const txtPassword = document.getElementById("password");
    const txtEmail = document.getElementById("email");
    const btnLogin = document.getElementById("btnLogin");
    const btnSignUp = document.getElementById("btnSignUp");
    const btnLogOut = document.getElementById("btnLogout");
  
    // add login event
    btnLogin.addEventListener("click", e => {
      // get email and pw fields
      const email = txtEmail.value;
      const pass = txtPassword.value;
      const auth = firebase.auth();
      //  signin
      const promise = auth.signInWithEmailAndPassword(email, pass);
      promise.catch(e => console.log(e.message));
    });
  
    // Signup
  
    btnSignUp.addEventListener("click", e => {
      const email = txtEmail.value;
      const pass = txtPassword.value;
      const auth = firebase.auth();
      //  signin
      const promise = auth.createUserWithEmailAndPassword(email, pass);
      promise.catch(e => console.log(e.message));
    });
    // signout
    btnLogOut.addEventListener("click", e => {
      firebase.auth().signOut();
      btnLogOut.classList.add("hide");
    });
  
    // Add a realtime auth listner
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        console.log(firebase);
        btnLogOut.classList.remove("hide");
      } else {
        console.log("User not logged in!");
        btnLogOut.classList.add("hide");
      }
    });
  // })();
  
}
