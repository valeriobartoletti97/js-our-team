"use strict";

const team =[
    {
        name:'Wayne Barnett',
        role: 'Founder & CEO',
        picture: 'img/wayne-barnett-founder-ceo.jpg'
    },
    {
        name:'Angela Carroll',
        role: 'Chief Editor',
        picture: 'img/angela-caroll-chief-editor.jpg'
    },
    {
        name:'Walter Gordon',
        role: 'Office Manager',
        picture: 'img/walter-gordon-office-manager.jpg'
    },
    {
        name:'Angela Lopez',
        role: 'Social Media Manager',
        picture: 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        name:'Scott Estrada',
        role: 'Developer',
        picture: 'img/scott-estrada-developer.jpg'
    },
    {
        name:'Barbara Ramos',
        role: 'Graphic Designer',
        picture: 'img/barbara-ramos-graphic-designer.jpg'
    },
];

/* stampo proprietà di ogni oggetto */
team.forEach((element)=>{
    console.log(element.name,element.role,element.picture);
});

/* appendo le card nel container */
const cardContainer = document.getElementById('card-container');
for (let i = 0; i < team.length; i++) {
    cardContainer.append(teamMember(team[i]));
};

/* funzione genera-card */
function teamMember(element) {
    const teamMember = document.createElement('div');
    teamMember.classList.add('col-4');
    teamMember.classList.add('mb-3');
    
    let template =`
    <div class="card">
        <img src='${element.picture}' alt="${element.name}">
        <div class="card-body text-center">
            <h3 class="card-title">${element.name}</h3>
            <div class="card-text">
                ${element.role}
            </div>
        </div>
    </div> 
    `;
    teamMember.innerHTML = template;
    return teamMember;
};