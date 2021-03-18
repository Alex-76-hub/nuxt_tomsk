const posts = [
  {title: 'Post 1', date: new Date(), views: 23, comments: [1, 2], _id: 'id_1'},
  {title: 'Post 2', date: new Date(), views: 41, comments: [1, 2, 3], _id: 'id_2'}
]

export const state = () => ({})

export const mutations = {}

export const actions = {
  async fetchAdmin({}) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(posts)
      }, 1000)
    })
  },
  async fetchPostById({}, id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(posts.find(p => p._id === id))
      }, 1000)
    })
  },
  async createPost({commit}, {title, text, image}) {
    try {
      const fd = new FormData()
      fd.append('title', title)
      fd.append('text', text)
      fd.append('image', image, image.name)

      //console.log();

      return await this.$axios.$post('/api/post', fd)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async updatePost({}, {id, text}) {

  },
  async deletePost({}, id) {

  },
}

export const getters = {}
