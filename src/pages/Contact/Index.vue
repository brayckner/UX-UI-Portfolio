<template lang="pug">
    Layout.container.mx-auto
        flex.flex.justify-center.my-20
            form.flex.flex-col(class="w-1/2" name="contact" method="post" v-on:submit.prevent="handleSubmit" action="/contact/success/" data-netlify="true" data-netlify-honeypot="bot-field")
                h1.font-bold.text-gray-500.leading-loose.text-xl Lets start a conversation
                input(type="hidden" name="form-name" value="contact")
                p(hidden)
                    label
                        input(name="bot-field")
                input.shadow-md.rounded-lg.my-2.p-2.border.border-gray-600(type="text" placeholder="Name" v-model="formData.name" required)
                input.shadow-md.rounded-lg.my-2.p-2.border.border-gray-600(type="email" placeholder="Your email address" v-model="formData.email" required)
                textarea.shadow-md.rounded-lg.my-2.p-2.border.border-gray-600.h-20(type="text" placeholder="Message" v-model="formData.message" required)
                div.flex.justify-end
                    button.shadow-md.rounded-full.my-2.p-4.bg-white.font-bold(class="w-2/5" type="submit") Submit
</template>

<script>
    export default {
      data() {
        return {
          formData: {},
        }
      },
      methods: {
        encode(data) {
          return Object.keys(data)
          .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
          .join('&')
        },
        handleSubmit(e) {
          fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: this.encode({
              'form-name': e.target.getAttribute('name'),
              ...this.formData,
            }),
          })
          .then(() => this.$router.push('/contact/success'))
          .catch(error => alert(error))
        }
      }
    }
</script>