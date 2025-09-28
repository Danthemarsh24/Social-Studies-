function showSection(sectionId) {
    document.querySelectorAll('main section').forEach(
        sec => sec.className = 'hidden'
    );
    document.getElementById(sectionId).className = 'visible';
}

function sendMessage() {
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();
    const resultDiv = document.getElementById('formResult');
    if (name && message) {
        resultDiv.textContent = `Thanks, ${name}! Your message has been sent.`;
        document.getElementById('name').value = '';
        document.getElementById('message').value = '';
    } else {
        resultDiv.textContent = 'Please fill out all fields.';
    }
    return false; // Prevent actual form submission
}