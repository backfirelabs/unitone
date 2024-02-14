// Wait for the DOM to fully load before running the script.
document.addEventListener("DOMContentLoaded", () => {
  // Get the button element from the document by its ID and store it in a variable.
  const button = document.getElementById("greetButton");

  // Add an event listener to the button that listens for click events.
  button.addEventListener("click", () => {
    // When the button is clicked, retrieve the value from the input field by its ID.
    const name = document.getElementById("nameInput").value;

    // Initialize an empty string to build the greeting message.
    let greeting = "";

    // Use a for loop to repeat the greeting message three times.
    for (let i = 0; i < 3; i++) {
      // For each iteration of the loop, append a greeting message to the 'greeting' string.
      // Include a <br> tag at the end of each greeting to create a new line in HTML.
      greeting += `Hello, ${name}! Welcome to the Unit 1 Project.<br>`;
    }

    // Select the element where the greeting will be displayed by its ID.
    // Use innerHTML to set its content, which allows the <br> tags to be interpreted as HTML,
    // thus displaying each greeting on a new line.
    document.getElementById("greeting").innerHTML = greeting;
  });
});
