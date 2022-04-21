<template>
  <div id="recipes-gallery">
    <div class="gallery-options">
      <OptionGallery 
        :search = "search"
            v-on:emitedSearch = "retrieveRecipeData"
        :recipeSortType = "recipeSortType"
            v-on:sortRecipeData="sortRecipeData"
      />
    </div>
    <div class="gallery">
      <RecipeCard
        v-for="recipe in sortRecipeData"
          :key="recipe.id"
          :name="recipe.title"
          :pictureUrl="recipe.image"
          :id="recipe.id"
          />
          
    </div>
  </div>
</template>

<script>
  import RecipeCard from './components/RecipeCard.vue'
  import OptionGallery from './components/SearchBar.vue'
  import {getRecipeDataByName} from './services/api/spoonicularAPI.js'

  export default {
    name: 'RecipesGallery',

    created: function(){
      this.retrieveRecipeData(this.search);
    },

    components: {
      RecipeCard,
      OptionGallery
      },

    data() {
      return {
        recipesData: [],
        search : localStorage.getItem("search") || "pasta",
        recipeSortType : localStorage.getItem("recipeSortType") || "AZName"
      }
    },

    watch:{
      search: function(newSearch){
        localStorage.setItem("search",newSearch)},

      recipeSortType: function(newRecipeSortType){
        localStorage.setItem("recipeSortType",newRecipeSortType)
      }
    },
    computed:
    {
      sortRecipeData: function() {
        //const field = ["AZName", "ZAName"].includes( this.recipeSortType) ? "name" :""
        const reversed = ["ZAName"].includes(this.recipeSortType)
        console.dir(this.recipesData)
        const comparator = (a, b) => (a.title).localeCompare(b.title)
        let data = this.recipesData
        data = data.sort(comparator)
        if (reversed) data = data.reverse()
        console.log("data :")
        console.dir(data)
        return data
      },
    },
    
    
    methods: {
      
            async retrieveRecipeData(recipeName) {
              try {
                console.log("recipe name is ..."+ recipeName)
                this.recipesData = await getRecipeDataByName(recipeName);
                this.search=recipeName;
                
              } catch (error) {
                alert("Trop de requêtes")
              }       
            },

            /* async sortRecipeData(newRecipeSortType) {
              try {
                console.log("type of sort is ..."+ newRecipeSortType)
                const reversed = ["ZAName"].includes(newRecipeSortType)
                console.dir(this.recipesData)
                const comparator = (a, b) => (a.title).localeCompare(b.title)
                if (reversed) {
                this.recipesData = await this.recipesData.sort(comparator).reverse();
                }
                else {
                  this.recipesData = await this.recipesData.sort(comparator);
                }
                
              } catch (error) {
                alert("Problème dans le tri")
              }       
            },*/

            displaySearchedRecipes : function(name) {
              this.search=name
              console.log(this.search)
            }, 
    }
  }
  </script>

  <style>
  html,body {
    background-color: #ffd085;
    margin: 0;
    padding: 0;
  }

  #recipes-gallery {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .gallery {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

</style>