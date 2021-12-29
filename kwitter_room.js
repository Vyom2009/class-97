
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDQbh-zSkWa-VYNtC-kHiLP8Q2JLMmxMtc",
      authDomain: "kwitter-better-than-twitter.firebaseapp.com",
      databaseURL: "https://kwitter-better-than-twitter-default-rtdb.firebaseio.com",
      projectId: "kwitter-better-than-twitter",
      storageBucket: "kwitter-better-than-twitter.appspot.com",
      messagingSenderId: "641424191142",
      appId: "1:641424191142:web:5980b1ddfed81a00394e67",
      measurementId: "G-0LQZMBY91H"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    function addRoom() {
  room_name= document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose:"adding room_name"
  });
  localStorage.setItem("room_name", room_name);
  window.location="Kwitter_page.html";
    }

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
  console.log("room_name-" + Room_names);
  row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #"+ Room_names + "</div><hr>";
  document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}