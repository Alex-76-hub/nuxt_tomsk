<template>
  <el-card shadow="hover" :body-style="{padding: 0}" class="post">
  <header slot="header" class="post-header">
    <h3>Post title</h3>
    <small><i  class="el-icon-date"></i>
      {{
        new Date().toLocaleString(
            "ru", {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })
      }}</small>
  </header>
    <div class="post-body">
      <img
        src="https://media-center.kg/uploads/news/images/1592195290.866996085.jpeg"
        alt="paris"
        class="post-img">
    </div>
    <footer class="post-footer">
      <el-button round @click.prevent="openPost">Перейти</el-button>
      <i class="el-icon-chat-line-square"> 34</i>
    </footer>
  </el-card>
</template>

<script>
export default {
  name: "Post",
  methods: {
     openPost(){
      const id = 'test-id';
      this.$router.push(`/post/${id}`)
     },
    /* async getApi() {
       const res = await this.$api.getDate();
       console.log((await res.json()).date);
     }*/
  }
}
</script>

<style lang="scss" scoped>
  .post {
    margin-bottom: 1.5rem;
  }
  .post-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .post-body {
   /* margin-bottom: 1rem;*/
  }
  .post-footer {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .post-img {
    width: 100%;
    height: auto;

  }
</style>
