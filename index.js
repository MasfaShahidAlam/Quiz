var data= [
    {
        "qs": "Q1. What is full form of HTML",
        "options":[
            "Hyper Text Markup Language",
            "Hydra Title Markup Language",
            "Hyper tag Markup Language"
            
        ],
        "answerId": "Hyper Text Markup Language"
    },

    {
        "qs": "Q1. What is full form of HTML",
        "options":[
            "Hyper Text Markup Language",
            "Hydra Title Markup Language",
            "Hyper tag Markup Language"
            
        ],
        "answerId": "Hyper Text Markup Language"
    },

]


let questionNo = 0;
let score = 0;
let question_title = document.getElementById('question-title');
let option_list = document.getElementById('option-list');
let score_area = document.getElementById('score-area');
let btn_submit = document.getElementById('submit');
let start = document.getElementById('start');
let back = document.getElementById('back');
// 

hideItem('question_title');
hideItem('option_list');
hideItem('score_area');
hideItem('btn_submit');
hideItem('start');





function hideItem(element){
    element.style.display = "none";

}

function show(element)
element.style.display = "block";




