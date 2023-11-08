//buscar por el nombre del plato las instrucciones de él
const search = document.getElementById("searchInput");
const getInstruction = document.getElementById("searchButton");
const instructions = document.getElementById("instructions");

getInstruction.addEventListener("click", () => {
  const nameFood = search.value;

  fetch("https://www.themealdb.com/api/json/v1/1/" + "search.php?s=" + nameFood) //final url nombre
    .then((response) => response.json())

    .then((data) => {
      const meal = data.meals ? data.meals[0] : null;

      const allInstructions = meal
        ? meal.strInstructions
        : "No recipes found with that name.";

      instructions.innerHTML = allInstructions;
    })
    .catch((error) => {
      console.log(error);
    });
});

const categoriesPreview = document.getElementById("categoriesPreview");
const categoryImages = document.getElementById("categoryImages");

function showCategoriesView() {
  categoriesPreview.classList.remove("inactive");
  categoryImages.classList.add("inactive");
}

function showCategoryImagesView() {
  categoriesPreview.classList.add("inactive");
  categoryImages.classList.remove("inactive");
}

// Event listener para el botón "Volver" en la vista de imágenes de categoría
const backBtn = document.querySelector(".categoryImages-backBtn");
backBtn.addEventListener("click", showCategoriesView);

// Sección para cargar categorías y comidas populares
async function loadCategoriesAndRandomFood() {
  try {
    const numMeals = 8;
    const trendingPreviewSection = document.querySelector(
      "#trendingPreview .trendingPreview-foodList"
    );
    const categoriesPreviewList = document.getElementById(
      "categoriesPreviewList"
    );
    const allowedCategories = ["Dessert", "Vegan", "Vegetarian"];

    // Cargar categorías
    const categoriesResponse = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const categoriesData = await categoriesResponse.json();
    const categories = categoriesData.categories;

    // Llenar la lista de categorías
    categories.forEach((category) => {
      if (allowedCategories.includes(category.strCategory)) {
        const categoryContainer = document.createElement("div");
        categoryContainer.classList.add("category-container");

        const categoryTitle = document.createElement("h3");
        categoryTitle.classList.add("category-title");
        categoryTitle.textContent = category.strCategory;

        categoryTitle.addEventListener("click", () => {
          getImagesForCategory(category.strCategory);
        });

        categoryContainer.appendChild(categoryTitle);
        categoriesPreviewList.appendChild(categoryContainer);
      }
    });

    // comidas populares
    for (let i = 0; i < numMeals; i++) {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const data = await response.json();
      const food = data.meals[0];

      if (food && allowedCategories.includes(food.strCategory)) {
        const foodContainer = document.createElement("div");
        foodContainer.classList.add("food-container");

        const foodImg = document.createElement("img");
        foodImg.classList.add("food-img");
        foodImg.setAttribute("alt", food.strMeal);
        foodImg.setAttribute("src", food.strMealThumb);

        foodContainer.appendChild(foodImg);
        trendingPreviewSection.appendChild(foodContainer);
      } else {
        i--;
      }
    }
  } catch (error) {
    console.error(error);
  }
}

// NOMBRES E IMAGENES CATEGORIAS
function getImagesForCategory(categoryName) {
  const categoryImagesList = document.querySelector(".categoryImages-list");
  categoryImagesList.innerHTML = "";

  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
    .then((response) => response.json())
    .then((data) => {
      const meals = data.meals;

      showCategoryImagesView();

      meals.forEach((meal) => {
        const foodContainer = document.createElement("div");
        foodContainer.classList.add("food-container");

        const foodImg = document.createElement("img");
        foodImg.classList.add("food-img");
        foodImg.setAttribute("alt", meal.strMeal);
        foodImg.setAttribute("src", meal.strMealThumb);

        const foodTitle = document.createElement("h4");
        foodTitle.classList.add("food-title");
        foodTitle.textContent = meal.strMeal;

        foodContainer.appendChild(foodImg);
        foodContainer.appendChild(foodTitle);
        categoryImagesList.appendChild(foodContainer);
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

loadCategoriesAndRandomFood();

// VALIDACIÓN FORMULARIO

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    if (!validateForm()) {
      event.preventDefault();
    }
  });

  const validateForm = () => {
    const fname = document.getElementById("fname").value;
    const email = document.getElementById("email").value;

    if (fname.length < 3 || fname.length > 30) {
      alert("Invalid name.");
      return false;
    }

    if (
      (!email.endsWith(".com") && !email.endsWith(".es")) ||
      !email.includes("@")
    ) {
      console.log("Error: " + email);
      msj += "Error: " + email + "\n";
    }

    return true;
  };
});
