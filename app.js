const employees = [
  {
    id: "u1",
    email: "jane@groot.io",
    name: "Jane Doe",
    role: "employee",
    password: "demo123",
    department: "Engineering",
    jobRole: "Frontend Engineer",
    techStack: ["React", "TypeScript", "Node.js"],
    certifications: ["AWS Cloud Practitioner"],
    history: [
      { 
        trainingId: "t1",
        title: "Cloud Security Essentials", 
        status: "Completed", 
        date: "2025-11-15",
        completionDate: "2025-11-15",
        duration: 90,
        format: "Online",
        score: 95,
        certificate: true
      },
      { 
        trainingId: "t2",
        title: "Data Privacy & GDPR", 
        status: "Completed", 
        date: "2025-10-20",
        completionDate: "2025-10-20",
        duration: 60,
        format: "Online",
        score: 88,
        certificate: true
      },
      { 
        trainingId: "t3",
        title: "Secure Coding 101", 
        status: "Completed", 
        date: "2025-09-12",
        completionDate: "2025-09-12",
        duration: 45,
        format: "Online",
        score: 92,
        certificate: true
      },
      { 
        trainingId: "t4",
        title: "Accessibility Basics", 
        status: "Completed", 
        date: "2025-10-03",
        completionDate: "2025-10-03",
        duration: 30,
        format: "Online",
        score: 90,
        certificate: true
      },
      { 
        trainingId: "t5",
        title: "React Advanced Patterns", 
        status: "In-progress", 
        date: "2025-11-01",
        completionDate: null,
        duration: 120,
        format: "Online",
        score: null,
        certificate: false,
        progress: 65
      },
      { 
        trainingId: "t6",
        title: "TypeScript Mastery", 
        status: "Enrolled", 
        date: "2025-11-10",
        completionDate: null,
        duration: 90,
        format: "Online",
        score: null,
        certificate: false,
        progress: 0
      },
    ],
  },
  {
    id: "u2",
    email: "alex@groot.io",
    name: "Alex Kim",
    role: "admin",
    password: "demo123",
    department: "People",
    jobRole: "L&D Program Manager",
    techStack: ["LearningOps", "Miro"],
    certifications: ["CPLP"],
    history: [
      { 
        trainingId: "t7",
        title: "Learning Design Fundamentals", 
        status: "Completed", 
        date: "2025-09-01",
        completionDate: "2025-09-01",
        duration: 60,
        format: "In-person",
        score: 96,
        certificate: true
      },
      { 
        trainingId: "t8",
        title: "Adult Learning Theory", 
        status: "Completed", 
        date: "2025-08-15",
        completionDate: "2025-08-15",
        duration: 45,
        format: "Online",
        score: 94,
        certificate: true
      },
      { 
        trainingId: "t9",
        title: "Program Management Essentials", 
        status: "Completed", 
        date: "2025-10-10",
        completionDate: "2025-10-10",
        duration: 90,
        format: "Online",
        score: 91,
        certificate: true
      },
      { 
        trainingId: "t10",
        title: "Data Privacy & GDPR", 
        status: "Completed", 
        date: "2025-10-25",
        completionDate: "2025-10-25",
        duration: 60,
        format: "Online",
        score: 89,
        certificate: true
      },
      { 
        trainingId: "t11",
        title: "Analytics for L&D", 
        status: "In-progress", 
        date: "2025-11-05",
        completionDate: null,
        duration: 75,
        format: "Online",
        score: null,
        certificate: false,
        progress: 40
      },
    ],
  },
  {
    id: "u3",
    email: "sara@groot.io",
    name: "Sara Patel",
    role: "superadmin",
    password: "demo123",
    department: "Compliance",
    jobRole: "Head of Compliance",
    techStack: ["GRC", "Risk"],
    certifications: ["CISA", "CISM"],
    history: [
      { 
        trainingId: "t12",
        title: "Data Privacy & GDPR", 
        status: "Completed", 
        date: "2025-08-01",
        completionDate: "2025-08-01",
        duration: 60,
        format: "Online",
        score: 98,
        certificate: true
      },
      { 
        trainingId: "t13",
        title: "Cloud Security Essentials", 
        status: "Completed", 
        date: "2025-09-20",
        completionDate: "2025-09-20",
        duration: 90,
        format: "Online",
        score: 97,
        certificate: true
      },
      { 
        trainingId: "t14",
        title: "Risk Management Framework", 
        status: "Completed", 
        date: "2025-07-15",
        completionDate: "2025-07-15",
        duration: 120,
        format: "In-person",
        score: 95,
        certificate: true
      },
      { 
        trainingId: "t15",
        title: "Compliance Auditing", 
        status: "Completed", 
        date: "2025-06-10",
        completionDate: "2025-06-10",
        duration: 90,
        format: "Online",
        score: 96,
        certificate: true
      },
      { 
        trainingId: "t16",
        title: "Incident Response Training", 
        status: "Completed", 
        date: "2025-10-15",
        completionDate: "2025-10-15",
        duration: 75,
        format: "Online",
        score: 93,
        certificate: true
      },
      { 
        trainingId: "t17",
        title: "Regulatory Updates 2025", 
        status: "In-progress", 
        date: "2025-11-01",
        completionDate: null,
        duration: 60,
        format: "Online",
        score: null,
        certificate: false,
        progress: 80
      },
    ],
  },
  {
    id: "u4",
    email: "mike@groot.io",
    name: "Mike Johnson",
    role: "employee",
    password: "demo123",
    department: "Sales",
    jobRole: "Sales Representative",
    techStack: ["CRM", "Salesforce", "HubSpot"],
    certifications: ["Salesforce Certified"],
    history: [
      { 
        trainingId: "t3",
        title: "Sales Discovery Mastery", 
        status: "Completed", 
        date: "2025-09-05",
        completionDate: "2025-09-05",
        duration: 45,
        format: "In-person",
        score: 94,
        certificate: true
      },
      { 
        trainingId: "t18",
        title: "Customer Relationship Management", 
        status: "Completed", 
        date: "2025-10-10",
        completionDate: "2025-10-10",
        duration: 60,
        format: "Online",
        score: 91,
        certificate: true
      },
      { 
        trainingId: "t19",
        title: "Cybersecurity Awareness", 
        status: "In-progress", 
        date: "2025-11-05",
        completionDate: null,
        duration: 45,
        format: "Online",
        score: null,
        certificate: false,
        progress: 50
      },
      { 
        trainingId: "t20",
        title: "Advanced Negotiation Skills", 
        status: "Enrolled", 
        date: "2025-11-12",
        completionDate: null,
        duration: 90,
        format: "In-person",
        score: null,
        certificate: false,
        progress: 0
      },
    ],
  },
  {
    id: "u5",
    email: "emily@groot.io",
    name: "Emily Chen",
    role: "employee",
    password: "demo123",
    department: "Engineering",
    jobRole: "Backend Engineer",
    techStack: ["Python", "Django", "PostgreSQL", "Docker"],
    certifications: ["AWS Solutions Architect"],
    history: [
      { 
        trainingId: "t1",
        title: "Cloud Security Essentials", 
        status: "Completed", 
        date: "2025-10-01",
        completionDate: "2025-10-15",
        duration: 90,
        format: "Online",
        score: 97,
        certificate: true
      },
      { 
        trainingId: "t21",
        title: "DevOps Best Practices", 
        status: "Completed", 
        date: "2025-09-20",
        completionDate: "2025-09-25",
        duration: 120,
        format: "Online",
        score: 89,
        certificate: true
      },
      { 
        trainingId: "t19",
        title: "Cybersecurity Awareness", 
        status: "In-progress", 
        date: "2025-11-01",
        completionDate: null,
        duration: 45,
        format: "Online",
        score: null,
        certificate: false,
        progress: 75
      },
    ],
  },
  {
    id: "u6",
    email: "david@groot.io",
    name: "David Rodriguez",
    role: "employee",
    password: "demo123",
    department: "Security",
    jobRole: "Security Analyst",
    techStack: ["SIEM", "Penetration Testing", "Kali Linux"],
    certifications: ["CEH", "Security+"],
    history: [
      { 
        trainingId: "t2",
        title: "Data Privacy & GDPR", 
        status: "Completed", 
        date: "2025-08-15",
        completionDate: "2025-08-20",
        duration: 60,
        format: "Online",
        score: 99,
        certificate: true
      },
      { 
        trainingId: "t1",
        title: "Cloud Security Essentials", 
        status: "Completed", 
        date: "2025-09-10",
        completionDate: "2025-09-12",
        duration: 90,
        format: "Online",
        score: 98,
        certificate: true
      },
      { 
        trainingId: "t22",
        title: "Penetration Testing Fundamentals", 
        status: "Completed", 
        date: "2025-10-05",
        completionDate: "2025-10-10",
        duration: 150,
        format: "In-person",
        score: 95,
        certificate: true
      },
      { 
        trainingId: "t23",
        title: "Security Compliance Framework", 
        status: "In-progress", 
        date: "2025-11-08",
        completionDate: null,
        duration: 90,
        format: "Online",
        score: null,
        certificate: false,
        progress: 30
      },
    ],
  },
  {
    id: "u7",
    email: "lisa@groot.io",
    name: "Lisa Anderson",
    role: "employee",
    password: "demo123",
    department: "People",
    jobRole: "HR Specialist",
    techStack: ["HRIS", "Talent Management", "Analytics"],
    certifications: ["SHRM-CP"],
    history: [
      { 
        trainingId: "t19",
        title: "Cybersecurity Awareness", 
        status: "Completed", 
        date: "2025-09-15",
        completionDate: "2025-09-18",
        duration: 45,
        format: "Online",
        score: 87,
        certificate: true
      },
      { 
        trainingId: "t24",
        title: "Workplace Safety & Compliance", 
        status: "Completed", 
        date: "2025-10-20",
        completionDate: "2025-10-22",
        duration: 60,
        format: "In-person",
        score: 92,
        certificate: true
      },
      { 
        trainingId: "t2",
        title: "Data Privacy & GDPR", 
        status: "In-progress", 
        date: "2025-11-05",
        completionDate: null,
        duration: 60,
        format: "Online",
        score: null,
        certificate: false,
        progress: 60
      },
    ],
  },
];

