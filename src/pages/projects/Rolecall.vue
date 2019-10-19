<template lang="pug">
    Layout
        div.flex.justify-center.h-64.mt-32
            div.flex.flex-col
                h1.text-center.text-green-600.text-6xl RoleCall
                h2.text-center.text-green-600.text-3xl What Role will you play?

        div.container.mx-auto
            div.py-5
                h1.text-2xl.font-extrabold RoleCall's Business
                h1.text-2xl.font-extrabold Goals

            div.flex.justify-center.mx-10.py-5
                div.flex.flex-col.py-5(class="w-5/6")
                    p.text-gray-500.text-xl
                        | RoleCall is currently used in the pre-production phase of the film
                        | process. But long term wants to expand into production and post-production phase.
                    p.text-gray-500.py-2.text-xl
                        | - Wants to build up features available to filmmakers, especially higher level production staff.
                    p.text-gray-500.py-2.text-xl
                        | - The Client wants to build up and expand upon the chat interface.

            div.py-5
                h2.text-center.text-gray-500.text-2xl.py-5 Discover
                div.h-4.w-64.bg-black.my-2

                div
                    p.text-gray-500.text-2xl.mb-5
                        | The early stages of
                        span.text-green-600.px-2 Discovery
                        | involve a couple things...

                    div
                        h3.text-black.text-2xl.mb-5 The Who:
                        h4.text-black.text-2xl 4 Interviewees
                        p.text-gray-500.text-2xl.mb-5(class="w-1/3") All four were small indie producers who use RoleCall. Some producers double up on assets (Actors) so they are on both sides of the platform.

                    div.py-5
                        h3.text-black.text-2xl The Why:
                        p.text-gray-500.text-2xl(class="w-1/2") We wanted to know when, where, why, and how producers were using RoleCall to align with their everyday task while on and even off set.

                div.my-20
                    div.flex.justify-end
                        div.border-l-4.border-green-600.p-5
                            h3.py-2.text-center.text-black.text-2xl Sample Questions
                            p.py-2.text-gray-500.text-xl Q: What platform do you use to view RoleCall?
                            p.py-2.text-gray-500.text-xl  Q: Why do you prefer that method?
                            p.py-2.text-gray-500.text-xl  Q: How frequently do you use RoleCall?

                div.py-5
                    div.flex.flex-col(class="w-2/3")
                        p.text-2xl.font-extrabold "I mostly use mobile, if I want to go in and do the heavy activity then I would need to go in on my desktop. When I use the message feature, I am concerned about missing someone or sending a message twice. I need to know if someone has received a message or not."
                        p.flex.justify-end.text-2xl.font-extrabold - The User

                div.my-20
                    div.flex.justify-end
                        h3.text-2xl.mr-20 Comparative Analysis
                    div.flex.justify-around.my-5
                        div.shadow-md.p-10(class="w-1/3")
                            h4.text-center.text-gray-500.py-2 Chat Interfaces
                            ul.py-2
                                li.text-gray-500.text-lg Slack
                                li.text-gray-500.text-lg Facebook Messenger
                                li.text-gray-500.text-lg Microsoft Teams
                                li.text-gray-500.text-lg iMessage
                                li.text-gray-500.text-lg Discord
                            h5.text-gray-500.font-extrabold.py-2 Key Observations
                            p.text-gray-500.py-2 All group chats are seamless and allow for file sharing
                        div.shadow-md.p-10(class="w-1/2")
                            h4.text-gray-500.py-2.text-lg
                                span.text-green-600 RoleCall
                                span.px-2 Competitors
                            ul.py-2
                                li.text-gray-500.text-lg StudioBinder
                                li.text-gray-500.text-lg Actors Access
                                li.text-gray-500.text-lg SAG - Aftra
                                li.text-gray-500.text-lg NYX Castings
                            h5.text-gray-500.font-extrabold.py-2.text-lg Key Observations
                            p.text-gray-500.py-2.text-lg
                                | None of the competitors offer a two way chat at this time. However,
                                span.text-green-600.px-2 Producers
                                | use apps such as
                                span.text-blue-500.px-2 FB
                                | Messenger and Craigslist to communicate with talent

                div.my-20
                    div.flex.justify-start
                        h3.text-2xl Contextual Inquiry
                    div.flex.justify-around.my-5
                        div.mx-10(class="w-1/3")
                            g-image(src="~/assets/images/screenshot_0.png")
                        div.mx-10(class="w-1/2")
                            div.shadow-md.p-5.mb-5
                                p.text-gray-500.text-center.text-xl "Every time I click something I think I'm on an upgrade account page"
                            div.shadow-md.p-5.mb-5
                                p.text-gray-500.text-center.text-xl "Why is there two hamburger menus?"
                            div.shadow-md.p-5.mb-5
                                p.text-gray-500.text-center.text-xl "Not intuitive to go to the project to get notifications on a RoleCall match"

            div.py-5
                h2.text-center.text-gray-500.text-2xl.py-5 Define
                div.h-4.w-64.bg-black.my-2

                div.py-5
                    div.flex.justify-between
                        h3.text-2xl Affinity Mapping
                        h3.text-2xl.mr-20 Discoveries
                    div.flex.jusitfy-around.my-5
                        div.flex.flex-col.justify-center.m-5(class="w-1/2")
                            g-image(src="~/assets/images/rolecall_affinity_map.png")
                        div.shadow-md.p-10.m-5(class="w-1/3")
                            h4.text-gray-500.font-extrabold.text-lg Key Insights
                            p.text-gray-500.py-2.text-lg Producers have issues keeping track of who has/has not responded to their messages
                            p.text-gray-500.py-2.text-lg - Producers want to be able to quickly push changes out to their cast and crew.
                            p.text-gray-500.py-2.text-lg - Users want a group messaging feature.
                            p.text-gray-500.py-2.text-lg - Want to be able to chat in real time and share files.
                            p.text-gray-500.py-2.text-lg - Need notification to be more centralized.

                div.py-5
                    h3.text-2xl.py-5 Meet the
                        span.text-2xl.text-green-600.pl-2 User
                    div.relative
                        div
                            g-image(src="~/assets/images/seth_doyle.png" immediate="true")
                        div.absolute.inset-y-0.right-0.mr-5(class="lg:w-1/3 md:w-1/2")
                            div.shadow-md.p-5.bg-white.h-full
                                p.text-gray-500 Name: Brooke
                                p.text-gray-500 Title: Executive Producer
                                p.text-gray-500 Age: 28
                                p.text-gray-500 City: Atlanta, Ga
                                p.text-gray-500 Ethnicity
                                p.text-gray-500 African American

                                h4.text-semibold  Task & Behaviors:
                                p.text-gray-500 - Using FB and asking around as a method to book local talent and crew.

                                h4.text-semibold  Goals:
                                p.text-gray-500 - Efficient communication.
                                p.text-gray-500 - To be able to tell who has responded.
                                p.text-gray-500 - To get information out quickly about set or schedule changes.

                                h4.text-semibold Frustration:
                                p.text-gray-500 - Communication with full cast
                                p.text-gray-500 - Time is money!
                                p.text-gray-500 - Managing multiple conversations.
            div.my-5
                h2.text-center.text-gray-500.text-2xl.py-5 Problem
                div.h-4.w-64.bg-black.my-2

                div.py-5
                    h1.text-2xl.font-extrabold What's The Problem?

                    div.flex.justify-center.mx-10
                        div.flex.flex-col.py-5(class="w-5/6")
                            p.text-gray-500.text-xl.text-center.leading-relaxed During production, filmmakers need to easily contact their cast and crew quickly when schedule and shoot details change. They need to be able to keep track of what they have sent out, who has seen their message, and be notified of any responses.

                    div.py-5
                        h4.text-gray-500 (Brainstorming)
                        div.flex.flex-around
                            g-image.mr-1(class="w-1/4" src="~/assets/images/brainstorm_0.png")
                            g-image.mx-1(class="w-1/4" src="~/assets/images/brainstorm_1.png")
                            g-image.mx-1(class="w-1/4" src="~/assets/images/brainstorm_2.png")
                            g-image.ml-1(class="w-1/4" src="~/assets/images/brainstorm_3.png")

            div.py-10
                h2.text-center.text-gray-500.text-2xl.py-5 The
                    span.text-green-600.px-2 Solution
                div.h-4.w-64.bg-black.my-2

                div.flex.justify-center.mx-10
                    div.flex.flex-col.py-5(class="w-5/6")
                        p.text-gray-500.text-xl.text-center.leading-relaxed We believe that a polling feature that includes user generated responses with a clear call to action and team response tracking that will allow producers to easily manage cast and crew. We will know this to be true when we observe an incrase in users upgrading to the Pro plan to benefit from the additional features.

                div.py-5
                    h4.text-2xl.py-10 Sketching
                        span.text-2xl.text-gray-500 (Project Page)
                    div.flex.flex-around
                        g-image.w-full(src="~/assets/images/sketch_project_page.png")

                div.py-5
                    h4.text-2xl.py-10 Sketching
                        span.text-2xl.text-gray-500 (Messaging & Features)
                    div.flex.flex-around
                        g-image.w-full(src="~/assets/images/sketch_message_features.png")

                div.py-5
                    h4.text-2xl.py-10 Sketching
                        span.text-2xl.text-gray-500 (Feature Prioritization)
                    div.flex.flex-around.justify-center
                        g-image.mr-1(class="w-1/2" src="~/assets/images/sketch_feature_0.png")
                        div.flex.flex-col(class="w-1/2")
                            g-image.ml-1(src="~/assets/images/sketch_feature_1.png")
                            div.flex.flex-col.justify-center.h-full
                                div.flex.justify-center
                                    div.flex.flex-col(class="w-1/2")
                                        p.text-2xl.text-center
                                            span.text-gray-500 Driving
                                            span.text-green-600.pl-2 Question
                                        p.text-2xl.font-extrabold.text-center "How many ways do people communicate online?"

                    div.flex.justify-end.py-5
                        div.flex(class="w-3/5")
                            p.text-2xl.text-center.text-green-600 Feature:
                            p.text-2xl.text-gray-500.pl-2 A polling system that allows producers to give and receive information to the production.

                div.py-5
                    div.flex.flex-around
                        g-image.w-full(src="~/assets/images/poll_version_0.png")

                div.py-5
                    div.flex.flex-around
                        g-image.w-full(src="~/assets/images/poll_version_1.png")

                div.py-10
                    div.flex.flex-col
                        div.flex.justify-start
                            p.text-2xl.text-center.text-green-600 Usability Testing
                        div.flex.justify-between
                            div.shadow-md.py-3.px-1.mr-2.mb-10(class="w-1/3")
                                p.text-2xl.text-gray-500.pl-2
                                    | During the process of making iterations it was important to stay true to “
                                    span.text-red-500.px-1 fail
                                    | ing fast”. This allowed for quick
                                    span.text-blue-500.px-1 user centered
                                    | iterations on features such as the
                                    span.text-green-500.px-1 Poll, Navigation bar, Group creation, and icons.
                            div(class="w-1/3")
                                g-image.w-full(src="~/assets/images/usability_screenshot_0.png")
                            div.ml-2(class="w-1/3")
                                g-image.w-full(src="~/assets/images/usability_screenshot_1.png")

                div.py-5
                    div.flex.flex-col
                        div.flex.justify-start.py-5
                            p.text-2xl.text-center.text-gray-500
                                | Progression of the
                                span.text-blue-500.px-1 Navigation
                                | within
                                span.text-green-500.px-1 RoleCall
                        div.flex
                            g-image.w-full(src="~/assets/images/navigation_screenshot_0.png")

                div.py-5
                    div.flex.flex-col
                        div.flex.justify-start.py-5
                            p.text-2xl.text-center.text-gray-500
                                | Progression of the
                                span.text-blue-500.px-1 Group Creation
                                | within
                                span.text-green-500.px-1 RoleCall
                        div.flex.py-5
                            g-image.w-full(src="~/assets/images/group_creation_screenshot_0.png")

                div.py-5
                    div.flex.flex-col
                        div.flex.justify-start.py-5
                            p.text-2xl.text-center.text-gray-500
                                | Progression of the
                                span.text-blue-500.px-1 Project Inbox
                                | within
                                span.text-green-500.px-1 RoleCall
                        div.flex.py-5
                            g-image.w-full(src="~/assets/images/project_inbox_screenshot_0.png")

                        div.flex.justify-between
                            div.shadow-md.py-3.px-1.mr-2(class="w-1/3")
                                p.text-2xl.text-gray-500.pl-2
                                    | From the first iteration to the final, we realized that
                                    span.text-blue-500.px-1 users wanted to
                                    | click on the chat icon at the bottom then see an overall inbox. By adding the create message icon at the top right users
                                    span.text-blue-500.px-1 instinctively
                                    | knew it would take them to the screen where they could
                                    span.text-green-500.px-1 start a group.
                            div(class="w-2/3")
                                g-image.w-full(src="~/assets/images/project_inbox_screenshot_1.png")

                div.py-5
                    div.flex.flex-col
                        div.flex.justify-start.py-5
                            p.text-2xl.text-center.text-gray-500
                                | Progression of the
                                span.text-blue-500.px-1 Attachment Icon
                                | within
                                span.text-green-500.px-1 RoleCall
                        div.flex.py-5
                            g-image.w-full(src="~/assets/images/attachment_icon_screenshot_0.png")

                div.py-5
                    div.flex
                        div.shadow-md.px-2.py-5.mr-2(class="w-1/2")
                            p.text-xl.text-gray-500
                                | Since I added the poll feature, I wanted the users to see it as a tool. So the tool Icon was added to represent that. However all the
                                span.text-blue-500.px-1 females
                                | that we tested with did not know that it meant tools, so we added a label to make it clear.
                        div.flex.flex-col.justify-end.ml-2(class="w-1/2")
                            div.h-20
                            p.text-gray-500.text-sm *Working with the constraint of ad space was challenging as well.
                            div.border.border-gray-500.py-5
                                p.text-center.text-gray-500 AD SPACE

            div.py-5
                div.flex.justify-end
                    div.flex.flex-col(class="w-1/3")
                        p.text-2xl.font-extrabold "You guys ready to build this thing."
                        p.flex.justify-end.text-2xl.font-extrabold - Stephen (CEO of RoleCall)

            div.my-20
                div.flex.justify-center
                    div.flex.flex-col.justify-center
                        g-link.nav__link.bg-orange-500.h-12.w-40.rounded-full.mx-auto.flex.justify-center.items-center(to="/")
                            span.text-white.font-semibold Back to Home

</template>