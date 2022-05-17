<template>
  <div class="recipe-details">
    <h1 class="name" > {{name}}</h1>
    <h2 class ="cuisine" > {{cuisine}}</h2>
    <h2 class ="diet" > {{diet}}</h2>
    <h2 class ="time" > {{time}}</h2>
    <p class="ingredients"> {{ingredients}}</p>
  </div>
</template>

<script>

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

  data() {
    return {
      recipeInfoData: [],
    }
  },

}
</script>