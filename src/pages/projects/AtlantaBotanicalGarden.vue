<template lang="pug">
    Layout
        div.flex.justify-center.h-64.mt-32
            div.flex.flex-col
                h1.text-center.text-green-600.text-6xl Atlanta Botanical Garden.

        div.container.mx-auto
            div.py-5
                h1.text-2xl.font-extrabold Atlanta Botanical Garden's Business
                h1.text-2xl.font-extrabold Goals

            div.flex.justify-center.mx-10.py-5
                div.flex.flex-col.py-5
                    p.text-gray-500.text-2xl
                        span.block.py-2 Increase ticket purchases
                        span.block.py-2 Increase memberships
                        span.block.py-2 Allow visitors a to plan their visit

            div
                div.py-5
                    h2.text-center.text-gray-500.text-3xl.py-5 Discover
                    div.h-4.w-64.bg-black.my-2

                div
                    p.text-gray-500.text-3xl.mb-5
                        | The early stages of
                        span.text-green-600.px-2 Discovery
                        | involve a couple things...

                div.py-5
                    div.flex.justify-around
                        div.flex.flex-col(class="w-1/3")
                            h3.text-3xl The Who:
                            p.text-3xl.text-gray-500 9 interviewees were screen via a survey to gauge their familiarity with Atlanta Botanical Gardens
                        div(class="w-1/3")
                            g-image(src="~/assets/images/interview_0.png")

                    div.py-5
                        h3.text-black.text-2xl The Why:
                        p.text-gray-500.text-2xl(class="w-4/5") We set out to gain insite from current users as to how they experience the gardens from the moment they purchase their ticket to the moment they walk into the gardens.

                div
                    div.flex.justify-end
                        div.border-l-4.border-blue-400.p-5
                            h3.py-2.text-center.text-black.text-2xl Sample Questions
                            p.py-2.text-gray-500.text-xl Q: How do you prefer to purchase your tickets?
                            p.py-2.text-gray-500.text-xl Why do you prefer that method?
                            p.py-2.text-gray-500.text-xl  Q: Describe your experience visiting ABG?

                div
                    div.flex.justify-start
                        h3.text-2xl Contextual Inquiry
                    div.flex.justify-around.my-5
                        div.mx-10(class="w-1/3")
                            g-image(src="~/assets/images/contextual_inquiry_0.png")
                        div.mx-10(class="w-1/2")
                            div.shadow-md.p-5.mb-5
                                p.text-gray-500.text-center.text-xl "[The navigation] wasn't Immediately intuitive"
                            div.shadow-md.p-5.mb-5
                                p.text-gray-500.text-center.text-xl "There's a ridiculous amount of membership levels"
                            div.shadow-md.p-5.mb-5
                                p.text-gray-500.text-center.text-xl "It's weird that I clicked on 'orchid Membership' and it took me to all the Memberships, minus the pictures"

            div.py-5
                h2.text-center.text-gray-500.text-2xl.py-5 Define
                div.h-4.w-64.bg-black.my-2

                div.py-5
                    div.flex.justify-between
                        h3.text-2xl Affinity Mapping
                        h3.text-2xl.mr-20 Discoveries
                    div.flex.jusitfy-around.my-5
                        div.flex.flex-col.justify-center.m-5(class="w-1/2")
                            g-image(src="~/assets/images/botanical_affinity_map.png")
                        div.shadow-md.p-10.m-5(class="w-1/3")
                            p.text-gray-500.py-2.text-lg User-friendly website and clear navigation is desired
                            p.text-gray-500.py-2.text-lg The ability to easily view events details is important to users
                            p.text-gray-500.py-2.text-lg User want quick and easy checkout that's convenient

                div.py-5
                    div.flex
                        div.flex.flex-col.px-10
                            p.text-2xl.text-center Current Jouney Map
                            div.shadow-md.p-10.text-gray-500.text-xl
                                p Users find the site overall overwhelming with too many options during selection and checkout process.
                        div.pl-5
                            g-image.w-full(src="~/assets/images/current_journey_map.png")

                div
                    p.text-gray-500.text-3xl.mb-5
                        | But who's the person going through the
                        span.text-blue-500.px-1 journey?
                    g-image.w-full(src="~/assets/images/jourey_sophia.png")


            div.py-5
                div.flex.justify-end
                    div.flex.flex-col(class="w-1/3")
                        p.text-2xl.font-extrabold "Very simple, super easy Checkout"
                        p.flex.justify-end.text-2xl.font-extrabold - Stef

            div.my-20
                div.flex.justify-center
                    div.flex.flex-col.justify-center
                        g-link.nav__link.bg-orange-500.h-12.w-40.rounded-full.mx-auto.flex.justify-center.items-center(to="/")
                            span.text-white.font-semibold Back to Home

</template>