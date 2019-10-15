<template lang="pug">
    div.relative(class="min-h-full")
        the-nav-bar.h-24
        main.pb-32
            slot
        the-footer.absolute.bottom-0.w-full.h-32
</template>

<script>
  import TheNavBar from '~/components/TheNavBar.vue'
  import TheFooter from '~/components/TheFooter.vue'

  export default {
    components: {
      TheNavBar,
      TheFooter
    }
  }
</script>
