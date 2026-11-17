// Mini Case Study Data for each Instagram Grid Post
const projectsData = {
  datathon: {
    title: "Transaction & Routing Analytics Dashboard",
    visualClass: "gradient-1",
    visualText: "📊 Multi-Page Google Looker Studio Dashboard (Add screenshot <img> here)",
    problem: "Transaction logs across multiple payment channels lacked visibility into hourly traffic spikes, ordering party behavior, and routing efficiency.",
    tech: ["Python", "pandas", "Google Colab", "Google Sheets", "Google Looker Studio"],
    role: "Cleaned and aggregated raw transaction datasets in Google Colab using pandas, structured summary tables in Google Sheets, and designed interactive Looker Studio scorecards and time-series charts.",
    links: [
      { label: "Live Dashboard ↗", url: "[YOUR-LOOKER-STUDIO-LINK]" },
      { label: "GitHub Repo ↗", url: "https://github.com/yixuanng26" }
    ]
  },
  myfuture: {
    title: "MyFuture App (Hackathon Build)",
    visualClass: "gradient-2",
    visualText: "📱 MyFuture App UI Preview (Add app screenshot <img> here)",
    problem: "[1–2 sentences explaining the problem MyFuture App solves for users.]",
    tech: ["HTML/CSS", "JavaScript", "UI/UX Prototyping"],
    role: "[Describe what you specifically built during the hackathon, key features, and the final pitch outcome.]",
    links: [
      { label: "GitHub Repo ↗", url: "[YOUR-GITHUB-REPO-LINK]" }
    ]
  },
  library: {
    title: "Library Management System",
    visualClass: "gradient-3",
    visualText: "🐍 Object-Oriented Catalog & Borrowing Engine",
    problem: "Manual book tracking leads to duplicate entries and inconsistent borrow/return states.",
    tech: ["Python", "Object-Oriented Programming (OOP)", "Data Structures"],
    role: "Architected modular Book, Member, and Library classes using encapsulation to manage inventory search, checkout validation, and return workflows.",
    links: [
      { label: "Source Code ↗", url: "[YOUR-GITHUB-REPO-LINK]" }
    ]
  },
  rpg: {
    title: "OOP Text-Based RPG Combat Simulation",
    visualClass: "gradient-4",
    visualText: "⚔️ Turn-Based Character Class & Combat Simulator",
    problem: "Designing extensible game combat mechanics without duplicating battle logic across different hero and enemy types.",
    tech: ["Python", "OOP", "Inheritance & Polymorphism"],
    role: "Built a base Character class with specialized subclasses overriding attack and defense behaviors in a turn-based combat loop.",
    links: [
      { label: "Source Code ↗", url: "[YOUR-GITHUB-REPO-LINK]" }
    ]
  },
  matrix: {
    title: "3×3 Matrix Addition & Transpose Utility",
    visualClass: "gradient-5",
    visualText: "⚙️ C++ Console Linear Algebra Tool",
    problem: "Automating quick verification of 3×3 matrix addition and transposition operations.",
    tech: ["C++", "2D Arrays", "Algorithms"],
    role: "Implemented nested array traversal routines in C++ to compute matrix sums and row-column transpositions with formatted console output.",
    links: [
      { label: "Source Code ↗", url: "[YOUR-GITHUB-REPO-LINK]" }
    ]
  }
};

// Switch between Instagram Feed Tabs & Story Highlights
function switchTab(tabName) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });
  document.querySelectorAll('.tab-content').forEach(section => {
    section.classList.toggle('active', section.id === `tab-${tabName}`);
  });
}

// Open Project Case Study Modal
function openModal(projectKey) {
  const data = projectsData[projectKey];
  if (!data) return;

  const techBadges = data.tech.map(t => `<span class="chip">${t}</span>`).join('');
  const actionLinks = data.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener" class="btn-pill gradient">${l.label}</a>`).join('');

  document.getElementById('modalBody').innerHTML = `
    <div class="modal-visual ${data.visualClass}">${data.visualText}</div>
    <h2>${data.title}</h2>
    <div class="modal-section">
      <h4>Problem & Goal</h4>
      <p>${data.problem}</p>
    </div>
    <div class="modal-section">
      <h4>Your Role & Key Insights</h4>
      <p>${data.role}</p>
    </div>
    <div class="modal-section">
      <h4>Tech Stack & Tools</h4>
      <div class="chip-wrap" style="margin-top:6px;">${techBadges}</div>
    </div>
    <div class="modal-links">${actionLinks}</div>
  `;

  document.getElementById('projectModal').classList.add('open');
}

function closeModal() {
  document.getElementById('projectModal').classList.remove('open');
}

function closeModalOnBg(event) {
  if (event.target.id === 'projectModal') {
    closeModal();
  }
}
