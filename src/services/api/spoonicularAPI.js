var keyTab=['08595c4dc19241739b2ff12404a4d0ce', 'a5ac1bab04ea47ed90a7851e998c7660'];

const getRecipeDataByName =
    async function(recipeName) {
    let response =undefined
    let isWorking =false;
    for (let i = 0; i < keyTab.length && !isWorking; i++){
      const pathRecipe =
        'https://api.spoonacular.com/recipes/complexSearch?apiKey='+keyTab[i]+'&query=' + recipeName
      response = await fetch(pathRecipe)
      if (response.status == 200) {
        isWorking=true;
        const data = await response.json()
        console.log("entrée dans le status ok")
        console.log(data.results)
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
  const pathRecipeInfos =
    'https://api.spoonacular.com/recipes/716429/information?apiKey='+'08595c4dc19241739b2ff12404a4d0ce'+'&id=' + recipeId
  const response = await fetch(pathRecipeInfos)
  if (response.status == 200) {
    const data = await response.json()
    console.log(data)
    return data
  }
  else {
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