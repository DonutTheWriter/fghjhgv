
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
  apiKey: "AIzaSyBkfR4VxFlaLxurB4gZ30T_4hn0kNBQC_g",
  authDomain: "ooooof-75f84.firebaseapp.com",
  databaseURL: "https://ooooof-75f84-default-rtdb.firebaseio.com",
  projectId: "ooooof-75f84",
  storageBucket: "ooooof-75f84.appspot.com",
  messagingSenderId: "928429964197",
  appId: "1:928429964197:web:11d12e1063136e7586864c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("useridoiit").innerHTML = "Welcome " + user_name + "!";

function addd()
{
  room_name = document.getElementById("iminurhouse").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logoutt() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
