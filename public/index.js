let backgroundImage = document.querySelector('.backgroundImage');
let downloadCVButton = document.querySelector('.downloadCVButton');
let linkedin = document.querySelector('#linkedin');
let facebook = document.querySelector('#facebook');
let twitter = document.querySelector('#twitter');
let aboutMe = document.querySelector('.aboutMe');
let portfolio = document.querySelector('.portfolio');
let getInTouch = document.querySelector('.getInTouch');
let firstWord2 = document.querySelector('.firstWord2');
let secondWord2 = document.querySelector('.secondWord2');
let firstWord3 = document.querySelector('.firstWord3');
let secondWord3 = document.querySelector('.secondWord3');
let firstWord4 = document.querySelector('.firstWord4');
let secondWord4 = document.querySelector('.secondWord4');
let aboutMeDialog = document.querySelector('#aboutMeDialog');
let portfolioDialog = document.querySelector('#portfolioDialog');
let getInTouchDialog = document.querySelector('#getInTouchDialog');
let gameOfLifeDialog = document.querySelector('#gameOfLifeDialog');
let caloriesWebDialog = document.querySelector('#caloriesWebDialog');
let aiProjectDialog = document.querySelector('#aiProjectDialog');
let caloriesAppDialog = document.querySelector('#caloriesAppDialog');
let closeButton = document.querySelectorAll('.closeButton');
let portfolioCloseButton = document.querySelectorAll('.portfolioCloseButton');
let experienceContent = document.querySelector('#experienceContent');
let educationContent = document.querySelector('#educationContent');
let skillCOntent = document.querySelector('#skillContent');
let experience = document.querySelector('#Experience');
let education = document.querySelector('#Education');
let skill = document.querySelector('#Skill');
let myProject = document.querySelector('.myProject');
let youtubeVideo = document.querySelector('.youtubeVideo');
let localVideo = document.querySelector('.localVideo');
let comingSoon = document.querySelector('.comingSoon');
let myProjectCoverBox = document.querySelector('#myProjectCoverBox');
let youtubeVideoCover = document.querySelector('#youtubeVideoCoverBox');
let localVideoCover = document.querySelector('#localVideoCoverBox');
let comingSoonCover = document.querySelector('#comingSoonCoverBox');
// let coverBox = document.querySelectorAll('.coverBox');
let gameOfLife = document.querySelector('#gameOfLife');
let caloriesWeb = document.querySelector('#caloriesWeb');
let aiProject = document.querySelector('#aiProject');
let caloriesApp = document.querySelector('#caloriesApp');
// let leftBtn = document.querySelectorAll('.leftBtn');
// let rightBtn = document.querySelectorAll('.rightBtn');
let gameOfLifePicture1 = document.querySelector('#gameOfLifePicture1');
let gameOfLifePicture2 = document.querySelector('#gameOfLifePicture2');
let gameOfLifeChooseBox1 = document.querySelector('#gameOfLifeChooseBox1');
let gameOfLifeChooseBox2 = document.querySelector('#gameOfLifeChooseBox2');
let carloriesWebPicture1 = document.querySelector('#carloriesWebPicture1');
let carloriesWebPicture2 = document.querySelector('#carloriesWebPicture2');
let carloriesWebPicture3 = document.querySelector('#carloriesWebPicture3');
let carloriesWebPicture4 = document.querySelector('#carloriesWebPicture4');
let aiProjectPicture1 = document.querySelector('#aiProjectPicture1');
let aiProjectPicture2 = document.querySelector('#aiProjectPicture2');
let aiProjectPicture3 = document.querySelector('#aiProjectPicture3');
let aiProjectChooseBox1 = document.querySelector('#aiProjectChooseBox1');
let aiProjectChooseBox2 = document.querySelector('#aiProjectChooseBox2');
let aiProjectChooseBox3 = document.querySelector('#aiProjectChooseBox3');
let carloriesWebChooseBox1 = document.querySelector('#carloriesWebChooseBox1');
let carloriesWebChooseBox2 = document.querySelector('#carloriesWebChooseBox2');
let carloriesWebChooseBox3 = document.querySelector('#carloriesWebChooseBox3');
let carloriesWebChooseBox4 = document.querySelector('#carloriesWebChooseBox4');
let caloriesAppPicture1 = document.querySelector('#caloriesAppPicture1');
let caloriesAppPicture2 = document.querySelector('#caloriesAppPicture2');
let caloriesAppPicture3 = document.querySelector('#caloriesAppPicture3');
let caloriesAppPicture4 = document.querySelector('#caloriesAppPicture4');
let caloriesAppPicture5 = document.querySelector('#caloriesAppPicture5');
let caloriesAppChooseBox1 = document.querySelector('#caloriesAppChooseBox1');
let caloriesAppChooseBox2 = document.querySelector('#caloriesAppChooseBox2');
let caloriesAppChooseBox3 = document.querySelector('#caloriesAppChooseBox3');
let caloriesAppChooseBox4 = document.querySelector('#caloriesAppChooseBox4');
let caloriesAppChooseBox5 = document.querySelector('#caloriesAppChooseBox5');
let gameOfLifePictureArrays = [gameOfLifePicture1, gameOfLifePicture2];
let gameOfLifeChooseBoxArrays = [gameOfLifeChooseBox1, gameOfLifeChooseBox2];
let carloriesWebChooseBoxArrays = [carloriesWebChooseBox1, carloriesWebChooseBox2, carloriesWebChooseBox3, carloriesWebChooseBox4];
let carloriesWebPictureArrays = [carloriesWebPicture1, carloriesWebPicture2, carloriesWebPicture3, carloriesWebPicture4]
let aiProjectPictureArrays = [aiProjectPicture1, aiProjectPicture2, aiProjectPicture3];
let aiProjectChooseBoxArrays = [aiProjectChooseBox1, aiProjectChooseBox2, aiProjectChooseBox3];
let caloriesAppPictureArrays = [caloriesAppPicture1, caloriesAppPicture2, caloriesAppPicture3, caloriesAppPicture4, caloriesAppPicture5];
let caloriesAppChooseBoxArrays = [caloriesAppChooseBox1, caloriesAppChooseBox2, caloriesAppChooseBox3, caloriesAppChooseBox4, caloriesAppChooseBox5];
let caloriesAppZoomBig = document.querySelector('#caloriesAppZoomBig');
let caloriesWebZoomBig = document.querySelector('#caloriesWebZoomBig');
let aiProjectZoomBig = document.querySelector('#aiProjectZoomBig');
let gameOfLifeZoomBig = document.querySelector('#gameOfLifeZoomBig');
let gameOfLifeAllPicture = document.querySelector('#gameOfLifeAllPicture');
let caloriesWebAllPicture = document.querySelector('#caloriesWebAllPicture');
let aiProjectAllPicture = document.querySelector('#aiProjectAllPicture');
let caloriesAppAllPicture = document.querySelector('#caloriesAppAllPicture');
let gameOfLifeChangeDialogBtn = document.querySelector('#gameOfLifeChangeDialogBtn');
let caloriesWebChangeDialogBtn = document.querySelector('#caloriesWebChangeDialogBtn');
let aiProjectChangeDialogBtn = document.querySelector('#aiProjectChangeDialogBtn');
let caloriesAppChangeDialogBtn = document.querySelector('#caloriesAppChangeDialogBtn');
let dialogOrder = [gameOfLifeDialog, caloriesWebDialog, aiProjectDialog, caloriesAppDialog]
let emailAddress = document.querySelector('#emailAddress');
let fullName = document.querySelector('#fullName');
let subject = document.querySelector('#subject');
let message = document.querySelector('#message');

