let testimonialIndex = 0;
showTestmonials(testimonialIndex);

function nextTestimonial(n) {
    showTestmonials(testimonialIndex += n);
}

function showTestmonials(n) {
    
    let testimonials = document.getElementsByClassName("testimonials");

    if (n > testimonials.length) {testimonialIndex = 1}    
    if (n < 1) {testimonialIndex = testimonials.length}
    for (let i = 0; i < testimonials.length; i++) {
        testimonials[i].classList.remove("hide");  
    }

    testimonials[testimonialIndex-1].classList.add("hide");  
}