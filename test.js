
// const allHoverImages = document.querySelectorAll("div.hover-container div img ");
// const imgContainer = document.querySelector('.img-container');
// console.log (allHoverImages[0])
// window.addEventListener('DOMContentLoaded', () => {
//     allHoverImages[0].parentElement.classList.add('active'); 
// }); 

// allHoverImages.forEach((image) => {
//     image.addEventListener('mouseover', () =>{
//         imgContainer.querySelector('img').src = image.src;
//         resetActiveImg();
//         image.parentElement.classList.add('active');
//     });
// });

// function resetActiveImg(){
//     allHoverImages.forEach((img) => {
//         img.parentElement.classList.remove('active');
//     });
// }
const hoverimages=document.querySelectorAll(".hover-container div img")
let hoverimages1=document.querySelectorAll(".hover-container div img")
console.log(hoverimages[1])
const imgContainer=document.querySelector(".img-container")
console.log(imgContainer)
window.addEventListener("DOMContentLoaded",()=>{
    hoverimages[0].parentElement.classList.add('active');
});
hoverimages.forEach((image)=>{
    image.addEventListener('mouseover',()=>{
        imgContainer.querySelector("img").src=image.src;
        resetActiveImg();
        image.parentElement.classList.add("active");
    });
});
function resetActiveImg()
{
    hoverimages.forEach((img)=>{
        img.parentElement.classList.remove("active");
    });
}