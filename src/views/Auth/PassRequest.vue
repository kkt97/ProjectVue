<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <br>
        <div class="card">
          <div class="card-header">비밀번호 찾기</div>
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
            <div class="row mb-0">
              <div class="col-md-6 offset-md-4">
                <button @click="passRequest" class="btn btn-primary">
                  비밀번호 찾기
                </button>
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

const URL_API_PASSWORDREQUEST = 'http://localhost:8000/api/passrequests'

export default {
  name: "PassRequest",
  data() {
    return {
      item: {
        name: '',
        user_id: '',
        email: '',
        phone: '',
      },
      items:[],
    }
  },
  methods:{
    async passRequest(){
      if (!this.item.name){
        alert("이름을 입력하세요.")
        return;
      } else if (!this.item.user_id){
        alert("아이디를 입력해주세요.")
      } else if (!/^[a-zA-Z0-9]{8,}$/.test(this.item.user_id)){
        alert("아이디는 영문 or 숫자 8자 이상으로 입력해 주세요.")
      } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          this.item.email)) {
        alert("이메일 주소를 다시 확인해주세요.");
        return;
      } else if (!/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/.test(
          this.item.phone)) {
        alert("핸드폰 번호를 입력해 주세요.")
        return;
      }

      const value = Math.random().toString(36).substr(2,11);
      // const value = 'sedong258!!';

      axios.put(URL_API_PASSWORDREQUEST + '/' + 1, {
        name: this.item.name,
        user_id : this.item.user_id,
        email: this.item.email,
        phone: this.item.phone,
        password: value,
      }).then(res => {
        // console.log(`${res} 가 성공이면 업데이트완료`)
        alert("임시 비밀번호는 " + value + " 입니다.");
      }).catch(e => {
        // console.log({e})
        alert("일치하는 회원이 없습니다.");
      })

    },


    goBack(){
      this.$router.go(-1); [2]
    },
  }
}
</script>

<style scoped>

</style>