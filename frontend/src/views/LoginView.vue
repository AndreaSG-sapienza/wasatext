<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="doLogin">
      <input type="text" v-model="username" placeholder="Username" required>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      username: ''
    }
  },
  methods: {
    doLogin() {
      // Login logic will go here
    }
  }
}
</script>
