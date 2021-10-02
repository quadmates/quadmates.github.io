<template>
  <div class="campus-focus">
    <div class="container">
      <h1>23:55</h1>
      <h3>study time remaining</h3>
      <div class="progress-bar">
        <div
          class="track"
          style="width: 70%;"
        />
      </div>
      <div class="controls">
        <i class="fas fa-redo" />
        <i class="fas fa-pause" />
        <i class="fas fa-stop" />
      </div>
      <button
        class="enter-stream"
        @click="$router.push('/focus-room/1')"
      >
        Enter Stream
      </button>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({

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
  }
})

</script>
<stype lang='scss'>
@import '../styles/variables';

.campus-focus {
  @apply flex flex-col items-center justify-center px-4 pt-5;
  color: $violet-darker;
  .container {
    @apply bg-white py-8 rounded-lg;
    max-width: 600px;
    box-shadow: 1px 1px 15px #ccc;

    h1 {
      @apply text-5xl font-bold;
    }
    h3 {
      @apply text-xl font-bold;
    }
    .progress-bar {
      @apply bg-gray-200 rounded-lg mx-auto mt-12;
      width: 50%;
      .track {
        @apply bg-green-800 h-2 rounded-lg;
      }
    }
    .controls {
      @apply flex mx-auto justify-center py-8;

      i {
        @apply text-4xl p-5 mx-2 bg-green-100 rounded-full hover:bg-green-200 cursor-pointer shadow-lg;
        color: green;
      }
    }
    .enter-stream {
      @apply bg-green-300 text-white mt-12 py-4 px-12 text-blue-900 rounded-lg font-bold hover:bg-green-400 shadow-lg;

    }
  }
}
</stype>