sendMessage.addEventListener('click', (e)=>{
    let fullNameValue = fullName.value;
    let emailAddressValue = emailAddress.value;
    let subjectValue = subject.value;
    let messageValue = message.value;
    if (fullNameValue == ''){
        alert('missing full name');
    }
    if (emailAddressValue == '' || !emailAddressValue.endsWith('.com')){
        alert('incorrect email address');
    }
    if (subjectValue == ''){
        alert('missing Subject');
    }
    if (messageValue == '') {
        alert('empty message');
    }
    
    [fullName.value, subject.value, emailAddress.value, message.value] = ['', '','','']
})

let types = new Typed('.multi-text', {
    strings: ['Web Developer', 'Fullstack Developer', 'Programmer'],
    stringsElement: null,
    smartBackspace: true,
    shuffle: false,
    contentType: 'html',
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

backgroundImage.addEventListener('mousemove', function (e) {
    backgroundImage.style.backgroundPositionX = (-e.offsetX) / 150 + "px";
    backgroundImage.style.backgroundPositionY = (-e.offsetY) / 200 + "px";
})

downloadCVButton.addEventListener('mouseover', (e) => {
    downloadCVButton.className = 'downloadCVButtonColor'
})

downloadCVButton.addEventListener('mouseout', (e) => {
    downloadCVButton.className = 'downloadCVButton'
})

// rightBtn.addEventListener('click', (e) => {
//     console.log('click')
// })

function hoverSocial(socialItem) {
    socialItem.addEventListener('mouseover', (e) => {
        socialItem.className = "hoverSocialLink"
    })

    socialItem.addEventListener('mouseout', (e) => {
        socialItem.className = "socialType"
    })
}

function hoverDetailBox(detailBox, firstWord, secondWord) {
    detailBox.addEventListener('mouseover', (event) => {
        secondWord.className = 'green'
        firstWord.className = 'while'
    })

    detailBox.addEventListener('mouseout', (event) => {
        secondWord.className = ''
        firstWord.className = 'firstWord2'
    })
}

function openDialog(buttonClassName, dialogName) {
    buttonClassName.addEventListener('click', (event) => {
        let randomAnimation = ['sliderIn', 'sliderDown', 'sliderLeft', 'sliderRight']
        let randomNum = Math.floor(Math.random() * 4)
        dialogName.open = true
        dialogName.className = randomAnimation[randomNum]
    })
}

function chickBox(box) {
    let order = [experienceContent, educationContent, skillCOntent]
    let index = order.indexOf(box)

    if (box == educationContent) {
        box.addEventListener('click', (event) => {
            box.className = 'toTop';
            order[2].classList = 'toMedia';
            order[0].classList = 'toEnd';
            education.className = 'clickPersonalEXTypeBox';
            skill.className = 'personalEXTypeBox';
            experience.className = 'personalEXTypeBox';
        })
    } else if (box == skillCOntent) {
        box.addEventListener('click', (event) => {
            box.className = 'toTop';
            order[1].classList = 'toEnd';
            order[0].classList = 'toMedia';
            skill.className = 'clickPersonalEXTypeBox';
            education.className = 'personalEXTypeBox';
            experience.className = 'personalEXTypeBox';
        })
    } else if (box == experienceContent) {
        box.addEventListener('click', (event) => {
            box.className = 'toTop';
            order[1].classList = 'toMedia';
            order[2].classList = 'toEnd';
            experience.className = 'clickPersonalEXTypeBox';
            education.className = 'personalEXTypeBox';
            skill.className = 'personalEXTypeBox';
        })
    }
}

function clickPersonalEXTypeBox(box) {
    let types = [experience, education, skill].filter(type => type !== box)
    box.addEventListener('click', (event) => {
        box.className = 'clickPersonalEXTypeBox'
        for (let type of types) {
            type.className = 'personalEXTypeBox'
        }

        if (box == education) {
            educationContent.className = 'toTop';
            skillCOntent.classList = 'toMedia';
            experienceContent.classList = 'toEnd'
        } else if (box == skill) {
            skillCOntent.className = 'toTop';
            educationContent.classList = 'toEnd';
            experienceContent.classList = 'toMedia'
        } else if (box == experience) {
            experienceContent.className = 'toTop';
            educationContent.classList = 'toMedia';
            skillCOntent.classList = 'toEnd'
        }
    })
}

function portfolioPageBoxEffect(box, coverBox) {
    box.addEventListener('mouseover', (e) => {
        let layer = box.getBoundingClientRect()
        let x = e.clientX;
        let y = e.clientY;
        if (y >= Math.floor(layer.bottom) || y >= Math.floor(layer.bottom - 5)) {
            coverBox.className = 'coverBox'
            coverBox.classList.add('upInBox')
        }

        if (y <= Math.floor(layer.top) || y <= Math.floor(layer.top + 5)) {
            coverBox.className = 'coverBox'
            coverBox.classList.add('downInBox')
        }

        if (x <= Math.floor(layer.left) || x <= Math.floor(layer.left + 5)) {
            coverBox.className = 'coverBox'
            coverBox.classList.add('leftInBox')
        }

        if (x >= Math.floor(layer.right) || x >= Math.floor(layer.right - 5)) {
            coverBox.className = 'coverBox'
            coverBox.classList.add('rightInBox')
        }
    })
}

function outPortfolioPageBoxEffect(coverBox) {
    if (coverBox !== null) {

        coverBox.addEventListener('mouseout', (e) => {
            let layer = coverBox.getBoundingClientRect()
            let x = e.clientX;
            let y = e.clientY;
            if (y >= Math.floor(layer.bottom) || y >= Math.floor(layer.bottom - 5)) {
                coverBox.className = 'coverBox'
                coverBox.classList.add('outUpInBox')
            }

            if (y <= Math.floor(layer.top) || y <= Math.floor(layer.top + 5)) {
                coverBox.className = 'coverBox'
                coverBox.classList.add('outDownInBox')
            }

            if (x <= Math.floor(layer.left) || x <= Math.floor(layer.left + 5)) {
                coverBox.className = 'coverBox'
                coverBox.classList.add('outLeftInBox')
            }

            if (x >= Math.floor(layer.right) || x >= Math.floor(layer.right - 5)) {
                coverBox.className = 'coverBox'
                coverBox.classList.add('outRightInBox')
            }
        })
    }
}

function choosePictureEffect(picture, chooseBox, num, pictureArrays, chooseBoxArrays) {
    chooseBox.addEventListener('click', (e) => {
        let number = 0
        for (let i = 0; i < pictureArrays.length; i++) {
            let list = pictureArrays[i].classList
            if (list[0] == 'pictureActive') {
                number = i + 1
            }
        }
        if (number < num) {
            chooseBox.classList.add('chooseBoxActive');
            picture.className = 'pictureActive'
            picture.classList.add('pictureActiveMoveRightIn')
            pictureArrays[number - 1].className = 'pictureMovingActive'
            pictureArrays[number - 1].classList.add('pictureActiveMoveLeftOut')
            for (let array of pictureArrays.filter(pictureArray => pictureArray !== picture && pictureArray !== pictureArrays[number - 1])) {
                if (array == []) {
                    return
                } else {
                    array.className = 'pictureNotActive'
                }
            }
            for (array of chooseBoxArrays.filter(chooseBoxArray => chooseBoxArray !== chooseBox)) {
                array.className = 'chooseBox'
            }
        } else if (number > num) {
            chooseBox.classList.add('chooseBoxActive');
            picture.className = 'pictureActive'
            picture.classList.add('pictureActiveMoveLeftIn')
            pictureArrays[number - 1].className = 'pictureMovingActive'
            pictureArrays[number - 1].classList.add('pictureActiveMoveRightOut')
            let filterArray = pictureArrays.filter(pictureArray => pictureArray !== picture && pictureArray !== pictureArrays[number - 1])
            if (filterArray !== []) {
                for (let array of filterArray) {
                    array.className = 'pictureNotActive'
                }
                for (array of chooseBoxArrays.filter(chooseBoxArray => chooseBoxArray !== chooseBox)) {
                    array.className = 'chooseBox'
                }
            }
        } else {
            return
        }
    })

}

for (let btn of closeButton) {
    btn.addEventListener('click', (event) => {
        aboutMeDialog.open = false
        portfolioDialog.open = false
        getInTouchDialog.open = false
    })
}

function portfolioCloseEffect(picture, chooseBox, dialogArray, chooseBoxArray) {
    for (let btn of portfolioCloseButton) {
        btn.addEventListener('click', (event) => {
            gameOfLifeDialog.open = false
            caloriesWebDialog.open = false
            aiProjectDialog.open = false
            caloriesAppDialog.open = false
            aiProjectAllPicture.className = 'portfolioPicture'
            caloriesAppAllPicture.className = 'portfolioPicture'
            caloriesAppAllPicture.classList.add('caloriesAppPicture')
            caloriesWebAllPicture.className = 'portfolioPicture'
            gameOfLifeAllPicture.className = 'portfolioPicture'
            picture.className = 'pictureActive'
            chooseBox.className = 'chooseBox'
            chooseBox.classList.add('chooseBoxActive')
            for (let array of dialogArray.filter(x => x !== picture)) {
                array.className = 'pictureNotActive'
            }
            for (let array of chooseBoxArray.filter(x => x !== chooseBox)) {
                array.className = 'chooseBox'
            }
        })
    }
}

function zoomBigEffect(picture, zoom) {
    zoom.addEventListener('click', first);

    function first(e) {
        e.stopImmediatePropagation();
        if (picture == caloriesAppAllPicture) picture.classList.add('caloriesAppBig')
        picture.classList.add('big')
        this.removeEventListener("click", first);
        zoom.onclick = second;
    }

    function second(e) {
        e.stopImmediatePropagation();
        if (picture == caloriesAppAllPicture) {
            picture.className = 'portfolioPicture'
            picture.classList.add('caloriesAppPicture')
        } else {
            picture.className = 'portfolioPicture'
        }
        this.removeEventListener("click", second);
        zoom.onclick = first;
    }
}


function changeDialogEffect(currentDialog, num) {
    currentDialog.addEventListener('click', (e) => {
        if (e.target.classList[1] == 'fa-chevron-right') {
            if (num == 3) {
                dialogOrder[0].open = true
                dialogOrder[0].className = 'sliderIn'
                dialogOrder[num].className = 'sliderLeftOut'
                setTimeout(() => {
                    for (let dialog of dialogOrder.filter(dialogs => dialogs !== dialogOrder[0])) {
                        dialog.open = false;
                    }
                }, 500)
            } else {
                dialogOrder[num + 1].open = true
                dialogOrder[num + 1].className = 'sliderIn'
                dialogOrder[num].className = 'sliderLeftOut'
                setTimeout(() => {
                    for (let dialog of dialogOrder.filter(dialogs => dialogs !== dialogOrder[num + 1])) {
                        dialog.open = false;
                    }
                }, 500)
            }
        } else if (e.target.classList[1] == 'fa-chevron-left') {
            if (num == 0) {
                dialogOrder[3].open = true;
                dialogOrder[3].className = 'sliderDown';
                dialogOrder[num].className = 'sliderRightOut';
                setTimeout(() => {
                    for (let dialog of dialogOrder.filter(dialogs => dialogs !== dialogOrder[3])) {
                        dialog.open = false;
                    }
                }, 500)
            } else {
                dialogOrder[num - 1].open = true;
                dialogOrder[num - 1].className = 'sliderDown';
                dialogOrder[num].className = 'sliderRightOut';
                setTimeout(() => {
                    for (let dialog of dialogOrder.filter(dialogs => dialogs !== dialogOrder[num - 1])) {
                        dialog.open = false;
                    }
                }, 500)
            }
        }
    })
}

hoverSocial(linkedin);
hoverSocial(facebook);
hoverSocial(twitter);
hoverDetailBox(aboutMe, firstWord2, secondWord2);
hoverDetailBox(portfolio, firstWord3, secondWord3);
hoverDetailBox(getInTouch, firstWord4, secondWord4);
openDialog(aboutMe, aboutMeDialog);
openDialog(portfolio, portfolioDialog);
openDialog(getInTouch, getInTouchDialog);
openDialog(gameOfLife, gameOfLifeDialog);
openDialog(aiProject, aiProjectDialog);
openDialog(caloriesWeb, caloriesWebDialog);
openDialog(caloriesApp, caloriesAppDialog);
chickBox(educationContent);
chickBox(skillCOntent);
chickBox(experienceContent);
clickPersonalEXTypeBox(experience);
clickPersonalEXTypeBox(education);
clickPersonalEXTypeBox(skill);
portfolioPageBoxEffect(myProject, myProjectCoverBox);
portfolioPageBoxEffect(youtubeVideo, youtubeVideoCover);
portfolioPageBoxEffect(localVideo, localVideoCover);
portfolioPageBoxEffect(comingSoon, comingSoonCover);
outPortfolioPageBoxEffect(myProjectCoverBox);
outPortfolioPageBoxEffect(youtubeVideoCover);
outPortfolioPageBoxEffect(localVideoCover);
outPortfolioPageBoxEffect(comingSoonCover);
choosePictureEffect(gameOfLifePicture1, gameOfLifeChooseBox1, 1, gameOfLifePictureArrays, gameOfLifeChooseBoxArrays);
choosePictureEffect(gameOfLifePicture2, gameOfLifeChooseBox2, 2, gameOfLifePictureArrays, gameOfLifeChooseBoxArrays);
portfolioCloseEffect(gameOfLifePicture1, gameOfLifeChooseBox1, gameOfLifePictureArrays, gameOfLifeChooseBoxArrays)
choosePictureEffect(carloriesWebPicture1, carloriesWebChooseBox1, 1, carloriesWebPictureArrays, carloriesWebChooseBoxArrays);
choosePictureEffect(carloriesWebPicture2, carloriesWebChooseBox2, 2, carloriesWebPictureArrays, carloriesWebChooseBoxArrays);
choosePictureEffect(carloriesWebPicture3, carloriesWebChooseBox3, 3, carloriesWebPictureArrays, carloriesWebChooseBoxArrays);
choosePictureEffect(carloriesWebPicture4, carloriesWebChooseBox4, 4, carloriesWebPictureArrays, carloriesWebChooseBoxArrays);
portfolioCloseEffect(carloriesWebPicture1, carloriesWebChooseBox1, carloriesWebPictureArrays, carloriesWebChooseBoxArrays);
choosePictureEffect(aiProjectPicture1, aiProjectChooseBox1, 1, aiProjectPictureArrays, aiProjectChooseBoxArrays);
choosePictureEffect(aiProjectPicture2, aiProjectChooseBox2, 2, aiProjectPictureArrays, aiProjectChooseBoxArrays);
choosePictureEffect(aiProjectPicture3, aiProjectChooseBox3, 3, aiProjectPictureArrays, aiProjectChooseBoxArrays);
portfolioCloseEffect(aiProjectPicture1, aiProjectChooseBox1, aiProjectPictureArrays, aiProjectChooseBoxArrays);
choosePictureEffect(caloriesAppPicture1, caloriesAppChooseBox1, 1, caloriesAppPictureArrays, caloriesAppChooseBoxArrays);
choosePictureEffect(caloriesAppPicture2, caloriesAppChooseBox2, 2, caloriesAppPictureArrays, caloriesAppChooseBoxArrays);
choosePictureEffect(caloriesAppPicture3, caloriesAppChooseBox3, 3, caloriesAppPictureArrays, caloriesAppChooseBoxArrays);
choosePictureEffect(caloriesAppPicture4, caloriesAppChooseBox4, 4, caloriesAppPictureArrays, caloriesAppChooseBoxArrays);
choosePictureEffect(caloriesAppPicture5, caloriesAppChooseBox5, 5, caloriesAppPictureArrays, caloriesAppChooseBoxArrays);
portfolioCloseEffect(caloriesAppPicture1, caloriesAppChooseBox1, caloriesAppPictureArrays, caloriesAppChooseBoxArrays);
zoomBigEffect(gameOfLifeAllPicture, gameOfLifeZoomBig);
zoomBigEffect(caloriesAppAllPicture, caloriesAppZoomBig);
zoomBigEffect(aiProjectAllPicture, aiProjectZoomBig);
zoomBigEffect(caloriesWebAllPicture, caloriesWebZoomBig);
changeDialogEffect(gameOfLifeChangeDialogBtn, 0);
changeDialogEffect(caloriesWebDialog, 1);
changeDialogEffect(aiProjectDialog, 2);
changeDialogEffect(caloriesAppDialog, 3);