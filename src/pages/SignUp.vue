<template>
  <back @back="$router.go(-1)" />
  <div class="sign-form">
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
        Sign Up <i class="fas fa-arrow-right ml-2" />
      </button>
    </form>
    <div class="container">
      <hr>
      <p>
        <b>Already have an account?</b>
      </p>
      <button
        type="button"
        @click="$router.push('/sign-in')"
      >
        Sign in
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
  },
  methods: {
    onSubmit () {
      this.$router.push('/sign-up/position')
    }
  }
})
</script>
