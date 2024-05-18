function navigateTo(event, sectionId) {
    event.preventDefault();
    showSection(sectionId);
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

function handleSubmit(event) {
    event.preventDefault();
    const form = document.getElementById('contactForm');
    const thankYouMessage = document.getElementById('thankYouMessage');
    
    form.style.display = 'none';
    thankYouMessage.style.display = 'block';
}
