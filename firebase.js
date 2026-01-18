import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getDatabase, ref, set, get, child, push, update } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "employees-a79d2.firebaseapp.com",
      databaseURL: "https://employees-a79d2-default-rtdb.firebaseio.com/",
      projectId: "employees-a79d2",
      storageBucket: "employees-a79d2.appspot.com",
      messagingSenderId: "YOUR_SENDER_ID",
      appId: "YOUR_APP_ID"
    };

    firebase.initializeApp(firebaseConfig);
    const database = firebase.database();



    window.createuseraccount =function(e){
        // alert('ok')
        const usernameRaw = document.getElementById('name').value.trim();
        const username = usernameRaw.replace(/[.#$\[\]]/g, "_"); // replaces invalid chars with "_"

        const email = document.getElementById('email').value.trim();
        const number=document.getElementById('phone').value.trim();
        let level=[0]

        database.ref('k8s/' + number).once('value')
        .then((snapshot) => {
            if (snapshot.exists()) {
              alert('user was already exit . plese contact SK')
            }
            else{
                 
                 database.ref('k8s/' + number).set({
                    username: username,
                    email: email,
                    number:number,
                    level:level
                })
                .then(() => {
                  alert(`User "${username}" saved successfully."`)
                })
                .catch((error) => {
                  alert('Error: ' + error.message)
                });
                
               }
         })
        .catch((error) => {
            console.error("Firebase Error:", error);
            alert('Error reading user data.');
        });   
    }


    //user login
     window.userlogin = function(e) {
      alert('ok')
        const usernameRaw = document.getElementById('name').value.trim();
        const username = usernameRaw.replace(/[.#$\[\]]/g, "_"); // replaces invalid chars with "_"

        const number=document.getElementById('phone').value.trim();
    if (!username || !number ) {
        alert("Please enter both username and mobile number.");
        return;
    }

    console.log("Checking Firebase for number:", number);

     
    database.ref('k8s/' + number).once('value')
        .then((snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
 
                if (data.username === username && data.number === number) {
                      
                     alert('done')
                      document.getElementById('body1').style.display="none"
                      document.getElementById('body').style.display="block"

                } else {
                    alert('Username or Mobile Number does not match.');
                }
            } else {
                alert(`User not found for number: ${number}`);
            }
        })
        .catch((error) => {
            console.error("Firebase Error:", error);
             alert('Error reading user data.');
        });
    }
