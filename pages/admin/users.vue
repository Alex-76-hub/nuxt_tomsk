<template>
  <el-form
    :model="controls"
    :rules="rules"
    ref="form"
    class="user-form"
    @submit.native.prevent="onSubmit">
      <h2 class="text-center mb-2">Создать пользователя</h2>
      <el-form-item label="Логин" prop="login">
        <el-input v-model.trim="controls.login"></el-input>
      </el-form-item>
      <div class="mb-2">
        <el-form-item label="Пароль" prop="password">
          <el-input type="password" v-model.trim="controls.password"></el-input>
        </el-form-item>
      </div>

      <el-form-item>
        <el-button type="primary" round native-type="submit" :loading="loading">Создать</el-button>
      </el-form-item>
  </el-form>

</template>

<script>
export default {
  //name: "users",
  layout: 'admin',
  middleware: ['admin-auth'],
  data() {
    return {
      loading: false,
      controls: {
        login: '',
        password: ''
      },
      rules: {
        login: [
          {required: true, message: 'Логин обязателен', trigger: 'blur'},
        ],
        password: [
          {required: true, message: 'Пароль обязателен', trigger: 'blur'},
          {min: 6, message: 'Длина пароля не менее 6 символов', trigger: 'blur'}
        ],
      },
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          const formData = {
            login: this.controls.login,
            password: this.controls.password
          }
          try {
            this.loading = true
            await this.$store.dispatch('auth/createUser', formData)
            this.$message.success('Успешно добавлен новый пользователь!')
            this.controls.login = ''
            this.controls.password = ''
            this.loading = false
          } catch (e) {
           setTimeout(() => {
             this.controls.login = ''
             this.controls.password = ''
           }, 1500)
            this.$message.warning('Такой пользователь уе существует!')
            this.loading = false
          }

        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
  .user-form {
    width: 50%;
    margin: 0 auto;
  }
</style>