const trainings = [
  {
    id: "t1",
    title: "Cloud Security Essentials",
    description: "Lock down your workloads with IAM, VPC, and incident drills.",
    duration: 90,
    schedule: "2025-12-20",
    format: "Online",
    type: "open",
    department: "Engineering",
    videoPath: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    transcript:
      "Welcome to Cloud Security Essentials. In this session we cover shared responsibility, IAM guardrails, network segmentation, and incident response drills. Section 1: IAM baselines. Section 2: VPC zoning. Section 3: Detection and response. Section 4: Hands-on lab overview.",
    approvalStatus: "approved",
  },
  {
    id: "t2",
    title: "Data Privacy & GDPR",
    description: "Data handling, DPIA, and retention practices.",
    duration: 60,
    schedule: "2025-12-22",
    format: "Online",
    type: "mandatory",
    department: "Security",
    videoPath: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    transcript:
      "This GDPR briefing explains lawful basis, DPIA steps, data subject rights, retention, and breach notification timelines. Section 1: Principles. Section 2: Rights. Section 3: DPIA walkthrough. Section 4: Incident timelines and documentation.",
    approvalStatus: "pending",
  },
  {
    id: "t3",
    title: "Sales Discovery Mastery",
    description: "Run crisp discovery calls and objection handling.",
    duration: 45,
    schedule: "2025-12-18",
    format: "In-person",
    type: "open",
    department: "Sales",
    videoPath: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    transcript:
      "In this discovery masterclass we cover pre-call research, question ladders, active listening, and objection handling. Module 1: Prep. Module 2: Opening. Module 3: Deep-dive questions. Module 4: Handling objections and next steps.",
    approvalStatus: "approved",
  },
  {
    id: "t18",
    title: "Customer Relationship Management",
    description: "Master CRM tools and strategies to build lasting customer relationships and increase sales effectiveness.",
    duration: 60,
    schedule: "2025-12-10",
    format: "Online",
    type: "open",
    department: "Sales",
    videoPath: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    transcript:
      "This CRM training covers customer data management, pipeline tracking, automation workflows, and reporting. Section 1: CRM fundamentals. Section 2: Data entry best practices. Section 3: Automation and workflows. Section 4: Analytics and reporting.",
    approvalStatus: "approved",
  },
  {
    id: "t19",
    title: "Cybersecurity Awareness",
    description: "Essential cybersecurity practices for all employees to protect company data and systems.",
    duration: 45,
    schedule: "2025-12-15",
    format: "Online",
    type: "mandatory",
    department: "All",
    videoPath: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    transcript:
      "This mandatory cybersecurity awareness training covers phishing prevention, password security, secure browsing, data handling, and incident reporting. Module 1: Threat landscape. Module 2: Phishing and social engineering. Module 3: Password and authentication. Module 4: Safe computing practices.",
    approvalStatus: "approved",
  },
  {
    id: "t20",
    title: "Advanced Negotiation Skills",
    description: "Develop advanced negotiation techniques for complex deals and high-stakes situations.",
    duration: 90,
    schedule: "2025-12-25",
    format: "In-person",
    type: "open",
    department: "Sales",
    videoPath: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    transcript:
      "Advanced negotiation training covering BATNA analysis, concession strategies, handling objections, multi-party negotiations, and closing techniques. Session 1: Preparation framework. Session 2: Tactics and strategies. Session 3: Complex scenarios. Session 4: Practice and role-play.",
    approvalStatus: "approved",
  },
  {
    id: "t21",
    title: "DevOps Best Practices",
    description: "Learn modern DevOps methodologies, CI/CD pipelines, containerization, and infrastructure as code.",
    duration: 120,
    schedule: "2025-12-12",
    format: "Online",
    type: "open",
    department: "Engineering",
    videoPath: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    transcript:
      "DevOps best practices training covering version control workflows, CI/CD pipeline design, container orchestration, monitoring and logging, and infrastructure automation. Part 1: CI/CD fundamentals. Part 2: Containerization. Part 3: Infrastructure as code. Part 4: Monitoring and observability.",
    approvalStatus: "approved",
  },
  {
    id: "t22",
    title: "Penetration Testing Fundamentals",
    description: "Introduction to ethical hacking and penetration testing methodologies for security professionals.",
    duration: 150,
    schedule: "2025-12-28",
    format: "In-person",
    type: "open",
    department: "Security",
    videoPath: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    transcript:
      "Penetration testing fundamentals covering reconnaissance, scanning, exploitation, post-exploitation, and reporting. Day 1: Reconnaissance and information gathering. Day 2: Vulnerability scanning and analysis. Day 3: Exploitation techniques. Day 4: Post-exploitation and reporting.",
    approvalStatus: "approved",
  },
  {
    id: "t23",
    title: "Security Compliance Framework",
    description: "Understanding security compliance requirements including ISO 27001, SOC 2, and regulatory standards.",
    duration: 90,
    schedule: "2025-12-30",
    format: "Online",
    type: "mandatory",
    department: "Security",
    videoPath: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    transcript:
      "Security compliance framework training covering ISO 27001, SOC 2, GDPR compliance, audit preparation, and documentation requirements. Module 1: Compliance landscape. Module 2: ISO 27001 overview. Module 3: SOC 2 requirements. Module 4: Audit preparation.",
    approvalStatus: "pending",
  },
  {
    id: "t24",
    title: "Workplace Safety & Compliance",
    description: "Essential workplace safety protocols, emergency procedures, and compliance requirements for all employees.",
    duration: 60,
    schedule: "2025-12-22",
    format: "In-person",
    type: "mandatory",
    department: "All",
    videoPath: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    transcript:
      "Workplace safety and compliance training covering emergency procedures, hazard identification, safety equipment usage, incident reporting, and regulatory compliance. Section 1: Emergency procedures. Section 2: Hazard identification. Section 3: Safety equipment. Section 4: Reporting and compliance.",
    approvalStatus: "approved",
  },
];

