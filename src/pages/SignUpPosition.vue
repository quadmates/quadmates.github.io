<template>
  <Back
    header="Sign up"
    @back="$router.go(-1)"
  />

  <div class="sign-up-position">
    <div class="container">
      <h1>You are a...</h1>

      <div class="selections">
        <button
          v-for="i in positions"
          :key="i"
          :class="selected === i ? 'active' : ''"
          @click="selected = i"
        >
          {{ i }}
        </button>
      </div>
      <button
        class="next"
        @click="$router.push('/sign-up/gender')"
      >
        Next
      </button>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'SignUpPosition',
  setup () {
    const positions = ref([
      'High School Student',
      'College Student',
      'Teacher',
      'Proffesional',
      'Parent',
      'Unemployed'
    ])

    const selected = ref(positions.value[0])

    return {
      positions,
      selected
    }
  }
})
</script>
<style lang="scss">
@import "../styles/variables";
.sign-up-position {
  @apply flex flex-col justify-center items-center py-4;
  .container {
    @apply px-4;
    max-width: 600px;

    h1 {
      @apply font-bold text-3xl mb-8;
      color: $violet-darker;
    }
    .selections {
      @apply flex flex-col flex-wrap justify-center items-center;

      button {
        @apply my-2 py-3 w-full rounded-lg font-bold;
        background: $violet-lighter;
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
