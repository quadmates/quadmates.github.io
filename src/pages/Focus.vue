<template>
  <div class="campus-focus">
    <div class="container">
      <h1>{{ remaining }}</h1>
      <h3>study time remaining</h3>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  filters: {
    format (val) {
      const minutes = Math.floor(val / 60)
      const seconds = Math.floor(val % 60)
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    }
  },
  setup () {
    const percent = ref(0)
    const remaining = ref('')
    const timer = ref(25 * 60 * 1000)
    const start = ref(Date.now())
    const end = ref(start.value + timer.value)
    return {
      start,
      end,
      timer,
      percent,
      remaining
    }
  },
  watch: {
    percent (val) {
      if (val <= 0) {
        this.remaining.value = '0:00'
      }
    }
  },
  created () {
    this.update()
    setInterval(this.update, 1000)
  },
  methods: {
    update () {
      const now = Date.now()
      const remaining = this.end.value - now
      const percent = Math.round(remaining / this.timer.value * 100)
      this.remaining.value = this.format(remaining)
      this.percent.value = percent
    }
  }
})

</script>
<stype lang='scss'>
@import '../styles/variables';

.campus-focus {
  @apply flex flex-col items-center justify-center px-4 pt-5;

  .container {
    @apply bg-white p-4 rounded-lg;
    max-width: 600px;
    box-shadow: 1px 1px 15px #ccc;
  }
}
</stype>
