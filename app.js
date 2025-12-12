const employees = [
  {
    id: "u1",
    email: "jane@groot.io",
    name: "Jane Doe",
    persona: "employee",
    department: "Engineering",
    jobRole: "Frontend Engineer",
    techStack: ["React", "TypeScript", "Node.js"],
    certifications: ["AWS Cloud Practitioner"],
    history: [
      { title: "Secure Coding 101", status: "Completed", date: "2025-09-12" },
      { title: "Accessibility Basics", status: "Completed", date: "2025-10-03" },
    ],
  },
  {
    id: "u2",
    email: "alex@groot.io",
    name: "Alex Kim",
    persona: "admin",
    department: "People",
    jobRole: "L&D Program Manager",
    techStack: ["LearningOps", "Miro"],
    certifications: ["CPLP"],
    history: [],
  },
  {
    id: "u3",
    email: "sara@groot.io",
    name: "Sara Patel",
    persona: "superadmin",
    department: "Compliance",
    jobRole: "Head of Compliance",
    techStack: ["GRC", "Risk"],
    certifications: ["CISA", "CISM"],
    history: [],
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
    approvalStatus: "approved",
  },
];

const assignments = [
  { trainingId: "t1", type: "individual", target: "jane@groot.io" },
  { trainingId: "t2", type: "department", target: "Engineering" },
  { trainingId: "t3", type: "org", target: "org" },
];

const enrollments = [
  { trainingId: "t1", userEmail: "jane@groot.io", status: "In-progress" },
];

const mandatoryRequests = [
  { trainingId: "t2", requestedBy: "alex@groot.io", comment: "Annual compliance mandate" },
];

let currentUser = { ...employees[0] };

const qs = (sel) => document.querySelector(sel);
const qsa = (sel) => Array.from(document.querySelectorAll(sel));

function init() {
  bindNav();
  bindPersonaSwitch();
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

function bindPersonaSwitch() {
  qs("#loginBtn").addEventListener("click", () => {
    const email = qs("#userEmail").value.trim();
    const persona = qs("#roleSelect").value;
    const found = employees.find((e) => e.email === email) || null;
    currentUser = found
      ? { ...found, persona }
      : {
          id: `u-${Date.now()}`,
          email,
          name: email.split("@")[0] || "User",
          persona,
          department: "Engineering",
          jobRole: persona === "admin" ? "L&D" : "Engineer",
          techStack: [],
          certifications: [],
          history: [],
        };
    showToast(`Switched to ${persona.toUpperCase()} as ${currentUser.email}`);
    guardPanels();
    renderAll();
  });
}

function bindHeroButtons() {
  qs("#heroWatchBtn").addEventListener("click", () => playTraining("t1"));
  qs("#heroEnrollBtn").addEventListener("click", () => enroll("t1"));
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
  const isAdmin = currentUser.persona === "admin";
  const isSuper = currentUser.persona === "superadmin";
  qs("#admin-panel").style.display = isAdmin || isSuper ? "block" : "none";
  qs("#superadmin-panel").style.display = isSuper ? "block" : "none";
}

function renderAll() {
  renderHero();
  renderRows();
  renderTrainingsGrid();
  renderTimeline();
  renderProfile();
  populateAssignSelect();
  renderAnalytics();
  renderApprovals();
  guardPanels();
}

function renderHero() {
  const featured = trainings[0];
  qs("#heroTitle").textContent = featured.title;
  qs("#heroDesc").textContent = featured.description;
}

function renderRows() {
  const openRow = qs("#openTrainingsRow");
  const assignedRow = qs("#assignedTrainingsRow");
  openRow.innerHTML = "";
  assignedRow.innerHTML = "";
  trainings
    .filter((t) => t.type === "open" || t.approvalStatus === "approved")
    .slice(0, 8)
    .forEach((t) => openRow.appendChild(trainingCard(t)));

  const assigned = getAssignedTrainingsForUser(currentUser.email, currentUser.department);
  assigned.forEach((t) => assignedRow.appendChild(trainingCard(t, true)));
}

function trainingCard(t, isAssigned = false) {
  const div = document.createElement("div");
  div.className = "card training-card";
  const badgeClass = t.type === "mandatory" ? "badge mandatory" : "badge";
  div.innerHTML = `
    <div class="${badgeClass}">${t.type === "mandatory" ? "Mandatory" : "Open"}</div>
    <p class="title">${t.title}</p>
    <p>${t.description}</p>
    <p class="muted">Duration: ${t.duration} mins · ${t.format}</p>
    <div class="actions">
      <button class="primary small" data-act="enroll">Enroll</button>
      <button class="ghost small" data-act="play">Play</button>
      ${isAssigned ? '<button class="ghost small" data-act="mark">Mark done</button>' : ""}
    </div>
  `;
  div.querySelector('[data-act="enroll"]').addEventListener("click", () => enroll(t.id));
  div.querySelector('[data-act="play"]').addEventListener("click", () => playTraining(t.id));
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
    .map((t) => ({ ...t, date: t.schedule }))
    .sort((a, b) => new Date(a.date) - new Date(b.date));
  data.forEach((t) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${t.schedule}</span><span>${t.title} · ${t.type === "mandatory" ? "Mandatory" : "Open"}</span>`;
    ul.appendChild(li);
  });
}

function renderProfile() {
  qs("#profileName").textContent = currentUser.name;
  qs("#profileDept").textContent = `Department: ${currentUser.department}`;
  qs("#profileRole").textContent = `Role: ${currentUser.jobRole} (${currentUser.persona})`;
  renderList("#techStack", currentUser.techStack);
  renderList("#certifications", currentUser.certifications);
  const hist = currentUser.history.slice().reverse();
  renderList("#history", hist.map((h) => `${h.title} — ${h.status} (${h.date})`));
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

function enroll(trainingId) {
  const training = trainings.find((t) => t.id === trainingId);
  if (!training) return;
  const existing = enrollments.find((e) => e.trainingId === trainingId && e.userEmail === currentUser.email);
  if (existing) {
    showToast("Already enrolled");
    return;
  }
  enrollments.push({ trainingId, userEmail: currentUser.email, status: "Enrolled" });
  showToast(`Enrolled in ${training.title}`);
  renderAll();
}

function playTraining(trainingId) {
  const training = trainings.find((t) => t.id === trainingId);
  if (!training) return;
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

function markComplete(trainingId) {
  updateStatus(trainingId, "Completed");
  const training = trainings.find((t) => t.id === trainingId);
  if (training) {
    currentUser.history.push({ title: training.title, status: "Completed", date: new Date().toISOString().slice(0, 10) });
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
  return trainings.filter((t) => assignedIds.includes(t.id) && (t.type === "open" || t.approvalStatus === "approved"));
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
  if (currentUser.persona !== "superadmin") {
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

function showToast(msg) {
  const toast = qs("#toast");
  toast.textContent = msg;
  toast.classList.remove("hidden");
  setTimeout(() => toast.classList.add("hidden"), 2200);
}

document.addEventListener("DOMContentLoaded", init);

