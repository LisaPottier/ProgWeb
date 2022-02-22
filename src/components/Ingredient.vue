<template>
  <div class="ingredient">
    <img class="picture" v-bind:src="pictureUrl"/>
    <div>
      <h2 class="nom">{{nom}}</h2>
      <h2 class="quantité">{{quantité}}</h2>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'ingredient',
	props: {
        nom : String,
        quantité : String,	
		pictureUrl: {type: String, default:require("../assets/image-coming-soon.jpg")}
	}
}
</script>