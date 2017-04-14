<template>
  <section id="recipe">
  
    <h2>{{ $route.params.name }}</h2>
  </section>
</template>

<script>
// const axios = require('axios')
export default {
  name: 'Recipe',
  data () {
    return {
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
