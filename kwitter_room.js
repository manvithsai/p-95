     
     
     const firebaseConfig = {
        apiKey: "AIzaSyCFS-piYY-z_BsvvtwTmclFviwJar3ixAs",
        authDomain: "lets-chat-c4246.firebaseapp.com",
        databaseURL: "https://lets-chat-c4246-default-rtdb.firebaseio.com",
        projectId: "lets-chat-c4246",
        storageBucket: "lets-chat-c4246.appspot.com",
        messagingSenderId: "58439448462",
        appId: "1:58439448462:web:1096a40783cb967effd6df",
        measurementId: "G-FKKXRJG37M"
      };
      
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.getAnalytics(app);
      function add_room(){
        room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
        purpose:"Adding room name"
        });
        localStorage.setItem("room_name",room_name);
        window.location="kwitter_page.html";
        }
        function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
               Room_names = childKey;
              //Start code
        console.log("Room names are"+Room_names);
        row="<div class='room_name'id="+Room_names+"onclick='redirect_to_room_name(this.id)'>#"+Room_names+"</div><hr>"
        document.getElementById("output").innerHTML+=row;
              //End code
              });});}
        getData();
        function redirect_to_room_name(name){
        console.log(name);
        localStorage.setItem("room_name",name);
        window.location="kwitter_page.html";
        }