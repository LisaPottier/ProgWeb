const getRecipeDataByName =
    async function(recipeName) {
  const pathRecipe =
      'https://api.spoonacular.com/recipes/complexSearch?apiKey=a5ac1bab04ea47ed90a7851e998c7660&query=' + recipeName
  const response = await fetch(pathRecipe)
  if (response.status == 200) {
    const data = await response.json()
    console.log(data.results);
    return data.results
  }
  else {
    new Error(response.statusText)
  }
}


const getRecipeInfoById =
    async function(recipeId) {
  const pathRecipeInfos =
    'https://api.spoonacular.com/recipes/716429/information?apiKey=a5ac1bab04ea47ed90a7851e998c7660&id=' + recipeId
  const response = await fetch(pathRecipeInfos)
  if (response.status == 200) {
    const data = await response.json()
    console.log(data.results);
    return data.results
  }
  else {
    new Error(response.statusText)
  }
}

export {getRecipeDataByName}
export {getRecipeInfoById}