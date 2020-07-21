<template>
  <div id="sign-up">
    <h1>Sign up</h1>

    <div class="container">
      <i class="material-icons closeWindow" @click="closeWindow()">close</i>
      <h3>SIGN UP WITH...</h3>

      <div id="upperButtons">
        <button class="signUpButtons" id="signUpFb"><strong>Facebook</strong></button>
        <!-- <br /><br /> -->
        <button class="signUpButtons" id="signUpTwitter"><strong>Twitter</strong></button>
        <br /><br />
        <button class="signUpButtons" id="signUpLinkedIn"><strong>LinkedIn</strong></button>
        <br /><br />
        <button class="signUpButtons" id="signUpGoogle"><strong>Google</strong></button>
        <br /><br />
      </div>
      <br />
      <div style="text-align: center;" class="vl">
        <span class="vl-innertext">OR</span>
      </div>
      <br /><br />

    <form @submit.prevent="onSubmit">

      <!-- Email Address -->
      <label class="inputLabel" id="email" for="email">Email Address</label><br />
      <input type="text" name="email" ref="email" v-model="email"
              placeholder="name@company.com" required><br /><br />
      <p class="errorAlert" v-if="!(/^\S+@\S+\.\S+$/.test(this.email)) && errors.emailErr.length">
        {{ errors.emailErr }}</p><br />

      <!-- Username -->
      <label class="inputLabel" for="username">Username</label><br />
      <input type="text" name="username" ref="username" v-model="username"
              placeholder="Username" required><br /><br />
      <p class="errorAlert" v-if="!(/^[a-zA-Z0-9]+$/.test(this.username)) && errors.usernameErr.length">
        {{ errors.usernameErr }}</p><br />

      <!-- Password -->
      <label class="inputLabel" for="password">Password</label>
      <div class="passwordContainer">
        <input :type="inputType" name="password" ref="password"
              v-model="password" placeholder="Use number and letter" required>
        <i class="material-icons" @click="showPassword()">{{ visible }}</i>
      </div><br />
      <p class="errorAlert" v-if="this.password.length < 6 && errors.passErr.length">
          {{ errors.passErr }}</p><br />

      <!-- Confirm Password -->
      <label class="inputLabel" for="confirmPass">Confirm Password</label>
      <div class="passwordContainer">
        <input :type="inputType" name="confirmPass" ref="confirmPass"
                v-model="confirmPass" placeholder="Verify password" required>
        <i class="material-icons" @click="showPassword()">{{ visible }}</i>
      </div><br />
      <p class="errorAlert" v-if="this.password != this.confirmPass && 
                errors.confirmPassErr.length">{{ errors.confirmPassErr }}</p>
      <br /><br />

      <!-- Submit Button -->
      <input id="submitButton" type="submit" value="Create Account">
      <br />
      <br />

    </form>
    <span>Already have an account?</span><br />
    <button id="signInButton" @click="goToSignIn()">Sign In</button>
    </div><br /><br />

  </div>
</template>

<script>
  export default {
    name: 'signUp',
    el: '#sign-up',
    data() {
      return {
        username: '',
        email: '',
        password: '',
        confirmPass: '',
        inputType: 'password',
        visible: 'visibility',
        errors: {
          usernameErr: '',
          emailErr: '',
          passErr: '',
          confirmPassErr: '',
        },
        selectTab: 'Sign In',
      }
    },
    methods: {
      onSubmit() {
        if (!(/^[a-zA-Z0-9]+$/.test(this.username))) {
          this.errors.usernameErr = 'Enter letters and numbers only.';
          this.$refs.username.focus();
        } else if (!(/^\S+@\S+\.\S+$/.test(this.email))) {
          this.errors.emailErr = 'Enter a valid email address.';
          this.$refs.email.focus();
        } else if (this.password.length < 6) {
          this.errors.passErr = 'Password must be atleast six characters.';
          this.$refs.password.focus();
        } else if (this.password != this.confirmPass) {
          this.errors.confirmPassErr = 'Password do not match.';
          this.$refs.confirmPass.focus();
        } else {
          let personalData = {
            username: this.username,
            email: this.email,
            password: this.password,
          };
          console.log(personalData);  
          this.username = '';
          this.email =  '';
          this.password = '';
          this.confirmPass = '';
          this.errors.usernameErr = '';
          this.errors.emailErr = '';
          this.errors.passErr = '';
          this.errors.confirmPassErr = '';
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
      goToSignIn() {
        this.$emit('goToSignIn');
      },
      closeWindow() {
        this.$emit('closeWindow');
      },
    }
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  @import '../assets/stylesheet/sign-up.css';

</style>