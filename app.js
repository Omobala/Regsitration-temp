// declaring variables
let Studcheck, Nstudcheck;

Studcheck = document.querySelector("#stud-check");
Nstudcheck = document.querySelector("#Nstud-check");

//adding a click function to the student checkbox and non-student checkbox

Studcheck.addEventListener('change', () => {
    if(Studcheck.checked){
        let Studform = document.querySelector('.stud-form'),
            Nstudform = document.querySelector('.Nstud-form');
        Studform.style.display = "block";
        Nstudform.style.display = "none";
        Nstudcheck.checked = false;

    }else{
        let Studform = document.querySelector('.stud-form');
        Studform.style.display = "none";
    }
});

Nstudcheck.addEventListener('change', () => {
    if(Nstudcheck.checked){
        let Nstudform = document.querySelector('.Nstud-form'),
            Studform = document.querySelector('.stud-form');
        Nstudform.style.display = "block";
        Studform.style.display = "none";
        Studcheck.checked = false;
    }else{
        let Nstudform = document.querySelector('.Nstud-form');
        Nstudform.style.display = "none";
    }
});

let angleDown = document.querySelector('#angleDown1'),
    angleUp = document.querySelector('#angleUp1'),
    angle2Down = document.querySelector('#angleDown2'),
    angle3Down = document.querySelector('#angleDown3'),
    angle4Down = document.querySelector('#angleDown4'),
    angle2Up = document.querySelector('#angleUp2'),
    angle3Up = document.querySelector('#angleUp3'),
    angle4Up = document.querySelector('#angleUp4');
angleDown.addEventListener('click', () => {
    if(angleDown){
        const bizName = document.querySelector('#bizName');
        bizName.style.display = "block";
        angleUp.style.display = "block";
        angleDown.style.display = "none";
    } 
});

angleUp.addEventListener('click', () => {
    if(angleUp){
        const bizName = document.querySelector('#bizName');
        bizName.style.display = "none";
        angleUp.style.display = "none";
        angleDown.style.display = "block"; 
    } 
});

angle2Down.addEventListener('click', () => {
    if(angle2Down){
        const address = document.querySelector('#address');
        address.style.display = "block";
        angle2Up.style.display = "block";
        angle2Down.style.display = "none";
    } 
});

angle2Up.addEventListener('click', () => {
    if(angle2Up){
        const address = document.querySelector('#address');
        address.style.display = "none";
        angle2Up.style.display = "none";
        angle2Down.style.display = "block"; 
    } 
});

angle3Down.addEventListener('click', () => {
    if(angle3Down){
        const workName = document.querySelector('#workName');
        workName.style.display = "block";
        angle3Up.style.display = "block";
        angle3Down.style.display = "none";
    } 
});

angle3Up.addEventListener('click', () => {
    if(angle3Up){
        const workName = document.querySelector('#workName');
        workName.style.display = "none";
        angle3Up.style.display = "none";
        angle3Down.style.display = "block"; 
    } 
});

angle4Down.addEventListener('click', () => {
    if(angle4Down){
        const Waddress = document.querySelector('#Waddress');
        Waddress.style.display = "block";
        angle4Up.style.display = "block";
        angle4Down.style.display = "none";
    } 
});

angle4Up.addEventListener('click', () => {
    if(angle4Up){
        const workName = document.querySelector('#Waddress');
        Waddress.style.display = "none";
        angle4Up.style.display = "none";
        angle4Down.style.display = "block"; 
    } 
});

let agreeTerms = document.querySelector('#agreeTerms'),
    regNow = document.querySelector('#regNow');

agreeTerms.addEventListener('change', () => {
    if(agreeTerms.checked){
        regNow.style.cursor = "pointer";
        regNow.style.backgroundColor = "orange";
    }else {
        regNow.style.cursor = "not-allowed";
        regNow.style.backgroundColor = "gray";
    }
})

regNow.addEventListener('click', () => {
    if(regNow){
        let popup = document.querySelector('.popup'),
            confirm = document.querySelector('#confirm');
        popup.style.display = "block";
        confirm.addEventListener('click', (e) => {
            e.target.parentElement.parentElement.removeChild(popup);
        })
    }
})
