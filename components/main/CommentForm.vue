<template>
  <div>
    <el-form :model="controls" :rules="rules" ref="form" @submit.native.prevent="onSubmit">
      <el-form-item label="Ваше имя" prop="name">
        <el-input v-model.trim="controls.name"></el-input>
      </el-form-item>
      <el-form-item label="Введите текст комментария" prop="text">
        <el-input type="textarea"
                  row="2"
                  resize="none"
                  v-model.trim="controls.text"
                  placeholder="Ваш комментарий здесь...">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" round native-type="submit" :loading="loading">Добавить комментарий</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "CommentForm",
  data() {
    return {
      loading: false,
      controls: {
        name: '',
        text: ''
      },
      rules: {
        name: [
          {required: true, message: 'Имя обязательно к заполннию', trigger: 'blur'},
        ],
        text: [
          {required: true, message: 'Введите Ваш комментарий', trigger: 'blur'}
        ],
      },
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          //console.log('Form is Valid!')
          this.loading = true
          const formData = {
            name: this.controls.name,
            text: this.controls.text,
            postId: ''
          }
          try {
            setTimeout(() => {
              this.$message.success('Комментарий успешно добавлен!');
              this.$emit('created')
            }, 2000)

          } catch (e) {
            this.loading = false
          }

        }
      });
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
