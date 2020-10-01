//variaves
let favorites = JSON.parse(localStorage.getItem('favorites')) || []
const imageContainer = document.querySelector('.image')

//clicar no botão, pegar imagem externa
document.querySelector('button').onclick = () => updateImage()
    
//clicar na imagem
imageContainer.onclick = () => updateAll()

//metodos
function updateAll(){
    updateFavorites()
    updateClasses()


function updateClasses(){
    const imageSource = document.querySelector('.image img').src

    const index = favorites.indexOf(imageSource)
    const existsInLocalStorage = index != -1
        if(existsInLocalStorage){
    imageContainer.classList.remove('fav')
}           else{
                imageContainer.classList.add('fav')
}

}
async function getExternalImage(){
    const response = await fetch('https://source.unsplash.com/random')
 
    imageContainer
    .innerHTML = `<img src= "${response.url}">`
 
 }
 
 getExternalImage()

 function updateImage(){
     getExternalImage()
     updateClasses()
 }


