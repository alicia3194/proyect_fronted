// 10 platos aleatorios para la seccion de platos populares

async function getRandomFoodPreview() {
  try {
    const numRandomMeals = 8;
    const randomMeals = [];

    for (let i = 0; i < numRandomMeals; i++) {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );

      if (response.status === 200) {
        const data = await response.json();
        const food = data.meals[0];

        const trendingPreviewFoodContainer = document.querySelector(
          "#trendingPreview .trendingPreview-foodList"
        );

        const foodContainer = document.createElement("div");
        foodContainer.classList.add("food-container");

        const foodImg = document.createElement("img");
        foodImg.classList.add("food-img");
        foodImg.setAttribute("alt", food.strMeal);
        foodImg.setAttribute("src", food.strMealThumb);

        foodContainer.appendChild(foodImg);
        trendingPreviewFoodContainer.appendChild(foodContainer);

        randomMeals.push(food);
      } else {
        alert("Error en la solicitud a la API");
      }
    }
    console.log("Comidas aleatorias:", randomMeals);
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

    if (response.status === 200) {
      const data = await response.json();
      const categories = data.categories;

      categories.forEach((category, index) => {
        const categoryTitle = category.strCategory;
        const categoryContainer = document.querySelector(
          `.category-container:nth-child(${index + 1}) .category-title`
        );
        categoryContainer.textContent = categoryTitle;
      });
    } else {
      alert("Error en la solicitud a la API");
    }
  } catch (error) {
    console.error(error);
  }
}

//Llamar a las funciones
getRandomFoodPreview();
getCategoriesPreview();

//POR CATEGORIAS

// www.themealdb.com/api/json/v1/1/filter.php?c=Vegan --- HAY TRES
//ID: 52942, 52794, 52775.

//https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian  --- HAY +10

//https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast   --- HAY 8

//https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert   -- HAY +10

// -------------------

// POR ID

//buscar idMeal, strMeal(nombre plato),strCategory(vegano etc), strArea (pais)
// strInstructions (instrucciones de los platos)

//sale mucha más información
