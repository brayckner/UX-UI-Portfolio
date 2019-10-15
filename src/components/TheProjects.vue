<template lang="pug">
    div
        h1.text-center.font-semibold.text-gray-500.text-4xl Projects
        ul.flex.flex-col
            li.flex.my-5.mx-auto.justify-between
                g-image(class="w-1/2" src="~/assets/images/rolecall.png")
                div.flex.flex-col.justify-between(class="w-1/3")
                    div
                        h2.font-semibold.text-2xl RoleCall
                        p RoleCall is a browser based software that is crowdsourcing the Inide Film Industry In Atlanta.
                    g-link.nav__link.bg-orange-500.h-12.w-40.rounded-full.mx-auto.flex.justify-center.items-center(to="/projects/rolecall")
                        span.text-white.font-semibold View Project

            li.flex.my-5.mx-auto.justify-between
                g-image(class="w-1/2" src="~/assets/images/atlanta_botanical.png")
                div.flex.flex-col.justify-between(class="w-1/3")
                    div
                        h2.font-semibold.text-2xl Atlanta Botanical Garden
                        p An icon for the city of Atlanta.
                    g-link.nav__link.bg-orange-500.h-12.w-40.rounded-full.mx-auto.flex.justify-center.items-center(to="/projects/atlanta-botanical-garden")
                        span.text-white.font-semibold View Project

            li.flex.my-5.mx-auto.justify-between
                g-image(class="w-1/2" src="~/assets/images/chubbies.png")
                div.flex.flex-col.justify-between(class="w-1/3")
                    div
                        h2.font-semibold.text-2xl Chubbies: One Life Packs
                        p The Infamous Chubbies shorts brand, but with a twist.
                    g-link.nav__link.bg-gray-500.h-12.w-40.rounded-full.mx-auto.flex.justify-center.items-center(to="/")
                        span.text-white.font-semibold Coming Soon

            li.flex.my-5.mx-auto.justify-between
                g-image(class="w-1/2" src="~/assets/images/daily_driver.png")
                div.flex.flex-col.justify-between(class="w-1/3")
                    div
                        h2.font-semibold.text-2xl Daily Driver
                        p You don't need to be a mechanic to Maintain your car.
                    g-link.nav__link.bg-gray-500.h-12.w-40.rounded-full.mx-auto.flex.justify-center.items-center(to="/")
                        span.text-white.font-semibold Coming Soon
</template>