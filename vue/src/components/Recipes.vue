<template>
  <section id="recipe">
    <h1>Recipes</h1>
    <ul>
      <li v-for="recipe in recipes"><a :href="recipe.slug">{{ recipe.title }}</a></li>
    </ul>
  </section>

</template>

<script>
const axios = require('axios')
export default {
  name: 'Recipes',
  data () {
    return {
      recipes: [],
      users: []
    }
  },
  created () {
    axios({
      method: 'get',
      url: 'http://localhost:5000/recipes'
    })
    .then(response => this.recipes.push(...response['data']))
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
