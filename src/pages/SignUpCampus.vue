<template>
  <Back
    @back="$router.go(-1)"
  />
  <div class="sign-up-campus">
    <div class="container">
      <h1>Choose your Campus <br> to get started!</h1>
      <div class="search">
        <i class="fas fa-search" />
        <input
          v-model="search"
          type="text"
          placeholder="Search"
        >
      </div>
      <div class="selections">
        <button
          v-for="campus in result"
          :key="campus.tag"
          :class="selected === campus.tag ? 'active ' : ''"
          @click="selected = campus.tag"
        >
          <i :class="campus.icon" />
          {{ campus.tag }}
        </button>
      </div>
      <button
        class="next"
        @click="$router.push('/dashboard')"
      >
        Finish
      </button>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'SignUpCampus',
  setup () {
    const campuses = ref([
      { tag: '#Arts', icon: 'fas fa-palette', keys: ['art', 'arts'] },
      { tag: '#Agri', icon: 'fas fa-handshake', keys: ['agri', 'agriculture', 'land'] },
      { tag: '#Scie', icon: 'fas fa-flask', keys: ['sci', 'science'] },
      { tag: '#Engr', icon: 'fas fa-book-dead', keys: ['engr', 'engineer'] },
      { tag: '#Psyc', icon: 'fas fa-shapes', keys: ['psy', 'psychology'] },
      { tag: '#Law', icon: 'fas fa-gavel', keys: ['law'] },
      { tag: '#Educ', icon: 'fas fa-school', keys: ['educ', 'education'] },
      { tag: '#Pilot', icon: 'fas fa-plane', keys: ['pilot', 'pilot'] },
      { tag: '#MedT', icon: 'fas fa-user-md', keys: ['medt', 'medtech', 'tech'] },
      { tag: '#Meta', icon: 'fas fa-chart-pie', keys: ['meta'] }
    ])
    const selected = ref('No Campus')
    const result = ref([])
    const search = ref('')
    return {
      campuses,
      selected,
      result,
      search
    }
  },
  watch: {
    search: {
      handler (val) {
        const search = String(val).toLowerCase()
        if (search.length <= 0) this.result = this.campuses
        else {
          const result = []
          this.campuses.forEach(campus => {
            let match = false
            campus.keys.forEach(key => {
              if (key.match(search)) match = true
            })
            if (match) result.push(campus)
          })
          if (result.length <= 0) this.result = this.campuses
          else this.result = result
        }
      },
      immediate: true
    }
  }
})
</script>
<style lang="scss">
@import "../styles/variables";
.sign-up-campus {
  @apply flex flex-col justify-center items-center py-4;
  .container {
    @apply px-4;
    max-width: 600px;

    h1 {
      @apply font-bold text-xl mb-8;
      color: $violet-darker;
    }
    .search {
      @apply flex w-full justify-center bg-white rounded-lg shadow-xl mb-8 bg-gray-100 pr-5;
      input {
        flex: 1;
        background: inherit;
      }
      i {
        @apply py-3 px-5;
      }
      &:focus-within {
        @apply bg-gray-200 shadow-none;
      }
    }
    .selections {
      display: grid;
       grid-template-columns: auto auto auto;
       column-gap: 10px;
      button {
        @apply my-2 py-4 rounded-lg font-bold flex flex-col justify-center items-center bg-white shadow-xl;
        background: $violet-lighter;
        i {
          @apply text-4xl mb-2;
        }
        &.active {
          background: $violet;
          color: $violet-lighter;
        }
      }
    }
    .next {
      @apply mt-12 mb-8 py-3 px-8 rounded-lg font-bold;
      width: fit-content;
      background: $pink;
      color: #fff;
    }
  }

}
</style>
