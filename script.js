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
    { q: "Kubernetes object managed directly by kubelet on a specific node?", options: ["Deployment","ReplicaSet","Pod","Service"], answer: 2 },
    { q: "Container image and type are defined in which YAML section?", options: ["metadata","spec.containers","status","kind"], answer: 1 },
    { q: "Which VIM allows frequent impactful changes in Kubernetes?", options: ["OpenStack","Kubernetes","VMware","Docker Swarm"], answer: 1 },
    { q: "Which pod view command is FALSE?", options: ["kubectl get pods","kubectl describe pod","kubectl view pods","kubectl get pod -o wide"], answer: 2 },
    { q: "Kubernetes Service creates Pods. True or False?", options: ["True","False"], answer: 1 },
    { q: "Which of the following is correct for CNI?", options: ["Manages container runtime","Manages networking between pods","Manages storage","Manages scheduling"], answer: 1 },
    { q: "Which is NOT correct for underlay & overlay networks?", options: ["Overlay uses encapsulation","Underlay is physical network","Overlay replaces underlay","Overlay runs on underlay"], answer: 2 },
    { q: "VNF must be adapted for:", options: ["Cloud-native environments","Bare metal only","Monolithic systems","Single VM deployment"], answer: 0 },
    { q: "After filtering nodes, pods are ranked based on?", options: ["CPU speed","Scheduler scoring rules","Node name","Pod name"], answer: 1 },
    { q: "If (-) hyphen is not present in YAML, it means?", options: ["Not a list","Syntax error","Comment","Key-value pair"], answer: 0 }
  ],

  // ================= LEVEL 3 =================
  3: [
    {
      q: "Which object automatically creates a PV based on PVC?",
      options: ["PersistentVolume","StorageClass","StatefulSet","ConfigMap"],
      answer: 1
    },
    {
      q: "What will show on CLI if pod readiness/liveness probe fails?",
      options: ["Pod Pending","Pod Failed","Pod Running but Not Ready","Pod Succeeded"],
      answer: 2
    },
    {
      q: "Which of the following is NOT correct for a container?",
      options: ["Shares host kernel","Lightweight","Has its own OS kernel","Runs application"],
      answer: 2
    },
    {
      q: "What is the process for authorization-mode=Node,RBAC,Webhook?",
      options: ["Authentication","Authorization","Admission","Scheduling"],
      answer: 1
    },
    {
      q: "Command to add a repository in Helm?",
      options: ["helm install repo","helm repo add","helm add repo","helm repo update"],
      answer: 1
    },
    {
      q: "Kubernetes object managed directly by kubelet on each worker node?",
      options: ["Deployment","ReplicaSet","Pod","Service"],
      answer: 2
    },
    {
      q: "Choose the INCORRECT statement for namespaces?",
      options: ["Provides isolation","Supports resource quotas","Spans across clusters","Logical partition"],
      answer: 2
    },
    {
      q: "Node group refers to?",
      options: ["Group of pods","Group of containers","Group of worker nodes","Group of services"],
      answer: 2
    },
    {
      q: "Which object creates and monitors Pods?",
      options: ["Service","Deployment","ConfigMap","Ingress"],
      answer: 1
    },
    {
      q: "Select TWO correct statements for Namespace?",
      options: [
        "Provides logical isolation",
        "Used for multi-tenancy",
        "Runs on worker node only",
        "Replaces RBAC"
      ],
      answer: 0
    }
  ],

    // ================= LEVEL 4 =================
  4: [
    {
      q: "Select TWO correct statements for StatefulSet?",
      options: [
        "Provides stable network identity",
        "Pods are created with random names",
        "Supports stable persistent storage",
        "Does not support scaling"
      ],
      answer: 0
    },
    {
      q: "Select TWO correct statements for CNI?",
      options: [
        "Handles pod-to-pod networking",
        "Manages container runtime",
        "Defines how IP addresses are assigned",
        "Schedules pods on nodes"
      ],
      answer: 0
    },
    {
      q: "Select TWO correct statements for Multus interface?",
      options: [
        "Allows multiple network interfaces per pod",
        "Replaces default CNI",
        "Used for advanced networking use cases",
        "Works only with Docker"
      ],
      answer: 0
    },
    {
      q: "Custom resource needed to control Kubernetes interface inside cluster?",
      options: [
        "CRD (Custom Resource Definition)",
        "ConfigMap",
        "Ingress",
        "DaemonSet"
      ],
      answer: 0
    },
    {
      q: "Which Kubernetes components come under Master node?",
      options: [
        "kube-apiserver, etcd, controller-manager",
        "kubelet, kube-proxy",
        "Container runtime",
        "Ingress controller"
      ],
      answer: 0
    },
    {
      q: "Compared to VNF and CNF, which makes high-impact changes frequently?",
      options: [
        "VNF",
        "CNF",
        "Bare metal",
        "Monolithic application"
      ],
      answer: 1
    },
    {
      q: "Select TWO correct statements for Service?",
      options: [
        "Provides stable IP for pods",
        "Creates pods automatically",
        "Enables load balancing",
        "Manages container images"
      ],
      answer: 0
    },
    {
      q: "Which is used to schedule a task to run at specific or repeated time intervals?",
      options: [
        "Job",
        "CronJob",
        "DaemonSet",
        "ReplicaSet"
      ],
      answer: 1
    },
    {
      q: "Command to switch to a particular Kubernetes context?",
      options: [
        "kubectl get context",
        "kubectl config use-context",
        "kubectl set context",
        "kubectl switch context"
      ],
      answer: 1
    },
    {
      q: "There is a one-to-one mapping between PV & PVC. True/False?",
      options: [
        "True",
        "False"
      ],
      answer: 0
    }
  ],
 // ================= LEVEL 4 =================
