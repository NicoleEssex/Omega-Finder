window.onload=function(){
  (function() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBfMKvm14l_qmH1I5zhQH4l3dL_N1V288Q",
      authDomain: "omega-7476f.firebaseapp.com",
      databaseURL: "https://omega-7476f.firebaseio.com",
      projectId: "omega-7476f",
      storageBucket: "",
      messagingSenderId: "465935291703"
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
  })();
  
}
