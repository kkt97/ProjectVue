<template>
  <div v-if="item" class="container">
    <div class="row justify-center-center">
      <div class="col-md-10">
        <b-card>
          <div>
            <div>
              <div>제목: {{item.title}}</div>
              <div>내용: {{item.content}}</div>
            </div>
            <div>
              <div>글쓴이: {{ item.user && item.user.name}}</div>
              <div>등록일: {{moment(item.created_at).format('YYYY-MM-DD HH:MM')}}</div>
            </div>
          </div>
        </b-card>
        <b-card>
          <div>
            <b-button variant="primary" @click="updateData">수정</b-button>&nbsp;
            <b-button variant="success" @click="deleteData">삭제</b-button>
          </div>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

const URL_API_BLOG = 'http://localhost:8000/api/blog'

export default {
  name: "BlogDetailV",
  data() {
    return {
      moment: moment,

      item: {
      },

    }
  },
  methods: {
    async readItem() {

      console.log('foo', this.$router, this.$route)


      const res = await axios.get(URL_API_BLOG + '/' + this.$route.params.id)

            this.item = res.data;

      console.log(res)
    },
    updateData(){

    },
    deleteData(){

    }
  },
  mounted() {
    this.readItem()
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