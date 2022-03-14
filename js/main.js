var elList = document.querySelector(".list");

for (var pokemon of pokemons) {

  var newItem = document.createElement("li");
  var newImg = document.createElement("img");
  var newBox = document.createElement("div");
  var newHeading = document.createElement("h3");
  var newText = document.createElement("p");


  newHeading.textContent = pokemon.name;
  newText.textContent = pokemon.candy;


  elList.setAttribute("class", "row ps-0");
  newItem.setAttribute("class", "col-3 shadow rounded text-center my-2 p-2 py-4 list-unstyled");
  newImg.setAttribute("src", pokemon.img);
  newImg.setAttribute("alt", pokemon.type);
  newImg.setAttribute("class", "card-img img-fluid");
  newBox.setAttribute("class", "card-body text-center ");



  elList.appendChild(newItem);
  newItem.appendChild(newImg);
  newItem.appendChild(newBox);
  newBox.appendChild(newHeading);
  newBox.appendChild(newText);

}