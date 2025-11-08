welcomeMessage();

function welcomeMessage() {
  let name = prompt("Please enter your name: ");

  if (name != null) {
    document.getElementById("welcome-speech").innerHTML =
      "Hello " + name + ", Welcome to My Porto ";
    // console.log('Hello ' + name + ', welcome to Chriz Company! ')
  }

  const form = document.getElementById("message-form");
  const output = document.getElementById("output");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // mencegah reload halaman

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    output.innerHTML = `
      <h3 class="font-bold text-lg mb-2">Message</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;

    form.reset(); // optional: mengosongkan form setelah submit
  });
}
