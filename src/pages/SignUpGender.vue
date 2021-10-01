<template>
  <Back
    header="Sign up"
    @back="$router.go(-1)"
  />

  <div class="sign-up-gender">
    <div class="container">
      <h1>Select your Gender</h1>

      <div class="selections">
        <button
          v-for="(i, n) in genders"
          :key="i"
          :class="selected === i ? 'active' : ''"
          @click="selected = i"
        >
          <i :class=" n === 0 ? 'fas fa-mars' : 'fas fa-venus'" />
          {{ i }}
        </button>
      </div>
      <button
        class="next"
        @click="$router.push('/sign-up/campus')"
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
    const genders = ref([
      'Male',
      'Female'
    ])

    const selected = ref(genders.value[0])

    return {
      genders,
      selected
    }
  }
})
</script>
<style lang="scss">
@import "../styles/variables";
.sign-up-gender {
  @apply flex flex-col justify-center items-center py-4;
  .container {
    @apply px-4;
    max-width: 600px;

    h1 {
      @apply font-bold text-3xl mb-8;
      color: $violet-darker;
    }
    .selections {
      @apply flex flex-row justify-center;

      button {
        @apply my-2 py-12 mx-2 w-full rounded-lg font-bold;
        background: $violet-lighter;
        i {
          @apply block mx-auto text-8xl mb-4;
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
