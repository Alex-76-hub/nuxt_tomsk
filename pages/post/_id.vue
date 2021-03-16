<template>
  <article class="post">
    <header class="post-header">
      <div class="post-title">
        <h1>Post title</h1>
        <nuxt-link to="/"><i class="el-icon-back"></i></nuxt-link>
      </div>
      <div class="post-info">
        <small><i  class="el-icon-date"></i>
          {{
            new Date().toLocaleString(
              "ru", {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })
          }}</small>
        <small><i class="el-icon-view"></i> 43</small>
      </div>
      <div class="post-image">
        <img
          src="https://media-center.kg/uploads/news/images/1592195290.866996085.jpeg"
          alt="paris"
          class="post-img">
      </div>
    </header>
    <main class="post-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Assumenda doloremque hic minima quas. Et excepturi molestiae molestias,
        perspiciatis quas velit.
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Assumenda doloremque hic minima quas. Et excepturi molestiae molestias,
        perspiciatis quas velit. doloremque hic minima quas. Et excepturi molestiae molestias,
        perspiciatis quas velit.
      </p>
    </main>
    <footer>
      <!-- Form-->
      <app-comment-form v-if="createAddComment" @created="createComment"></app-comment-form>
      <div class="comments" v-if="false">
        <app-comment v-for="comment of 4" :key="comment" :comment="comment">{{ comment }}</app-comment>
      </div>
      <div class="text-center" v-else>Нет комментариев</div>
    </footer>
  </article>
</template>

<script>
import AppComment from '~/components/main/Comment';
import AppCommentForm from '~/components/main/CommentForm';
export default {
  //name: "_id",
  data(){
    return {
      createAddComment: true
    }
  },
  components: {
    AppComment,
    AppCommentForm
  },
  validate({params}){
    return Boolean (params.id)
  },
  methods: {
    createComment() {
      this.createAddComment = false
      console.log('Comment added successfully!');
    }
  }
}
</script>

<style lang="scss" scoped>
  .post {
    max-width: 600px;
    margin: 0 auto;
  }
  .post-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  .post-header {
    margin-bottom: .5rem;
  }
  .post-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .5rem;
  }
  .post-image img{
    width: 100%;
    height: auto;
  }
  .post-content {
    margin-bottom: 2rem;
  }
</style>
