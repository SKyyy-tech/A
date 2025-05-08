
const hamburger = document.getElementById("hamburger")
const navlinks = document.getElementById("navlinks")

hamburger.addEventListener('click',() => {
    navlinks.classList.toggle('active');
});



const text = "Hello Amigos, I'm Steve";
const typedText = document.getElementById('h-0');
let index = 0;

function type(){
    if(index < text.length){
       typedText.textContent += text.charAt(index);
       index++;
       setTimeout(type, 150);
    }
}
type();



const projects = [

    {
     image: "H.jpg",
     title: "Animated navbar",
     description: "A responsive navigation bar with smooth animation and uniques design"
    },
    {
     image: "Cheese.jpg",
     title: "HTML CSS",
     description: "A responsive navigation bar with smooth animation and uniques design"
    },
    {
     image: "Ham.jpg",
     title: "Animated UI",
     description: "A responsive navigation bar with smooth animation and uniques design"
    }
    
]

const container = document.getElementById("project-container");

projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-1";
    card.innerHTML = `
       <img src="${project.image}" alt="${project.title}" />
       <h3>${project.title}</h3>
       <p>${project.description}</p>
    `;
    container.appendChild(card);
});


const services = [

    {
       image : "Cucumber.jpg",
       title : "HTML",
       description: "HTML short for HyperText Markup Langauges"
    },
    {
        image : "Nuke.jpg",
        title : "CSS",
        description :"CSS short for Cascading Style Sheet"
    },
    {
        image : "Cheese.jpg",
        title : "JS",
        description : "JS short for Java Script"
    }
]


const s_container = document.getElementById("Services_container");

 services.forEach(service => {
    const s_card = document.createElement("div");
    s_card.className = "s-1";
    s_card.innerHTMl =`
        <img src="${service.image}" alt="${service.title}" />
        <h3>${service.title}</h3>
        <p>${service.description}</p>
    `;
    s_container.appendChild(s_card);
 });