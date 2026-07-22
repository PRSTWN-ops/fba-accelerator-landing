const config = window.FBA_ACCELERATOR_CONFIG || {};
const checkoutUrl = String(config.whopCheckoutUrl || "").trim();

document.querySelectorAll(".checkout-link").forEach((link) => {
  if (checkoutUrl) {
    link.href = checkoutUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    return;
  }

  link.addEventListener("click", (event) => {
    if (link.getAttribute("href") === "#checkout") return;
    event.preventDefault();
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
