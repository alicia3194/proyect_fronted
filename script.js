async function getCategoriesFoodPreview() {
  try {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const data = await response.json();
    const food = data.meals;

    console.log(data, food);
  } catch (error) {
    console.error(error);
  }
}

getCategoriesFoodPreview();

//   if (response.status === 200) {
//     const data = await response.json();

//     const categories = data.meals;

//     categories.forEach((category) => {
//       console.log(category.strCategory);
//     });
//   } else {
//     alert("Error en la solicitud a la API");
//   }
// } catch (error) {
//   console.error(error);
// }

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
