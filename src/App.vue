<template>
  <div id="recipes-gallery">
    <div class="header">
      <div class="yummImac-visual">
        <img src="./assets/yummImac.png">
      </div>
      <div class="gallery-options">
        <OptionGallery 
          :search = "search"
              v-on:emitedSearch = "retrieveRecipeSearch"
          :sortType = "sortType"
              v-on:emitedSortType = "retrieveSortedData"
        />
      </div>
    </div>
    <div class="gallery">
      <ErrorMessage v-if="sortRecipeData.length==0"/>
      <RecipeCard
        v-for="recipe in sortRecipeData" :key="recipe.id"
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
  import ErrorMessage from './components/ErrorMessage.vue'
  import {getRecipeDataByName} from './services/api/spoonicularAPI.js'

  export default {
    name: 'RecipesGallery',

    created: function(){
      this.retrieveRecipeSearch(this.search);
    },

    components: {
      OptionGallery,
      RecipeCard,
      ErrorMessage
      },

    data() {
      return {
        recipesData: [],
        search : localStorage.getItem("search") || "",
        sortType : localStorage.getItem("sortType") || "AZName"
      }
    },

    watch:{
      search: function(newSearch){
        localStorage.setItem("search",newSearch)},

      sortType: function(newSortType){
        localStorage.setItem("sortType",newSortType)
      }
    },
    computed:
    {
      sortRecipeData: function() {
        const reversed =["ZAName"].includes(this.sortType)
        console.log("sort :" + this.sortType)
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
                alert("Too many request")
              }       
            },

            retrieveSortedData(newSortType){
              this.recipesData = this.sortRecipeData;
              this.sortType=newSortType;
            },      
    }
  }
  </script>

  <style>
  html,body {
    margin: 0;
    padding: 0;
    width : 100%;
    height: 100%;
  }
  body {
    background: no-repeat url("./assets/Bandeau.png"), #ffd085;
    background-size: 100vw 20vh;
    background-position: top;
    font-size: 15px;
  }

  #recipes-gallery {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: black;
    width: 100%;
  }
  .gallery {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
  .header{
    width:100%;
    display: flex;
    flex-direction: row;
    align-items: top;
    padding : 2%;
    box-sizing: border-box;
    justify-content: flex-start;
  }
  .yummImac-visual img{
    width: 100%;
  }
  .yummImac-visual{
    width: 300px;
    margin:0 20px;
  }
  .gallery-options{
    width:auto;
  }
  @media (max-width: 800px){
    

  }

  @media (max-width: 575.98px)
{
  .header{
    flex-direction: column;
    align-items: center;
  }

    body {
    background-size: contain;
    font-size : 10px;
    }
}

</style>