<template>
  <div class="hello">
    <img src="../assets/w-logo.png">
    <h1>{{ msg }}</h1>
    <h2>Sign-up or Sign-in</h2>
    <ul>
      <li v-for="user in users">{{ user.firstname }} {{ user.lastname }}</li>
    </ul>
    <input type="text" name="firstname" placeholder="First Name">
    <input type="text" name="lastname" placeholder="Last Name">
    <input type="email" name="email" placeholder="Email">
    <input type="submit" @click="addUser">
  </div>
</template>

<script>
const axios = require('axios')
// const app = this
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to the Wilmer Cookbook',
      users: []
    }
  },
  created () {
    axios({
      method: 'get',
      url: 'http://localhost:5000/users'
    })
    .then(response => this.users.push(...response['data']))
  },
  methods: {
    addUser: function () {
      const app = this
      let firstname = document.querySelector('input[name=firstname]')
      let lastname = document.querySelector('input[name=lastname]')
      let email = document.querySelector('input[name=email]')
      console.log(firstname + lastname)
      if (firstname && lastname && email !== '') {
        axios({
          method: 'post',
          url: 'http://localhost:5000/users',
          data: {
            firstname: firstname.value,
            lastname: lastname.value,
            email: email.value
          }
        })
        setTimeout(function () {
          axios({
            method: 'get',
            url: 'http://localhost:5000/users'
          })
          .then(function (response) {
            app.users = response['data']
            return app.users
          })
          firstname.value = ''
          lastname.value = ''
          email.value = ''
        }, 100)
      } else {
        alert('add a first and last name')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
