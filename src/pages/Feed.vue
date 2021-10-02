<template>
  <div class="campus-feed">
    <h3>Recommended <i class="fas fa-caret-down" /></h3>
    <div
      v-for="feed in feeds"
      :key="feed.content"
      class="card"
    >
      <div class="head">
        <img
          :src="feed.image"
          alt="logo"
        >
        <div class="header">
          <div class="name">
            {{ feed.name }}
          </div>
          <div class="date">
            {{ feed.date }}
          </div>
        </div>
        <div
          class="type"
          :type="feed.type_code"
        >
          {{ feed.type }}
        </div>
      </div>
      <div class="content">
        {{ feed.content }}
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup () {
    const feeds = ref([
      {
        name: 'Jezelle',
        type_code: 'question',
        type: 'Question',
        image: '/assets/a-1.jpg',
        date: '1 min ago',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero nostrum rerum, ipsa dolorem tempore voluptatibus quae enim qui saepe excepturi fugit? Cupiditate est accusamus saepe autem atque, neque reprehenderit. Ad. '
      },
      {
        name: 'Leandro',
        type_code: 'buddy',
        type: 'Study Buddy',
        image: '/assets/a-4.jpg',
        date: '5 min ago',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero nostrum rerum, ipsa dolorem tempore voluptatibus quae enim qui saepe excepturi fugit? Cupiditate est accusamus saepe autem atque, neque reprehenderit. Ad. '
      },
      {
        name: 'Joana',
        type_code: 'announcement',
        type: 'Announcement',
        image: '/assets/a-3.jpg',
        date: '10 mins ago',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero nostrum rerum, ipsa dolorem tempore voluptatibus quae enim qui saepe excepturi fugit? Cupiditate est accusamus saepe autem atque, neque reprehenderit. Ad. '
      }
    ])

    return {
      feeds
    }
  }
})
</script>
<style lang="scss">
@import '../styles/variables';

.campus-feed {
  @apply mx-auto text-left p-4 mb-12;
  max-width: 500px;

  h3 {
    @apply text-sm font-bold mb-4;
  }
  .card {
    @apply flex flex-col rounded-lg px-4 py-5 mt-2 mb-4;
    box-shadow: 1px 1px 15px #ccc;
    color: $violet-darker;

    .head {
      @apply flex flex-row items-center mb-3;
      img {
        @apply mr-4;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: $violet-darker;
        overflow: hidden;
      }
      .header {
        flex:1;
        .name {
          @apply font-bold;
        }
        .date{
          @apply text-sm;
        }
      }
      .type {
        @apply text-xs py-1 px-4 rounded-full text-white;
        background: #333;

        &[type=question] {
          background: $red;
        }
        &[type=buddy] {
          background: $violet-dark;
        }
        &[type=announcement] {
          background: $pink;
        }
      }
    }
    .content {
      @apply text-sm;
    }
    .content {
      @apply text-sm text-justify;
    }
  }
}

</style>
