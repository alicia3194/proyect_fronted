// Variables para almacenar elementos HTML
const categoriesPreview = document.getElementById("categoriesPreview");
const categoryImages = document.getElementById("categoryImages");

// Función para mostrar la vista de categorías
function showCategoriesView() {
  categoriesPreview.classList.remove("inactive");
  categoryImages.classList.add("inactive");
}

// Función para mostrar la vista de imágenes de una categoría
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

    // Cargar comidas populares
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

// Cargar categorías y comidas populares al iniciar la página
loadCategoriesAndRandomFood();

//LOGIN
//EXPLICACION PLATOS POPULARES Y CATEGORIAS
//PODER ESCOGER Y QUE SE GUARDE
//DEVOLVER LISTA PODER BUSCAR POR SU PAIS, PONER PAISES