5: [
  {
    q: "There is a one-to-one mapping between PV & PVC?",
    options: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    q: "When size or replicas are not known, which method solves this problem?",
    options: [
      "Manual scaling",
      "Horizontal Pod Autoscaler (HPA)",
      "ReplicaSet",
      "DaemonSet"
    ],
    answer: 1
  },
  {
    q: "In NetworkPolicy, '-' declares what type of operation for rules?",
    options: [
      "Allow rule",
      "Deny rule",
      "List item / rule definition",
      "Comment"
    ],
    answer: 2
  },
  {
    q: "How authorization will be accepted if multiple modes are configured?",
    options: [
      "All modes must allow",
      "First successful authorization is accepted",
      "Last mode decides",
      "Authorization always fails"
    ],
    answer: 1
  },
  {
    q: "Pods deploy pre-jobs failed with 'deadline exceeded' and events show 0/N nodes available. What is the reason?",
    options: [
      "Insufficient CPU or memory on nodes",
      "Image pull error",
      "Network policy issue",
      "RBAC permission issue"
    ],
    answer: 0
  },
  {
    q: "Contains all the resources definitely necessary to run an application?",
    options: [
      "Pod",
      "Deployment",
      "Helm Chart",
      "Service"
    ],
    answer: 2
  },
  {
    q: "Reason for not admitting a privileged pod into a node?",
    options: [
      "Pod Security / Admission Controller restriction",
      "Node selector mismatch",
      "Service not exposed",
      "Namespace missing"
    ],
    answer: 0
  },
  {
    q: "Operator is used as a controller?",
    options: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    q: "Command used to check logs for kubelet service?",
    options: [
      "kubectl logs kubelet",
      "journalctl -u kubelet",
      "systemctl restart kubelet",
      "kubectl describe kubelet"
    ],
    answer: 1
  },
  {
    q: "Choose the INCORRECT statement about IP allocation in CNI?",
    options: [
      "CNI assigns separate IP for each Pod",
      "CNI assigns separate IP for each container",
      "CNI manages pod networking",
      "CNI uses IPAM for IP allocation"
    ],
    answer: 1
  }
],

  // ================= LEVEL 6 =================
