<template>
  <div>
    Dashboard <br>
    <div v-if="user">
      Name: {{user.name}} <br>
      user_id: {{user.user_id}}<br><br>
      <button @click="logout">Logout</button>
    </div>

  </div>
</template>
<script>
import axios from "axios";
const URL_API_LOGOUT = 'http://localhost:8000/api/logout'
const URL_API_USER = 'http://localhost:8000/api/user'

export default {
  data(){
    return{
      user: null
    }
  },
  methods:{
    logout(){
      axios.post(URL_API_LOGOUT).then(()=>{
        this.$router.push({ name: "Home"})
      })
    }
  },
  mounted(){
    axios.get(URL_API_USER).then((res)=>{
      this.user = res.data
    })
  }
}
</script>