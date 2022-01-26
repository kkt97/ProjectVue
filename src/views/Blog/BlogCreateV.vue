<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-10">
        <br>
        <div class="card">
          <div class="card-header">글 작성</div>
          <div class="card-body">
            <div class="row mb-3">
              <label for="title" class="col-md-2 col-form-label text-md-end">제목</label>
              <div class="col-md-8">
                <input id="title" type="text" class="form-control" name="title" v-model="item.title" autofocus>
              </div>
            </div>
            <div class="row mb-3">
              <label for="content" class="col-md-2 col-form-label text-md-end">내용</label>
              <div class="col-md-8">
                <input id="content" type="text" class="form-control" name="content" v-model="item.content"
                       style="height:400px;" autofocus>
              </div>
            </div>
            <div class="row mb-3">
              <label for="name" class="col-md-2 col-form-label text-md-end">이름</label>
              <div class="col-md-2">
                <input id="name" type="text" class="form-control" name="name" v-model="item.name" autofocus>
              </div>
            </div>
            <div class="row mb-3">
              <label class="col-md-2 col-form-label text-md-end"></label>
              <div class="col-md-8">
                <b-form-file v-model="file1" multiple :file-name-formatter="formatNames"
                             accept="image/jpeg, image/jpg, image/png, image/gif, pdf, word, excel"
                             placeholder="Drag&drop or select add Image"></b-form-file>
              </div>
            </div>
            <div class="row mb-3">
              <label class="col-md-2 col-form-label text-md-end"></label>
              <div class="col-md-8">
                <b-form-file v-model="file2" multiple :file-name-formatter="formatNames"
                             accept="image/jpeg, image/jpg, image/png, image/gif, pdf, word, excel"
                             placeholder="Drag&drop or select add Image"></b-form-file>
              </div>
            </div>

<!--            <div>-->
<!--              &lt;!&ndash; Styled &ndash;&gt;-->
<!--              <b-form-file-->
<!--                  v-model="file1"-->
<!--                  :state="Boolean(file1)"-->
<!--                  placeholder="Choose a file or drop it here..."-->
<!--                  drop-placeholder="Drop file here...">-->
<!--              </b-form-file>-->
<!--              <br>-->
<!--              <div class="mt-3">Selected file: {{ file1 ? file1.name : '' }}</div>-->

<!--              &lt;!&ndash; Plain mode &ndash;&gt;-->
<!--              <b-form-file v-model="file2" class="mt-3" plain></b-form-file>-->
<!--              <div class="mt-3">Selected file: {{ file2 ? file2.name : '' }}</div>-->
<!--            </div>-->
            <div class="row mb-0">
              <div class="col-md-6 offset-md-4">
                <button @click="createData" class="btn btn-primary">
                  글쓰기
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
import axios from 'axios'

const URL_API_REGISTER = 'http://localhost:8000/api/registers'


export default {
  name: "BlogCreateV",

  data() {
    return {
      file1: null,
      file2: null,
      item: {
        id: 0,
        title: '',
        content: '',
        name: '',
      },
      itemId: 0,
      items: [],
    }
  },

  methods: {
    createData(){

    }
  }
}
</script>

<style scoped>

</style>