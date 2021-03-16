<template>
  <div>
    <h3>{{ count }}</h3>
    <button type="button" @click="addCount">Добавить</button>
  </div>
</template>

<script>
export default {
  name: "index",
  data(){
    return {
      count: 0
    }
  },
  methods: {
    addCount() {
      this.count++;
    }
  }
}
</script>

<style scoped>

</style>
