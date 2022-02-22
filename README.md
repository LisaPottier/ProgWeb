ProgWeb

Lien doc API :https://pro.europeana.eu/page/search#colour-palette
URL API : https://api.europeana.eu/record/v2/search.json

__________________________________________________

--1--
Si ça marche pas qd on compile sur un autre ordi :
npm install
ou
npm-i
(refait les librairies ext)

__________________________________________________

--2 --
composant
Vue.component('my-component', configuration)
my App= new Vue({render : h=> h(myComponent) })
myApp.$mount('#app')

__________________________________________________
--> Single file component
<template>
   <div id="app">
      <p>Hello world</p>
   </div>
</template>

<script>//lu en premier dans le component
export default {//permet à Vue.js de recup la configuration
   name: 'App',
}
</script>

<style>
p {//style CSS
   text-align : center;
   font-size: 18px;
}
</style> //scoped > sinon ça modifie le style dans tout le site

___________________________________
Utiliser ce component dans un autre:

[dans le component conteneur]
import MyComponent from "[chemin autre componenent]"

export default {
    name : 'myParentComponent',
    components: { MyComponent }
}



