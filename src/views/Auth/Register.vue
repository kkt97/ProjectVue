<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <br>
        <div class="card">
          <div class="card-header">Register</div>
          <div class="card-body">
              <div class="row mb-3">
                <label for="name" class="col-md-4 col-form-label text-md-end">이름</label>
                <div class="col-md-6">
                  <input id="name" type="text" class="form-control" name="name" v-model="item.name" autofocus>
                </div>
              </div>
              <div class="row mb-3">
                <label for="user_id" class="col-md-4 col-form-label text-md-end">아이디</label>
                <div class="col-md-6">
                  <input id="user_id" type="text" class="form-control" name="user_id" v-model="item.user_id" autofocus>
                </div>
              </div>
              <div class="row mb-3">
                <label for="email" class="col-md-4 col-form-label text-md-end">이메일</label>
                <div class="col-md-6">
                  <input id="email" type="email" class="form-control" name="email" v-model="item.email" autofocus>
                </div>
              </div>
              <div class="row mb-3">
                <label for="phone" class="col-md-4 col-form-label text-md-end">핸드폰 번호</label>
                <div class="col-md-6">
                  <input id="phone" type="text" class="form-control" name="phone" v-model="item.phone" autofocus>
                </div>
              </div>
              <div class="row mb-3">
                <label for="password" class="col-md-4 col-form-label text-md-end">비밀번호</label>
                <div class="col-md-6">
                  <input id="password" type="password" class="form-control" name="password" v-model="item.password" autofocus>
                </div>
              </div>
              <div class="row mb-3">
                <label for="passwordconfirm" class="col-md-4 col-form-label text-md-end">비밀번호 확인</label>
                <div class="col-md-6">
                  <input id="passwordconfirm" type="password" class="form-control" name="passwordconfirm" v-model="item.passwordconfirm" autofocus>
                </div>
              </div>
              <div class="row mb-0">
                <div class="col-md-6 offset-md-4">
                  <button @click="register" class="btn btn-primary">
                    가입하기
                  </button>
                  &nbsp;
                  <button @click="goBack" type="button" class="btn btn-primary">
                    뒤로가기
                  </button>
                </div>
              </div>
            <router-view :key="$route.fullPath"></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

const URL_API_REGISTER = 'http://localhost:8000/api/registers'

export default {
  name: 'Register',

  data() {
    return {
      item: {
        id: 0,
        name: '',
        user_id: '',
        email: '',
        phone: '',
        password: '',
        passwordconfirm: '',
      },
      itemId: 0,
      items: [],
    }
  },

  methods: {
    async register() {
      if (!this.item.name) {
        alert("이름을 입력하세요.")
        return;
      } else if (!this.item.user_id){
        alert("아이디를 입력해주세요.")
        return;
      } else if (!/^[a-zA-Z0-9]{8,}$/.test(this.item.user_id)){
        alert("아이디는 영문 or 숫자 8자 이상으로 입력해 주세요.")
        return;
      } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
              this.item.email)) {
        alert("이메일 주소를 입력해 주세요.")
        return;
      } else if (!/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/.test(
          this.item.phone)) {
        alert("핸드폰 번호를 입력해 주세요.")
        return;
      } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/.test(this.item.password)){
        alert("비밀번호는 영문 or 숫자 or 특수문자 조합으로 8자 이상으로 입력해 주세요.")
        return;
      } else if (this.item.password != this.item.passwordconfirm){
        alert("비밀번호가 다릅니다.")
        return;
      }

      const res = await axios.post(URL_API_REGISTER, {
        ...this.item
      }).then(res => {
        alert("회원가입이 되었습니다.")
      }).catch(e => {
        alert("일치하는 회원이 있습니다.")
      })
      console.log(res)

    },

    goBack(){
      this.$router.go(-1); [2]
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