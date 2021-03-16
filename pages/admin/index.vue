<template>
  <h1>Admin Page</h1>
</template>

<script>

export default {
  name: "index",
  layout: 'admin',
  middleware: ['admin-auth']
}
</script>

<style scoped>

</style>
