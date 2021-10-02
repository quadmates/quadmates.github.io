<template>
  <Back header="Focus Room" />
  <div class="focus-room">
    <button
      class="join"
      @click="join"
    >
      join
    </button>
    <button
      class="leave"
      @click="leave"
    >
      leave
    </button>
    <div id="videos" />
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'FocusRoom',
  setup () {
    function getRandomInt (min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
    }
    const client = ref(window.AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' }))
    const rtc = ref({
      localAudioTrack: null,
      localVideoTrack: null,
      client: client.value
    })
    const options = ref({
      appId: '421dd2b0d87a46b1ba70f7d4e72353cd',
      channel: '1',
      // Set the user ID.
      token: '006421dd2b0d87a46b1ba70f7d4e72353cdIADhSrND4FxWSOinG98+Qmn0aBvuqxxWKZVCyZUTY5uCw7fv3IMAAAAAEADSvifOKCdZYQEAAQAkJ1lh',
      uid: getRandomInt(100000, 999999)
    })
    rtc.value.client.on('user-published', async (user, mediaType) => {
      await this.rtc.client.subscribe(user, mediaType)
      console.log('subscribe success')
      if (mediaType === 'video') {
        const remoteVideoTrack = user.videoTrack
        const remotePlayerContainer = document.createElement('div')
        remotePlayerContainer.id = user.uid.toString()
        remotePlayerContainer.textContent = 'Remote user ' + user.uid.toString()
        remotePlayerContainer.style.width = '500px'
        remotePlayerContainer.style.height = '300px'
        document.body.append(remotePlayerContainer)
        remoteVideoTrack.play(remotePlayerContainer)
      }
      if (mediaType === 'audio') {
        const remoteAudioTrack = user.audioTrack
        remoteAudioTrack.play()
      }

      this.rtc.client.on('user-unpublished', user => {
        const remotePlayerContainer = document.getElementById(user.uid)
        remotePlayerContainer.remove()
      })
    })
    return { client, rtc, options }
  },
  created () {
  },
  methods: {
    async join () {
      await this.rtc.client.join(this.options.appId, this.options.channel, this.options.token, this.options.uid)
      this.rtc.localAudioTrack = await window.AgoraRTC.createMicrophoneAudioTrack()
      this.rtc.localVideoTrack = await window.AgoraRTC.createCameraVideoTrack()
      await this.rtc.client.publish([this.rtc.localAudioTrack, this.rtc.localVideoTrack])
      const localPlayerContainer = document.createElement('div')
      localPlayerContainer.id = this.options.uid
      localPlayerContainer.style.width = '640px'
      localPlayerContainer.style.height = '480px'
      document.getElementById('videos').append(localPlayerContainer)

      this.rtc.localVideoTrack.play(localPlayerContainer)
      console.log('publish success!')
    },
    async leave () {
      this.rtc.localAudioTrack.close()
      this.rtc.localVideoTrack.close()

      this.rtc.client.remoteUsers.forEach(user => {
        const playerContainer = document.getElementById(user.uid)
        playerContainer && playerContainer.remove()
      })

      await this.rtc.client.leave()
    }
  }
})
</script>
<style lang="scss">
.join, .leave {
  @apply my-8 py-3 px-5 rounded-lg bg-gray-200 mx-2 font-bold text-sm capitalize shadow-lg;

  .videos {
    @apply mx-auto flex flex-wrap justify-center;
    max-width: 600px;

    video {
      @apply rounded-lg;
    }
  }
}
</style>
