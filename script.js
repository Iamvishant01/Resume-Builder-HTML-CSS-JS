function generateResume() {
    // Get input values and display them in the resume preview
    document.getElementById('display-name').textContent = document.getElementById('name').value;
    document.getElementById('display-email').textContent = `Email: ${document.getElementById('email').value}`;
    document.getElementById('display-phone').textContent = `Phone: ${document.getElementById('phone').value}`;
    document.getElementById('display-summary').textContent = document.getElementById('summary').value;
    document.getElementById('display-experience').textContent = document.getElementById('experience').value;
    document.getElementById('display-skills').textContent = document.getElementById('skills').value;
}

function downloadResume() {
    // Get the resume content
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Add content to PDF
    doc.text(20, 20, document.getElementById('display-name').textContent);
    doc.text(20, 30, document.getElementById('display-email').textContent);
    doc.text(20, 40, document.getElementById('display-phone').textContent);
    doc.text(20, 50, "Professional Summary:");
    doc.text(20, 60, document.getElementById('display-summary').textContent);
    doc.text(20, 70, "Work Experience:");
    doc.text(20, 80, document.getElementById('display-experience').textContent);
    doc.text(20, 90, "Skills:");
    doc.text(20, 100, document.getElementById('display-skills').textContent);

    // Save the PDF
    doc.save(name + 'resume.pdf');
}