const assignments = [
  { trainingId: "t1", type: "individual", target: "jane@groot.io" },
  { trainingId: "t2", type: "department", target: "Engineering" },
  { trainingId: "t3", type: "org", target: "org" },
  { trainingId: "t18", type: "department", target: "Sales" },
  { trainingId: "t19", type: "org", target: "org" },
  { trainingId: "t20", type: "individual", target: "mike@groot.io" },
  { trainingId: "t21", type: "department", target: "Engineering" },
  { trainingId: "t22", type: "department", target: "Security" },
  { trainingId: "t23", type: "department", target: "Security" },
  { trainingId: "t24", type: "org", target: "org" },
];

const enrollments = [{ trainingId: "t1", userEmail: "jane@groot.io", status: "In-progress" }];

const mandatoryRequests = [
  { trainingId: "t2", requestedBy: "alex@groot.io", comment: "Annual compliance mandate" },
  { trainingId: "t23", requestedBy: "sara@groot.io", comment: "Security team compliance requirement for Q1 2026" },
];

let currentUser = null;

const qs = (sel) => document.querySelector(sel);
const qsa = (sel) => Array.from(document.querySelectorAll(sel));

function init() {
  bindNav();
  bindAuth();
  bindHeroButtons();
  bindForms();
  renderAll();
}

function bindNav() {
  qsa(".pill").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.target;
      setActivePanel(target);
    });
  });
}

function bindAuth() {
  qs("#loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    const user = employees.find((u) => u.email === data.email.trim());
    if (!user || user.password !== data.password) {
      showToast("Invalid credentials");
      return;
    }
    currentUser = { ...user };
    qs("#authOverlay").classList.add("hidden");
    showToast(`Welcome, ${currentUser.name}`);
    renderAll();
  });
  qs("#logoutBtn").addEventListener("click", () => {
    currentUser = null;
    qs("#authOverlay").classList.remove("hidden");
    renderAll();
    showToast("Signed out");
  });
}

function bindHeroButtons() {
  qs("#heroWatchBtn").addEventListener("click", () => {
    const featured = trainings.find(t => isTrainingVisibleToUser(t)) || trainings[0];
    if (featured) playTraining(featured.id);
  });
  // Hero enroll button is now handled dynamically in renderHero()
}

function bindForms() {
  qs("#createTrainingForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    const id = `t${Date.now()}`;
    trainings.push({
      id,
      title: data.title,
      description: data.description,
      duration: Number(data.duration || 60),
      schedule: data.schedule || new Date().toISOString().slice(0, 10),
      format: data.format,
      type: data.type,
      department: "All",
      videoPath: data.videoPath || "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
      approvalStatus: data.type === "mandatory" ? "pending" : "approved",
    });
    if (data.type === "mandatory") {
      mandatoryRequests.push({ trainingId: id, requestedBy: currentUser.email, comment: "Awaiting approval" });
    }
    e.target.reset();
    populateAssignSelect();
    renderAll();
    showToast("Training created");
  });

  qs("#assignTrainingForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    assignments.push({
      trainingId: data.trainingId,
      type: data.assignmentType,
      target: data.assignmentType === "org" ? "org" : data.target,
    });
    e.target.reset();
    renderAll();
    showToast("Training assigned");
  });

  qs("#departmentFilter").addEventListener("change", renderTrainingsGrid);
  qs("#typeFilter").addEventListener("change", renderTrainingsGrid);
  qs("#historyStatusFilter").addEventListener("change", renderTrainingHistory);
  
  const employeeFilter = qs("#employeeFilter");
  const trainingFilter = qs("#trainingFilter");
  if (employeeFilter) {
    employeeFilter.addEventListener("change", renderEmployeeProfiles);
  }
  if (trainingFilter) {
    trainingFilter.addEventListener("change", renderEmployeeProfiles);
  }

  qs("#editProfileBtn").addEventListener("click", openProfileModal);
  qs("#closeModal").addEventListener("click", closeModal);
  qs("#modal").addEventListener("click", (e) => {
    if (e.target.id === "modal") closeModal();
  });
}

