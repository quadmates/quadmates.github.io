<template>
  <teleport to="#header">
    <div class="container">
      <slot name="left">
        <i
          class="fas fa-arrow-left back-button"
          @click="$emit('back')"
        />
      </slot>
      <slot name="center">
        <h3 class="header">
          {{ header }}
        </h3>
      </slot>
      <slot name="right">
        <i class="fas fa-arrow-left back-button-spacer" />
      </slot>
    </div>
  </teleport>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    header: {
      default: '',
      type: String
    }
  },
  emits: ['back']
})
</script>
<style lang="scss">
@import '../styles/variables';

#header {
  @apply flex flex-col items-center justify-center;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background: $violet;

  .container {
    @apply flex flex-row items-center justify-between;
    width: 100%;
    max-width: 780px;
    color: $light;

    .back-button {
      @apply p-4 mx-2 rounded-full transition-all duration-200 ease-in-out cursor-pointer;
      color: $light;
      &:hover {
        color: $yellow;
        text-shadow: 0 0 5px $orange;
      }
    }
    .header {
      @apply font-bold text-xl text-center;
    }
    .back-button-spacer {
      @apply p-4 mx-2;
      color: rgba(255, 255, 255, 0);
      background: rgba(255, 255, 255, 0);
    }
  }

}
</style>
