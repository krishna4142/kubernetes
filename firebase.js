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
        let level=1

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
                      
                       document.getElementById('body1').style.display="none"
                      document.getElementById('body').style.display="block"
                      document.getElementById('setnam').innerText=`${data.username}`
                      document.getElementById('setlev').innerText=`${data.level}`
                       document.getElementById('num').innerText=`${data.number}`

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




    //check level status 
      window.checklevelstatus=function(e){
         let userlevel=document.getElementById('levelSelect').value
        let number=document.getElementById('num').innerText
     database.ref('k8s/' + number).once('value')
        .then((snapshot) => {
            if (snapshot.exists()) {
                // alert('enter snapshort')
                const data = snapshot.val();
                if(data.level>=userlevel){
                     document.getElementById('chouselevel').innerText=`${userlevel}`
                    startExam()
                }
                } else {
                alert(`User not elegeble for this level`);
            }
        })
        .catch((error) => {
            console.error("Firebase Error:", error);
             alert('Error reading user data.');
        });
    }
    


    //update score
    window.updatescore=function(){
        let number=document.getElementById('num').innerText
        let userlevel=document.getElementById('chouselevel').innerText      
        database.ref('k8s/' + number).once('value')
        .then((snapshot) => {
            const data = snapshot.val();
            if (snapshot.exists()) {
                 if(data.level==userlevel){
                    let level=data.level+1
                    database.ref('k8s/' + number).set({
                    username: data.username,
                    email: data.email,
                    number:data.number,
                    level:level
                })
                .then(() => {
                  alert(`User "${username}" saved successfully."`)
                })
                .catch((error) => {
                  alert('Error: ' + error.message)
                });
                    alert('done')
                 }
                 else{
                    alert('you are already completed this level .....')
                 }
            }
        })
        .catch((error) => {
            console.error("Firebase Error:", error);
             alert('Error reading user data.');
        });
    }



    //questions block

    let currentLevel = 0;

// Start Exam based on level selection
window.startExam=function() {
  const level = document.getElementById("levelSelect").value;

  if (!level || exams[level].length !== 10) {
    alert("Questions for this level are not available yet.");
    return;
  }

  currentLevel = level;
  document.getElementById("level-section").style.display = "none";
  document.getElementById("exam-section").style.display = "block";
  document.getElementById("exam-title").innerText = `Level ${level} – Kubernetes MCQ Examination`;

  const examForm = document.getElementById("examForm");
  examForm.innerHTML = "";

  exams[level].forEach((item, index) => {
    const qDiv = document.createElement("div");
    qDiv.className = "question1";
    qDiv.innerHTML = `<p>${index + 1}. ${item.q}</p>`;

    item.options.forEach((opt, i) => {
      qDiv.innerHTML += `
        <div class="option1">
          <input type="radio" name="q${index}" value="${i}">
          <span>${opt}</span>
        </div>
      `;
    });

    examForm.appendChild(qDiv);
  });
}



    // Submit Exam and calculate score
window.submitExam=function() {
  let score = 0;
  const questions = exams[currentLevel];

  questions.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && Number(selected.value) === q.answer) {
      score++;
    }
  });

  document.getElementById("exam-section").style.display = "none";
  document.getElementById("result-section").style.display = "block";
  document.getElementById("resultText").innerText = `You scored ${score} out of 10`;
  if(score>8){
    alert('you are elegeble for next round , plese weait you score will be updated .......')
    updatescore()
  }
  else{
    alert('you are not elegeble for next level ......')
  }
}




     
