const githubConfig = {
  profileUrl: "https://github.com/Susmitha967",
  projects: [
    "social-media-aggregator",
    "-VOIS_AICTE_Oct2025_MajorProject_SUSMITHA",
    "-VOIS_AICTE_Oct2025_SUSMITHA"
  ]
};

function setYear() {
  const yearNode = document.getElementById("year");
  if (yearNode) yearNode.textContent = new Date().getFullYear();
}

function setupGithubLinks() {
  const profileLink = document.getElementById("githubProfileLink");
  if (profileLink) {
    profileLink.href = githubConfig.profileUrl;
  }

  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card, index) => {
    const fallbackRepo = githubConfig.projects[index] || "";
    const repoPath = card.getAttribute("data-repo") || fallbackRepo;
    const repoUrl = `${githubConfig.profileUrl}/${repoPath}`;
    const linkButton = card.querySelector(".project-link");

    const openRepo = () => {
      if (repoPath.trim()) {
        window.open(repoUrl, "_blank", "noopener,noreferrer");
      }
    };

    linkButton?.addEventListener("click", (event) => {
      event.stopPropagation();
      openRepo();
    });
  });
}

function setupRevealAnimation() {
  const revealNodes = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealNodes.forEach((node) => observer.observe(node));
}

function setupSkillsCertificationSwitch() {
  const switchButtons = document.querySelectorAll(".switch-btn");
  const switchPanels = document.querySelectorAll(".switch-panel");

  switchButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      if (!targetId) return;

      switchButtons.forEach((btn) => btn.classList.remove("active"));
      switchPanels.forEach((panel) => panel.classList.remove("active"));

      button.classList.add("active");
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) targetPanel.classList.add("active");
    });
  });
}

function setupCertModal() {
  const modal = document.getElementById("certModal");
  const modalImage = document.getElementById("certModalImage");
  const closeBtn = modal?.querySelector(".cert-modal-close");
  const backdrop = modal?.querySelector(".cert-modal-backdrop");

  function closeModal() {
    if (!modal || !modalImage) return;
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
    modalImage.removeAttribute("src");
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".cert-view-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const certSrc = button.getAttribute("data-cert");
      if (!certSrc || !modal || !modalImage) return;

      modalImage.src = certSrc;
      modalImage.alt = button.closest(".cert-card")?.querySelector("h4")?.textContent || "Certificate";
      modal.classList.remove("hidden");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    });
  });

  closeBtn?.addEventListener("click", closeModal);
  backdrop?.addEventListener("click", closeModal);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });
}

function initPortfolio() {
  setYear();
  setupGithubLinks();
  setupRevealAnimation();
  setupSkillsCertificationSwitch();
  setupCertModal();
}

document.addEventListener("DOMContentLoaded", initPortfolio);
