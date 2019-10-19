<template lang="pug">
    Layout.container.mx-auto
        div.flex.justify-center.my-20
            form.flex.flex-col(class="w-1/2" name='contact', method='post', v-on:submit.prevent='handleSubmit', action='/success/', data-netlify='true', data-netlify-honeypot='bot-field')
                h1.font-bold.text-gray-500.leading-loose.text-xl Lets start a conversation

                input(type='hidden', name='form-name', value='contact')
                p(hidden='')
                    label
                        | Don&rsquo;t fill this out:
                        input(name='bot-field')

                input.shadow-md.rounded-lg.my-2.p-2.border.border-gray-600(id="name", type='text', name='name', v-model='formData.name' placeholder="Name" required)
                input.shadow-md.rounded-lg.my-2.p-2.border.border-gray-600(id="email", type='email', name='email', v-model='formData.email' placeholder="Your email address" required)

                textarea.shadow-md.rounded-lg.my-2.p-2.border.border-gray-600(id="message", name='message', v-model='formData.message' placeholder="Message" required)
                div.flex.justify-end
                    button.shadow-md.rounded-full.my-2.p-4.bg-white.font-bold(type='submit') Submit form
</template>

<script>
    export default {
      data () {
        return {
          formData: {}
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
          .then(() => this.$router.push('/success'))
          .catch(error => alert(error))
        }
      }
    }
</script>