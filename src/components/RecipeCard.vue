<template>
  <div class="recipe-card">
    <div class="resume" v-if="isDetailsOn==false" v-on:click="updateDetail">
      <img class="picture" v-bind:src="pictureUrl"/> 
      <h2 class="name">{{name}}</h2> 
    </div>
    <div class ="details" v-else>
      <RecipeInformations 
              :id="id"
              :cuisine="cuisine"
              :diet="diet"
              :time="time"
              :ingredients="ingredients"/> 
      <button v-on:click="updateDetail">
          <img src="../assets/close.png"/>
      </button>
    </div>
  </div>
</template>

<script>

import RecipeInformations from './RecipeInformations.vue'

export default {
  name: 'recipe-card',
  components:{
    RecipeInformations,
  },
	props: {
		name: {type: String, required:true},
		pictureUrl: {type: String, default:require("../assets/image-coming-soon.jpg")},
    id : {required:true},
    cuisine : String, 
    diet : String,
    time : String,
    ingredients : [],
	},
  data() {
    return {
      isDetailsOn: false,
    }
  },
  created: function(){
  },
  methods: {
      updateDetail(){
        if(this.isDetailsOn==false){
          this.isDetailsOn=true
        }
        else{
          this.isDetailsOn=false
        }
      }
  },
}
</script>

<style scoped>
.recipe-card{
  width: calc(50% - 5%);
  margin : 2.5%;
}
.recipe-card img{
   object-fit: cover;
   width: 80%;
}

  @media (max-width: 575.98px)
{
   .recipe-card{
  box-sizing: border-box;
  width: 100%;
  margin : 0;
  padding : 15px;
}
}
</style>