'use strict'
;(self.webpackChunkhomepage = self.webpackChunkhomepage || []).push([
    [399],
    {
        399: (e, t, s) => {
            function r() {
                const e = document.querySelector('.about'),
                    t = document.querySelector('.home'),
                    s = document.querySelector('.intro-header'),
                    r = document.querySelector('.hidden-content')
                e && t && s && r
                    ? (e.addEventListener('click', () => {
                          ;(s.style.transform = 'translateX(-100%)'),
                              (r.style.transform = 'translateX(0)')
                      }),
                      t.addEventListener('click', () => {
                          ;(s.style.transform = 'translateX(0)'),
                              (r.style.transform = 'translateX(100%)')
                      }))
                    : console.error(
                          'Required elements for the about are missing.'
                      )
            }
            function a() {
                const e = document.querySelector('.about-title-wrapper'),
                    t = document.querySelector('.about-title'),
                    s = document.querySelector('.about-text')
                document
                    .querySelector('.action-button')
                    .addEventListener('click', () => {
                        e.classList.remove('reverse'),
                            t.classList.remove('reverse'),
                            s.classList.remove('reverse'),
                            e.classList.add('active'),
                            t.classList.add('animated'),
                            s.classList.add('animated')
                    })
                const r = document.querySelector(
                    '.action-button-wrapper.home .action-button'
                )
                r &&
                    r.addEventListener('click', () => {
                        e.classList.remove('active'),
                            t.classList.remove('animated'),
                            s.classList.remove('animated'),
                            e.classList.add('reverse'),
                            t.classList.add('reverse'),
                            s.classList.add('reverse')
                    })
            }
            s.r(t),
                s.d(t, {
                    initializeAbout: () => r,
                    initializeAnimation: () => a,
                })
        },
    },
])
