<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-10">
        <br>
        <div>
          <b-table :fields="fields" :items="items">
            <template #cell(일련번호)="data">
              <a :href="`#${data.value}`">{{ data.value }}</a>
            </template>
          </b-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const URL_API_Blog = 'http://localhost:8000/api/blog'
export default {
  name: "BlogListV",
  data() {
    return {
      fields: [
        {
          key: '일련번호',
          formatter: 'number'
        },
        {
          key: '제목',
        },
        {
          key: '작성자',
        },
        {
          key: '작성일',
        }
      ],
      items: [
        { 일련번호: 40, 제목: 'Male', 작성자: 42, 작성일: 40},
      ]
    }
  },
  methods: {
    number(일련번호) {
      return `${일련번호}`
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