function convertToUpper() {
    const inputText = document.getElementById("inputText").value;
    document.getElementById("outputText").innerText = inputText.toUpperCase();
  }
  
  function convertToLower() {
    const inputText = document.getElementById("inputText").value;
    document.getElementById("outputText").innerText = inputText.toLowerCase();
  }
  
  function copyOutput() {
    const outputText = document.getElementById("outputText").innerText;
    navigator.clipboard.writeText(outputText).then(() => {
      alert("Output text copied to clipboard!");
      
    });
  }
  