// // Import the functions you need from the SDKs you need
// import { initializeApp } from "./node_modules/firebase/app.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA69_dMMF-ejZjVWq_8urKpc9l4R0PrP9U",
//   authDomain: "proyectofront-cafb4.firebaseapp.com",
//   projectId: "proyectofront-cafb4",
//   storageBucket: "proyectofront-cafb4.appspot.com",
//   messagingSenderId: "407846988001",
//   appId: "1:407846988001:web:802e3fcf5605aa492f6fa0",
// };

// // Firebase
// const app = initializeApp(firebaseConfig);

// import {
//   getAuth,
//   GoogleAuthProvider,
//   signInWithPopup,
// } from "./node_modules/firebase/auth.js";

// const auth = getAuth(app);

// const loginButton = document.getElementById("google-auth");

// loginButton.addEventListener("click", () => {
//   const provider = new GoogleAuthProvider();
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       console.log("Inicio de sesión exitoso:", result.user);
//     })
//     .catch((error) => {
//       console.error("Error al iniciar sesión:", error);
//     });
// });

// Configuración de Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyDlsqX9gEU6ToguhB0yuc1kKTtU93kcBMA",
//   authDomain: "quizii-84a42.firebaseapp.com",
//   projectId: "quizii-84a42",
//   storageBucket: "quizii-84a42.appspot.com",
//   messagingSenderId: "201517071704",
//   appId: "1:201517071704:web:f18386349818ced992f92d",
// };
// firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore();

// document.getElementById("form2").addEventListener("submit", function (event) {
//   event.preventDefault();
//   let email = event.target.elements.email2.value;
//   let pass = event.target.elements.pass3.value;

//   // Autenticación de Firebase
//   firebase
//     .auth()
//     .signInWithEmailAndPassword(email, pass)
//     .then((userCredential) => {
//       // El usuario se autenticó con éxito
//       const user = userCredential.user;
//       console.log(`Está en el sistema: ${user.email} ${user.uid}`);
//       // Redirigir a la página web.html
//       window.location.href = "./web.html";
//     })
//     .catch((error) => {
//       // Ocurrió un error durante la autenticación
//       console.error("Error al iniciar sesión:", error.message);
//     });
// });

// const createUser = (user) => {
//   db.collection("quizII")
//     .add(user)
//     .then((docRef) => console.log("Document written with ID: ", docRef.id))
//     .catch((error) => console.error("Error adding document: ", error));
// };

// const readAllUsers = (born) => {
//   db.collection("quizII")
//     .where("first", "==", born)
//     .get(user)
//     .then((querySnapshot) => {
//       querySnapshot.forEach((user) => {
//         console.log(user.data());
//       });
//     });
// };

// const signUpUser = (email, password) => {
//   firebase
//     .auth()
//     .createUserWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//       let user = userCredential.user;
//       alert(`Se ha registrado ${user.email} en el sistema`);
//       createUser(game);
//     })
//     .catch((error) => {
//       console.log("Error en el sistema" + error.message);
//     });
// };

// const signInUser = (email, password) => {
//   firebase
//     .auth()
//     .signInWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//       let user = userCredential.user;
//       alert(`Se ha logueado correctamente ${user.email}`);
//       console.log("USER", user);
//       window.location.href = "./web.html";
//     })
//     .catch((error) => {
//       let errorCode = error.code;
//       let errorMessage = error.message;
//       console.log(errorCode);
//       console.log(errorMessage);
//       alert(`Error en usuario o contraseña`);
//     });
// };
