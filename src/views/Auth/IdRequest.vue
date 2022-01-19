<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <br>
        <div class="card">
          <div class="card-header">아이디 찾기</div>
          <div class="card-body">
            <div class="row mb-3">
              <label for="name" class="col-md-4 col-form-label text-md-end">이름</label>
              <div class="col-md-6">
                <input id="name" type="text" class="form-control" name="name" v-model="item.name" autofocus>
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
            <div class="row mb-0">
              <div class="col-md-8 offset-md-4">
                <button @click="idRequest" class="btn btn-primary">
                  아이디 찾기
                </button>
                &nbsp;
                <a href="/password.request" class="btn btn-primary">
                  비밀번호 찾으로 가기
                </a>
                &nbsp;
                <button @click="goBack" type="button" class="btn btn-primary">
                  뒤로가기
                </button>
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

const URL_API_IDREQUEST = 'http://localhost:8000/api/idrequests'

export default {
  name: "IdRequest",
  data() {
    return {
      item: {
        name: '김경태',
        email: 'qlalf258@naver.com',
        phone: '01095059859',
      },
      items:[],
      isValidateUser : false,
    }
  },

  methods:{
    async idRequest(){
      if (!this.item.name){
        alert("이름을 입력하세요.")
        return;
      } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          this.item.email)) {
        alert("이메일 주소를 다시 확인해주세요.");
        return;
      } else if (!/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/.test(
          this.item.phone)) {
        alert("핸드폰 번호를 입력해 주세요.")
        return;
      }

      const res = await axios.get(URL_API_IDREQUEST)
      this.items = res.data.filter( res=> res.name == this.item.name && res.email == this.item.email && res.phone == this.item.phone)[0]
      console.log(res)
      try{
        const userId = this.items.user_id
        const fff = userId.substring(userId.length-2,-2) + '**'
        alert('고객님의 아이디는 ' + fff + '입니다.')
      } catch (error) {
        alert('일치하는 회원이 없습니다.');
      }
    },

    goBack(){
      this.$router.go(-1); [2]
    }
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