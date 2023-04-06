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

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
    } });  }); }
//Start code
    function send()
    {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").innerHTML = "";
    }
//End code

getData();