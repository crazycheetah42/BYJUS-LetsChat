const firebaseConfig = {
      apiKey: "AIzaSyCbAIuulAfQyQUdnvvD-ysU0cOXV2maZik",
      authDomain: "aryatech-techtweets.firebaseapp.com",
      databaseURL: "https://aryatech-techtweets-default-rtdb.firebaseio.com",
      projectId: "aryatech-techtweets",
      storageBucket: "aryatech-techtweets.appspot.com",
      messagingSenderId: "98575814660",
      appId: "1:98575814660:web:102a8bdb875c3cd8162551",
      measurementId: "G-D16242K29R"
    };
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("user_name");
console.log(username);
username_paragraph = "Welcome, " + username + "!";
document.getElementById("username_paragraph").innerHTML = username_paragraph;

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({purpose: "adding room name"});
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "letschat_page.html";
}
getData();
