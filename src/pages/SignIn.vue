<template>
  <back @back="$router.go(-1)" />
  <div class="sign-form">
    <form
      class="container"
      @submit.prevent="onSubmit"
    >
      <div class="header">
        Sign In
      </div>
      <div class="subheader">
        Sign in to continue
      </div>
      <div class="form-group">
        <i class="fas fa-envelope" />
        <input
          v-model="form.email"
          placeholder="Email"
          required
          type="email"
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
      <button type="submit">
        Submit
      </button>
    </form>
    <div class="container">
      <hr>
      <p>
        <b>Do not have an account?</b>
      </p>
      <button
        type="button"
        @click="$router.push('/sign-up')"
      >
        Create Account
      </button>
    </div>
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
        google: '', // google account user_id
        facebook: '', // facebook account user_id
        gender: '',
        birthday: '',
        position: ''
      }
    })
    const assf = ref({
      cpass: '', // confirm password field
      vpass: false, // view password field
      vcpass: false // view confirm password field
    })
    return { form, assf }
  }
})
</script>
