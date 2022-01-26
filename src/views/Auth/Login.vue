<template>
  <div id="login">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <br>
        <div class="card">
          <div class="card-header">Login</div>
          <div class="card-body">
            <div class="row mb-3">
              <label for="user_id" class="col-md-4 col-form-label text-md-end">아이디</label>
              <div class="col-md-6">
                <input id="user_id" type="text" class="form-control" name="user_id" v-model="item.user_id" autofocus>
              </div>
            </div>
            <div class="row mb-3">
              <label for="password" class="col-md-4 col-form-label text-md-end">비밀번호</label>
              <div class="col-md-6">
                <input id="password" type="password" class="form-control" name="password" v-model="item.password" autofocus>
              </div>
            </div>
            <div class="row mb-0">
              <div class="col-md-8 offset-md-4">
                <button @click="login" class="btn btn-primary">
                  로그인
                </button>
                <a class="btn btn-link" href="/id.request">
                  아이디 찾기
                </a>
                /
                <a class="btn btn-link" href="/password.request">
                  비밀번호 찾기
                </a>
                <a class="btn btn-link" href="/register">
                  회원가입
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import axios from "axios";
import Dashboard from "../../components/Dashboard";

const URL_API_LOGIN = 'http://localhost:8000/api/login/login'

export default {
  name: "Login",
  data() {
    return {
      item: {
        user_id: '',
        password: '',
      },
      errors: [],
    }
  },
  methods: {
    async login() {
      const res = axios.post(URL_API_LOGIN, {
        ...this.item
      }).then(() =>{
        //TODO

        this.$router.push({ name: "Dashboard"});
      // }).catch((error) =>{
      //   this.errors = error.response.data.errors;
      })

      console.log(res)
    },
  },
  watch: {
    'item': {
      deep: true,
      handler() {
        console.log('watch', this.item)
      },
    },
  },
}
</script>

<style scoped>

</style>