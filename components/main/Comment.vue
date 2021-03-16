<template>
  <el-card class="comment" shadow="hover">
    <div class="comment-header">
      <span>Person name</span>
      <span>
      <i  class="el-icon-date"></i>
      {{
          new Date().toLocaleString(
            "ru", {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })
        }}
      </span>
    </div>
    <div class="comment-text">
      Lorem ipsum dolor sit amet.
    </div>
  </el-card>
</template>

<script>
    export default {
      props: ['comment']
    }
</script>
<style lang="scss" scoped>
  .comment {
    margin-bottom: 1rem;
  }
  .comment-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    align-items: center;
    font-size: .8rem;
  }
  .comment-text {
    white-space: pre-line;
  }
</style>
