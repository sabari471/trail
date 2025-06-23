import './App.css';

function App() {
  const handleSubmit = () => {
    const name = document.getElementById("nameInput").value.trim();
    const age = document.getElementById("ageInput").value.trim();
    const email = document.getElementById("emailInput").value.trim();
    const file = document.getElementById("fileInput").value.trim();

    if (name && age && email && file) {
      document.getElementById("output").innerText =
        `✅ Successfully submitted!\n Hello ${name}, thank you for your submission!`;
    } else {
      alert("❌ Please include all required info asked above");
    }
  };

  return (
    <div className="App">
      <h1 className="head">ENTER YOUR INFORMATION</h1>

      <h4 className="n">NAME:</h4>
      <input type="text" id="nameInput" placeholder="Type your name here" /><br />

      <h4 className="n">AGE:</h4>
      <input type="number" id="ageInput" placeholder="Enter your age here" /><br />

      <h4 className="n">E-MAIL:</h4>
      <input type="email" id="emailInput" placeholder="Enter your email here" /><br />

      <h4 className="n">FILE:</h4>
      <input type="file" id="fileInput" /><br />

      <button id="btn" onClick={handleSubmit}>Submit</button>

      <p id="output"></p>
    </div>
  );
}

export default App;
