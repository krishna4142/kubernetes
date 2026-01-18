// Level-wise questions
const exams = {
  1: [
    { q: "Filtering process in Kubernetes?", options: ["Node filtering during scheduling","Pod eviction","Service routing","Load balancing"], answer: 0 },
    { q: "Minimum number of pod draining, vCPU, Toler?", options: ["1","2","3","Depends on cluster configuration"], answer: 3 },
    { q: "Capture all cluster info and redirect to file command?", options: ["kubectl logs","kubectl describe node","kubectl get all > file.txt","kubectl cluster-info"], answer: 2 },
    { q: "Helm history check command?", options: ["helm list","helm status","helm history","helm rollback"], answer: 2 },
    { q: "Contains all the resources defined necessary to run an application?", options: ["Pod","Deployment","Helm Chart","Service"], answer: 2 },
    { q: "What does a leading hyphen (-) represent in YAML?", options: ["Comment","Key","List item","Value"], answer: 2 },
    { q: "--cluster --mode=Node,RBAC,webhook belongs to?", options: ["kube-proxy","kube-apiserver","Admission controller","kube-scheduler"], answer: 2 },
    { q: "Technology used for separating low-latency and high-latency workloads?", options: ["Namespaces","QoS classes","Network policy","Ingress"], answer: 1 },
    { q: "CPU allocation method in Kubernetes?", options: ["Round robin","Static allocation","Requests and Limits","FIFO"], answer: 2 },
    { q: "Kubernetes microservice architecture NOT an advantage?", options: ["Scalability","Fault isolation","High complexity","Faster deployment"], answer: 2 }
  ],
  2: [], 3: [], 4: [], 5: [],
  6: [], 7: [], 8: [], 9: [], 10: []
};

let currentLevel = 0;

// Start Exam based on level selection
function startExam() {
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
function submitExam() {
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
}
