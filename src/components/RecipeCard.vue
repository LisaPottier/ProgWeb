<template>
  <div class="recipe-card">
    <img class="picture" v-bind:src="pictureUrl"/> <!--direct depuis get recipe by name : https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=a5ac1bab04ea47ed90a7851e998c7660 -->
    <div>
      <h2 class="name">{{name}}</h2> <!--direct depuis get recipe by name -->
      <RecipeInformations : id="id">
    </div>  
  </div>
</template>

<script>
import RecipeInformations from './RecipeInformations.vue'
export default {
  name: 'recipe-card',
  components:RecipeInformations,
	props: {
		name: {type: String, required:true},
		pictureUrl: {type: String, default:require("../assets/recette.jpg")},
    id:{required:true},
	}
}
</script>

