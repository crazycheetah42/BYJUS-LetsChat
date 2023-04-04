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

function addUser()
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "letschat_room.html";
}
