var keyTab=['08595c4dc19241739b2ff12404a4d0ce', 
            'a5ac1bab04ea47ed90a7851e998c7660',
            'b5c65a0cb16341f5b3dc7352879561bd',
            'd96cec0a1f984465b6e59988f9470793',
            '97e8377417434560989caa45f3d58875',
            '5f4fed27cb9d4e1a97b882dd8d3a61b2',
          '99ef1b9293574bae9b51ab90604ee2a9',
        'bea378ed67504c779f1681d7d95a3398'];
const getRecipeDataByName =
    async function(recipeName) {
    let response =undefined
    let isWorking =false;
    for (let i = 0; i < keyTab.length && isWorking==false; i++){
      const pathRecipe =
        'https://api.spoonacular.com/recipes/complexSearch?apiKey='+keyTab[i]+'&query=' + recipeName +'&number=10'
      response = await fetch(pathRecipe)
      if (response.status == 200) {
        isWorking=true;
        const data = await response.json()
        return data.results
      } 
    }
    if(!isWorking)
    {
      console.log("is not working")
      new Error(response.statusText)
    }
}

const getRecipeInfoById =
  async function(recipeId) {
  let response =undefined
  let isWorking =false;
  for (let i = 0; i < keyTab.length && !isWorking; i++){
    const pathRecipeInfos =
      'https://api.spoonacular.com/recipes/716429/information?apiKey='+keyTab[i]+'&id=' + recipeId
    response = await fetch(pathRecipeInfos)
    if (response.status == 200) {
      isWorking=true;
      const data = await response.json()
      return data
    }
  }
    if(!isWorking)
    {
      console.log("is not working")
      new Error(response.statusText)
    }
}

const getIngredientsById=
    async function(recipeId) {
    const pathIngredients =
        'https://api.spoonacular.com/recipes/716429/information?apiKey='+'08595c4dc19241739b2ff12404a4d0ce'+'&id=' + recipeId
    const response = await fetch(pathIngredients)
    if (response.status == 200) {
        const data = await response.json()
        console.log("ingredients by id " + data.extendedIngredients);
        return data.extendedIngredients
    }
    else {
        new Error(response.statusText)
    }
}

export {getRecipeDataByName}
export {getRecipeInfoById}
export {getIngredientsById}