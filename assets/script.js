//GALLERY
const galleryWrapper = document.querySelector(".galleryWrapper");
const itemsList = document.querySelectorAll(".gallery-item")

//Génération de la liste de Tags
const tagsList = [];
Array.from(itemsList).forEach(item => {
  handlePreview(item)
  if (!tagsList.includes(item.dataset.tag)){
      tagsList.push(item.dataset.tag)
  }
})
//Création de la Modale de Preview
function handlePreview(image) {
  image.addEventListener("click", function () {
    const modalContainer = document.createElement("div")
    modalContainer.className = "modal-wrapper"
    galleryWrapper.appendChild(modalContainer)
    modalContainer.addEventListener("click", function() {
      modalContainer.remove()
    })
    const modalContent = document.createElement("img")
    modalContent.className = "modal-content"
    modalContent.setAttribute("src", image.src)
    modalContainer.appendChild(modalContent)
  })
}
//Filtrage de la Galerie
const handleFilter = (filter) => {
  filter.addEventListener("click", function() {
    const oldTag = document.querySelector(".activeFilter")
    oldTag.classList.remove("activeFilter")
    filter.classList.add("activeFilter")
    const filteredItems = document.querySelectorAll(`[data-tag="${filter.innerText}"]`)
    itemsList.forEach((item) => {
      item.classList.add("hidden")
    })
    if (filter.innerText != "Tous"){
      itemsList.forEach((item) => {
        item.classList.add("hidden")
      })
      filteredItems.forEach((item) => {
        item.classList.remove("hidden")
      })
    }
    else {
      itemsList.forEach((item) => {
        item.classList.remove("hidden")
      })
    }
  })
}
//Création de la Liste de Filtres
const generateFiltersList = () => {
  const tagsUl = document.createElement("ul");
  tagsUl.className = "filters-list"
  const tagsAll = document.createElement("li")
  const linkAll = document.createElement("a");
  linkAll.addEventListener("click", (e) => {
    e.preventDefault()
  })
  linkAll.href = "#"
  tagsAll.appendChild(linkAll)
  tagsAll.className = "filter activeFilter"
  linkAll.innerText = "Tous"
  tagsUl.appendChild(tagsAll)
  handleFilter(tagsAll)
  tagsList.forEach((tags) => {
    const newTag = document.createElement("li");
    const newLink = document.createElement("a");
    newLink.addEventListener("click", (e) => {
      e.preventDefault()
    })
    newLink.href = "#"
    newTag.appendChild(newLink)
    newTag.className = "filter";
    newLink.innerText = tags;
    tagsUl.appendChild(newTag);
    handleFilter(newTag)
  });
  galleryWrapper.prepend(tagsUl);
};

generateFiltersList();