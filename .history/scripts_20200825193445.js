//pegar imagem externa
async function getExternalImage(){
   const response = await fetch('https://source.unsplash.com/random')

   document.querySelector('image')
   .innerHTML = `<img src= "${response.url}">`

}

getExternalImage()