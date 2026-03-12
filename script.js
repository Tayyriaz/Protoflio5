// Navigation toggle for mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    }
});

// Project demo modal
const projectData = {
    'feedback-pipeline': {
        title: 'Feedback-to-Fine-Tuning Pipeline',
        description: `
            <p>Complete end-to-end ML pipeline that transforms user feedback into production-ready fine-tuned models.</p>
            <h4>Features:</h4>
            <ul style="margin: 1rem 0; padding-left: 1.5rem;">
                <li>Automated feedback ingestion and data preparation</li>
                <li>Fine-tuning using OpenAI API</li>
                <li>Automated evaluation and benchmarking</li>
                <li>Promotion gates for deployment decisions</li>
                <li>Complete web UI for interaction</li>
            </ul>
            <p><strong>Tech Stack:</strong> Python, FastAPI, OpenAI API, SQLite, HTML/JS</p>
        `,
        demoLink: 'https://feedback-finetuning-pipeline.vercel.app'
    },
    'healthcare-chatbot': {
        title: 'Healthcare AI Chatbot',
        description: `
            <p>Production healthcare AI assistant with real-time feedback collection and continuous improvement.</p>
            <h4>Features:</h4>
            <ul style="margin: 1rem 0; padding-left: 1.5rem;">
                <li>Medical accuracy validation</li>
                <li>Preference learning from user feedback</li>
                <li>RLHF implementation</li>
                <li>Real-time conversation handling</li>
            </ul>
            <p><strong>Tech Stack:</strong> Python, LLM, RLHF, FastAPI</p>
        `,
        demoLink: '#'
    },
    'evaluation-system': {
        title: 'Automated Model Evaluation System',
        description: `
            <p>Comprehensive evaluation framework for comparing fine-tuned models against baselines.</p>
            <h4>Features:</h4>
            <ul style="margin: 1rem 0; padding-left: 1.5rem;">
                <li>Automated benchmarking</li>
                <li>Multiple quality metrics</li>
                <li>Baseline comparison</li>
                <li>Deployment decision logic</li>
            </ul>
            <p><strong>Tech Stack:</strong> Python, Evaluation Metrics, MLOps</p>
        `,
        demoLink: '#'
    },
    'finetuning-platform': {
        title: 'LLM Fine-Tuning Platform',
        description: `
            <p>Complete platform for fine-tuning LLMs with preference data and deployment workflows.</p>
            <h4>Features:</h4>
            <ul style="margin: 1rem 0; padding-left: 1.5rem;">
                <li>DPO and RLHF support</li>
                <li>OpenAI fine-tuning API integration</li>
                <li>Data preparation pipelines</li>
                <li>Automated training workflows</li>
            </ul>
            <p><strong>Tech Stack:</strong> Python, OpenAI API, DPO, RLHF</p>
        `,
        demoLink: '#'
    }
};

function openProjectDemo(projectId) {
    const modal = document.getElementById('projectModal');
    const project = projectData[projectId];
    
    if (project) {
        document.getElementById('modalTitle').textContent = project.title;
        document.getElementById('modalDescription').innerHTML = project.description;
        document.getElementById('modalDemoLink').href = project.demoLink;
        modal.style.display = 'block';
    }
}

function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('projectModal');
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const name = e.target.querySelector('input[type="text"]').value;
    const email = e.target.querySelector('input[type="email"]').value;
    const message = e.target.querySelector('textarea').value;
    
    // Simulate form submission
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    e.target.reset();
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all project cards and skill categories
document.querySelectorAll('.project-card, .skill-category').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Add active state to navigation links based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add typing effect to hero title (optional enhancement)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Performance optimization: Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}