6: [
  {
    q: "Choose the INCORRECT statement about CNI?",
    options: [
      "CNI assigns separate IP for each Pod",
      "CNI assigns separate IP for each container",
      "CNI manages pod networking",
      "CNI uses IPAM for IP allocation"
    ],
    answer: 1
  },
  {
    q: "In which YAML field is the second network used?",
    options: [
      "metadata.annotations",
      "spec.networks",
      "spec.containers",
      "status.network"
    ],
    answer: 0
  },
  {
    q: "In pod scheduling, after filtering process, which method is used in scoring process?",
    options: [
      "Priority and scoring plugins",
      "Node filtering",
      "Pod eviction",
      "Admission control"
    ],
    answer: 0
  },
  {
    q: "Choose the INCORRECT statement?",
    options: [
      "Volume provides persistent storage",
      "Volume data survives container restart",
      "Volume provides consistent storage",
      "Volume is deleted when pod restarts"
    ],
    answer: 3
  },
  {
    q: "Which method is used to maintain minimum number of pods while draining a node?",
    options: [
      "PodDisruptionBudget (PDB)",
      "ReplicaSet",
      "DaemonSet",
      "Node affinity"
    ],
    answer: 0
  },
  {
    q: "Which statement is TRUE about StatefulSet?",
    options: [
      "Pods have stable identities",
      "Pods are created with random names",
      "Does not support persistent storage",
      "Cannot be scaled"
    ],
    answer: 0
  },
  {
    q: "If hyphen (-) is not present in YAML, it means?",
    options: [
      "Not a list",
      "Syntax error",
      "Comment",
      "Key-value mapping"
    ],
    answer: 0
  },
  {
    q: "What could be the reason for not admitting a privileged pod during deployment?",
    options: [
      "Pod Security / Admission Controller restriction",
      "Service not exposed",
      "Container image missing",
      "Node label mismatch"
    ],
    answer: 0
  },
  {
    q: "Application onboarding failed with 'deadline exceeded' and nodes are unschedulable. What could be the reasons?",
    options: [
      "Insufficient CPU/memory and PDB restrictions",
      "Service account missing",
      "Ingress not configured",
      "DNS resolution failure"
    ],
    answer: 0
  },
  {
    q: "Customer requests distributing deployment replicas across different racks. Which feature is used?",
    options: [
      "Pod anti-affinity",
      "NodeSelector",
      "Taints and tolerations",
      "ConfigMap"
    ],
    answer: 0
  }
],
 // ================= LEVEL 7 =================
7: [
  {
    q: "When designing a node group, which requirements should a design engineer collect?",
    options: [
      "CPU, memory, storage, network requirements",
      "Application source code",
      "Helm chart version",
      "Service account name"
    ],
    answer: 0
  },
  {
    q: "Which component is hosted by Kubernetes worker nodes?",
    options: [
      "kubelet",
      "kube-apiserver",
      "etcd",
      "kube-scheduler"
    ],
    answer: 0
  },
  {
    q: "Which components are hosted only on Kubernetes master node? (Select 2)",
    options: [
      "kube-apiserver",
      "kube-scheduler",
      "kubelet",
      "kube-proxy"
    ],
    answer: 0
  },
  {
    q: "Which statement about IP allocation in Kubernetes is NOT correct?",
    options: [
      "Each Pod gets a unique IP",
      "Pod IPs are routable across nodes",
      "Each container gets a separate IP",
      "IP allocation is handled by CNI"
    ],
    answer: 2
  },
  {
    q: "Pod-to-Pod communication on the same node packets reach the physical NIC of the node.",
    options: [
      "True",
      "False"
    ],
    answer: 1
  },
  {
    q: "Which RBAC binding combination is NOT allowed in Kubernetes?",
    options: [
      "RoleBinding with ClusterRole in a namespace",
      "ClusterRoleBinding with ClusterRole",
      "RoleBinding with Role",
      "ClusterRoleBinding with Role"
    ],
    answer: 3
  },
  {
    q: "How are multiple authorization modes (Node, RBAC, Webhook) evaluated?",
    options: [
      "All modes must allow",
      "First successful authorization is accepted",
      "Last mode decides",
      "Authorization always fails"
    ],
    answer: 1
  },
  {
    q: "Which communication is provided by Kubernetes for Pods by default?",
    options: [
      "Pod-to-Pod communication without NAT",
      "Pod-to-Service only",
      "Pod-to-Internet only",
      "Pod-to-NodePort only"
    ],
    answer: 0
  },
  {
    q: "Which attribute in a YAML file specifies container image and type?",
    options: [
      "spec.containers",
      "metadata",
      "kind",
      "status"
    ],
    answer: 0
  },
  {
    q: "Which statement about Pod and Service IP is NOT correct?",
    options: [
      "Pod IP is ephemeral",
      "Service IP is stable",
      "Service IP maps directly to container IP",
      "Service IP load balances traffic to pods"
    ],
    answer: 2
  }
],
 // ================= LEVEL 8 =================
