document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  var name = document.getElementById("name").value.trim();
  var mobile = document.getElementById("mobile").value.trim();
  var qty = parseInt(document.getElementById("qty").value, 10);
  var ok = true;

  if (name === "") {
    document.getElementById("nameError").textContent = "Please enter your name.";
    ok = false;
  }

  if (mobile.length !== 11) {
    document.getElementById("mobileError").textContent = "Please enter a valid mobile number.";
    ok = false;
  }

  if (qty < 0) {
    document.getElementById("qtyError").textContent = "Quantity must be at least 1.";
    ok = false;
  }

  if (ok) {
    document.getElementById("result").textContent = "Thank you, " + name + "! Your order is received.";
  }
});
