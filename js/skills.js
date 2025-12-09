// skills.js

const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } 

        else {
            entry.target.classList.remove('visible');
        }
    });
    
};

// Configuration for the observer
const options = {
    root: null, 
    rootMargin: '0px 0px -300px 0px', 
    threshold: 0.0 
};

// Create a new Intersection Observer instance
const observer = new IntersectionObserver(handleIntersection, options);



const h1Element = document.querySelector('h1'); 
const contentWrapper = document.querySelector('.content-wrapper'); 

const elementsToObserve = [];

if (h1Element) {
    elementsToObserve.push(h1Element);
}

if (contentWrapper) {
    elementsToObserve.push(contentWrapper);
}

elementsToObserve.forEach(element => {
    observer.observe(element);
});