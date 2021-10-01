<template>
  <router-view />
  <div class="footer-controller">
    <div class="container">
      <router-link
        v-for="nav in navs"
        :key="nav.title"
        :to="nav.to"
      >
        <i :class="nav.icon" />
        <span>{{ nav.title }}</span>
      </router-link>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const navs = ref([
      { icon: 'fas fa-home', title: 'Home', to: '/dashboard' },
      { icon: 'fas fa-calendar-alt', title: 'Calendar', to: '/calendar' },
      { icon: 'fas fa-compass', title: 'Campus', to: '/campus' },
      { icon: 'fas fa-comment-dots', title: 'Inbox', to: '/inbox' },
      { icon: 'fas fa-user', title: 'Profile', to: '/profile' }
    ])
    return { navs }
  }
})
</script>
<style lang="scss">
@import "../styles/variables";
.footer-controller {
  @apply w-full flex flex-col items-center justify-center;
  position: fixed;
  bottom: 0;
  background: $violet;
  color: #fff;
  border-radius: 14px 14px 0 0;
  .container {
    @apply w-full flex flex-row items-center justify-center;
    max-width: 600px;
    a {
      @apply w-full flex flex-col items-center justify-center py-2;
      i {
        @apply text-xl;
      }
      span {
        @apply text-xs;
      }
      &.router-link-exact-active {
        color: $yellow;
      }
    }
  }
}
</style>
