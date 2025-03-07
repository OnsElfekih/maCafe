// Initialisation de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBF5u7KWKbZgGkwetkBfFUbtlqsfkxZ80c",
    authDomain: "macafe-68e95.firebaseapp.com",
    databaseURL: "https://macafe-68e95-default-rtdb.firebaseio.com",
    projectId: "macafe-68e95",
    storageBucket: "macafe-68e95.appspot.com",
    messagingSenderId: "1021891320772",
    appId: "1:1021891320772:web:d6f597da0e8026cddb2291"
};


  
  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  
  // Authentification utilisateur
  const loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert('Bienvenue ' + user.email);
      })
      .catch((error) => {
        alert('Erreur: ' + error.message);
      });
  });
  