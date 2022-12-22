const imageOut = document.getElementById('images');
firstImageOutput();

document.getElementById('Apply').addEventListener('click', ()=>{
    let data = document.getElementById('listOfImages').value;
    switch(data) {
        case "image_1":
            Clear();
            firstImageOutput();
                break;
        case "image_2":
            Clear();
            secondImageOutput();
                break;
        case "image_3":
            Clear();
            thirdImageOutput();
                break;
        case "image_4":
            Clear();
            fourthImageOutput();
                break;
        case "image_5":
            Clear();
            fifthImageOutput();
                break;
        default:
            Clear();
            document.getElementById('default').innerHTML = "Вибір рисунка";
                break;
    }
});

document.getElementById('width').addEventListener('click', ()=>{
    let data = document.getElementById('rangeOfWidth').value;
    document.querySelector("img").setAttribute("width", data);
});

document.getElementById('height').addEventListener('click', ()=>{
    let data = document.getElementById('rangeOfHeight').value;
    document.querySelector("img").setAttribute("height", data);
});

document.getElementById('border').addEventListener('click', ()=>{
    let data = document.getElementById('rangeOfBorder').value;
    document.querySelector("img").setAttribute("border", data);
});

document.getElementById('buttonOfText').addEventListener('click', ()=>{
    let data = document.getElementById('text').value;
    document.querySelector('img').setAttribute("alt", data);
});

function Clear() {
    document.getElementById('default').innerHTML = "";
    document.getElementById('images').innerHTML = "";
}

function firstImageOutput() {
    let img = document.createElement('img');
    img.src = "images/1.jpg";
    img.width = "500";
    img.border = "0";
    img.height = "300";
    img.alt = "Португалія";
    imageOut.append(img);
}

function secondImageOutput() {
    let img = document.createElement('img');
    img.src = "images/2.jpg";
    img.width = "500";
    img.border = "0";
    img.height = "300";
    img.alt = "Іспанія";
    imageOut.append(img);
}

function thirdImageOutput() {
    let img = document.createElement('img');
    img.src = "images/3.jpg";
    img.width = "500";
    img.border = "0";
    img.height = "300";
    img.alt = "Румунія";
    imageOut.append(img);
}

function fourthImageOutput() {
    let img = document.createElement('img');
    img.src = "images/4.jpg";
    img.width = "500";
    img.border = "0";
    img.height = "300";
    img.alt = "Маврикій";
    imageOut.append(img);
}

function fifthImageOutput() {
    let img = document.createElement('img');
    img.src = "images/5.jpg";
    img.width = "500";
    img.border = "0";
    img.height = "300";
    img.alt = "Японія";
    imageOut.append(img);
}


