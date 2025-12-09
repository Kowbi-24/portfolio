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


const observer = new IntersectionObserver(handleIntersection, options);

const allH1s = document.querySelectorAll('h1'); 
const allContentWrappers = document.querySelectorAll('.content-wrapper'); 


const elementsToObserve = [
    ...allH1s, 
    ...allContentWrappers
];

elementsToObserve.forEach(element => {
    observer.observe(element);
});