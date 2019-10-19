<template lang="pug">
    Layout
        div.relative.mt-5
            div
                g-image(src="~/assets/images/botanical_header.png" immediate="true")
            div.absolute.inset-0
                div.flex.justify-center.h-full
                    div.flex.flex-col.justify-center
                        h1.text-center.text-white.text-6xl Atlanta Botanical Garden
                        div.flex.mt-20
                            div.mr-8
                                p.text-white.text-2xl.py-2.max-w-md Project:
                                p.text-white.text-2xl.py-2.max-w-md Role:
                                p.text-white.text-2xl.py-2.max-w-md Date:
                                p.text-white.text-2xl.py-2.max-w-md Description:
                            div.ml-8
                                p.text-white.text-2xl.py-2.max-w-lg Atlanta Botanical Garden Redesign
                                p.text-white.text-2xl.py-2.max-w-lg UX Researcher, Wireframes, Usability Testing
                                p.text-white.text-2xl.py-2.max-w-lg June 17th - July 1st
                                p.text-white.text-2xl.py-2.max-w-lg.
                                    This project is a redesign of Atlanta Botanical
                                    Gardens website. It was a two week sprint where
                                    I was in a team of two other UX designers,
                                    Taiwo Akintayo, and Chanel French.

        div.container.mx-auto.mt-20
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
                        div.flex.flex-col.mx-1.justify-center(class="w-1/3")
                            g-image(src="~/assets/images/contextual_inquiry_0.png")
                        div.mx-1.max-w-2xl
                            div.shadow-md.p-5.mb-5
                                p.text-gray-500.text-center.text-xl.px-10 "[The navigation] wasn't Immediately intuitive"
                            div.shadow-md.p-5.mb-5
                                p.text-gray-500.text-center.text-xl.px-10 "There's a ridiculous amount of membership levels"
                            div.shadow-md.p-5.mb-5
                                p.text-gray-500.text-center.text-xl.px-10 "It's weird that I clicked on 'orchid Membership' and it took me to all the Memberships, minus the pictures"

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
                h2.text-center.text-gray-500.text-2xl.py-5 Problem
                div.h-4.w-64.bg-black.my-2

                div.py-5
                    div.flex.justify-between
                        h3.text-2xl.font-bold What's The Problem?

                div.flex.justify-center.mx-10.py-5
                    div.flex.flex-col.py-5.max-w-lg
                        p.text-gray-500.text-2xl Visitors to Atlanta Botanical Garden want to gain access to the gardens by quick and simple means. They need a website that clearly provides them concise options with a straight forward checkout process.

                div.flex.justify-center
                    div.flex.justify-around
                        div.flex-col.justify-center.max-w-md.m-5
                            g-image.h-full(src="~/assets/images/problem_screenshot_0.png")
                        div.flex-col.justify-center.max-w-md.m-5
                            g-image.h-full(src="~/assets/images/problem_screenshot_1.png")

            div.py-5
                h2.text-center.text-gray-500.text-2xl.py-5 The Solution
                div.h-4.w-64.bg-black.my-2

                div.flex.justify-center.mx-10.py-5
                    div.flex.flex-col.py-5.max-w-2xl
                        p.text-gray-500.text-xl.text-center
                            span.py-2.px-1.block We believe that by simplifying and streamlining the site, we will
                            span.py-2.px-1.block achieve a higher success rate in task completion.
                            span.py-2.px-1.block We will know this to be true when 80% of our users can complete the
                            span.py-2.px-1.block task with minimal issues.

                div.py-5
                    div.flex.flex-col
                        h3.text-2xl Sketching
                        div.flex
                            div.m-1
                                g-image.w-64(src="~/assets/images/sketching_screenshot_0.png")
                            div.m-1
                                g-image.w-64(src="~/assets/images/sketching_screenshot_1.png")
                            div.m-1
                                g-image.w-64(src="~/assets/images/sketching_screenshot_2.png")
                        div.flex
                            div.m-1
                                g-image.w-64(src="~/assets/images/sketching_screenshot_3.png")

                div.w-full
                    div.flex.justify-end
                        div.shadow-md.p-5.mr-2.max-w-lg
                            div.flex.flex-col
                                h4.text-2xl.pb-5 Cardsorting
                                p.text-gray-500 The ABG site had a lot of information, and due to that. our team needed to understand how our users see and understand the information presented to them,
                                div.flex.flex-col.justify-center
                                    div.flex.p-2.justify-center
                                        div.h-8.shadow-md.mx-2(class="w-1/6")
                                        div.h-8.shadow-md.mx-2(class="w-1/6")
                                        div.h-8.shadow-md.mx-2(class="w-1/6")
                                        div.h-8.shadow-md.mx-2(class="w-1/6")
                                    div.flex.p-2.justify-center
                                        div.h-8.shadow-md.mx-2(class="w-1/6")
                                        div.h-8.shadow-md.mx-2(class="w-1/6")
                                        div.h-8.shadow-md.mx-2(class="w-1/6")
                                        div.h-8.shadow-md.mx-2(class="w-1/6")
                        div
                            g-image.w-64(src="~/assets/images/cardsorting_screenshot_0.png")

            div.py-5
                h2.text-center.text-gray-500.text-2xl.py-5 Wireframes & Iterations
                div.h-4.w-64.bg-black.my-2

                div.flex.mt-10
                    div.mr-2
                        g-image(src="~/assets/images/wireframe_screen_0.png")
                    div
                        g-image(src="~/assets/images/wireframe_screen_1.png")
                    div.flex.flex-col.ml-2
                        g-image(src="~/assets/images/wireframe_screen_2.png")
                        div.my-20
                            p.text-gray-500 Some of the first wireframes that were based on sketches and research

            div.py-5
                div.flex
                    div.mr-2
                        g-image(src="~/assets/images/wireframe_screen_3.png")
                    div
                        g-image(src="~/assets/images/wireframe_screen_4.png")
                    div.ml-2
                        g-image(src="~/assets/images/wireframe_screen_5.png")


            div.flex.mt-10
                div.mr-2
                    g-image(src="~/assets/images/wireframe_screen_6.png")
                div
                    g-image(src="~/assets/images/wireframe_screen_7.png")
                div.flex.flex-col.ml-2
                    div.my-20
                        p.text-gray-500 The final versions include changes made such as the membership screen, and the ticket buying page. By the last usability test users reported…


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