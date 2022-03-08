<template>
  <div class="recipe-informations">
    <div>
      <p class="cuisine">{{cuisine}}</p>
      <p class="diet">{{diet}}</p>
      <p class="time">{{time}}</p>
      <p class= "ingredients">{{ingredients}}</p>
      <p class= "wine"> {{wine}}</p>
    </div>  
  </div>
</template>

<script>
export default {
    name: 'recipe-informations',
	props: {
    cuisine : String, 
    id : {required:true},
    diet : String,
    time : String,
    ingredients : [],
    wine : String,
  }
}
</script>