<template>
  <div class="recipe-card" @mouseover="upHere = true" @mouseleave="upHere = false" >
    <div class="resume" v-if="isDetailsOn==false" v-on:click="updateDetail">
      <img class="picture" v-bind:src="pictureUrl"/> 
      <h2 class="name">{{name}}</h2> 
      <h2 v-show="upHere" class="message-click">Click to see the details</h2>
    </div>
    
    <div class ="details" v-else>
      <RecipeInformations
              :id="this.id"
              :name="this.name"
      />
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
      upHere : false,
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
      },
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
.details img{
  height: 20px;
  width: 20px;
}
.details button{
  background-color:transparent ;
  border: none;
}
.details{
  box-sizing: border-box;
  padding: 10px;
  background:orange ;
}
.message-click{
  width: 50%;
  size:7px;
  color:white;
  background-color:rgba(0, 0, 0, 0.434);
  position:relative;
  top:-200px;
  left:22.5%;
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