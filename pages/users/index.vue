<template>
  <div>
    <ul v-for="(user, i) in users" :key="i">
      <li>{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      users: []
    }
  },
  async asyncData({ $axios }) {
    const users = await $axios.$post('/api/users')
    console.log(users);
    return { users }
  },
  methods: {


  }
}
</script>

<style scoped>

</style>
