<template>
  <back @back="$router.go(-1)" />
  <div class="sign-up">
    <form
      class="container"
      @submit.prevent="onSubmit"
    >
      <div class="header">
        Sign Up
      </div>
      <div class="subheader">
        Create an account to continue
      </div>
      <div class="form-group">
        <i class="fas fa-at" />
        <input
          v-model="form.user"
          placeholder="Username"
          required
        >
      </div>
      <div class="form-group">
        <i class="fas fa-user" />
        <input
          v-model="form.name"
          placeholder="Name"
          required
        >
      </div>
      <div class="form-group">
        <i class="fas fa-envelope" />
        <input
          v-model="form.email"
          placeholder="Email"
          type="email"
          required
        >
      </div>
      <div class="form-group">
        <i class="fas fa-lock" />
        <input
          v-model="form.pass"
          placeholder="Password"
          :type="assf.vpass ? 'text': 'password'"
          required
        >
        <i
          v-if="form.pass.length > 0"
          :class="`${assf.vpass ? 'fas fa-eye-slash': 'fas fa-eye'} cursor-pointer`"
          @click="assf.vpass = !assf.vpass"
        />
      </div>
      <div class="form-group">
        <i class="fas fa-lock" />
        <input
          v-model="assf.cpass"
          placeholder="Confirm Password"
          :type="assf.vcpass ? 'text': 'password'"
          required
        >
        <i
          v-if="assf.cpass.length > 0"
          :class="`${assf.vcpass ? 'fas fa-eye-slash': 'fas fa-eye'} cursor-pointer`"
          @click="assf.vcpass = !assf.vcpass"
        />
      </div>
      <button type="submit">
        Next
      </button>
      <div
        class="fb-login-button vendor-facebook"
        data-width="100%"
        data-size="large"
        data-button-type="continue_with"
        data-layout="default"
        data-auto-logout-link="false"
        data-use-continue-as="false"
      />
      <button
        class="vendor-google"
        type="button"
      >
        <img
          src="/assets/g-logo.png"
          alt="Google Logo"
        ><span>Sign up with Google</span>
      </button>
    </form>
  </div>
</template>
<script>
import { ref, defineComponent } from 'vue'
export default defineComponent({
  setup () {
    const form = ref({
      user: '',
      email: '',
      pass: '',
      data: {
        google: '',
        facebook: '',
        gender: '',
        birthday: '',
        position: ''
      }
    })
    const assf = ref({
      cpass: '',
      vpass: false,
      vcpass: false
    })
    return { form, assf }
  }
})
</script>
<style lang="scss">
@import "../styles/variables";
.sign-up {
  @apply flex flex-col items-center;
  color: $light;

  .container {
    @apply flex flex-col items-center mt-5 mb-12;
    width: 90%;
    max-width: 400px;

    .header {
      @apply text-4xl font-bold mb-2;
    }
    .subheader {
      @apply text-base font-thin mb-8;
    }

    .form-group {
      @apply flex flex-row justify-center items-center px-2 py-3 rounded-lg mb-4;
      background: $light;
      width: 100%;
      i {
        @apply mx-4 my-0 py-0 text-base;
        color: $violet;
      }
      input {
        @apply p-0 font-bold;
        flex: 1;
        outline: none;
        background: inherit;
        color: $violet;
        &::placeholder {
          @apply text-gray-700;
        }
      }
      &:focus-within {
        background: $lighter;
      }
    }

    [type=submit] {
      @apply py-3 px-5 my-4 rounded-lg font-bold transition-all duration-100;
      background: $bg-gradient-yelloworange;
      color: white;
      text-shadow: 0px 0px 20px $orange;
      width: 100%;

      &:active {
        box-shadow: 0px 0px 10px $orange;
        text-shadow: 0px 0px 20px $violet;
      }
    }
    .vendor-facebook {
      @apply mt-4 w-full
    }
    .vendor-google {
      @apply bg-white flex flex-row items-center justify-center px-4 py-2 rounded-sm mt-4 transition-all duration-100;
      width: 100%;

      &:active {
        box-shadow: 0px 0px 10px $orange;
      }

      i, img {
        @apply mr-4;
        width: 1rem;
        height: 1 rem;
      }
      span {
        @apply font-bold text-gray-500;
        flex: 1;
        // color: $violet;
      }
    }
  }

}
</style>
