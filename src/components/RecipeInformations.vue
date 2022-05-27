<template>
  <div class="recipe-details">
    <h1 class="name" > {{name}}</h1>
    <h2 class ="diet" v-if="recipeInfoData.vegetarian==true" > vegetarian </h2>
    <h2 class ="time" > cooking time : {{recipeInfoData.readyInMinutes}} min</h2>
    <div class="ingredients-list">
      <h2> ingredients </h2>
      <p v-for="ingredient in recipeInfoData.extendedIngredients" :key="ingredient.id">
          {{ingredient.amount}} {{ingredient.unit}} of {{ingredient.name}} 
      </p> 
    </div>
  </div>
</template>

<script>
import { getRecipeInfoById } from './../services/api/spoonicularAPI'

export default {
  name: 'recipe-informations',
  props: {
    name: String,
    cuisine : String, 
    id : {required:true},
    diet : String,
    time : String,
    ingredients : [],
  },

  created: function(){
      this.retrieveRecipeInfo(this.id);
      console.log(this.id)
    },

  data() {
    return {
      recipeInfoData: [],
    }
  },

  methods: {
      async retrieveRecipeInfo(recipeId) {
        this.recipeInfoData = await getRecipeInfoById(recipeId);
        console.dir("recipe infos: "+ this.recipeInfoData)      
      }
      
  }

}
</script>

<style scoped>
</style>