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
    'options-scraper': {
        title: 'Financial Options Data Scraper',
        description: `
            <p>Python scraper for historical interest rate options data from CME DataMine.</p>
            <h4>Features:</h4>
            <ul style="margin: 1rem 0; padding-left: 1.5rem;">
                <li>Extracts Friday settlement data only</li>
                <li>Supports multiple symbols (ZN, ZT, ZF, ZB, ZQ, SR3)</li>
                <li>Full options chains with all strikes</li>
                <li>Calculates horizon buckets (Q0-Q6)</li>
                <li>5+ years of historical data (Jan 2021+)</li>
                <li>Progress saving and error handling</li>
                <li>Data validation and quality checks</li>
            </ul>
            <p><strong>Tech Stack:</strong> Python, Pandas, Requests, Web Scraping</p>
            <p><strong>Data Fields:</strong> ticker, trade_date, expiration_date, option_type, strike_price, settlement_price, underlying_futures_settle, days_to_expiry, horizon_bucket</p>
        `,
        demoLink: '#'
    },
    'data-collection': {
        title: 'Historical Data Collection System',
        description: `
            <p>Automated system for collecting and processing historical financial data.</p>
            <h4>Features:</h4>
            <ul style="margin: 1rem 0; padding-left: 1.5rem;">
                <li>Large-scale data scraping</li>
                <li>Progress tracking and resume capability</li>
                <li>Error handling and retry logic</li>
                <li>Data validation and quality checks</li>
                <li>One-time bulk downloads</li>
                <li>Multiple data source support</li>
            </ul>
            <p><strong>Tech Stack:</strong> Python, Web Scraping, Data Processing</p>
        `,
        demoLink: '#'
    },
    'data-analysis': {
        title: 'Comprehensive Data Analysis Tool',
        description: `
            <p>Complete Python data analysis solution using Pandas and Matplotlib for data cleaning, analysis, and visualization.</p>
            <h4>Features:</h4>
            <ul style="margin: 1rem 0; padding-left: 1.5rem;">
                <li>Data loading and exploration</li>
                <li>Automated data cleaning (missing values, duplicates, outliers)</li>
                <li>Statistical analysis and summaries</li>
                <li>Beautiful visualizations with Matplotlib</li>
                <li>Automated report generation</li>
            </ul>
            <p><strong>Tech Stack:</strong> Python, Pandas, Matplotlib, Seaborn, NumPy</p>
        `,
        demoLink: '#'
    },
    'sales-dashboard': {
        title: 'Sales Data Dashboard',
        description: `
            <p>Interactive sales analytics dashboard with time series analysis and performance metrics.</p>
            <h4>Features:</h4>
            <ul style="margin: 1rem 0; padding-left: 1.5rem;">
                <li>Time series analysis</li>
                <li>Regional performance metrics</li>
                <li>Product category insights</li>
                <li>Correlation analysis</li>
                <li>Publication-ready visualizations</li>
            </ul>
            <p><strong>Tech Stack:</strong> Python, Pandas, Matplotlib, Data Analysis</p>
        `,
        demoLink: '#'
    },
    'customer-analysis': {
        title: 'Customer Behavior Analysis',
        description: `
            <p>Deep dive into customer data with correlation analysis and segmentation.</p>
            <h4>Features:</h4>
            <ul style="margin: 1rem 0; padding-left: 1.5rem;">
                <li>Data cleaning and validation</li>
                <li>Statistical summaries</li>
                <li>Correlation analysis</li>
                <li>Customer segmentation</li>
                <li>Trend identification</li>
            </ul>
            <p><strong>Tech Stack:</strong> Python, Pandas, Seaborn, Analytics</p>
        `,
        demoLink: '#'
    },
    'financial-analyzer': {
        title: 'Financial Data Analyzer',
        description: `
            <p>Advanced financial data analysis with time series forecasting and risk analysis.</p>
            <h4>Features:</h4>
            <ul style="margin: 1rem 0; padding-left: 1.5rem;">
                <li>Large dataset processing</li>
                <li>Time series analysis</li>
                <li>Performance metrics</li>
                <li>Risk analysis</li>
                <li>Publication-ready charts</li>
            </ul>
            <p><strong>Tech Stack:</strong> Python, Pandas, Matplotlib, Finance Analytics</p>
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
