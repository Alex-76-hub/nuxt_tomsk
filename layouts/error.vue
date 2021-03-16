<template>
  <div class="error-layout">
    <div class="error-content">
      <h1 class="error-title">Ошибка 404</h1>
      <nuxt-link to="/" class="error-link">на Главную</nuxt-link>
    </div>
  </div>

</template>

<script>
export default {
  name: "error",

}
</script>

<style lang="scss" scoped>
  .error-layout {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .error-title {
    color: crimson;
    margin-bottom: 1rem;

  }
  .error-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
    h1 {
      font-size: 2.5rem;
    }
  }
  .error-link {
    text-decoration: none;
    font-size: 1.5rem;
    &:hover{
      text-decoration: underline;
    }
  }

</style>
