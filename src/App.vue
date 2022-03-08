<template>
  <div id="recipes-gallery">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <RecipeCard 
      v-for="recipe in recipeData"
      :key="recipe.id"
      :name="recipe.title"
      :pictureUrl="recipe.image"/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import RecipeCard from './components/RecipeCard.vue'
import {getRecipeDataByName} from './services/api/spoonicularAPI.js'


export default {
  name: 'RecipesGallery',
  components: {
    RecipeCard
    },
  data() {
    return {
      recipeData: [],
    }
  },
  created: function(){
    this.retrieveRecipeData("pasta");
  },
    methods: {
            async retrieveRecipeData(recipeName) {
                    this.recipeData = await getRecipeDataByName(recipeName);
                    console.log(this.recipeData[0])
            }
    }
}
</script>

<style>
#recipes-gallery {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>




