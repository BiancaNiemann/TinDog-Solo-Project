export function endPage(){
    document.getElementById('footer').classList.add('hidden')
    document.getElementById('main').innerHTML = `
        <div class="end-box">
            <h1>No more Dogs to see at the moment - check back later!</h1>
            <img class="end-pic" src="./images/dog-icon.png" alt="Dog Face Vector - Dog Face Icon @clipartmax.com">
        </div>
    `
}