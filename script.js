const TECH = {
  bl: ["Java 25", "Spring Boot 4", "Angular 22", "TypeScript", "RxJS", "Angular Material 3", "SCSS", "PostgreSQL", "Flyway", "jOOQ", "Hibernate", "Docker", "Azure", "Ansible", "SonarQube", "GitLab", "Jira", "Confluence"],
  inetum: ["Java 11", "Spring Boot 2", "Angular 14", "Bootstrap 5", "MySQL", "H2 Database", "Hibernate", "Docker", "Jenkins", "SonarQube", "GitLab", "Confluence", "Jira"],
  rect: ["PHP", "Symfony", "Bootstrap 5", "PHPUnit", "MariaDB", "Doctrine", "Docker", "Jenkins"],
  pmb: ["PHP", "Laravel", "Bootstrap 4", "JavaScript", "jQuery", "MySQL", "Eloquent", "Docker"],
};

const DATA = {
  fr: {
    htmlLang: "fr",
    title: "Thierno Diallo — Développeur Full Stack Java / Angular",
    badge: "Actuellement chez Berger-Levrault · BU Santé",
    meta: "~5 ans d'expérience · 3 entreprises · santé et secteur public",
    intro: "Applications métier robustes et évolutives, du besoin à la mise en production, avec un souci de la qualité du code, de l'architecture et de la maintenabilité.",
    readMore: "Lire la suite",
    nav: ["Expériences", "Compétences", "Formation", "Contact"],
    stats: [["~5 ans", "d'expérience"], ["3", "entreprises"], ["4", "projets métier"], ["3", "certifications"]],
    role: "Développeur <b>Full Stack Java / Angular</b>",
    profile:
      "Développeur Full Stack Java / Angular avec près de 5 ans d'expérience, je conçois et développe des applications métier robustes et évolutives, de la compréhension du besoin à la mise en production. Spécialisé en Java, Spring Boot et Angular, j'ai notamment travaillé sur des projets dans des environnements exigeants tels que la santé et le secteur public, en prenant en charge l'ensemble du cycle de développement : conception, développement, tests, déploiement cloud et suivi en production, avec une attention particulière portée à la qualité du code, à l'architecture et à la maintenabilité.",
    sections: { exp: "Expériences professionnelles", skills: "Compétences techniques", edu: "Formation", cert: "Certifications", lang: "Langues" },
    more: "+ Voir les détails",
    jobs: [
      {
        company: "Berger-Levrault", date: "Oct. 2023 — Aujourd'hui", role: "Développeur Full Stack Java / Angular", tech: TECH.bl,
        desc: "Maintenance corrective et évolutive d'applications de gestion des activités médicales (préadmissions) pour les établissements de santé publics et privés — <b>BL.PBO, BL.MEP, BL.SFP</b>.",
        tasks: [
          "Développement et maintenance d’applications métiers dans le domaine de la santé",
          "Contribuer aux montées de version successives du socle technique : Angular 16 → 18 → 20 → 22 et Java 17 → 21 → 25",
          "Contribuer aux choix d'architecture et aux bonnes pratiques de développement",
          "Proposer des améliorations continues sur la performance et la maintenabilité du code",
          "Participer à l'analyse des besoins fonctionnels et techniques",
          "Réaliser la recette croisée, la revue de code et l'écriture des tests unitaires pour garantir la qualité",
          "Préparer les packages de livraison et déployer sur les environnements de recette, démo, préproduction et production",
          "Assurer l'astreinte post-déploiement et la surveillance des logs applicatifs",
          "Participer à l'amélioration continue des solutions et des process ; documentation et automatisation pour gagner en qualité et en productivité",
          "Rédiger la documentation fonctionnelle",
          "Collaborer au quotidien avec les autres équipes de la BU Santé",
          "Participer aux cérémonies agiles (daily, sprint review, rétro de sprint, sprint planning)",
        ],
      },
      {
        company: "Inetum", group: "Inetum", groupDate: "Sept. 2021 — Sept. 2023", groupYears: "2 ans", date: "Mars 2023 — Sept. 2023", role: "Développeur Full Stack Java / Angular", tech: TECH.inetum,
        desc: "Réalisation d'une application web de gestion du processus d'affectation de matériels de travail (véhicules de service, téléphones, PC…) à un nouveau collaborateur, et de leur restitution lors de son départ — <b>GestMat</b>.",
        tasks: [
          "Participer aux cérémonies agiles (daily, sprint review, rétro de sprint, sprint planning)",
          "Participer aux séances de grooming pour chiffrer et estimer la charge de développement des User Stories",
          "Gérer le backlog",
          "Déployer sur les environnements de test et de production avec intégration continue",
          "Mettre en place les tests unitaires",
          "Développer l'applicatif (évolution de l'existant / nouvelles fonctionnalités)",
          "Développer des API REST et le front",
          "Rédiger les spécifications et la documentation technique",
          "Identifier et traiter les anomalies",
          "Réaliser des revues de code des autres développeurs",
        ],
      },
      {
        company: "Inetum", group: "Inetum", client: "Rectorat Nancy-Metz", date: "Janv. 2022 — Fév. 2023", role: "Consultant informatique", tech: TECH.rect,
        desc: "En mission chez le client, développement d'une application permettant à un élève ou à son représentant légal de faire une demande d'aménagement aux examens — <a href='https://portail.ac-nancy-metz.fr/incluscol/' target='_blank' rel='noopener'><b>Incluscol</b></a>.",
        tasks: [
          "Reprendre et nationaliser l'application",
          "Assurer la maintenance et l'évolution de l'application",
          "Participer aux réunions de suivi et d'avancement avec la MOA",
          "Identifier et traiter les anomalies",
          "Déployer sur les environnements de test et de production avec intégration continue",
          "Développer des API REST et le front",
          "Rédiger les spécifications détaillées",
          "Supporter les équipes de qualification et de diffusion pour l'analyse et le suivi des signalements",
          "Préparer et réaliser les tests unitaires",
          "Réaliser la documentation technique et fonctionnelle",
        ],
      },
      {
        company: "Inetum", group: "Inetum", date: "Sept. 2021 — Déc. 2021", role: "Développeur Full Stack Java / Angular", tech: TECH.inetum,
        desc: "Réalisation d'une application web de gestion du processus d'affectation de matériels de travail (véhicules de service, téléphones, PC…) à un nouveau collaborateur, et de leur restitution lors de son départ — <b>GestMat</b>.",
        tasks: [],
      },
      {
        company: "PMB Software", date: "Sept. 2020 — Août 2021", role: "Développeur Full Stack PHP / Laravel · Alternance", tech: TECH.pmb,
        desc: "Développement d'applications connectant les acteurs d'un projet de construction de maison (constructeurs, artisans, collaborateurs, propriétaires) — <b>Constéo, Be in Home, Hermès, Visiterre</b>.",
        tasks: [
          "Assurer la maintenance corrective et évolutive des applicatifs",
          "Réaliser la conception et le développement de nouvelles fonctionnalités",
          "Analyser les besoins fonctionnels et techniques",
          "Développer des API REST",
          "Développer le front",
          "Réaliser la documentation technique et fonctionnelle",
          "Respecter les bonnes pratiques de développement",
        ],
      },
    ],
    skills: [
      ["Langages", "Java, TypeScript, JavaScript, HTML5, CSS, SCSS"],
      ["Frameworks", "Spring Boot, Angular, Symfony, Laravel, Bootstrap"],
      ["Bibliothèques / UI", "Angular Material, PrimeNG, RxJS"],
      ["Bases de données / ORM", "PostgreSQL, MySQL, MariaDB · Hibernate, jOOQ, Doctrine, Eloquent · Flyway"],
      ["API / Web", "REST, SOAP"],
      ["DevOps / Cloud", "Docker, Azure, Jenkins, Ansible, SonarQube"],
      ["Outils", "IntelliJ IDEA, VS Code, WebStorm, PhpStorm, Postman, Git, GitLab, Jira, Confluence, Nexus"],
      ["Méthodes", "Agile (Scrum), Cycle en V"],
    ],
    education: [
      ["2021", "Master Génie Informatique", "En alternance · Université de Lorraine (Metz)"],
      ["2019", "Licence Informatique", "Université de Lorraine (Metz)"],
      ["2018", "DEUG Informatique", "Université de Lorraine (Metz)"],
    ],
    certifications: [["2023", "Spring Data JPA"], ["2022", "RGAA — Accessibilité"], ["2021", "Angular"]],
    languages: [["Français", "Courant"], ["Anglais", "Intermédiaire"]],
  },

  en: {
    htmlLang: "en",
    title: "Thierno Diallo — Full Stack Java / Angular Developer",
    badge: "Currently at Berger-Levrault · Healthcare BU",
    meta: "~5 years of experience · 3 companies · healthcare and public sector",
    intro: "Robust, scalable business applications, from the initial need to production, with a focus on code quality, architecture and maintainability.",
    readMore: "Read more",
    nav: ["Experience", "Skills", "Education", "Contact"],
    stats: [["~5 yrs", "of experience"], ["3", "companies"], ["4", "business projects"], ["3", "certifications"]],
    role: "<b>Full Stack Java / Angular</b> Developer",
    profile:
      "Full Stack Java / Angular developer with nearly 5 years of experience, I design and build robust, scalable business applications, from understanding the need to going live. Specialised in Java, Spring Boot and Angular, I have worked on projects in demanding environments such as healthcare and the public sector, covering the whole development cycle: design, development, testing, cloud deployment and production monitoring, with a strong focus on code quality, architecture and maintainability.",
    sections: { exp: "Professional experience", skills: "Technical skills", edu: "Education", cert: "Certifications", lang: "Languages" },
    more: "+ Show details",
    jobs: [
      {
        company: "Berger-Levrault", date: "Oct. 2023 — Present", role: "Full Stack Java / Angular Developer", tech: TECH.bl,
        desc: "Corrective and evolutive maintenance of medical activity management applications (pre-admissions) for public and private healthcare facilities — <b>BL.PBO, BL.MEP, BL.SFP</b>.",
        tasks: [
          "Development and maintenance of business applications in the healthcare field",
          "Contribute to the successive upgrades of the technical stack: Angular 16 → 18 → 20 → 22 and Java 17 → 21 → 25",
          "Contribute to architecture choices and development best practices",
          "Suggest continuous improvements to performance and code maintainability",
          "Take part in functional and technical requirements analysis",
          "Perform cross-testing, code reviews and write unit tests to ensure quality",
          "Prepare delivery packages and deploy to acceptance, demo, pre-production and production environments",
          "Provide post-deployment on-call support and monitor application logs",
          "Contribute to continuous improvement of solutions and processes; documentation and automation to gain quality and productivity",
          "Write functional documentation",
          "Work daily with the other teams of the Healthcare BU",
          "Take part in agile ceremonies (daily, sprint review, retrospective, sprint planning)",
        ],
      },
      {
        company: "Inetum", group: "Inetum", groupDate: "Sept. 2021 — Sept. 2023", groupYears: "2 yrs", date: "Mar. 2023 — Sept. 2023", role: "Full Stack Java / Angular Developer", tech: TECH.inetum,
        desc: "Built a web application managing the allocation of work equipment (company vehicles, phones, PCs…) to new employees and its return when they leave — <b>GestMat</b>.",
        tasks: [
          "Take part in agile ceremonies (daily, sprint review, retrospective, sprint planning)",
          "Take part in grooming sessions to size and estimate User Stories",
          "Manage the backlog",
          "Deploy to test and production environments with continuous integration",
          "Set up unit tests",
          "Develop the application (existing evolutions / new features)",
          "Develop REST APIs and the front end",
          "Write specifications and technical documentation",
          "Identify and fix bugs",
          "Review other developers' code",
        ],
      },
      {
        company: "Inetum", group: "Inetum", client: "Rectorat Nancy-Metz", date: "Jan. 2022 — Feb. 2023", role: "IT Consultant", tech: TECH.rect,
        desc: "On assignment at the client, developed an application allowing a student or legal guardian to request exam accommodations — <a href='https://portail.ac-nancy-metz.fr/incluscol/' target='_blank' rel='noopener'><b>Incluscol</b></a>.",
        tasks: [
          "Take over and nationalise the application",
          "Maintain and evolve the application",
          "Attend follow-up and progress meetings with the client's project owner",
          "Identify and fix bugs",
          "Deploy to test and production environments with continuous integration",
          "Develop REST APIs and the front end",
          "Write detailed specifications",
          "Support the qualification and release teams in analysing and tracking issue reports",
          "Prepare and run unit tests",
          "Write technical and functional documentation",
        ],
      },
      {
        company: "Inetum", group: "Inetum", date: "Sept. 2021 — Dec. 2021", role: "Full Stack Java / Angular Developer", tech: TECH.inetum,
        desc: "Built a web application managing the allocation of work equipment (company vehicles, phones, PCs…) to new employees and its return when they leave — <b>GestMat</b>.",
        tasks: [],
      },
      {
        company: "PMB Software", date: "Sept. 2020 — Aug. 2021", role: "Full Stack PHP / Laravel Developer · Apprenticeship", tech: TECH.pmb,
        desc: "Developed applications connecting the stakeholders of a house-building project (builders, craftsmen, staff, owners) — <b>Constéo, Be in Home, Hermès, Visiterre</b>.",
        tasks: [
          "Provide corrective and evolutive maintenance of applications",
          "Design and develop new features",
          "Analyse functional and technical requirements",
          "Develop REST APIs",
          "Develop the front end",
          "Write technical and functional documentation",
          "Follow development best practices",
        ],
      },
    ],
    skills: [
      ["Languages", "Java, TypeScript, JavaScript, HTML5, CSS, SCSS"],
      ["Frameworks", "Spring Boot, Angular, Symfony, Laravel, Bootstrap"],
      ["Libraries / UI", "Angular Material, PrimeNG, RxJS"],
      ["Databases / ORM", "PostgreSQL, MySQL, MariaDB · Hibernate, jOOQ, Doctrine, Eloquent · Flyway"],
      ["API / Web", "REST, SOAP"],
      ["DevOps / Cloud", "Docker, Azure, Jenkins, Ansible, SonarQube"],
      ["Tools", "IntelliJ IDEA, VS Code, WebStorm, PhpStorm, Postman, Git, GitLab, Jira, Confluence, Nexus"],
      ["Methods", "Agile (Scrum), V-model"],
    ],
    education: [
      ["2021", "Master's in Computer Engineering", "Work-study · Université de Lorraine (Metz)"],
      ["2019", "Bachelor's in Computer Science", "Université de Lorraine (Metz)"],
      ["2018", "DEUG in Computer Science", "Université de Lorraine (Metz)"],
    ],
    certifications: [["2023", "Spring Data JPA"], ["2022", "RGAA — Accessibility"], ["2021", "Angular"]],
    languages: [["French", "Fluent"], ["English", "Intermediate"]],
  },
};

