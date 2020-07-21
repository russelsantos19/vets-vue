let personLog = new Vue({
  el: '#app',
  data: {
    inputType: 'password',
    visible: 'visibility',
  },
  methods: {
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