function setActivePanel(target) {
  qsa(".panel").forEach((p) => p.classList.remove("visible"));
  const panel = qs(`#${target}`);
  if (panel) panel.classList.add("visible");
  qsa(".pill").forEach((b) => b.classList.toggle("active", b.dataset.target === target));
}

function guardPanels() {
  const isAdmin = currentUser?.role === "admin";
  const isSuper = currentUser?.role === "superadmin";
  qs("#admin-panel").style.display = isAdmin || isSuper ? "block" : "none";
  qs("#superadmin-panel").style.display = isSuper ? "block" : "none";
}

function renderAll() {
  const overlay = qs("#authOverlay");
  const isAuthed = Boolean(currentUser);
  if (!isAuthed) {
    overlay.classList.remove("hidden");
  }
  qs("main").style.display = isAuthed ? "block" : "none";
  qs(".pill-nav").style.display = isAuthed ? "flex" : "none";
  qs("#userSummary").textContent = isAuthed
    ? `${currentUser.name} — ${currentUser.role} (${currentUser.email})`
    : "Not signed in";
  if (!isAuthed) return;

  renderHero();
  renderRows();
  renderTrainingsGrid();
  renderTimeline();
  renderProfile();
  populateAssignSelect();
  renderAnalytics();
  renderApprovals();
  renderEmployeeProfiles();
  guardPanels();
}

function isTrainingVisibleToUser(training) {
  // Admins and superadmins can see all trainings
  if (currentUser?.role === "admin" || currentUser?.role === "superadmin") {
    return true;
  }
  // For employees: open trainings are always visible, mandatory trainings only if approved
  if (training.type === "open") {
    return true;
  }
  if (training.type === "mandatory") {
    return training.approvalStatus === "approved";
  }
  return false;
}

function renderHero() {
  // Find first visible training for hero
  const featured = trainings.find(t => isTrainingVisibleToUser(t)) || trainings[0];
  if (featured) {
    qs("#heroTitle").textContent = featured.title;
    qs("#heroDesc").textContent = featured.description;
    
    // Update hero enroll button based on enrollment status
    const enrolled = isEnrolled(featured.id);
    const heroEnrollBtn = qs("#heroEnrollBtn");
    if (heroEnrollBtn) {
      heroEnrollBtn.textContent = enrolled ? "Un-enroll" : "Enroll";
      heroEnrollBtn.className = enrolled ? "ghost" : "primary";
      heroEnrollBtn.onclick = enrolled ? () => unenroll(featured.id) : () => enroll(featured.id);
    }
  }
}

function renderRows() {
  const openRow = qs("#openTrainingsRow");
  const assignedRow = qs("#assignedTrainingsRow");
  openRow.innerHTML = "";
  assignedRow.innerHTML = "";
  trainings
    .filter((t) => isTrainingVisibleToUser(t))
    .slice(0, 8)
    .forEach((t) => openRow.appendChild(trainingCard(t)));

  const assigned = getAssignedTrainingsForUser(currentUser.email, currentUser.department);
  assigned.forEach((t) => assignedRow.appendChild(trainingCard(t, true)));
}

function trainingCard(t, isAssigned = false) {
  const div = document.createElement("div");
  div.className = "card training-card";
  const badgeClass = t.type === "mandatory" ? "badge mandatory" : "badge";
  const enrolled = isEnrolled(t.id);
  const enrollButtonText = enrolled ? "Un-enroll" : "Enroll";
  const enrollButtonClass = enrolled ? "ghost small" : "primary small";
  div.innerHTML = `
    <div class="${badgeClass}">${t.type === "mandatory" ? "Mandatory" : "Open"}</div>
    <p class="title">${t.title}</p>
    <p>${t.description}</p>
    <p class="muted">Duration: ${t.duration} mins · ${t.format}</p>
    <div class="actions">
      <button class="${enrollButtonClass}" data-act="${enrolled ? 'unenroll' : 'enroll'}">${enrollButtonText}</button>
      <button class="ghost small" data-act="play">Play</button>
      <button class="ghost small" data-act="detail">Details</button>
      ${isAssigned ? '<button class="ghost small" data-act="mark">Mark done</button>' : ""}
    </div>
  `;
  const enrollBtn = div.querySelector(`[data-act="${enrolled ? 'unenroll' : 'enroll'}"]`);
  if (enrolled) {
    enrollBtn.addEventListener("click", () => unenroll(t.id));
  } else {
    enrollBtn.addEventListener("click", () => enroll(t.id));
  }
  div.querySelector('[data-act="play"]').addEventListener("click", () => playTraining(t.id));
  div.querySelector('[data-act="detail"]').addEventListener("click", () => showTrainingDetail(t.id));
  if (isAssigned) {
    div.querySelector('[data-act="mark"]').addEventListener("click", () => markComplete(t.id));
  }
  return div;
}

function renderTrainingsGrid() {
  const grid = qs("#trainingsGrid");
  grid.innerHTML = "";
  const dept = qs("#departmentFilter").value;
  const type = qs("#typeFilter").value;
  const filtered = trainings.filter((t) => {
    // First check if training is visible to user (mandatory must be approved for employees)
    if (!isTrainingVisibleToUser(t)) {
      return false;
    }
    const byDept = dept === "all" || t.department === dept || t.department === "All";
    const byType = type === "all" || (type === "open" ? t.type === "open" : t.type === "mandatory");
    return byDept && byType;
  });
  filtered.forEach((t) => grid.appendChild(trainingCard(t)));
}

