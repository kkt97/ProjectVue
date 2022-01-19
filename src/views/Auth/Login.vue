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
                <button @click="Login" class="btn btn-primary">
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
            <router-view :key="$route.fullPath"></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import axios from "axios";

const URL_API_LOGIN = 'http://localhost:8000/api/Login'

export default {
//   name: "Login",
//   data() {
//     return {
//       item: {
//         user_id: '',
//         password: '',
//       },
//       items: [],
//     }
//   },
//   methods: {
//     async Login(e) {
//       this.errors = [];
//       if (!this.email) {
//         this.errors.push('Email required.');
//       }
//       if (!this.password) {
//         this.errors.push('Password required.');
//       }
//       else
//       {
//         var formContents = jQuery("#createAdministrator").serialize();
//
//
//       axios.post('/URL_API_LOGIN', formContents).then(function(response, status, request) {
//         alert(response.data.user);
//
//
//       }, function() {
//         console.log('failed');
//       });
//     }
//
//       e.preventDefault();
//     }
//   }
}
</script>

<style scoped>

</style>