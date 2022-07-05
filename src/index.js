let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

//Get request and post to the DOM
//for each toy
//create element and append
const toyCollectionElement= document.querySelector('div#toy-collection')

fetch("http://localhost:3000/toys").then(res => res.json())
.then((toysArray) => {
  console.log(toysArray)
  toysArray.forEach((toyObj) => {
    console.log(toyObj)
    const toyCardDiv = document.createElement('div')
    toyCardDiv.className = "card"
    toyCardDiv.appendChild('h2')
    h2.textContent= 




    toyCollectionElement.append(toyCardDiv)
    

    //toyCardDiv.appendChild('h2')
    //put stuff in the div and append to div as needed and append to orginal div
  
  })
})



//console.log(res)
