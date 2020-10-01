//variaves
let favorites = JSON.parse(localStorage.getItem('favorites')) || []
const imageContainer = document.querySelector('.image')

//clicar no botão, pegar imagem externa
document.querySelector('button').onclick = function(){
    getExternalImage()
}

//clicar na imagem
imageContainer.onclick = function(){

//salvar no local storage ou remover
const imageSource = document.querySelector('.image img').src

const index = favorites.indexOf(imageSource)
const existsInLocalStorage = index != -1
if(existsInLocalStorage){
    favorites.splice(index, 1)
    imageContainer.classList.remove('fav')
} else{
    favorites.push(imageSource)
    imageContainer.classList.add('fav')
}

localStorage.setItem('favorites', JSON.stringify(favorites))

//se ela está no localStora, remover

}

//metodos

async function getExternalImage(){
    const response = await fetch('https://source.unsplash.com/random')
 
    imageContainer
    .innerHTML = `<img src= "${response.url}">`
 
 }
 
 getExternalImage()

