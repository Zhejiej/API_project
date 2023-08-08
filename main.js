let leftImageContainer = document.querySelector(".left img");
let leftCaption = document.querySelector(".left p");
let rightImageContainer = document.querySelector(".right img");
let rightCaption = document.querySelector(".right p");

let leftButton = document.querySelector("#leftbtn");
let rightButton = document.querySelector("#rightbtn");

//Left MEME
// Get a random number >= 0 and less than n
function randInt(upperLimit) {
    return Math.floor(Math.random() * upperLimit);
}

let API = "https://api.imgflip.com/get_memes";

clickButton();


leftButton.onclick = clickButton;
rightButton.onclick = clickButton;


function clickButton() {
    fetch(API)
        .then(function (response) {
            return response.json();
        })
        .then(function (JsonData) {
            console.log(JsonData)
            let memeObj1 = JsonData.data.memes[randInt(JsonData.data.memes.length)];
            let memeObj2 = JsonData.data.memes[randInt(JsonData.data.memes.length)];

            if(memeObj1.url == memeObj2.url){
                memeObj2 = JsonData.data.memes[randInt(JsonData.data.memes.length)];
            }
            console.log(memeObj1);
            console.log(memeObj2);

            //Display LEft Image
            leftImageContainer.src = memeObj1.url;
            leftCaption.innerHTML = memeObj1.name;

            //Display Right Image
            rightImageContainer.src = memeObj2.url;
            rightCaption.innerHTML = memeObj2.name;
        });
}


