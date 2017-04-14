<template>
  <section id="recipe">
    <h1>Recipes</h1>
    <ul>
      <li v-for="recipe in recipes"><a :href="recipe.slug">{{ recipe.name}}</a></li>
    </ul>
  </section>
</template>

<script>
// const axios = require('axios')
export default {
  name: 'Recipes',
  data () {
    return {
      recipes: [
        {
          name: 'Matts Gumbo',
          slug: '/recipes/matts-gumbo'
        },
        {
          name: 'Jennas Angle Hair Pasta',
          slug: '/recipes/jennas-angle-hair-pasta'
        },
        {
          name: 'Natalies Superfood Kale and Cabbage Salad',
          slug: '/recipes/natalie-loves-her-big-bro-matt'
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  font-weight: bold;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
