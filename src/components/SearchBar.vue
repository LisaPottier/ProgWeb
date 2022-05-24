<template>
    <div id="gallery-option">
        <div class ="sort-type-selection">
            <label for="recipe-sort"> Trier par : </label>
            <select v-on:change="emitModifySortType" 
              :value="sortType">
                <option value="AZName">Noms de A à Z</option>
                <option value="ZAName">Noms de Z à A</option>
            </select>
        </div>
        <div class = "search-bar">
            <input v-on:keydown.enter="emitModifySearch" type="text" id="searchInput"
                :value="search" 
                placeholder="Chercher une recette">
            <button v-if="search" v-on:click="emitCleanSearch">
                <img src="../assets/close.png"/>
            </button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'gallery-option',
  props :{
    search : String,
    sortType : String,
  },
  methods: {
    //getter to use the parameter in the recipe-gallery component
    emitModifySortType : function(event) {
      this.$emit("emitedSortType",event.target.value)
      console.log(event.target.value)
    },
    emitModifySearch : function(event) {
      this.$emit("emitedSearch",event.target.value)
    },
    emitCleanSearch : function() {
        this.$emit("emitedSearch","");
    }
  }
}
</script>


<style>
.search-bar img{
  height: 15px;
  width: 15px;
}
.search-bar button{
  background-color:transparent ;
  border: none;
}
#gallery-option {
  width:100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  padding : 3%;
}
.search-bar{
  height:20px;
  display: flex;
  flex-direction: row;
  margin: 0 20px;
  align-content: center;
}

@media (max-width: 575.98px)
{
  .search-bar img{
    height: 20px;
    width: 20px;
}
  
  #gallery-option{
    flex-direction: column;
    width: 100%;
  }
  .search-bar{
    width: 100%;
    box-sizing: border-box;
    margin: 10px 0;
    padding : 0px 20px ;
  }
  #searchInput{
    width:100%;
  }
}
</style>