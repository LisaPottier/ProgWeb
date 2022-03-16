<template>
  <div class="recipe-card">
    <img class="picture" v-bind:src="pictureUrl"/> 
    <h2 class="name">{{name}}</h2>
    <RecipeInformations :id="id"/>  
  </div>
</template>

<script>
import { getRecipeInfoById } from '../services/api/spoonicularAPI';
import { getIngredientsById } from '../services/api/spoonicularAPI';
import RecipeInformations from './RecipeInformations.vue'

export default {
  name: 'recipe-card',
  components:{
    RecipeInformations,
  },
	props: {
		name: {type: String, required:true},
		pictureUrl: {type: String, default:require("../assets/recette.jpg")},
    id : {required:true},
	},
  data() {
    return {
      ingredientsData: [],
      recipeInfoData: [],
    }
  },
  created: function(){
    this.retrieveRecipeInfoData(this.id);//654959 (essaie)
  },
  methods: {
      async retrieveRecipeInfoData(recipeId) {
              this.recipeInfoData = await getRecipeInfoById(recipeId);
              console.log(this.recipeInfoData)
      },
      async retrieveIngredientsData(recipeId) {
              this.ingredientData = await getIngredientsById(recipeId);
              console.log(this.ingredientData)
      }
  },
}
</script>

<style scoped>
.recipe-card{
  width: 50%;
}
</style>
