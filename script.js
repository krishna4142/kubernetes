const exams = {
  // ================= LEVEL 1 =================
  1: [
    { q: "Filtering process in Kubernetes?", options: ["Node filtering during scheduling","Pod eviction","Service routing","Load balancing"], answer: 0 },
    { q: "Minimum number of pod draining, vCPU, Toler?", options: ["1","2","3","Depends on cluster configuration"], answer: 3 },
    { q: "Capture all cluster info and redirect to file command?", options: ["kubectl logs","kubectl describe node","kubectl get all > file.txt","kubectl cluster-info"], answer: 2 },
    { q: "Helm history check command?", options: ["helm list","helm status","helm history","helm rollback"], answer: 2 },
    { q: "Contains all the resources necessary to run an application?", options: ["Pod","Deployment","Helm Chart","Service"], answer: 2 },
    { q: "Leading hyphen (-) in YAML represents?", options: ["Comment","Key","List item","Value"], answer: 2 },
    { q: "--cluster --mode=Node,RBAC,webhook belongs to?", options: ["kube-proxy","kube-apiserver","Admission controller","kube-scheduler"], answer: 2 },
    { q: "Technology used to separate low & high latency workloads?", options: ["Namespaces","QoS classes","Network policy","Ingress"], answer: 1 },
    { q: "CPU allocation method in Kubernetes?", options: ["Round robin","Static","Requests & Limits","FIFO"], answer: 2 },
    { q: "Microservice architecture NOT an advantage?", options: ["Scalability","Fault isolation","High complexity","Fast deployment"], answer: 2 }
  ],

  // ================= LEVEL 2 =================
  2: [
    {
      q: "Kubernetes object managed directly by kubelet on a specific node?",
      options: ["Deployment","ReplicaSet","Pod","Service"],
      answer: 2
    },
    {
      q: "Container image and type are defined in which YAML section?",
      options: ["metadata","spec.containers","status","kind"],
      answer: 1
    },
    {
      q: "Which VIM allows frequent impactful changes in Kubernetes?",
      options: ["OpenStack","Kubernetes","VMware","Docker Swarm"],
      answer: 1
    },
    {
      q: "Which pod view command is FALSE?",
      options: ["kubectl get pods","kubectl describe pod","kubectl view pods","kubectl get pod -o wide"],
      answer: 2
    },
    {
      q: "Kubernetes Service creates Pods. True or False?",
      options: ["True","False"],
      answer: 1
    },
    {
      q: "Which of the following is correct for CNI?",
      options: ["Manages container runtime","Manages networking between pods","Manages storage","Manages scheduling"],
      answer: 1
    },
    {
      q: "Which is NOT correct for underlay & overlay networks?",
      options: ["Overlay uses encapsulation","Underlay is physical network","Overlay replaces underlay","Overlay runs on underlay"],
      answer: 2
    },
    {
      q: "VNF must be adapted for:",
      options: ["Cloud-native environments","Bare metal only","Monolithic systems","Single VM deployment"],
      answer: 0
    },
    {
      q: "After filtering nodes, pods are ranked based on?",
      options: ["CPU speed","Scheduler scoring rules","Node name","Pod name"],
      answer: 1
    },
    {
      q: "If (-) hyphen is not present in YAML, it means?",
      options: ["Not a list","Syntax error","Comment","Key-value pair"],
      answer: 0
    }
  ],

  3: [], 4: [], 5: [],
  6: [], 7: [], 8: [], 9: [], 10: []
};

// let currentLevel = 0;

// function startExam() {
//   const level = document.getElementById("levelSelect").value;

//   if (!level || exams[level].length !== 10) {
//     alert("Questions for this level are not available yet.");
//     return;
//   }

//   currentLevel = level;
//   document.getElementById("level-section").style.display = "none";
//   document.getElementById("exam-section").style.display = "block";
//   document.getElementById("exam-title").innerText =
//     `Level ${level} – Kubernetes MCQ Examination`;

//   const examForm = document.getElementById("examForm");
//   examForm.innerHTML = "";

//   exams[level].forEach((item, index) => {
//     const qDiv = document.createElement("div");
//     qDiv.className = "question";
//     qDiv.innerHTML = `<p>${index + 1}. ${item.q}</p>`;

//     item.options.forEach((opt, i) => {
//       qDiv.innerHTML += `
//         <div class="option">
//           <input type="radio" name="q${index}" value="${i}">
//           <span>${opt}</span>
//         </div>
//       `;
//     });

//     examForm.appendChild(qDiv);
//   });
// }

// function submitExam() {
//   let score = 0;
//   const questions = exams[currentLevel];

//   questions.forEach((q, index) => {
//     const selected = document.querySelector(`input[name="q${index}"]:checked`);
//     if (selected && Number(selected.value) === q.answer) {
//       score++;
//     }
//   });

//   document.getElementById("exam-section").style.display = "none";
//   document.getElementById("result-section").style.display = "block";
//   document.getElementById("resultText").innerText =
//     `You scored ${score} out of 10`;
// }
