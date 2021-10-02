<template>
  <div class="campus-focus">
    <div class="container">
      <circle-progress :percent="40" />
      <h1>Focus</h1>
    </div>
  </div>
</template>
<script>
import 'vue3-circle-progress/dist/circle-progress.css'
import CircleProgress from 'vue3-circle-progress'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: {
    CircleProgress
  },
  setup () {
    const percent = ref(0)
    return {
      percent
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
