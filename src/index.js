// console.log('%c HI', 'color: firebrick')
let breeds = []
// When document loads, call functions
document.addEventListener('DOMContentLoaded', function() {
    fetchImagesToDom(),
    addsAllBreeds()
    const dropdown =  document.getElementById("breed-dropdown")
    dropdown.addEventListener('change', filterBreeds)
    
 }) 
// const ul = document.getElementById("dog-breeds");

function fetchImagesToDom() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((res) => res.json())
    .then((data) => {
        data.message.forEach(dogImgLinks => {
            let imageContainer = document.getElementById("dog-image-container")            
            let img = document.createElement('img')
            img.setAttribute("src", dogImgLinks)
            // console.log(imageContainer)
            imageContainer.appendChild(img)
            // console.log(dogImgLinks)
        });    
    })
}

// CHALLENGE 2+3
function addsAllBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then((res) => res.json())
    .then((data) => {
        const ul = document.getElementById("dog-breeds");
        breeds = Object.keys(data.message)
        breeds.forEach((breed) => {
            let li = document.createElement("li");
            li.addEventListener("click",(ev) => {
                li.classList.add("selected")
            })
            li.textContent = breed 
            ul.appendChild(li)
        })
        
        
    })
}       
function filterBreeds(event) {
    console.log(event.target.value)
    let filterBreeds = breeds.filter(breed => {
        return breed[0] == event.target.value
        
    })
    console.log(filterBreeds)
    const ul = document.getElementById("dog-breeds")
    ul.innerHTML = " "
        filterBreeds.forEach((breed) => {
        let li = document.createElement("li")
            li.addEventListener("click",(ev) => {
                li.classList.add("selected")
            })
            li.textContent = breed
            ul.appendChild(li)
    }
)}




