'use strict'
;(self.webpackChunkhomepage = self.webpackChunkhomepage || []).push([
    [586],
    {
        586: (e, t, n) => {
            function o() {
                const e = document.querySelector('.carousel')
                if (!e) return void console.error('Carousel element not found.')
                const t = Array.from(e.children)
                if (t.length < 3)
                    return void console.warn(
                        'Carousel requires at least 3 cards to function properly.'
                    )
                let n = !1,
                    o = 0,
                    r = 0,
                    i = 0,
                    u = 0,
                    s = Math.floor(t.length / 2)
                function c() {
                    t.forEach((e, n) => {
                        let o
                        ;(o =
                            n === (s + t.length - 1) % t.length
                                ? -1
                                : n === s
                                  ? 0
                                  : n === (s + 1) % t.length
                                    ? 1
                                    : 2),
                            e.setAttribute('data-position', o)
                    })
                }
                function l(e) {
                    const n = Date.now()
                    n - u < 300 ||
                        ((u = n),
                        'left' === e
                            ? (s = (s + 1) % t.length)
                            : 'right' === e &&
                              (s = (s - 1 + t.length) % t.length),
                        c())
                }
                function d(e) {
                    ;(n = !0), (o = e.clientX || e.touches[0].clientX)
                }
                function a(e) {
                    n &&
                        ((r = e.clientX || e.touches[0].clientX),
                        (i = r - o),
                        i > 100
                            ? (l('right'), (o = r))
                            : i < -100 && (l('left'), (o = r)))
                }
                function h() {
                    n && ((n = !1), (i = 0))
                }
                e.addEventListener('mousedown', d),
                    e.addEventListener('mousemove', a),
                    e.addEventListener('mouseup', h),
                    e.addEventListener('mouseleave', h),
                    document.addEventListener('mouseup', () => {
                        ;(n = !1), (i = 0)
                    }),
                    document.addEventListener('keydown', function (e) {
                        'ArrowLeft' === e.key
                            ? l('left')
                            : 'ArrowRight' === e.key && l('right')
                    }),
                    e.addEventListener('touchstart', d),
                    e.addEventListener('touchmove', a),
                    e.addEventListener('touchend', h),
                    c()
            }
            n.r(t), n.d(t, { initializeCarousel: () => o })
        },
    },
])