function renderTimeline() {
  const ul = qs("#timeline");
  ul.innerHTML = "";
  const data = trainings
    .filter((t) => isTrainingVisibleToUser(t))
    .map((t) => ({ ...t, date: t.schedule }))
    .sort((a, b) => new Date(a.date) - new Date(b.date));
  data.forEach((t) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${t.schedule}</span><span><button class="ghost small" data-id="${t.id}">${t.title}</button> · ${
      t.type === "mandatory" ? "Mandatory" : "Open"
    }</span>`;
    li.querySelector("button").addEventListener("click", () => showTrainingDetail(t.id));
    ul.appendChild(li);
  });
}

function renderProfile() {
  qs("#profileName").textContent = currentUser.name;
  qs("#profileDept").textContent = `Department: ${currentUser.department}`;
  qs("#profileRole").textContent = `Role: ${currentUser.jobRole} (${currentUser.role})`;
  renderList("#techStack", currentUser.techStack);
  renderList("#certifications", currentUser.certifications);
  renderTrainingSummary();
  renderTrainingHistory();
}

function renderTrainingSummary() {
  const summaryContainer = qs("#trainingSummary");
  if (!currentUser.history || currentUser.history.length === 0) {
    summaryContainer.innerHTML = "<p class='muted'>No training data</p>";
    return;
  }
  
  const completed = currentUser.history.filter(h => h.status === "Completed").length;
  const inProgress = currentUser.history.filter(h => h.status === "In-progress").length;
  const enrolled = currentUser.history.filter(h => h.status === "Enrolled").length;
  const total = currentUser.history.length;
  const certificates = currentUser.history.filter(h => h.certificate).length;
  const avgScore = currentUser.history
    .filter(h => h.score !== null && h.score !== undefined)
    .reduce((sum, h) => sum + h.score, 0);
  const scoreCount = currentUser.history.filter(h => h.score !== null && h.score !== undefined).length;
  const avgScoreText = scoreCount > 0 ? `Avg Score: ${Math.round(avgScore / scoreCount)}%` : "";
  
  summaryContainer.innerHTML = `
    <p><strong>Total Trainings:</strong> ${total}</p>
    <p><strong>Completed:</strong> ${completed}</p>
    <p><strong>In Progress:</strong> ${inProgress}</p>
    <p><strong>Enrolled:</strong> ${enrolled}</p>
    <p><strong>Certificates:</strong> ${certificates}</p>
    ${avgScoreText ? `<p><strong>${avgScoreText}</strong></p>` : ""}
  `;
}

function renderList(sel, arr) {
  const el = qs(sel);
  el.innerHTML = "";
  if (!arr.length) {
    el.innerHTML = "<li class='muted'>No data yet</li>";
    return;
  }
  arr.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    el.appendChild(li);
  });
}

function renderTrainingHistory() {
  const historyContainer = qs("#history");
  if (!historyContainer) return;
  
  historyContainer.innerHTML = "";
  
  if (!currentUser.history || currentUser.history.length === 0) {
    historyContainer.innerHTML = "<li class='muted'>No training history yet</li>";
    return;
  }
  
  // Get filter value
  const filterElement = qs("#historyStatusFilter");
  const statusFilter = filterElement?.value || "all";
  
  // Filter and sort by date (most recent first)
  let filteredHistory = currentUser.history.slice();
  
  if (statusFilter !== "all") {
    filteredHistory = filteredHistory.filter(h => h.status === statusFilter);
  }
  
  const sortedHistory = filteredHistory.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
  
  if (sortedHistory.length === 0) {
    historyContainer.innerHTML = "<li class='muted'>No trainings found with selected filter</li>";
    return;
  }
  
  sortedHistory.forEach((entry) => {
    const li = document.createElement("li");
    li.className = "history-item";
    
    const statusClass = entry.status === "Completed" ? "completed" : 
                       entry.status === "In-progress" ? "in-progress" : "enrolled";
    
    const scoreText = entry.score ? `Score: ${entry.score}%` : "";
    const certificateText = entry.certificate ? "✓ Certificate" : "";
    const progressText = entry.progress !== undefined ? `Progress: ${entry.progress}%` : "";
    
    li.innerHTML = `
      <div class="history-header">
        <strong>${entry.title}</strong>
        <span class="status-badge ${statusClass}">${entry.status}</span>
      </div>
      <div class="history-details">
        <span class="muted">Enrolled: ${entry.date}</span>
        ${entry.completionDate ? `<span class="muted">Completed: ${entry.completionDate}</span>` : ""}
        <span class="muted">${entry.duration} mins · ${entry.format || "Online"}</span>
        ${scoreText ? `<span class="score">${scoreText}</span>` : ""}
        ${certificateText ? `<span class="certificate">${certificateText}</span>` : ""}
        ${progressText ? `<span class="progress">${progressText}</span>` : ""}
      </div>
    `;
    
    historyContainer.appendChild(li);
  });
}

function openProfileModal() {
  const body = qs("#modalBody");
  body.innerHTML = `
    <form id="profileForm">
      <div class="input-group">
        <label>Name</label>
        <input name="name" value="${currentUser.name}">
      </div>
      <div class="input-group">
        <label>Department</label>
        <input name="department" value="${currentUser.department}">
      </div>
      <div class="input-group">
        <label>Role</label>
        <input name="jobRole" value="${currentUser.jobRole}">
      </div>
      <div class="input-group">
        <label>Tech stack (comma separated)</label>
        <input name="techStack" value="${currentUser.techStack.join(", ")}">
      </div>
      <div class="input-group">
        <label>Certifications (comma separated)</label>
        <input name="certifications" value="${currentUser.certifications.join(", ")}">
      </div>
      <button class="primary" type="submit">Save</button>
    </form>
  `;
  qs("#modal").classList.remove("hidden");
  qs("#modalTitle").textContent = "Edit profile";
  qs("#profileForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    currentUser.name = data.name;
    currentUser.department = data.department;
    currentUser.jobRole = data.jobRole;
    currentUser.techStack = data.techStack.split(",").map((s) => s.trim()).filter(Boolean);
    currentUser.certifications = data.certifications.split(",").map((s) => s.trim()).filter(Boolean);
    closeModal();
    renderProfile();
    showToast("Profile updated");
  });
}

function closeModal() {
  qs("#modal").classList.add("hidden");
}

function isEnrolled(trainingId) {
  if (!currentUser) return false;
  // Check enrollments array
  const inEnrollments = enrollments.some((e) => e.trainingId === trainingId && e.userEmail === currentUser.email);
  // Also check user history for "Enrolled" status
  const inHistory = currentUser.history.some((h) => h.trainingId === trainingId && h.status === "Enrolled");
  return inEnrollments || inHistory;
}

function enroll(trainingId) {
  const training = trainings.find((t) => t.id === trainingId);
  if (!training) return;
  
  // Check if training is visible to user (mandatory must be approved for employees)
  if (!isTrainingVisibleToUser(training)) {
    showToast("This training is not available yet. It requires approval.");
    return;
  }
  
  if (isEnrolled(trainingId)) {
    showToast("Already enrolled");
    return;
  }
  enrollments.push({ trainingId, userEmail: currentUser.email, status: "Enrolled" });
  
  // Add to user history if not already there
  const historyEntry = currentUser.history.find(h => h.trainingId === trainingId);
  if (!historyEntry) {
    const today = new Date().toISOString().slice(0, 10);
    currentUser.history.push({
      trainingId: training.id,
      title: training.title,
      status: "Enrolled",
      date: today,
      completionDate: null,
      duration: training.duration || 60,
      format: training.format || "Online",
      score: null,
      certificate: false,
      progress: 0
    });
  }
  
  showToast(`Enrolled in ${training.title}`);
  renderAll();
}

function unenroll(trainingId) {
  const training = trainings.find((t) => t.id === trainingId);
  if (!training) return;
  
  const enrollmentIndex = enrollments.findIndex((e) => e.trainingId === trainingId && e.userEmail === currentUser.email);
  if (enrollmentIndex === -1) {
    showToast("Not enrolled in this training");
    return;
  }
  
  enrollments.splice(enrollmentIndex, 1);
  
  // Remove from user history if status is "Enrolled" (keep if in-progress or completed)
  const historyEntry = currentUser.history.find(h => h.trainingId === trainingId);
  if (historyEntry && historyEntry.status === "Enrolled") {
    const historyIndex = currentUser.history.findIndex(h => h.trainingId === trainingId && h.status === "Enrolled");
    if (historyIndex !== -1) {
      currentUser.history.splice(historyIndex, 1);
    }
  }
  
  showToast(`Un-enrolled from ${training.title}`);
  renderAll();
}

function playTraining(trainingId) {
  const training = trainings.find((t) => t.id === trainingId);
  if (!training) return;
  
  // Check if training is visible to user (mandatory must be approved for employees)
  if (!isTrainingVisibleToUser(training)) {
    showToast("This training is not available yet. It requires approval.");
    return;
  }
  
  const body = qs("#modalBody");
  body.innerHTML = `
    <p>${training.title}</p>
    <video controls>
      <source src="${training.videoPath}" type="video/mp4">
      Your browser does not support video.
    </video>
    <div class="actions" style="margin-top:10px;">
      <button class="primary small" id="markInProgress">Mark in-progress</button>
      <button class="ghost small" id="markComplete">Complete</button>
    </div>
  `;
  qs("#modalTitle").textContent = "Training Player";
  qs("#modal").classList.remove("hidden");
  qs("#markInProgress").addEventListener("click", () => {
    updateStatus(trainingId, "In-progress");
    showToast("Marked in-progress");
  });
  qs("#markComplete").addEventListener("click", () => {
    markComplete(trainingId);
  });
}

function showTrainingDetail(trainingId) {
  const training = trainings.find((t) => t.id === trainingId);
  if (!training) return;
  
  // Check if training is visible to user (mandatory must be approved for employees)
  if (!isTrainingVisibleToUser(training)) {
    showToast("This training is not available yet. It requires approval.");
    return;
  }
  
  qs("#detailTitle").textContent = training.title;
  qs("#detailDescription").textContent = training.description;
  qs("#detailMeta").textContent = `${training.duration} mins · ${training.format} · ${training.schedule}`;
  qs("#detailVideoSource").src = training.videoPath;
  qs("#detailVideo").load();
  qs("#detailTranscript").textContent = training.transcript || "Transcript coming soon.";
  
  // Update enroll button based on enrollment status
  const enrolled = isEnrolled(trainingId);
  const enrollBtn = qs("#detailEnrollBtn");
  enrollBtn.textContent = enrolled ? "Un-enroll" : "Enroll";
  enrollBtn.className = enrolled ? "ghost small" : "primary small";
  enrollBtn.onclick = enrolled ? () => unenroll(trainingId) : () => enroll(trainingId);
  
  qs("#detailPlayBtn").onclick = () => playTraining(trainingId);
  setActivePanel("training-detail");
}

function markComplete(trainingId) {
  const training = trainings.find((t) => t.id === trainingId);
  if (!training) return;
  
  // Check if training is visible to user (mandatory must be approved for employees)
  if (!isTrainingVisibleToUser(training)) {
    showToast("This training is not available yet. It requires approval.");
    return;
  }
  
  updateStatus(trainingId, "Completed");
  if (training) {
    const today = new Date().toISOString().slice(0, 10);
    // Check if entry already exists
    const existingEntry = currentUser.history.find(h => h.trainingId === trainingId);
    if (existingEntry) {
      existingEntry.status = "Completed";
      existingEntry.completionDate = today;
      existingEntry.score = Math.floor(Math.random() * 10) + 85; // Random score between 85-95
      existingEntry.certificate = true;
      if (existingEntry.progress !== undefined) {
        existingEntry.progress = 100;
      }
    } else {
      currentUser.history.push({ 
        trainingId: training.id,
        title: training.title, 
        status: "Completed", 
        date: today,
        completionDate: today,
        duration: training.duration || 60,
        format: training.format || "Online",
        score: Math.floor(Math.random() * 10) + 85,
        certificate: true
      });
    }
  }
  renderProfile();
  showToast("Completion recorded");
}

function updateStatus(trainingId, status) {
  const entry = enrollments.find((e) => e.trainingId === trainingId && e.userEmail === currentUser.email);
  if (entry) {
    entry.status = status;
  } else {
    enrollments.push({ trainingId, userEmail: currentUser.email, status });
  }
  
  // Update user history if needed
  const training = trainings.find((t) => t.id === trainingId);
  if (training) {
    const historyEntry = currentUser.history.find(h => h.trainingId === trainingId);
    if (historyEntry) {
      historyEntry.status = status;
      if (status === "In-progress" && historyEntry.progress === undefined) {
        historyEntry.progress = 25;
      } else if (status === "In-progress" && historyEntry.progress < 100) {
        historyEntry.progress = Math.min(historyEntry.progress + 25, 95);
      }
    } else if (status === "In-progress" || status === "Enrolled") {
      const today = new Date().toISOString().slice(0, 10);
      currentUser.history.push({
        trainingId: training.id,
        title: training.title,
        status: status,
        date: today,
        completionDate: null,
        duration: training.duration || 60,
        format: training.format || "Online",
        score: null,
        certificate: false,
        progress: status === "In-progress" ? 25 : 0
      });
    }
  }
  
  renderAll();
}

function getAssignedTrainingsForUser(email, department) {
  const assignedIds = assignments
    .filter(
      (a) =>
        a.type === "org" ||
        (a.type === "department" && a.target === department) ||
        (a.type === "individual" && a.target === email)
    )
    .map((a) => a.trainingId);
  return trainings.filter((t) => assignedIds.includes(t.id) && isTrainingVisibleToUser(t));
}

function populateAssignSelect() {
  const select = qs("#assignTrainingSelect");
  select.innerHTML = trainings.map((t) => `<option value="${t.id}">${t.title}</option>`).join("");
}

function renderAnalytics() {
  const stats = qs("#analyticsGrid");
  stats.innerHTML = "";
  const total = trainings.length;
  const mandatory = trainings.filter((t) => t.type === "mandatory").length;
  const enrolled = enrollments.length;
  const completed = enrollments.filter((e) => e.status === "Completed").length;
  const data = [
    { label: "Total trainings", value: total },
    { label: "Mandatory", value: mandatory },
    { label: "Enrollments", value: enrolled },
    { label: "Completed", value: completed },
  ];
  qs("#analyticsSummary").textContent = `Completion rate: ${total ? Math.round((completed / total) * 100) : 0}%`;
  data.forEach((d) => {
    const div = document.createElement("div");
    div.className = "stat";
    div.innerHTML = `<p>${d.label}</p><h3>${d.value}</h3>`;
    stats.appendChild(div);
  });
}

function renderApprovals() {
  const list = qs("#approvalsList");
  list.innerHTML = "";
  if (currentUser.role !== "superadmin") {
    list.innerHTML = "<p class='muted'>Switch to Super Admin to approve.</p>";
    return;
  }
  mandatoryRequests.forEach((req) => {
    const training = trainings.find((t) => t.id === req.trainingId);
    if (!training) return;
    const item = document.createElement("div");
    item.className = "approval-item";
    item.innerHTML = `
      <p><strong>${training.title}</strong> (${training.schedule})</p>
      <p>Requested by ${req.requestedBy} — ${req.comment}</p>
      <div class="actions">
        <button class="primary small">Approve</button>
        <button class="ghost small">Reject</button>
      </div>
    `;
    item.querySelector(".primary").addEventListener("click", () => {
      training.approvalStatus = "approved";
      mandatoryRequests.splice(mandatoryRequests.indexOf(req), 1);
      renderAll();
      showToast("Training approved");
    });
    item.querySelector(".ghost").addEventListener("click", () => {
      training.approvalStatus = "rejected";
      mandatoryRequests.splice(mandatoryRequests.indexOf(req), 1);
      renderAll();
      showToast("Training rejected");
    });
    list.appendChild(item);
  });
  if (!mandatoryRequests.length) list.innerHTML = "<p class='muted'>No pending requests</p>";
}

function renderEmployeeProfiles() {
  const container = qs("#employeeProfilesContainer");
  if (!container) return;
  
  // Only show for admin and superadmin
  if (currentUser?.role !== "admin" && currentUser?.role !== "superadmin") {
    container.innerHTML = "<p class='muted'>Access restricted to admins</p>";
    return;
  }
  
  container.innerHTML = "";
  
  // Populate employee filter
  const employeeFilter = qs("#employeeFilter");
  if (employeeFilter && employeeFilter.children.length <= 1) {
    employees.forEach(emp => {
      if (emp.role === "employee") {
        const option = document.createElement("option");
        option.value = emp.email;
        option.textContent = `${emp.name} (${emp.department})`;
        employeeFilter.appendChild(option);
      }
    });
  }
  
  // Populate training filter
  const trainingFilter = qs("#trainingFilter");
  if (trainingFilter && trainingFilter.children.length <= 1) {
    trainings.forEach(t => {
      const option = document.createElement("option");
      option.value = t.id;
      option.textContent = t.title;
      trainingFilter.appendChild(option);
    });
  }
  
  // Get filter values
  const selectedEmployee = employeeFilter?.value || "all";
  const selectedTraining = trainingFilter?.value || "all";
  
  // Filter employees
  let filteredEmployees = employees.filter(emp => emp.role === "employee");
  if (selectedEmployee !== "all") {
    filteredEmployees = filteredEmployees.filter(emp => emp.email === selectedEmployee);
  }
  
  if (filteredEmployees.length === 0) {
    container.innerHTML = "<p class='muted'>No employees found</p>";
    return;
  }
  
  // Render overall statistics summary
  const summaryCard = createOverallStatisticsSummary(filteredEmployees);
  container.appendChild(summaryCard);
  
  // Render each employee profile
  filteredEmployees.forEach(employee => {
    const employeeCard = createEmployeeProfileCard(employee, selectedTraining);
    container.appendChild(employeeCard);
  });
}

function createOverallStatisticsSummary(employeeList) {
  const summaryDiv = document.createElement("div");
  summaryDiv.className = "overall-statistics";
  
  // Calculate aggregate statistics
  let totalTrainings = 0;
  let totalCompleted = 0;
  let totalInProgress = 0;
  let totalEnrolled = 0;
  let totalCertificates = 0;
  let totalHours = 0;
  let allScores = [];
  
  employeeList.forEach(emp => {
    const history = emp.history || [];
    totalTrainings += history.length;
    totalCompleted += history.filter(h => h.status === "Completed").length;
    totalInProgress += history.filter(h => h.status === "In-progress").length;
    totalEnrolled += history.filter(h => h.status === "Enrolled").length;
    totalCertificates += history.filter(h => h.certificate).length;
    
    history.forEach(h => {
      if (h.status === "Completed") {
        totalHours += h.duration || 0;
      } else if (h.status === "In-progress" && h.progress) {
        totalHours += (h.duration || 0) * (h.progress || 0) / 100;
      }
      
      if (h.score !== null && h.score !== undefined) {
        allScores.push(h.score);
      }
    });
  });
  
  const avgCompletionRate = employeeList.length > 0 && totalTrainings > 0
    ? Math.round((totalCompleted / totalTrainings) * 100)
    : 0;
  const avgScore = allScores.length > 0
    ? Math.round(allScores.reduce((a, b) => a + b, 0) / allScores.length)
    : null;
  const totalHoursFormatted = (totalHours / 60).toFixed(1);
  
  summaryDiv.innerHTML = `
    <h4>Overall Statistics (${employeeList.length} ${employeeList.length === 1 ? "Employee" : "Employees"})</h4>
    <div class="overall-metrics">
      <div class="overall-metric">
        <span class="overall-label">Total Trainings</span>
        <span class="overall-value">${totalTrainings}</span>
      </div>
      <div class="overall-metric">
        <span class="overall-label">Completed</span>
        <span class="overall-value completed">${totalCompleted}</span>
      </div>
      <div class="overall-metric">
        <span class="overall-label">In Progress</span>
        <span class="overall-value in-progress">${totalInProgress}</span>
      </div>
      <div class="overall-metric">
        <span class="overall-label">Enrolled</span>
        <span class="overall-value enrolled">${totalEnrolled}</span>
      </div>
      <div class="overall-metric">
        <span class="overall-label">Certificates</span>
        <span class="overall-value">${totalCertificates}</span>
      </div>
      <div class="overall-metric">
        <span class="overall-label">Total Hours</span>
        <span class="overall-value">${totalHoursFormatted}h</span>
      </div>
      <div class="overall-metric">
        <span class="overall-label">Avg Completion Rate</span>
        <span class="overall-value">${avgCompletionRate}%</span>
      </div>
      ${avgScore ? `
      <div class="overall-metric">
        <span class="overall-label">Avg Score</span>
        <span class="overall-value">${avgScore}%</span>
      </div>
      ` : ""}
    </div>
  `;
  
  return summaryDiv;
}

function createEmployeeProfileCard(employee, selectedTraining) {
  const card = document.createElement("div");
  card.className = "employee-profile-card";
  
  // Calculate statistics
  const history = employee.history || [];
  const totalTrainings = history.length;
  const completed = history.filter(h => h.status === "Completed").length;
  const inProgress = history.filter(h => h.status === "In-progress").length;
  const enrolled = history.filter(h => h.status === "Enrolled").length;
  const certificates = history.filter(h => h.certificate).length;
  
  // Calculate attendance metrics
  const inPersonTrainings = history.filter(h => h.format === "In-person");
  const inPersonCompleted = inPersonTrainings.filter(h => h.status === "Completed").length;
  const attendanceRate = inPersonTrainings.length > 0 
    ? Math.round((inPersonCompleted / inPersonTrainings.length) * 100) 
    : null;
  
  // Calculate average score
  const scores = history.filter(h => h.score !== null && h.score !== undefined).map(h => h.score);
  const avgScore = scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : null;
  
  // Calculate completion rate
  const completionRate = totalTrainings > 0 ? Math.round((completed / totalTrainings) * 100) : 0;
  
  // Calculate total training hours (completed + in-progress with progress)
  const completedHours = history
    .filter(h => h.status === "Completed")
    .reduce((sum, h) => sum + (h.duration || 0), 0);
  const inProgressHours = history
    .filter(h => h.status === "In-progress" && h.progress)
    .reduce((sum, h) => sum + ((h.duration || 0) * (h.progress || 0) / 100), 0);
  const totalHours = completedHours + inProgressHours;
  const totalHoursFormatted = (totalHours / 60).toFixed(1);
  
  // Calculate on-time completion (completed within 30 days of enrollment)
  const onTimeCompletions = history.filter(h => {
    if (h.status !== "Completed" || !h.completionDate || !h.date) return false;
    const daysDiff = (new Date(h.completionDate) - new Date(h.date)) / (1000 * 60 * 60 * 24);
    return daysDiff <= 30;
  }).length;
  const onTimeRate = completed > 0 ? Math.round((onTimeCompletions / completed) * 100) : null;
  
  // Filter training history if specific training selected
  let displayHistory = history;
  if (selectedTraining !== "all") {
    displayHistory = history.filter(h => h.trainingId === selectedTraining);
  }
  
  // Sort history by date (most recent first)
  displayHistory = displayHistory.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
  
  card.innerHTML = `
    <div class="employee-header">
      <div>
        <h4>${employee.name}</h4>
        <p class="muted">${employee.email} · ${employee.department} · ${employee.jobRole}</p>
      </div>
      <div class="employee-stats">
        <div class="stat-item">
          <span class="stat-label">Completion Rate</span>
          <span class="stat-value">${completionRate}%</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Total Hours</span>
          <span class="stat-value">${totalHoursFormatted}h</span>
        </div>
      </div>
    </div>
    
    <div class="employee-metrics">
      <div class="metric-card">
        <span class="metric-label">Total Trainings</span>
        <span class="metric-value">${totalTrainings}</span>
      </div>
      <div class="metric-card">
        <span class="metric-label">Completed</span>
        <span class="metric-value completed">${completed}</span>
      </div>
      <div class="metric-card">
        <span class="metric-label">In Progress</span>
        <span class="metric-value in-progress">${inProgress}</span>
      </div>
      <div class="metric-card">
        <span class="metric-label">Enrolled</span>
        <span class="metric-value enrolled">${enrolled}</span>
      </div>
      <div class="metric-card">
        <span class="metric-label">Certificates</span>
        <span class="metric-value">${certificates}</span>
      </div>
      ${avgScore ? `
      <div class="metric-card">
        <span class="metric-label">Avg Score</span>
        <span class="metric-value">${avgScore}%</span>
      </div>
      ` : ""}
      ${attendanceRate !== null ? `
      <div class="metric-card">
        <span class="metric-label">Attendance</span>
        <span class="metric-value">${attendanceRate}%</span>
      </div>
      ` : ""}
      ${onTimeRate !== null ? `
      <div class="metric-card">
        <span class="metric-label">On-Time Rate</span>
        <span class="metric-value">${onTimeRate}%</span>
      </div>
      ` : ""}
    </div>
    
    <div class="employee-tech">
      <div class="tech-section">
        <strong>Tech Stack:</strong>
        <div class="tags">
          ${employee.techStack && employee.techStack.length > 0 
            ? employee.techStack.map(tech => `<span class="tag-item">${tech}</span>`).join("")
            : "<span class='muted'>None</span>"}
        </div>
      </div>
      <div class="tech-section">
        <strong>Certifications:</strong>
        <div class="tags">
          ${employee.certifications && employee.certifications.length > 0
            ? employee.certifications.map(cert => `<span class="tag-item cert">${cert}</span>`).join("")
            : "<span class='muted'>None</span>"}
        </div>
      </div>
    </div>
    
    <div class="employee-training-history">
      <h5>Training History ${selectedTraining !== "all" ? "(Filtered)" : ""}</h5>
      ${displayHistory.length > 0 ? `
        <div class="training-history-table">
          <div class="table-header">
            <span>Training</span>
            <span>Status</span>
            <span>Enrolled</span>
            <span>Completed</span>
            <span>Score</span>
            <span>Certificate</span>
            <span>Format</span>
          </div>
          ${displayHistory.map(h => {
            const daysToComplete = h.completionDate && h.date 
              ? Math.round((new Date(h.completionDate) - new Date(h.date)) / (1000 * 60 * 60 * 24))
              : null;
            const onTime = daysToComplete !== null && daysToComplete <= 30 ? "✓" : daysToComplete !== null ? "⚠" : "-";
            return `
            <div class="table-row">
              <span class="training-title">${h.title}</span>
              <span><span class="status-badge ${h.status === "Completed" ? "completed" : h.status === "In-progress" ? "in-progress" : "enrolled"}">${h.status}</span></span>
              <span class="muted">${h.date}</span>
              <span class="muted">${h.completionDate || "-"}</span>
              <span>${h.score ? `${h.score}%` : h.progress !== undefined ? `${h.progress}%` : "-"}</span>
              <span>${h.certificate ? "✓" : "-"}</span>
              <span class="muted">${h.format || "Online"}</span>
            </div>
          `;
          }).join("")}
        </div>
      ` : "<p class='muted'>No training history found</p>"}
    </div>
  `;
  
  return card;
}

function showToast(msg) {
  const toast = qs("#toast");
  toast.textContent = msg;
  toast.classList.remove("hidden");
  setTimeout(() => toast.classList.add("hidden"), 2200);
}

document.addEventListener("DOMContentLoaded", init);