8: [
  {
    q: "Which statement about Pod IP and Service IP is NOT correct?",
    options: [
      "Pod IP is ephemeral",
      "Service IP is stable",
      "Service IP maps directly to container IP",
      "Service IP load balances traffic to pods"
    ],
    answer: 2
  },
  {
    q: "Customer wants to join all worker nodes in order to deploy a pod. What needs to be configured?",
    options: [
      "kubelet on all worker nodes",
      "Ingress controller",
      "Service account",
      "ConfigMap"
    ],
    answer: 0
  },
  {
    q: "In Kubernetes scheduling filtering process, nodes that do not have the required labels specified in Pod YAML are?",
    options: [
      "Filtered out",
      "Scored higher",
      "Marked as preferred",
      "Evicted"
    ],
    answer: 0
  },
  {
    q: "Command to list all Helm repositories?",
    options: [
      "helm repo list",
      "helm list repo",
      "helm get repo",
      "helm show repo"
    ],
    answer: 0
  },
  {
    q: "What contains all the resources defined and necessary to run an application?",
    options: [
      "Helm Chart",
      "Pod",
      "Deployment",
      "Service"
    ],
    answer: 0
  },
  {
    q: "Which Kubernetes object can automatically create a PV based on a PVC request?",
    options: [
      "StorageClass",
      "PersistentVolume",
      "StatefulSet",
      "ConfigMap"
    ],
    answer: 0
  },
  {
    q: "Which statement about stateful applications is correct?",
    options: [
      "They require stable network identity",
      "They can be scaled randomly without order",
      "They do not use persistent storage",
      "They are stateless by design"
    ],
    answer: 0
  },
  {
    q: "Which RBAC binding combination is NOT allowed in Kubernetes?",
    options: [
      "RoleBinding with Role",
      "RoleBinding with ClusterRole",
      "ClusterRoleBinding with ClusterRole",
      "ClusterRoleBinding with Role"
    ],
    answer: 3
  },
  {
    q: "How to verify if a user named 'john' has permission to create deployments in namespace 'production'?",
    options: [
      "kubectl auth can-i create deployments --as=john -n production",
      "kubectl get rolebinding john",
      "kubectl describe user john",
      "kubectl get permissions john"
    ],
    answer: 0
  },
  {
    q: "Creating a PodAntiAffinity rule with topologyKey: 'kubernetes.io/hostname' results in?",
    options: [
      "Pods are scheduled on different nodes",
      "Pods are scheduled on the same node",
      "Pods are scheduled randomly",
      "Pods are scheduled only on master node"
    ],
    answer: 0
  }
],
// ================= LEVEL 9 =================
9: [
  {
    q: "Customer plans to deploy an application but exact size/replica count cannot be fixed due to varying demand. What should be used?",
    options: [
      "ReplicaSet",
      "Horizontal Pod Autoscaler (HPA)",
      "DaemonSet",
      "StatefulSet"
    ],
    answer: 1
  },
  {
    q: "Which Service type provides user access to an application running on worker nodes?",
    options: [
      "ClusterIP",
      "NodePort",
      "ExternalName",
      "Headless Service"
    ],
    answer: 1
  },
  {
    q: "Which Kubernetes object is commonly used to scale up or down applications in production?",
    options: [
      "Deployment",
      "ConfigMap",
      "Service",
      "Secret"
    ],
    answer: 0
  },
  {
    q: "If Pod readiness and liveness probes fail, how does the READY and STATUS column look?",
    options: [
      "1/1 Running",
      "0/1 Running",
      "0/0 Error",
      "1/0 Running"
    ],
    answer: 1
  },
  {
    q: "Compared to open-source Kubernetes, commercial platforms add which of the following?",
    options: [
      "Extended support lifecycle",
      "User-friendly installation, upgrade and maintenance tools",
      "Integrated identity and access management",
      "All of the listed options"
    ],
    answer: 3
  },
  {
    q: "Which of the following statements about Multus is correct?",
    options: [
      "Allows multiple network interfaces per Pod",
      "Replaces kube-proxy",
      "Used only for storage networking",
      "Works only on master nodes"
    ],
    answer: 0
  },
  {
    q: "Which statement about IP allocation in Kubernetes is NOT correct?",
    options: [
      "Each Pod gets a unique IP",
      "Pod IPs are routable across nodes",
      "Each container gets a separate IP",
      "IP allocation is handled by CNI"
    ],
    answer: 2
  },
  {
    q: "Which command captures all cluster information and redirects it to a file?",
    options: [
      "kubectl cluster-info dump > cluster_info.txt",
      "kubectl cluster-data > cluster_info.txt",
      "kubectl cluster-infostatus > cluster_info.txt",
      "kubectl clusterdata > cluster_info.txt"
    ],
    answer: 0
  },
  {
    q: "Kubernetes Service creates Pods.",
    options: [
      "True",
      "False"
    ],
    answer: 1
  },
  {
    q: "Which command is used to add a Helm repository?",
    options: [
      "helm repo add",
      "helm add repo",
      "helm repo install",
      "helm install repo"
    ],
    answer: 0
  }
],
 // ================= LEVEL 10 =================
