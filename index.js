import {dogs} from './data.js'
import {Doggy} from './Dog.js'
import {endPage} from './endPage.js'

let dog = getDog()
let isWaiting = false

//GETS A NEW DOG FROM THE DATA.JA FILE
function getDog(){
    let newDog = dogs.shift()
    return newDog ? new Doggy(newDog) : {}
}

//EVENT LISTENERS ON BUTTON CLICKS

document.getElementById('circle-heart').addEventListener('click', likeBadgeClick)
document.getElementById('circle-cross').addEventListener('click', notLikedBadgeClick)

//IF HEART CLICKED, PRINTS LIKED BADGE AND CHANGES SWIPPED & LIKED TO TRUE
function likeBadgeClick(){
    if (!isWaiting){
        document.getElementById('reaction-liked').classList.remove('hidden')
        dog.isSwipped()
        dog.isLiked()
        newDoggyProfile()
    }
}

//IF CROSS CLICKED, PRINTS NOPE BADGE AND CHANGES SWIPPED TO TRUE
function notLikedBadgeClick(){
    if (!isWaiting){
        document.getElementById('reaction-notLiked').classList.remove('hidden')
        dog.isSwipped()
        newDoggyProfile()
    } 
}

//AFTER BUTTON CLICK WAITS HALF SECOND THEN SHOWS NEW DOG, SETS WAITING TO TRUE SO NO MORE CLICKS ALLOWED UNTIL RE-RENDER
function newDoggyProfile(){
    isWaiting = true
    if(dogs.length > 0){
       setTimeout(()=>{
            dog = getDog()
            render() 
            isWaiting = false
        }, 1000)
    }else {
        endPage()
    }
}
  

function render(){
    document.getElementById('main').innerHTML = dog.renderHtml()
}
render()
