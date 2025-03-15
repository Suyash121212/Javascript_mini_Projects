// Project data
const projectsData = [
    {
        id: 1,
        title: "Calculator App",
        description: "A fully functional calculator with basic and advanced operations. This app uses vanilla JavaScript to perform calculations in real-time with a clean and intuitive interface.",
        
        features: [
            " Basic arithmetic operations (Addition, Subtraction, Multiplication, Division)",
            "Clear and reset options",
            
            "Responsive design"
        ],
        technologies: ["JavaScript", "CSS", "HTML", "Math.js"],
        link: "calculator/calculator.html"
    },
    {
        id: 2,
        title: "Weather Dashboard",
        description: "Real-time weather information using API integration. This application fetches current weather data and forecasts for any location worldwide.",
        image: "https://via.placeholder.com/400x300",
        features: [
            "Current weather conditions",
            "5-day forecast",
            "Location search",
            "Geolocation support"
        ],
        technologies: ["JavaScript", "API", "JSON", "Fetch", "LocalStorage"],
        link: "weather_web/weather_web/weather.html"
    },
    {
        id: 3,
        title: "Todo List",
        description: "A dynamic todo list with local storage functionality. Keep track of your tasks with this simple yet powerful task management app.",
        image: "https://via.placeholder.com/400x300",
        features: [
            "Add, edit, and delete tasks",
            "Mark tasks as complete",
            "Filter by status",
            "Persistent storage"
        ],
        technologies: ["JavaScript", "LocalStorage", "DOM", "CSS"],
        link: "todolist/todolist.html"
    },
    {
        id: 4,
        title: "Notes App",
        description: "Custom Note making app with basic functionality",
        image: "https://via.placeholder.com/400x300",
        features: [
            "Quick note creation",
            "Note editing",
            "Note deletion",
            "Responsive design"

        ],
        technologies: ["JavaScript", "CSS", "HTML5"],
        link: "notes_app/index.html"
    },
    {
        id: 5,
        title: "Password Generator",
        description: "Secure password generation with customizable options. Create strong and unique passwords with this easy-to-use password generator.",
        // description: "Interactive quiz application with score tracking. Test your knowledge across various categories with this engaging quiz app.",
        image: "https://via.placeholder.com/400x300",
        features: [
            "Custom password length",
            "Character type selection",
            "Copy to clipboard",
            "Secure password generation"
        ],
        technologies: ["JavaScript", "HTML", "CSS", "JSON"],
        link: "password_generator/password generator/index.html"
    },
    {
        id: 6,
        title: "QR Code Generator",
        description: "Generate QR codes for URLs, text, and contact information. Share information quickly and easily with this QR code generator.",
        // description: "Client-side form validation with custom error messages. Ensure data integrity with this comprehensive form validation library.",
        image: "https://via.placeholder.com/400x300",
        features: [
            "URL, text, and contact QR codes",
            "Custom QR code colors",
            "Downloadable QR codes",
            "Responsive design"

        ],
        technologies: ["JavaScript", "DOM", "CSS"],
        link: "QR_Code_generator/index.html"
    },
    {
        id: 7,
        title: "Quote Generator",
        description: "Quote generator with custom themes and animations. Get inspired with this dynamic quote generator that changes themes with every quote.",
        image: "https://via.placeholder.com/400x300",
        features: [
           "Random quote generation",

        ],
        technologies: ["JavaScript", "CSS", "Animations", "HTML"],
        link: "quote_generator/index.html"
    },
    {
        id: 8,
        title: "Age Calculator",
        description: "Age Calculator with Entering the date of birth and getting the age of the person",
        image: "https://via.placeholder.com/400x300",
        features: [
            "Enter the date of birth",
            "Get the age of the person",
            "Responsive design",

            
        ],
        technologies: ["JavaScript","HTML", "CSS"],
        link: "age calculator/index.html"
    },
    {
        id: 9,
        title: "Currency Converter",
        description:"Currency Converter with API integration",
        image: "https://via.placeholder.com/400x300",
        features: [
            " Currency conversion",
            "API integration",
            "Responsive design",
            "Real-time data"
        ],
        technologies: ["JavaScript", "API", "Async/Await", "Fetch"],
        link: "API/currency_converter.html"
    }
];

// DOM Elements
const projectLinks = document.querySelectorAll('.project-link');
const modal = document.getElementById('projectModal');
const modalTitle = document.querySelector('.modal-title');
const modalDescription = document.querySelector('.modal-description');
const modalImage = document.querySelector('.modal-image');
const modalFeatures = document.querySelector('.modal-features');
const modalTech = document.querySelector('.modal-tech');
const modalVisitBtn = document.querySelector('.modal-visit-btn');
const modalCloseBtn = document.querySelector('.modal-close');
const counters = document.querySelectorAll('.counter');
const projectCards = document.querySelectorAll('.project-card');

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    // Start counter animations
    startCounters();
    
    // Initialize scroll animations
    initScrollAnimations();
});

// Scroll animations
function initScrollAnimations() {
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

// Counter animations
function startCounters() {
    counters.forEach(counter => {
        const target = +counter.dataset.target;
        const increment = target / 100;
        
        const updateCounter = () => {
            const count = +counter.innerText;
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCounter, 15);
            } else {
                counter.innerText = target;
            }
        };
        
        updateCounter();
    });
}

// Event Listeners for project links
projectLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = +link.dataset.project;
        const project = projectsData.find(p => p.id === projectId);
        
        // Update modal content
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        modalImage.src = project.image;
        modalImage.alt = project.title;
        modalVisitBtn.href = project.link;
        
        // Clear and update features list
        modalFeatures.innerHTML = '';
        project.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            modalFeatures.appendChild(li);
        });
        
        // Clear and update technologies
        modalTech.innerHTML = '';
        project.technologies.forEach(tech => {
            const span = document.createElement('span');
            span.className = 'project-tag';
            span.textContent = tech;
            modalTech.appendChild(span);
        });
        
        // Show modal
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    });
});

// Close modal
modalCloseBtn.addEventListener('click', () => {
    modal.classList.remove('show');
    document.body.style.overflow = '';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
});

// Complete the remaining CSS animations
document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    
    projectCards.forEach(card => {
        const cardPosition = card.offsetTop + card.offsetHeight / 2;
        
        if (scrollPosition > cardPosition) {
            card.style.transform = 'translateY(0)';
            card.style.opacity = '1';
        }
    });
});

// Adding a little extra flair with cursor effects
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        const speed = 0.03 + (index * 0.01);
        const x = (window.innerWidth - mouseX * speed) / 100;
        const y = (window.innerHeight - mouseY * speed) / 100;
        
        shape.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Add a simple page loader
window.addEventListener('load', () => {
    // Apply staggered animations to project cards
    projectCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
        }, 100 * index);
    });
});