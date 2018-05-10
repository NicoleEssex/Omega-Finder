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

window.onload=function(){
// Initial Ratings
const ratings = {
    Sev: 4.7,
    walmart: 3.4,
    flyingJ: 2.3,
    littleAmerica: 3.6,
    maverick: 4.1
  }

  // Total Stars
  const starsTotal = 5;

  // Run getRatings when DOM loads
  document.addEventListener('DOMContentLoaded', getRatings);

  // Form Elements
  const bathroomSelect = document.getElementById('bathroom-select');
  const ratingControl = document.getElementById('rating-control');

  // Init bathroom
  let bathroom;

  // bathroom select change
  bathroomSelect.addEventListener('change', (e) => {
    bathroom = e.target.value;
    // Enable rating control
    ratingControl.disabled = false;
    ratingControl.value = ratings[bathroom];
  });

  // Rating control change
  ratingControl.addEventListener('blur', (e) => {
    const rating = e.target.value;

    // Make sure 5 or under
    if (rating > 5) {
      alert('Please rate 1 - 5');
      return;
    }

    // Change rating
    ratings[bathroom] = rating;

    getRatings();
  });

  // Get ratings
  function getRatings() {
    for (let rating in ratings) {
      // Get percentage
      const starPercentage = (ratings[rating] / starsTotal) * 100;

      // Round to nearest 10
      const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

      // Set width of stars-inner to percentage
      document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;

      // Add number rating
      document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];
    }
  }}