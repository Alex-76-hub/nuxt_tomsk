<template>
  <div class="post-create">
    <el-form :model="controls" :rules="rules" ref="form" @submit.native.prevent="onSubmit">
      <h2 class="text-center mb-2">Создание новой статьи</h2>

      <el-form-item label="Заголовок статьи" prop="title" class="mb-2">
        <el-input type="text" v-model="controls.title"></el-input>
      </el-form-item>

      <el-form-item label="Текст в формате .md или .html" prop="text" class="mb-2">
        <el-input type="textarea" :rows="10" resize="none" v-model="controls.text"></el-input>
      </el-form-item>

      <el-button type="success" plain @click="previewDialog = true" class="mb-2">Предпросмотр</el-button>
      <el-dialog title="Предпросмотр" :visible.sync="previewDialog">
       <div :key="controls.text">
         <vue-markdown>{{controls.text}}</vue-markdown>
       </div>
      </el-dialog>

      <el-upload
        ref="upload"
        class="mb-2"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-change="selectImage"
        :auto-upload="false">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text"> Перетащите сюда файл <em> нажмите, чтобы загрузить</em></div>
        <div class="el-upload__tip" slot="tip"> разрешены файлы jpg/png  и не менее 500kb</div>
      </el-upload>

      <el-form-item>
        <el-button type="primary" round native-type="submit" :loading="loading">Создать</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
export default {
  name: "create",
  layout: 'admin',
  middleware: ['admin-auth'],
  data() {
    return {
      image: null,
      previewDialog: false,
      loading: false,
      controls: {
        text: '',
        title: ''
      },
      rules: {
        title: [
          {required: true, message: 'Заголовок обязателен', trigger: 'blur'},
        ],
        text: [
          {required: true, message: 'Текст обязателен', trigger: 'blur'},
        ],
      },
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid && this.image) {
          const formData = {
            text: this.controls.text,
            title: this.controls.title,
            image: this.image
          }
          try {
            this.loading = true
            await this.$store.dispatch('post/createPost', formData)
            setTimeout(() => {
              this.loading = false
              this.$message.success('Статья успешно добавлена!')
              this.controls.text = null
              this.controls.title = null
              this.image = null
              this.$refs.upload.clearFiles()
            }, 1000)
          } catch (e) {
            this.loading = false
          }
        }else{
          this.$message.warning('Форма не валидна!')
        }
      })
    },
    selectImage(file, fileList) {
      this.image = file.raw

    }
  }

}
</script>

<style lang="scss" scoped>
.post-create {
  width: 800px;
  margin: 1.5rem auto;
}
</style>
