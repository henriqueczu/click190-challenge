<template>
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
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      async login() {
        try {
          if (this.email === 'rafa@click.com' && this.password === 'rafasenha') {
            this.$router.push('/map');
          } else {
            console.error('Credenciais inválidas. Por favor, verifique seu email e senha.');
          }
        } catch (error) {
          console.error('Erro ao fazer login:', error);
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .login-container {
    max-width: 25%;
    margin-left: 37.5%;
    margin-top: 5%;
    padding: 40px 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
  }
  
  h2 {
    text-align: center;
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
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .btn {
    width: 100%;
    padding: 10px;
    font-size: 18px;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .btn:hover {
    background-color: #0056b3;
  }
  </style>
  