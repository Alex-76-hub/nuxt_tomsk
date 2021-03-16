<template>
  <el-table
    :data="posts"
    style="width: 100%">

    <el-table-column prop="title" label="Название"/>

    <el-table-column label="Дата">
      <template slot-scope="{ row: { date }}">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ new Date(date).toLocaleString() }}</span>
      </template>
    </el-table-column>

    <el-table-column label="Просмотры">
      <template slot-scope="{ row: { views }}">
        <i class="el-icon-view"></i>
        <span style="margin-left: 10px">{{ views }}</span>
      </template>
    </el-table-column>

    <el-table-column label="Комментарии">
      <template slot-scope="{ row: { comments }}">
        <i class="el-icon-chat-line-square"></i>
        <span style="margin-left: 10px">{{ comments.length }}</span>
      </template>
    </el-table-column>

    <el-table-column label="Действия">
      <template slot-scope="{row}">
        <el-tooltip class="item" effect="dark" content="Редактировать" placement="top">
          <el-button
            circle
            type="primary"
            icon="el-icon-edit"
            @click="open(row._id)"/>
        </el-tooltip>

        <el-tooltip class="item" effect="dark" content="Удалить" placement="top">
          <el-button
            icon="el-icon-delete"
            circle
            type="danger"
            @click="remove(row._id)"/>
        </el-tooltip>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "list",
  head(){
    return {
      title: `Список статей`
    }
  },
  layout: 'admin',
  middleware: ['admin-auth'],
  async asyncData({store}) {
    const posts = await store.dispatch('post/fetchAdmin')
    return {posts}
  },
  data() {
    return {}
  },
  methods: {
    open(id) {
      this.$router.push(`/admin/post/${id}`)
    },
    async remove(id) {
      try {
        await this.$confirm(`Действительно хотите удалить Статью ${id} ?`, 'Внимание!', {
          confirmButtonText: 'Да',
          cancelButtonText: 'Отмена',
          type: 'warning'
        })
        await this.$store.dispatch('post/deletePost', id)
        this.posts = this.posts.filter(item => item._id !== id)
        this.$message.success(`Пост ${id} Успешно удален!`)
      } catch (e) {
      }
    }
  }

}
</script>

<style scoped>

</style>
