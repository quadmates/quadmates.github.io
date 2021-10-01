<template>
  <router-view />
  <div class="footer-controller">
    <div class="container">
      <router-link to="/home">
        <i class="fas fa-home" />
        <span>Home</span>
      </router-link>

      <router-link to="/home">
        <i class="fas fa-home" />
        <span>Home</span>
      </router-link>

      <router-link to="/home">
        <i class="fas fa-home" />
        <span>Home</span>
      </router-link>

      <router-link to="/home">
        <i class="fas fa-home" />
        <span>Home</span>
      </router-link>

      <router-link to="/home">
        <i class="fas fa-home" />
        <span>Home</span>
      </router-link>
    </div>
  </div>
</template>
<style lang="scss">
@import "../styles/variables";
.footer-controller {
  @apply w-full flex flex-col items-center justify-center;
  position: fixed;
  bottom: 0;
  background: $violet;
  color: #fff;
  border-radius: 14px 14px 0 0;
  .container {
    @apply w-full flex flex-row items-center justify-center;
    max-width: 600px;
    a {
      @apply w-full flex flex-col items-center justify-center py-2;
      i {
        @apply text-xl;
      }
      span {
        @apply text-xs;
      }
      &.router-link-exact-active {
        color: $yellow;
      }
    }
  }
}
</style>
