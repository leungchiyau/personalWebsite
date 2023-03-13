let firstWord2 = document.querySelector('.firstWord2')
let secondWord2 = document.querySelector('.secondWord2')
let firstWord3 = document.querySelector('.firstWord3')
let secondWord3 = document.querySelector('.secondWord3')
let firstWord4 = document.querySelector('.firstWord4')
let secondWord4 = document.querySelector('.secondWord4')
let detailBox2 = document.querySelector('.detailBox2')
let detailBox3 = document.querySelector('.detailBox3')
let detailBox4 = document.querySelector('.detailBox4')
let aboutMeDialog = document.querySelector('#aboutMeDialog')
let portfolioDialog = document.querySelector('#portfolioDialog')
let getInTouch = document.querySelector('#getInTouch')
let playYoutube = document.querySelector('#playYoutube')
let closeButton = document.querySelectorAll('.closeButton')
let closeYoutubeButton = document.querySelector('.closeYoutubeButton')
let blogButton = document.querySelector('.blogButton')
let youtubeVideo = document.querySelector('#youtubeVideo')
let imageProject = document.querySelector('#imageProject')
let sliderProject = document.querySelector('#sliderProject')
let localVideo = document.querySelector('#localVideo')
let picture1 = document.querySelector('#picture1')
let picture2 = document.querySelector('#picture2')
let picture3 = document.querySelector('#picture3')
let picture4 = document.querySelector('#picture4')
let hiddenWords = document.querySelector('.hiddenWords1')
let hiddenWords2 = document.querySelector('.hiddenWords2')
let hiddenWords3 = document.querySelector('.hiddenWords3')
let hiddenWords4 = document.querySelector('.hiddenWords4')

function openDialog(buttonClassName, dialogName) {
    buttonClassName.addEventListener('click', (event) => {
        dialogName.open = true
    })
}

function closeDialog(buttonClassName) {
    for (let classNames of buttonClassName) {
        classNames.addEventListener('click', (event) => {
            portfolioDialog.open = false
            aboutMeDialog.open = false
            getInTouch.open = false
        })
    }
}

closeYoutubeButton.addEventListener('click', (event) => {
    playYoutube.open = false
})

detailBox2.addEventListener('mouseover', (event) => {
    secondWord2.className = 'green'
    firstWord2.className = 'while'
    secondWord2.classList.toggle('animate__animated')
    secondWord2.classList.toggle('animate__zoomOutDown')
    setTimeout(() => {
        secondWord2.classList.remove('animate__animated')
        secondWord2.classList.remove('animate__zoomOutDown')
    }, 3000)
})

detailBox2.addEventListener('mouseout', (event) => {
    secondWord2.className = 'while'
    firstWord2.className = 'green'
})

detailBox3.addEventListener('mouseover', (event) => {
    secondWord3.className = 'green'
    firstWord3.className = 'while'
})

detailBox3.addEventListener('mouseout', (event) => {
    secondWord3.className = 'while'
    firstWord3.className = 'green'
})

detailBox4.addEventListener('mouseover', (event) => {
    secondWord4.className = 'green'
    firstWord4.className = 'while'
})

detailBox4.addEventListener('mouseout', (event) => {
    secondWord4.className = 'while'
    firstWord4.className = 'green'
})

blogButton.addEventListener('mouseover', (event) => {
    blogButton.className = 'blogMosueOver'
})

blogButton.addEventListener('mouseout', (event) => {
    blogButton.className = 'blogButton'
})

function addAnimatePortfolio(portfolioBox, hiddenWordClass, picture) {
    portfolioBox.addEventListener('mouseover', (event) => {
        hiddenWordClass.className = 'addWords'
        hiddenWordClass.classList.toggle('animate__animated')
        hiddenWordClass.classList.toggle('animate__backInDown')
        let timer = setTimeout(() => {
            picture.classList.toggle('hiddenWords1')
        }, 800)
        portfolioBox.addEventListener('mouseout', (event) => {
            clearTimeout(timer)
            hiddenWordClass.className = 'hiddenWords1'
            picture.classList.remove('hiddenWords1')
        })
    })
}

openDialog(detailBox2, aboutMeDialog);
openDialog(detailBox3, portfolioDialog);
openDialog(detailBox4, getInTouch);
openDialog(youtubeVideo, playYoutube);
closeDialog(closeButton);
addAnimatePortfolio(youtubeVideo, hiddenWords, picture1);
addAnimatePortfolio(imageProject, hiddenWords2, picture2);
addAnimatePortfolio(sliderProject, hiddenWords3, picture4);
addAnimatePortfolio(localVideo, hiddenWords4, picture4);