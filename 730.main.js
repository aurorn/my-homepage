'use strict'
;(self.webpackChunkhomepage = self.webpackChunkhomepage || []).push([
    [730],
    {
        730: (e, t, o) => {
            function n() {
                const e = document.querySelectorAll('.navbar-item'),
                    t = document.querySelectorAll(
                        '#welcome, #projects, #technology'
                    )
                function o() {
                    t.forEach((t, o) => {
                        const n = t.getBoundingClientRect()
                        n.top >= 0 &&
                            n.top < window.innerHeight / 2 &&
                            (e.forEach((e) => e.classList.remove('active')),
                            e[o].classList.add('active'))
                    })
                }
                window.addEventListener('scroll', o),
                    e.forEach((e) => {
                        e.addEventListener('click', () => {
                            const t = e.getAttribute('data-section')
                            document
                                .getElementById(t)
                                .scrollIntoView({ behavior: 'smooth' })
                        })
                    }),
                    e.forEach((e) => {
                        e.addEventListener('keydown', (t) => {
                            if ('Enter' === t.key || ' ' === t.key) {
                                t.preventDefault()
                                const o = e.getAttribute('data-section')
                                document
                                    .getElementById(o)
                                    .scrollIntoView({ behavior: 'smooth' })
                            }
                        })
                    }),
                    o()
            }
            o.r(t), o.d(t, { initializeNavbar: () => n })
        },
    },
])
