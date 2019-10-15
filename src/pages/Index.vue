<template lang="pug">
    Layout
        div.min-w-full.mx-auto.my-5
            g-image(src='~/assets/images/hero.jpg')
        #projects.container.mx-auto
            the-projects

</template>

<script>
  import TheProjects from '~/components/TheProjects.vue'

  export default {
    metaInfo: {
      title: 'UX Designer'
    },
    components: {
      TheProjects
    }
  }
</script>
