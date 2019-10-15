<template lang="pug">
    Layout
        div.flex.bg-black.my-10
            g-image.ml-5(class="w-1/3" src='~/assets/images/profile_pic.png')
            div.flex.flex-col.justify-center(class="w-2/3")
                h1.text-white.text-center.text-6xl About Me
                div.bg-white.p-10
                    p.text-center.text-base I am motivated by gratitude and good parenting, but I focus on being a person who extracts greatness out of people by tapping into potential. I believe that my youth is an advantage because I am pliable and can adapt to situations efficiently and rapidly. I have a natural ability to lead that allows me to thrive in team environments, where my goal-oriented thinking can be effective and lead to overall success.
        div.container.mx-auto
            div.my-10
                h1.text-center.font-semibold.text-4xl.border-b.border-black Experience
                ul.flex.flex-col
                    div.mx-auto
                        li.flex.my-5
                            g-image.my-auto.w-24(src="~/assets/images/helpfully_logo.png")
                            div.mx-5.my-auto
                                h2.font-semibold.text-xl Helpfully LLC
                                p.text-xl — UX Intern
                                p.text-xl June 2018 - August 2018

                        li.flex.my-5
                            g-image.my-auto.w-24(src="~/assets/images/general_assembly_logo.png")
                            div.mx-5.my-auto
                                h2.font-semibold.text-xl General Assembly
                                p.text-xl — User Experience Design Immersive UXDI
                                p.text-xl June 2018 - August 2018

            div.my-10
                h1.text-center.font-semibold.text-4xl.border-b.border-black Education
                ul.flex.flex-col
                    div.mx-auto
                        li.flex.flex-col.my-5
                            g-image.mx-auto(class="w-1/2" src="~/assets/images/ksu_uni_logo.png")
                            div.my-5.mx-auto
                                h2.font-semibold.text-xl Kennesaw State University
                                p.text-xl Software Engineering Major
                                p.text-xl Fall 2018 - Present

            div.shadow-md.p-10.my-10.border.border-gray-200
                h1.text-center.font-semibold.text-4xl.border-b.border-black Skills
                div.flex.justify-center.mx-24
                    div.flex.flex-col.mx-5(class="w-1/2")
                        h2.text-center.font-semibold.text-4xl.border-b.border-black.whitespace-no-wrap Hard Skills
                        ul.mx-1.text-xl
                            li Adobe XD
                            li Sketch
                            li Solidworks/CAD
                            li Invision Studio
                            li Affinity Mapping
                            li User Research
                            li Wireframing
                            li Prototyping
                    div.flex.flex-col.mx-5(class="w-1/2")
                        h2.text-center.font-semibold.text-4xl.border-b.border-black.whitespace-no-wrap Soft Skills
                        ul.mx-1.text-xl
                            li Complex Problem Solving
                            li Leadership
                            li Presentation/Communication
                            li Emotional Intelligence
                            li Collaboration
                            li Interpersonal Skills
</template>