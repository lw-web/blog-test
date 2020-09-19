<template>
  <div class="container">
    <div>
      <h1 class="title">{{ user.login }}</h1>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {},
  computed: {
    ...mapState({
      user: (state) => state.user.user
    })
  },
  async asyncData({ app }) {
    try {
      const { data } = await app.$axios({
        method: 'GET',
        url: '/users/weblw'
      })
      return {
        data
      }
    } catch (e) {}
  }
}
</script>

<style></style>
