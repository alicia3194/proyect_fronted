async function vegan() {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegan"
  );
  const data = await res.json();

  const meals = data.meals;

  const imgVegn1 = document.getElementById("img_veg1");
  const imgVegn2 = document.getElementById("img_veg2");
  const imgVegn3 = document.getElementById("img_veg3");

  imgVegn1.src = meals[0].strMealThumb;
  imgVegn2.src = meals[1].strMealThumb;
  imgVegn3.src = meals[2].strMealThumb;
}

vegan();

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
