<template>
  <div class="post-wrap">

    <el-breadcrumb separator-class="el-icon-arrow-right" class="mb-2">
      <el-breadcrumb-item to="/admin/list">Список постов</el-breadcrumb-item>
      <el-breadcrumb-item> {{ post.title }}</el-breadcrumb-item>
    </el-breadcrumb>

    <el-form :model="controls" :rules="rules" ref="form" @submit.native.prevent="onSubmit" class="post-form">
      <!--<h2 class="text-center mb-2">Вход в панель администратора</h2>-->

      <el-form-item label="Текст в формате .md или .html" prop="text" class="mb-2">
        <el-input type="textarea" :rows="10" resize="none" v-model.trim="controls.text"></el-input>
      </el-form-item>
      <div class="mb-2 post-detail">
        <small>
          <i class="el-icon-time"></i>
          <span style="margin-left: 1rem">{{ new Date(post.date).toLocaleDateString() }}</span>
        </small>
        <small>
          <i class="el-icon-view"></i>
          <span style="margin-left: 10px">{{ post.views }}</span>
        </small>
      </div>
      <el-form-item>
        <el-button type="primary" round native-type="submit" :loading="loading">Изменить</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  head() {
    return {
      title: `Статья | ${this.post.title}`
    }
  },

  data() {
    return {
      loading: false,
      controls: {
        text: '',
      },
      rules: {
        text: [
          {required: true, message: 'Текст обязателен', trigger: 'blur'},
        ],
      },
    }
  },
  validate({params}) {
    return Boolean(params.id)
  },
  async asyncData({store, params}) {
    const post = await store.dispatch('post/fetchPostById', params.id)
    return {post}
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          const formData = {
            text: this.post.text,
            id: this.post._id
          }
          try {
            this.loading = true
            await this.$store.dispatch('post/updatePost', formData)
            setTimeout(() => {
              this.loading = false
              this.$message.success('Статья успешно обновлена!')
            },1000)
          } catch (e) {
            this.loading = false
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.post-wrap {
  width: 800px;
  margin: 1.5rem auto;
}

.post-detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>
