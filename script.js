const downloadButton = document.getElementById("download");
downloadButton.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "files/sodium_api_forge.bat"; // relative path to your file
    link.download = "sodium_api_forge.bat";   // suggested filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});