
function loginoof() {

  user_name = document.getElementById("useridoit").value;

  localStorage.setItem("user_name", user_name);
  
    window.location = "kwitter_room.html";
}

