window.onload=function(){
  
  // (function() {
    // Initialize Firebase
    var config = {
      apiKey:process.env.FB_KEY,
      authDomain:process.env.AUTH_DOMAIN,
      databaseURL:process.env.FB_URL,
      projectId:process.env.PROJECT_ID,
      storageBucket:"",
      messagingSenderId:process.env.MSG_SENDER_ID
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
