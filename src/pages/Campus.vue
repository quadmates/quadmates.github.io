<template>
  <teleport to="#header">
    <div class="campus-top-header">
      <div class="container">
        <h1>Business</h1>
        <div class="navs">
          <router-link
            v-for="nav in navs"
            :key="nav.title"
            :to="nav.path"
          >
            {{ nav.title }}
          </router-link>
        </div>
      </div>
    </div>
  </teleport>
  <router-view />
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup () {
    const navs = ref([
      { title: 'Feed', path: '/campus' },
      { title: 'Focus', path: '/campus/focus' },
      { title: 'Discuss', path: '/campus/discuss' },
      { title: 'Play', path: '/campus/play' },
      { title: 'Peers', path: '/campus/peers' }
    ])
    return {
      navs
    }
  }
})
</script>
<style lang="scss">
@import '../styles/variables';

#header {
  position:sticky;
  top:0;
  width:100%;
  .campus-top-header {
    @apply flex flex-col items-center justify-center w-full shadow-md;

    .container {
      @apply flex flex-col;
      max-width: 600px;

      h1 {
        @apply text-xl text-center block font-bold py-2;
      }

      .navs {
        @apply grid;
        grid-template-columns: auto auto auto auto auto;

        a {
          @apply text-center py-2 px-4;
          border-bottom: 3px solid rgba(0,0,0,0,);
          color: $violet;

          &.router-link-exact-active {
            border-bottom: 3px solid $pink;
            color: $pink;
          }
        }
      }
    }
  }
}
</style>