10: [
  {
    q: "What technology is used to separate low-latency and high-latency workloads in Kubernetes?",
    options: [
      "Node groups",
      "Pod affinity",
      "CPU Manager",
      "Pod anti-affinity"
    ],
    answer: 1
  },
  {
    q: "Which YAML field defines the container image and type?",
    options: [
      "apiVersion",
      "kind",
      "metadata",
      "spec"
    ],
    answer: 3
  },
  {
    q: "Which technology allows engineers to make frequent impactful changes in Kubernetes?",
    options: [
      "CNI",
      "VNI",
      "Both CNI and VNI",
      "None of the above"
    ],
    answer: 0
  },
  {
    q: "Compared to VNF and CNF, which makes high-impact changes frequently?",
    options: [
      "VNF",
      "CNF",
      "Bare metal",
      "Monolithic application"
    ],
    answer: 1
  },
  {
    q: "There is a one-to-one mapping between PV and PVC.",
    options: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    q: "Which command is used to list all Helm repositories?",
    options: [
      "helm repo list",
      "helm list repo",
      "helm get repo",
      "helm show repo"
    ],
    answer: 0
  },
  {
    q: "What is the reason for not admitting a privileged Pod into a node?",
    options: [
      "Pod Security / Admission Controller restriction",
      "Node selector mismatch",
      "Service account missing",
      "Image pull error"
    ],
    answer: 0
  },
  {
    q: "What is another reason for not admitting a privileged Pod into a node?",
    options: [
      "Pod Security / Admission Controller restriction",
      "Namespace missing",
      "Service not exposed",
      "ConfigMap missing"
    ],
    answer: 0
  },
  {
    q: "Operator is used as a controller?",
    options: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    q: "Which command is used to check logs for the kubelet service?",
    options: [
      "kubectl logs kubelet",
      "journalctl -u kubelet",
      "systemctl status kubelet",
      "kubectl describe kubelet"
    ],
    answer: 1
  }
],

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
