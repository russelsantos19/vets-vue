
let person = new Vue({
  el: '#app',
  data: {
    username: '',
    password: '',
    inputType: 'password',
    visible: 'visibility',
    errors: {
      usernameErr: '',
      passErr: '',
    },
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
  }
})