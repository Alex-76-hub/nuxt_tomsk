<template>
  <el-container>
    <el-header>
      <AppNav/>
    </el-header>

    <el-main>
      <nuxt/>
    </el-main>

    <el-footer>

    </el-footer>

  </el-container>
</template>

<script>
import AppNav from "../components/main/Navigation";

export default {
  components: {
    AppNav
  }
}
</script>
<style>
</style>
