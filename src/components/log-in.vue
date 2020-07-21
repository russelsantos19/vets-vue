<template>
  <div id="log-in">
    <h1>Sign in</h1>
    <div class="container">
      <i class="material-icons closeWindow" @click="closeWindow()">close</i>
      <br />

      <form @submit.prevent="onSubmit">

        <!-- Username -->
        <!-- <label class="inputLabel" for="username">Username</label><br /> -->
        <input type="text" name="username" ref="username" v-model="username"
                placeholder="Username" required><br /><br />
        <p class="errorAlert" v-if="!(/^[a-zA-Z0-9]+$/.test(this.username)) && errors.usernameErr.length">
          {{ errors.usernameErr }}</p><br />

        <!-- Password -->
        <!-- <label class="inputLabel" for="password">Password</label> -->
        <div class="passwordContainer">
          <input :type="inputType" name="password" ref="password"
                v-model="password" placeholder="Password" required>
          <i class="material-icons" @click="showPassword()">{{ visible }}</i>
        </div><br />
        <p class="errorAlert" v-if="this.password.length < 6 && errors.passErr.length">
            {{ errors.passErr }}</p><br />



        <!-- Submit Button -->
        <input id="submitButton" type="submit" value="Log in">
        <br />

      </form><br />

      <div id="options">
        <a id="forgotPassword" href="#" class="btn">Forgot password?</a>
        <span id="signUpButton" @click="goToSignUp()">Create an account?</span> 
      </div>
      <br />

      <div style="text-align: center;" class="vl">
        <span class="vl-innertext">OR</span>
      </div>
      <br /><br />

      <!-- Social Sign In -->
      <!-- <h3>Log in with...</h3> -->

      <div>
        <button class="signInButtons" id="signInFb">Continue with Facebook</button>
        <br />
        <button class="signInButtons" id="signInTwitter">Continue with Twitter</button>
        <br />
        <button class="signInButtons" id="signInLinkedIn">Continue with LinkedIn</button>
        <br />
        <button class="signInButtons" id="signInGoogle">Continue with Google</button>
        <br />
      </div>

      <!-- <p style="display: inline;">Need an account? </p>
      <a href="" @click="goToSignUp()">Sign up</a> -->
    </div><br /><br />
  </div>
</template>

<script>
export default {
  name: 'logIn',
  el: '#log-in',
  data() {
    return {
      username: '',
      password: '',
      inputType: 'password',
      visible: 'visibility',
      errors: {
        usernameErr: '',
        passErr: '',
      },
    }
  },
  methods: {
    onSubmit() {
      if (!(/^[a-zA-Z0-9]+$/.test(this.username))) {
        this.errors.usernameErr = 'Enter letters and numbers only.';
        this.$refs.username.focus();
      }  else if (this.password.length < 6) {
        this.errors.passErr = 'Password must be atleast six characters.';
        this.$refs.password.focus();
      }  else {
        let personalData = {
          username: this.username,
          password: this.password,
        };
        console.log(personalData);  
        this.username = '';
        this.password = '';
        this.errors.usernameErr = '';
        this.errors.passErr = '';
      }
    },
    showPassword() {
      if(this.inputType == 'password') {
        this.visible = 'visibility_off';
        this.inputType = 'text';
      } else {
        this.inputType = 'password';
        this.visible = 'visibility';
      }
    },
    goToSignUp() {
      this.$emit('goToSignUp');
    },
    closeWindow() {
      this.$emit('closeWindow');
    }
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  @import '../assets/stylesheet/log-in.css';

</style>