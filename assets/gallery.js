//FILTERS GENERATIONS
const galleryWrapper = document.querySelector(".galleryWrapper");
const tagsList = [];

const itemsList = document.querySelectorAll(".galleryRwk-item")

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

Array.from(itemsList).forEach(item => {
    handlePreview(item)
    if (!tagsList.includes(item.dataset.tag)){
        tagsList.push(item.dataset.tag)
    }
})

const handleFilter = (filter) => {
  filter.addEventListener("click", function() {
    const oldTag = document.querySelector(".activeFilter")
    oldTag.classList.remove("activeFilter")
    filter.classList.add("activeFilter")
    const filteredItems = document.querySelectorAll(`[data-tag="${filter.innerText}"]`)
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

const generateFiltersList = () => {
  const tagsUl = document.createElement("ul");
  tagsUl.className = "filters-list"
  const tagsAll = document.createElement("li")
  tagsAll.className = "filter activeFilter"
  tagsAll.innerText = "Tous"
  tagsUl.appendChild(tagsAll)
  handleFilter(tagsAll)
  tagsList.forEach((tags) => {
    const newTag = document.createElement("li");
    newTag.className = "filter";
    newTag.innerText = tags;
    tagsUl.appendChild(newTag);
    handleFilter(newTag)
  });
  galleryWrapper.prepend(tagsUl);
};

generateFiltersList();