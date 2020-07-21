
let person = new Vue({
  el: '#app',
  data: {
    // fname: '',
    // lname: '',
    // gender: '',
    // birthdayMonth: '0',
    // birthdayDay: '0',
    // birthdayYear: '0',
    // cellNum: '',
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
          // name: `${this.fname} ${this.lname}`,
          // firstName: this.fname,
          // lastName: this.lname,
          // gender: this.gender,
          // birthday: `${this.birthdayMonth} ${this.birthdayDay} ${this.birthdayYear}`,
          // cellphoneNumber: this.cellNum,
          username: this.username,
          email: this.email,
          password: this.password,
        };
        console.log(personalData);  
        // this.fname = '';
        // this.lname = '';
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
  }
})