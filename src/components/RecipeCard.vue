<template>
  <div class="recipe-card">
    <img class="picture" v-bind:src="pictureUrl"/> <!--direct depuis get recipe by name : https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=a5ac1bab04ea47ed90a7851e998c7660 -->
    <div>
      <h2 class="name">{{name}}</h2> <!--direct depuis get recipe by name -->
      <p class="cuisine">{{cuisine}}</p> <!--nouvelle requete avec l'id -->
      <p class="diet">{{diet}}</p><!--nouvelle requete avec l'id -->
      <p class="time">{{time}}</p><!--nouvelle requete avec l'id -->
      <p class= "ingredients">{{ingredients}}</p><!--nouvelle requete avec l'id -->
      <p class= "wine"> {{wine}}</p><!--nouvelle requete avec l'id -->
    </div>  
  </div>
</template>

<script>
import ListIngredients from './ListIngredients.vue'
export default {
  name: 'recipe-card',
	props: {
		name: {type: String, required:true},
		cuisine: String, 
    diet : String,
    time : String,
    ingredients : ListIngredients,
    wine : String,
		pictureUrl: {type: String, default:require("../assets/recette.jpg")}
	}
}
</script>

