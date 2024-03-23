<template class ="container">
 <div class="background">
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="login" class="login-form">
        <div class="form-group">
          <input type="email" v-model="email" placeholder="Email" class="form-control">
        </div>
        <div class="form-group">
          <input type="password" v-model="password" placeholder="Password" class="form-control">
        </div>
        <button type="submit" class="btn">Login</button>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    async login() {
      try {
        if (this.email === 'rafa@gmail.com' && this.password === 'rafasenha') {
          this.$router.push('/map');
        } else {
          this.errorMessage = 'Email ou senha inválidos. Por favor, verifique novamente.';
        }
      } catch (error) {
        console.error('Erro ao fazer login:', error);
      }
    }
  }
}
</script>

<style scoped>
.background {
  background-color: #16181d;
  height: 100vh;
  margin: 0;
  padding: 10%;
}

.login-container {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 15px;
  background-color: #0e0e0e00;
}

h2 {
  text-align: center;
  margin: 0 0 20px;
  color: #fff;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

.form-control {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ffffff;
  border-radius: 15px;
}

.btn {
  padding: 10px;
  font-size: 18px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 15px;
  cursor: pointer;
}

.btn:hover {
  background-color: #0056b3;
}

.error-message {
  margin-top: 10px;
  color: red;
}
</style>

  