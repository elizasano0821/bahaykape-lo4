/* Environment setting. Test builds show a banner. */
var APP_ENV = "test";

document.addEventListener("DOMContentLoaded", function () {
  if (APP_ENV === "test") {
    var banner = document.createElement("div");
    banner.className = "env-banner";
    banner.textContent = "TEST ENVIRONMENT - not the live site";
    document.body.insertBefore(banner, document.body.firstChild);
  }
});
