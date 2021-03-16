<template>
  <el-card
    :style="{width: '500px'}"
    shadow="always"
  >
    <h2 class="text-center mb-2">Вход в панель администратора</h2>
    <el-form :model="controls" :rules="rules" ref="form" @submit.native.prevent="onSubmit">
      <el-form-item label="Логин" prop="login">
        <el-input v-model.trim="controls.login" ></el-input>
      </el-form-item>
      <div class="mb-2">
        <el-form-item label="Пароль" prop="password">
          <el-input type="password" v-model.trim="controls.password"></el-input>
        </el-form-item>
      </div>

      <el-form-item>
        <el-button type="primary" round native-type="submit" :loading="loading">Войти</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  name: "login",
  layout: 'empty',
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
  mounted() {
    const {message} = this.$route.query
    switch (message){
      case 'login':
        this.$message.info('Вам необходиимо войти в систему!')
            break
      case 'logout':
        this.$message.info('Сессия завршена.')
            break
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
            await this.$store.dispatch('auth/login', formData)
            await this.$router.push('/admin')
            this.$message.success('Вы успешно вошли в админ-панель!')

            this.loading = false
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
