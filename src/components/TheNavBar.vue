<template lang="pug">
    header.container.mx-auto
        nav
            ul.flex.flex-row.justify-between
                li.p-5
                    g-link.nav__link.flex(to='/')
                        g-image.h-12.w-20.mt-1(src='~/assets/images/header_logo.svg')
                        div.mt-1
                            p.text-4xl.text-gray-500 BRAYCKNER
                            p.text-center.text-1xl.text-gray-500 [UX DESIGNER]
                div.mt-3
                    div.flex
                        li.p-5
                            g-link.nav__link(to='/about')
                                span.font-semibold.text-gray-500  About Me
                        li.p-5
                            a.text-gray-500(href='/#projects')
                                span.font-semibold.text-gray-500  Projects
                        li.p-5
                            g-link.nav__link.text-gray-500(to='/contact')
                                span.font-semibold.text-gray-500  Contact
</template>