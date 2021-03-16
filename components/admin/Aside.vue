<template>
    <el-menu
      router
      :style="{height: '100%'}"
      :default-active="$route.path">
      <el-menu-item index="/admin">
        <i class="el-icon-pie-chart"></i>
        <span>Аналитика</span>
      </el-menu-item>
      <el-menu-item index="/admin/create">
        <i class="el-icon-edit"></i>
        <span>Создание</span>
      </el-menu-item>
      <el-menu-item index="/admin/list">
        <i class="el-icon-tickets"></i>
        <span>Список статей</span>
      </el-menu-item>
      <el-menu-item index="/admin/users">
        <i class="el-icon-user"></i>
        <span>Пользователи</span>
      </el-menu-item>
      <el-menu-item index="/admin/logout">
        <i class="el-icon-back"></i>
        <span>Выйти</span>
      </el-menu-item>
    </el-menu>
</template>

<script>
export default {
  name: "Aside",

}
</script>

<style lang="scss" scoped>

</style>
