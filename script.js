let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");

    // Corrected logic to handle slide index bounds
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    // Remove "active" class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display the current slide
    slides[slideIndex - 1].style.display = "block"; 

    // Highlight the corresponding dot
    dots[slideIndex - 1].className += " active";
}
let matter = document.getElementById("matter");

function updateContent(title, description, image) {
    matter.innerHTML = "";
    let div = document.createElement("div");   
    div.innerHTML = `
        <div class="pack">
            <div class="imghead">
                <img src="${image}"/>
                <h3>${title}</h3>
            </div>
            <p>${description}</p>
        </div>
        <button type="submit">View Statistics</button>
        <button type="submit">Read More</button>
    `;
    matter.appendChild(div);

    let imghead = div.querySelector('.imghead');
    imghead.style.display = "flex";
    div.querySelector('img').style.width = "60px";
    div.querySelector('img').style.height = "60px";
    div.querySelector('img').style.marginRight = "20px";
    div.querySelector('img').style.borderRadius = "18px";
    div.querySelector('img').style.alignSelf = "flex-end";

    div.querySelector('.pack').style.padding = "9px";
    div.style.color = "#232359";
    div.querySelector('p').style.fontSize = "18px";
    div.style.padding = "3px";

    let buttons = div.querySelectorAll('button');
    buttons.forEach(button => {
        button.style.width = "110px";
        button.style.height = "40px";
        button.style.fontSize = "14.5px";
        button.style.margin = "auto 10px ";
        button.style.backgroundColor = "#232359";
        button.style.color = "white";
        button.style.border = "none";
        button.style.borderRadius = "6px";
        button.style.cursor = "pointer";
    });
}

function nptel() {
    updateContent("About NPTEL", "The main objective of the National Programme on Technology Enhanced Learning (NPTEL) is to enhance the quality of engineering & science education in the country by developing contents for undergraduate and postgraduate curricula using video and web based courses.", "Images/nptel.png");
    setActive("nptel");
}

function spoken() {
    updateContent("Spoken Tutorials", "The Spoken Tutorial project is the initiative of the ‘Talk to a Teacher’ activity of the National Mission on Education through Information and Communication Technology (ICT), launched by the Ministry of Human Resources and Development", "Images/spoken.jpg");
    setActive("spoken");
}

function iic() {
    updateContent("Institution’s Innovation Council (IIC)", "To conduct various innovation and entrepreneurship-related activities prescribed by Central MIC in time bound fashion and Organize Hackathons, idea competition, mini-challenges etc. with the involvement of industries.", "Images/iic.jpg");
    setActive("iic");
}

function cisco() {
    updateContent("About CISCO", "CISCO Trainings @ Department of Computer Science & Engineering, MVSR Engineering College, Hyderabad, Telangana.", "Images/cisco.png");
    setActive("cisco");
}

function setActive(activeId) {
   
    let names = document.querySelectorAll('.names');
    names.forEach(name => {
        name.classList.remove('active');
    });

   
    let activeElement = document.getElementById(activeId);
    if (activeElement) {
        activeElement.classList.add('active');
    }
}

window.onload = function() {
    nptel(); 
    document.getElementById('nptel').classList.add('active'); 
};





