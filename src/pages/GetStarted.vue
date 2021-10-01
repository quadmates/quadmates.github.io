<template>
  <div class="page-get-started">
    <div class="container">
      <img
        :src="pages[current].image"
        draggable="false"
        alt="image"
      >
      <h1>{{ pages[current].title }}</h1>
      <h3>{{ pages[current].description }}</h3>
      <div class="dots">
        <i
          v-for="i in pages.length"
          :key="i"
          :class="i === current + 1 ? 'fas fa-circle active': 'fas fa-circle'"
          @click="current = i-1"
        />
      </div>
      <button
        v-if="next"
        @click="current++"
      >
        Next
      </button>
      <button
        v-if="!next"
        @click="$router.push('/sign-up')"
      >
        Get Started
      </button>
    </div>
  </div>
</template>
<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup () {
    const current = ref(0)
    const pages = ref([
      {
        image: '/assets/ob-1.svg',
        title: 'Study',
        description: 'This is a dummy Text Haha Hello'
      },
      {
        image: '/assets/ob-2.svg',
        title: 'Discuss',
        description: 'This is another dumb dummy peace yow'
      },
      {
        image: '/assets/ob-3.svg',
        title: 'Play',
        description: 'This is a dummy Text you dummy, I am yandere'
      },
      {
        image: '/assets/logo.png',
        title: 'Ready?',
        description: 'This is a dummy Text you dummy, I am yandere'
      }
    ])
    return {
      current,
      pages
    }
  },
  computed: {
    next () {
      return this.current < this.pages.length - 1
    }
  }
})
</script>

<style lang="scss" scoped>
@import "../styles/variables";
.page-get-started {
  @apply p-2 flex flex-col justify-center items-center;
  color: $violet-darker;
  height: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  .container {
    @apply flex flex-col items-center;
    width: 90%;
    max-width: 350px;
  }
  img {
    @apply pt-8 pb-8;
    width: 70%;
  }
  h1 {
    @apply font-bold text-5xl pb-1 pt-8;
  }
  h3 {
    @apply font-thin text-base pb-4;
  }
  .dots {
    @apply flex justify-center items-center pt-2 transition-all duration-300;
    i {
      @apply mx-1 cursor-pointer;
      border-radius: 50%;
      color: $violet-lighter;
      &:hover {
        color: $violet-dark;
      }
      &.active {
        color: $violet-darker;
      }
    }
  }
  button {
    @apply py-3 px-5 m-8 rounded-lg font-bold ;
    background: $pink;
    color: white;
    width: 80%;
    box-shadow: 0 5px 15px #aaaaaa;
  }
}
</style>
