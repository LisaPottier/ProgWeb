<template>
  <div class="list-ingredients">
    <div>
      <h2 class="ingredient1">{{ingredient1}}</h2>
      <h2 class="ingredient2">{{ingredient2}}</h2>
    </div>  
  </div>
</template>

<script>
import ingredient from '@/Ingredient'
export default {
  name: 'list-ingredients',
	props: {
        ingredient1 : ingredient,
        ingredient2 : ingredient,
  }
}
</script>