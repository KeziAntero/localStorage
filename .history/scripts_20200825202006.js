let favorites = JSON.parse(localStorage.getItem('favorites')) || []
//pegar imagem externa
async function getExternalImage(){
   const response = await fetch('https://source.unsplash.com/random')

   document.querySelector('.image')
   .innerHTML = `<img src= "${response.url}">`

}

getExternalImage()

//clicar no botão, pegar imagem externa
document.querySelector('button').onclick = function(){
    getExternalImage()
}

//clicar na imagem
document.querySelector('.image').onclick = function(){

    //salvar no local storage ou remover
const imageSource = document.querySelector('.image img').src

const index = favorites.indexOf(imageSource)
const existsInLocalStorage = index != -1
if(existsInLocalStorage){
    favorites.splice(index, 1)
} else{
    favorites.push(imageSource)
}

localStorage.setItem('favorites', JSON.stringify(favorites))

//se ela está no localStora, remover



}

