<template>
  <Back header="Focus Room" />
  <div class="focus-room">
    <h1>Room</h1>
    <button @click="join">
      join
    </button>
    <button @click="leave">
      leave
    </button>
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
      uid: 1
    })
    rtc.value.client.on('user-published', async (user, mediaType) => {
      await this.rtc.client.subscribe(user, mediaType)
      console.log('subscribe success')
      if (mediaType === 'video') {
        const remoteVideoTrack = user.videoTrack
        const remotePlayerContainer = document.createElement('div')
        remotePlayerContainer.id = user.uid.toString()
        remotePlayerContainer.textContent = 'Remote user ' + user.uid.toString()
        remotePlayerContainer.style.width = '640px'
        remotePlayerContainer.style.height = '480px'
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
      // Create a local audio track from the audio sampled by a microphone.
      this.rtc.localAudioTrack = await window.AgoraRTC.createMicrophoneAudioTrack()
      // Create a local video track from the video captured by a camera.
      this.rtc.localVideoTrack = await window.AgoraRTC.createCameraVideoTrack()
      // Publish the local audio and video tracks to the RTC channel.
      await this.rtc.client.publish([this.rtc.localAudioTrack, this.rtc.localVideoTrack])
      // Dynamically create a container in the form of a DIV element for playing the local video track.
      const localPlayerContainer = document.createElement('div')
      // Specify the ID of the DIV container. You can use the uid of the local user.
      localPlayerContainer.id = this.options.uid
      localPlayerContainer.textContent = 'Local user ' + this.options.uid
      localPlayerContainer.style.width = '640px'
      localPlayerContainer.style.height = '480px'
      document.body.append(localPlayerContainer)

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