// Liens publics (pas d'adresse ni de téléphone sur le site)
const EMAIL = "thierno-diallo18@outlook.fr";
const PHONE = "+33 7 68 34 01 21";
const LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com/in/thierno-mamadoudiallo" },
  { label: "GitHub", href: "https://github.com/thierno18" },
];
const COPY_LABELS = { fr: { copy: "Copier", done: "Copié ✓" }, en: { copy: "Copy", done: "Copied ✓" } };
const CONTACT_LABELS = {
  fr: { email: "E-mail", phone: "Téléphone", place: "Localisation", where: "Saint-Sylvestre-sur-Lot (47)" },
  en: { email: "Email", phone: "Phone", place: "Location", where: "Saint-Sylvestre-sur-Lot, France" },
};

const $ = (id) => document.getElementById(id);

function render(lang) {
  const d = DATA[lang];
  document.documentElement.lang = d.htmlLang;
  document.title = d.title;
  $("badge").textContent = d.badge;
  $("meta").textContent = d.meta;
  $("pdf-link").href = `assets/cv-thierno-diallo-${lang}.pdf`;
  $("pdf-link").querySelector(".full").textContent = lang === "fr" ? "Télécharger le CV" : "Download CV";
  $("more-sum").textContent = d.readMore;
  $("profile-full").textContent = d.profile;
  $("tab-links").innerHTML = ["sec-exp", "sec-skills", "sec-edu", "contact"].map((id, i) => `<a href="#${id}">${d.nav[i]}</a>`).join("");
  $("role").innerHTML = d.role;
  $("profile").textContent = d.intro;
  $("links").innerHTML =
    `<a href="mailto:${EMAIL}">✉ ${EMAIL}</a>` +
    `<button type="button" class="copy" data-copy="${EMAIL}" data-label="${COPY_LABELS[lang].copy}" data-done="${COPY_LABELS[lang].done}">${COPY_LABELS[lang].copy}</button>` +
    `<a href="tel:${PHONE.replace(/\s/g, "")}">☎ ${PHONE}</a>` +
    LINKS.map((l) => `<a href="${l.href}" target="_blank" rel="noopener">${l.label}</a>`).join("") +
    `<span class="loc">${CONTACT_LABELS[lang].where}</span>`;

  const c = CONTACT_LABELS[lang];
  $("t-contact").textContent = "Contact";
  $("contact-list").innerHTML = [
    [c.email, `<a href="mailto:${EMAIL}">${EMAIL}</a> <button type="button" class="copy" data-copy="${EMAIL}" data-label="${COPY_LABELS[lang].copy}" data-done="${COPY_LABELS[lang].done}">${COPY_LABELS[lang].copy}</button>`],
    [c.phone, `<a href="tel:${PHONE.replace(/\s/g, "")}">${PHONE}</a>`],
    ["LinkedIn", `<a href="${LINKS[0].href}" target="_blank" rel="noopener">linkedin.com/in/thierno-mamadoudiallo</a>`],
    ["GitHub", `<a href="${LINKS[1].href}" target="_blank" rel="noopener">github.com/thierno18</a>`],
    [c.place, c.where],
  ].map(([k, v]) => `<li><span>${k}</span>${v}</li>`).join("");

  $("t-exp").textContent = d.sections.exp;
  $("t-skills").textContent = d.sections.skills;
  $("t-edu").textContent = d.sections.edu;
  $("t-cert").textContent = d.sections.cert;
  $("t-lang").textContent = d.sections.lang;

  const body = (j) => `
      <p class="job-role">${j.role}${j.client ? ` <small>· ${j.client}</small>` : ""}</p>
      <p class="job-desc">${j.desc}</p>
      <ul class="chips">${j.tech.map((t) => `<li>${t}</li>`).join("")}</ul>
      ${j.tasks.length ? `<details><summary>${d.more}</summary><ul>${j.tasks.map((t) => `<li>${t}</li>`).join("")}</ul></details>` : ""}`;

  const blocks = [];
  d.jobs.forEach((j) => {
    const last = blocks[blocks.length - 1];
    if (j.group && last && last.group === j.group) last.roles.push(j);
    else blocks.push({ group: j.group, roles: [j], head: j });
  });

  $("experience").innerHTML = blocks
    .map((b) =>
      b.group
        ? `<article class="job">
        <div class="job-head"><h3>${b.group}</h3><span class="date">${b.head.groupDate} · ${b.head.groupYears}</span></div>
        <div class="roles">${b.roles
          .map((r) => `<div class="subrole"><div class="job-head"><span class="role-date">${r.date}</span></div>${body(r)}</div>`)
          .join("")}</div>
      </article>`
        : `<article class="job">
        <div class="job-head"><h3>${b.head.company}</h3><span class="date">${b.head.date}</span></div>${body(b.head)}
      </article>`
    )
    .join("");

  $("skills").innerHTML = d.skills.map(([h, p]) => `<div class="skill"><h3>${h}</h3><p>${p}</p></div>`).join("");
  $("education").innerHTML = d.education.map(([y, t, s]) => `<li><span class="y">${y}</span>${t}<small>${s}</small></li>`).join("");
  $("certifications").innerHTML = d.certifications.map(([y, t]) => `<li><span class="y">${y}</span>${t}</li>`).join("");
  $("languages").innerHTML = d.languages.map(([t, l]) => `<li>${t}<small>${l}</small></li>`).join("");

  document.querySelectorAll(".lang button").forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));
}

