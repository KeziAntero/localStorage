//variaves
let favorites = JSON.parse(localStorage.getItem('favorites')) || []
const imageContainer = document.querySelector('.image')

//clicar no botão, pegar imagem externa
document.querySelector('button').onclick = () => updateImage()
    
//clicar na imagem
imageContainer.onclick = () => updateAll()

//metodos
function getState(){
    const imageSource = document.querySelector('.image img').src
    const index = favorites.indexOf(imageSource)
    const existsInLocalStorage = index != -1

    return{imageSource, index, existsInLocalStorage}
}

function updateAll(){
    updateFavorites()
    updateClasses()
}

function updateFavorites(){
    const{existsInLocalStorage, index, imageSource} = getState()
      if(existsInLocalStorage){
        favorites.splice(index, 1)
       } else{
        favorites.push(imageSource)
      }
        updateClasses()
    
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }


function updateClasses(){
    
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


