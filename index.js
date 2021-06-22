
const images = document.querySelectorAll("img");
const cont = document.querySelector('.container')


let popImage = document.createElement("img");
let yayImage = document.createElement("img")
yayImage.setAttribute('src', `./images/yay.png`)
let i = 0

images.forEach((image) => {
  
 
  image.addEventListener(
    "mouseover", e=> {
      i++
      image.setAttribute('src', `./images/pop-${image.getAttribute("id")}.png`)
    //  console.log(i)
      if(i===16){
        cont.innerHTML = ''

        cont.appendChild(yayImage)
      }
    }
  );
});

