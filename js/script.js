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