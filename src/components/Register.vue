<template>
<div>
<div class="w3-card-4">
  <br>
 <router-link to="/view-users">
  <div class="w3-quarter w3-card w3-blue w3-hover-shadow" style="height: 50px;">
    <p><h4>View Survey Managers</h4></p><br>
  </div>
  </router-link>
 <div  class="w3-container w3-white">

 <center><h2 class="w3-panel w3-blue w3-round-xlarge">Survey Feed - Register New Survey Manager</h2></center>
       </div>
 
       <h4><div class="error w3-text-red" v-html="error"></div></h4>
       <br>
       <h4>Please Provide Email Address for Survey Manager</h4>
       <form name="album-register-user"
       autocomplete="off">
       <center>
       <input type="text" class="w3-input" style="width: 50%;"  name="email"   placeholder=""
    v-model="email"
   />
   </center>
   <br>
   
   <h4>Please Provide a Password for Survey Manager</h4>
   <center>
   <input type="text" class="w3-input" style="width: 50%;" 
          name="password"
          placeholder=""
          v-model="password" autocomplete="new-password"
   />
   </center>
   </form>
   <br>
   <br>

    <button @click="register" class="w3-btn w3-blue">Register</button>
    <br><br>
</div>
</div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        console.log('register button', this.email, this.password)
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        console.log(response.data.token)
        this.error = 'New Survey Manager Created SuccessFully...'
        this.email = ' '
        this.password = ' '
        this.$routestore.dispatch('setToken', response.data.token)
        this.$routestore.dispatch('setUser', response.data.user)
        console.log(response)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://www.w3schools.com/w3css/4/w3.css";
</style>
