<template>
  <div class="recipe-card">
    <img class="picture" v-bind:src="pictureUrl"/>
    <div>
      <h2 class="name">{{name}}</h2>
      <p class="cuisine">{{cuisine}}</p>
      <p class="diet">{{diet}}</p>
      <p class="time">{{time}}</p>
      <p class= "ingredients">{{ingredients}}</p>
      <p class= "wine"> {{wine}}</p>
    </div>  
  </div>
</template>

<script>
import ListIngredients from './ListIngredients.vue'
export default {
  name: 'recipe-card',
	props: {
		name: {type: String, required: true},
		cuisine: String, 
    diet : String,
    time : String,
    ingredients : ListIngredients,
    wine : String,
		pictureUrl: {type: String, default:require("../assets/recette.jpg")}
	}
}
</script>

