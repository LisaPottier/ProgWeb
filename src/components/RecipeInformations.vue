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