function initialLang() {
  const q = new URLSearchParams(location.search).get("lang");
  if (q === "fr" || q === "en") return q;
  try {
    const s = localStorage.getItem("lang");
    if (s === "fr" || s === "en") return s;
  } catch (e) {}
  return navigator.language && navigator.language.startsWith("en") ? "en" : "fr";
}

document.querySelectorAll(".lang button").forEach((b) =>
  b.addEventListener("click", () => {
    render(b.dataset.lang);
    try { localStorage.setItem("lang", b.dataset.lang); } catch (e) {}
  })
);

document.addEventListener("click", async (e) => {
  const b = e.target.closest("[data-copy]");
  if (!b) return;
  const text = b.dataset.copy;
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    const t = document.createElement("textarea");
    t.value = text;
    document.body.appendChild(t);
    t.select();
    document.execCommand("copy");
    t.remove();
  }
  b.textContent = b.dataset.done;
  setTimeout(() => (b.textContent = b.dataset.label), 1500);
});

$("year").textContent = new Date().getFullYear();
render(initialLang());

function openAllDetails() {
  document.querySelectorAll("details").forEach((d) => (d.open = true));
}
window.addEventListener("beforeprint", openAllDetails);
if (new URLSearchParams(location.search).has("print")) openAllDetails();
