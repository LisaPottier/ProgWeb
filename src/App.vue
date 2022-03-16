<template>
  <div id="recipes-gallery">
    <div class="gallery-options">
      <input type="text" v-model="search" placeholder="Chercher une recette">

		<label for="dog-sort">Trier par : </label>
		<select v-model="dogsSortType" id="dog-sort">
        <option value="AZName">Noms de A à Z</option>
        <option value="ZAName">Noms de Z à A</option>
        <option value="AZBreed">Espèces de A à Z</option>
        <option value="ZABreed">Espèces de Z à A</option>
				</select>
    </div>
    <div class="gallery">
      <RecipeCard
        v-for="recipe in recipeData"
          :key="recipe.id"
          :name="recipe.title"
          :pictureUrl="recipe.image"
          :id="recipe.id"/>
    </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import RecipeCard from './components/RecipeCard.vue'
import {getRecipeDataByName} from './services/api/spoonicularAPI.js'
//key = a5ac1bab04ea47ed90a7851e998c7660

export default {
  name: 'RecipesGallery',
  components: {
    RecipeCard
    },
  data() {
    return {
      recipeData: [],
      search :""
    }
  },
  created: function(){
    this.retrieveRecipeData("pasta tuna");
  },
  methods: {
    
          async retrieveRecipeData(recipeName) {
            try {
               this.recipeData = await getRecipeDataByName(recipeName);
              
            } catch (error) {
              alert("Trop de requêtes")
              
            }
                 
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
.gallery{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

}
</style>




