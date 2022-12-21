import {dogs} from './data.js'

export class Doggy{
    constructor(data){
        Object.assign(this, data)
    }
    renderHtml(){
        const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this
        return `
            <div class="dog-card">
                <img src="./images/badge-like.png" id="reaction-liked" class="reaction-liked hidden" alt="liked badge">
                <img src="./images/badge-nope.png" id="reaction-notLiked" class="reaction-notLiked hidden" alt="not liked badge">
                <img src="${avatar}" id="dog-img" class="dog-img" alt="image of dog">
                <div class="dog-details">
                    <h3 id="dog-name" class="dog-name-age">${name}, ${age}</h3>
                    <h4 id="dog-bio" class="dog-bio">${bio}</h4>
                </div>
            </div>
        `
    }
    isSwipped(){
        this.hasBeenSwiped = true;
    }
    isLiked(){
        this.hasBeenLiked = true;
    }
}



