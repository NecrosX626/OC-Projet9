const galleryWrapper = document.querySelector(".galleryWrapper");
const filtersList = [];

const itemsList = document.querySelectorAll(".galleryRwk-item")
Array.from(itemsList).forEach(item => {
    if (!filtersList.includes(item.dataset.tag)){
        filtersList.push(item.dataset.tag)
    }
})

const generateFiltersList = () => {
  const filtersUl = document.createElement("ul");
  filtersUl.className = "filters-list"
  const filterAll = document.createElement("li")
  filterAll.className = "filter active"
  filterAll.innerText = "Tous"
  filtersUl.appendChild(filterAll)
  filtersList.forEach((filter) => {
    const newTag = document.createElement("li");
    newTag.className = "filter";
    newTag.innerText = filter;
    filtersUl.appendChild(newTag);
  });
  galleryWrapper.prepend(filtersUl);
};

generateFiltersList();