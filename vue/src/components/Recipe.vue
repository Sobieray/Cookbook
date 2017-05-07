<template>
  <section id="recipe">
    <header class="hero">
      <img >
      <h1>{{ title }}</h1>
    </header>
    <main>
      <p>{{ instructions }}</p>
    </main>
    <md-table v-once>
      <md-table-header>
        <md-table-row>
          <md-table-head>Ingredients</md-table-head>
          <md-table-head md-numeric>Quanity</md-table-head>
          <md-table-head md-numeric>Fat (g)</md-table-head>
          <md-table-head md-numeric>Carbs (g)</md-table-head>
          <md-table-head md-numeric>Protein (g)</md-table-head>
        </md-table-row>
      </md-table-header>

      <md-table-body>
        <md-table-row v-for="(row, index) in 5" :key="index">
          <md-table-cell>Dessert Name</md-table-cell>
          <md-table-cell v-for="(col, index) in 4" :key="index" md-numeric>10</md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>
  </section>
</template>

<script>
const axios = require('axios')
// const router = require('router')
export default {
  name: 'Recipe',
  data () {
    return {
      link: this.$route.path,
      match: false,
      title: '',
      instructions: ''
    }
  },
  created () {
    const app = this
    axios({
      method: 'get',
      url: 'http://localhost:5000/recipes'
    })
    .then(response =>
      response.data.forEach(function (el) {
        if (app.link === el.slug) {
          app.title = el.title
          app.instructions = el.instructions
          app.match = true
        }
      })
    )
    setTimeout(function () {
      if (app.match === false) {
        app.$router.push('/404')
      }
    }, 500)
  },
  methods: {
  }
}
</script>
<style scoped>
  #recipe header {
    position: relative;
    font-size: 100%;
  }
  img {
    width: 100%;
    height: 350px;
    background-color: grey;
  }
  h1 {
    position: absolute;
    top: 22%;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    font-size: 4em;
  }
  main {
    max-width: 1200px;
    margin: 0 auto;
    text-align: left;
    padding: 2rem;
  }
</style>
