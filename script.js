// 10 platos aleatorios para la seccion de platos populares

async function getRandomFoodPreview() {
  try {
    const numRandomMeals = 8;
    const randomMeals = [];

    const trendingPreviewSection = document.querySelector(
      "#trendingPreview .trendingPreview-foodList"
    );

    // Para no repetir cuando se vuelve al inicio
    trendingPreviewSection.innerHTML = "";

    for (let i = 0; i < numRandomMeals; i++) {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );

      const data = await response.json();
      const food = data.meals[0];

      const foodContainer = document.createElement("div");
      foodContainer.classList.add("food-container");

      const foodImg = document.createElement("img");
      foodImg.classList.add("food-img");
      foodImg.setAttribute("alt", food.strMeal);
      foodImg.setAttribute("src", food.strMealThumb);

      foodContainer.appendChild(foodImg);
      trendingPreviewSection.appendChild(foodContainer);

      randomMeals.push(food);
    }
  } catch (error) {
    console.error(error);
  }
}

// seccion para las categorias de platos

async function getCategoriesPreview() {
  try {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );

    const data = await response.json();
    const categories = data.categories;

    // Igual que con la función getRandom
    categoriesPreviewList.innerHTML = "";

    categories.forEach((category) => {
      const categoryContainer = document.createElement("div");
      categoryContainer.classList.add("category-container");

      const categoryTitle = document.createElement("h3");
      categoryTitle.classList.add("category-title");
      const categoryTitleText = document.createTextNode(category.strCategory);

      categoryTitle.appendChild(categoryTitleText);
      categoryContainer.appendChild(categoryTitle);
      categoriesPreviewList.appendChild(categoryContainer);
    });
  } catch (error) {
    console.error(error);
  }
}
getCategoriesPreview();

//NODE
// Sections
const headerSection = document.querySelector("#header");
const trendingPreviewSection = document.querySelector("#trendingPreview");
const categoriesPreviewSection = document.querySelector("#categoriesPreview");
const genericSection = document.querySelector("#genericList");
const foodDetailSection = document.querySelector("#foodDetail");

// Lists & Containers
const searchForm = document.querySelector("#searchForm");
const trendingFoodPreviewList = document.querySelector(
  ".trendingPreview-foodList"
);
const categoriesPreviewList = document.querySelector(".categoriesPreview-list");
const foodDetailCategoriesList = document.querySelector(
  "#foodDetail .categories-list"
);
const relatedFoodContainer = document.querySelector(
  ".relatedFood-scrollContainer"
);

// Elements
const headerTitle = document.querySelector(".header-title");
const arrowBtn = document.querySelector(".header-arrow");
const headerCategoryTitle = document.querySelector(
  ".header-title--categoryView"
);

const searchFormInput = document.querySelector("#searchForm input");
const searchFormBtn = document.querySelector("#searchBtn");

const trendingBtn = document.querySelector(".trendingPreview-btn");

const foodDetailTitle = document.querySelector(".foodDetail-title");
const foodDetailDescription = document.querySelector(".foodDetail-description");
const foodDetailScore = document.querySelector(".foosDetail-score");

//Función navegación

searchFormBtn.addEventListener("click", () => {
  location.hash = "#search=";
});

trendingBtn.addEventListener("click", () => {
  location.hash = "#trends";
});

arrowBtn.addEventListener("click", () => {
  location.hash = "#home";
});

window.addEventListener("DOMContentLoaded", navigation, false);
window.addEventListener("hashchange", navigation, false);

function navigation() {
  if (location.hash.startsWith("#trends")) {
    trendsPage();
  } else if (location.hash.startsWith("#search=")) {
    searchPage();
  } else if (location.hash.startsWith("#food=")) {
    foodDetailPage();
  } else if (location.hash.startsWith("#category=")) {
    categoriesPage();
  } else {
    homePage();
  }
}

function homePage() {
  console.log("HOME");
  headerSection.classList.remove("header-container--long");

  headerSection.style.background = "";

  arrowBtn.classList.add("inactive");
  arrowBtn.classList.remove("header-arrow--white");

  headerTitle.classList.remove("inactive");
  headerCategoryTitle.classList.add("inactive");

  searchForm.classList.remove("inactive");
  trendingPreviewSection.classList.remove("inactive");
  categoriesPreviewSection.classList.remove("inactive");

  genericSection.classList.add("inactive");
  foodDetailSection.classList.add("inactive");

  getRandomFoodPreview();
  getCategoriesPreview();
}

function categoriesPage() {
  console.log("CATEGORIES");

  headerSection.classList.remove("header-container--long");
  headerSection.style.background = "";

  arrowBtn.classList.remove("inactive");
  arrowBtn.classList.remove("header-arrow--white");

  headerTitle.classList.add("inactive");
  headerCategoryTitle.classList.remove("inactive");

  searchForm.classList.add("inactive");

  trendingPreviewSection.classList.add("inactive");
  categoriesPreviewSection.classList.add("inactive");
  genericSection.classList.remove("inactive");
  foodDetailSection.classList.add("inactive");
}
function foodDetailPage() {
  console.log("FOOD");

  headerSection.classList.remove("header-container--long");
  // headerSection.style.background = "";

  arrowBtn.classList.remove("inactive");
  arrowBtn.classList.remove("header-arrow--white");

  headerTitle.classList.add("inactive");
  headerCategoryTitle.classList.add("inactive");
  searchForm.classList.add("inactive");

  trendingPreviewSection.classList.add("inactive");
  categoriesPreviewSection.classList.add("inactive");
  genericSection.classList.add("inactive");
  foodDetailSection.classList.remove("inactive");
}
function searchPage() {
  console.log("SEARCH");

  headerSection.classList.remove("header-container--long");
  headerSection.style.background = "";

  arrowBtn.classList.remove("inactive");
  arrowBtn.classList.remove("header-arrow--white");

  headerTitle.classList.add("inactive");
  headerCategoryTitle.classList.remove("inactive");
  searchForm.classList.remove("inactive");

  trendingPreviewSection.classList.add("inactive");
  categoriesPreviewSection.classList.add("inactive");
  genericSection.classList.remove("inactive");
  foodDetailSection.classList.add("inactive");
}
function trendsPage() {
  console.log("TRENDS");

  headerSection.classList.remove("header-container--long");
  headerSection.style.background = "";

  arrowBtn.classList.remove("inactive");
  arrowBtn.classList.remove("header-arrow--white");

  headerTitle.classList.add("inactive");
  headerCategoryTitle.classList.remove("inactive");
  searchForm.classList.add("inactive");

  trendingPreviewSection.classList.add("inactive");
  categoriesPreviewSection.classList.add("inactive");
  genericSection.classList.remove("inactive");
  foodDetailSection.classList.add("inactive");
}
