username = localStorage.setItem(user_name);
document.getElementById("welcome_user_name").innerHTML = "Welcome" + username + "!";

var firebaseConfig = {
    apiKey: "AIzaSyCFBHB2eN1SRrg2NCJkwXD1K3VrFsnBa3Q",
    authDomain: "kwitter-projects-ffb91.firebaseapp.com",
    databaseURL: "https://kwitter-projects-ffb91-default-rtdb.firebaseio.com",
    projectId: "kwitter-projects-ffb91",
    storageBucket: "kwitter-projects-ffb91.appspot.com",
    messagingSenderId: "989154677730",
    appId: "1:989154677730:web:64ab0ede73cf62b6155fbb",
    measurementId: "G-RH2YMVWWQK"

};

user_name = localStorage.getItem(user_name);

function add_room() {
    room_name = document.getElementById("room_name").value;

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";

    firebase.database().ref("/").child(room_name).update({
        purpose: "Adding Room Name"
    });
}

function logout()
{
    window.location = "kwitter.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_name = childKey;
//Start code

//End code
});});}
getData();
