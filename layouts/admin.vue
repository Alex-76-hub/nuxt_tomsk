<template>
  <div class="admin-layout">
    <el-container class="admin-container">
      <el-aside class="admin-aside" width="300px">
        <admin-aside></admin-aside>
      </el-aside>
      <el-main>
        <nuxt/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import AdminAside from '~/components/admin/Aside';

export default {
  name: "admin",
  components: {
    AdminAside
  },
  data() {
    return {

    }
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .admin-layout {
    width: 100%;
    height: 100vh;
  }
  .admin-container {
    height: 100%;
  }
  .admin-aside {
    padding: 20px;
  }
</style>
