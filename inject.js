var blacklistCountry = ["India", "Nigeria", "Bangladesh", "Pakistan", "Nepal"];

function removeBadJobs() {
  document.querySelectorAll("strong.text-muted").forEach((el) => {
    if (el.innerText === "Payment unverified") {
      el.closest(".up-card-section").remove();
    }
  });

  document
    .querySelectorAll('[data-test="client-country"] strong')
    .forEach((el) => {
      if (blacklistCountry.includes(el.innerText)) {
        el.closest(".up-card-section").remove();
      }
    });
}

setInterval(() => {
  removeBadJobs();
}, 2000);
