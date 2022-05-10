<template>
  <div id="recipes-gallery">
    <div class="gallery-options">
      <OptionGallery 
        :search = "search"
            v-on:emitedSearch = "retrieveRecipeSearch"
        :recipeSortType = "recipeSortType"
            v-on:emitedRecipeSortType = "retrieveSortedData"
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
      this.retrieveRecipeSearch(this.search);
    },

    components: {
      RecipeCard,
      OptionGallery
      },

    data() {
      return {
        recipesData: [],
        search : localStorage.getItem("search") || "",
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
        const reversed =["ZAName"].includes(this.recipeSortType)
        console.log("sort :" + this.recipeSortType)
        const comparator = (a, b) => (a.title).localeCompare(b.title)
        let data = this.recipesData
        data = data.sort(comparator)
        if (reversed) data = data.reverse()
        console.log("is reversed :" + reversed)
        console.log("data :")
        console.dir(data)

        return data
      },
    },
    
    
    methods: {
      
            async retrieveRecipeSearch(recipeName) {
              try {
                console.log("recipe name is ..."+ recipeName)
                this.recipesData = await getRecipeDataByName(recipeName);
                this.search=recipeName;
                
              } catch (error) {
                alert("Trop de requêtes")
              }       
            },
            retrieveSortedData(sortType){
              this.recipesData = this.sortRecipeData;
              this.recipeSortType=sortType;
            },

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