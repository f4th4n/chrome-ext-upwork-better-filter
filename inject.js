var blacklistCountry = [];

function removeBadJobs() {
  document.querySelectorAll("strong.text-muted").forEach((el) => {
    if (el.innerText === "Payment unverified") {
      if (el.closest(".up-card-section")) {
        el.closest(".up-card-section").remove();
      }
    }
  });

  document
    .querySelectorAll('[data-test="client-country"] strong')
    .forEach((el) => {
      if (blacklistCountry.includes(el.innerText)) {
        if (el.closest(".up-card-section")) {
          el.closest(".up-card-section").remove();
        }
      }
    });

  // https://www.upwork.com/ab/jobs/search
  document.querySelectorAll(".glyphicon.air-icon-unverified").forEach((el) => {
    if (el.closest("section.job-tile")) {
      el.closest("section.job-tile").remove();
    }
  });

  document.querySelectorAll("strong.client-location").forEach((el) => {
    if (blacklistCountry.includes(el.innerText)) {
      if (el.closest("section.job-tile")) {
        el.closest("section.job-tile").remove();
      }
    }
  });
}

setInterval(() => {
  removeBadJobs();
}, 2000);
