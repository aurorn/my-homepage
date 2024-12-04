;(() => {
    'use strict'
    var n,
        t,
        e = {
            278: (n, t, e) => {
                e.d(t, { A: () => s })
                var r = e(601),
                    o = e.n(r),
                    a = e(314),
                    i = e.n(a)()(o())
                i.push([
                    n.id,
                    '.navbar {\n    position: fixed;\n    top: 50%;\n    left: 0;\n    transform: translateY(-50%);\n    padding: 1rem;\n    width: 10%;\n    height: auto;\n    z-index: 10;\n}\n\n.navbar-nav {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n\n.navbar-item {\n    margin: 1rem 0;\n    padding: 0.5rem;\n    font-size: 1.2svw;\n    color: #aaa;\n    cursor: pointer;\n    transition:\n        color 0.3s ease,\n        font-size 0.3s ease;\n}\n\n.navbar-item:hover {\n    color: #fff;\n}\n\n.navbar-item.active {\n    color: #f8e4be;\n    font-size: 1.5svw;\n    font-weight: bold;\n}\n',
                    '',
                ])
                const s = i
            },
            658: (n, t, e) => {
                e.d(t, { A: () => s })
                var r = e(601),
                    o = e.n(r),
                    a = e(314),
                    i = e.n(a)()(o())
                i.push([
                    n.id,
                    ":root {\n    /* Primary Colors */\n    --primary-color: rgb(248, 228, 190);\n    --primary-color-translucent: rgba(248, 228, 190, 0.911);\n    --background-gradient-start: #414345;\n    --background-gradient-end: #232526;\n    --background-overlay: rgba(20, 20, 20, 0.2);\n\n    /* Text Colors */\n    --text-color: var(--primary-color-translucent);\n    --text-color-dark: #333;\n    --text-color-light: #fff;\n\n    /* Shadow Colors */\n    --shadow-color: rgba(0, 0, 0, 0.5);\n    --shadow-color-light: rgba(0, 0, 0, 0.2);\n\n    /* Navbar Colors */\n    --navbar-item-color: #aaa;\n    --navbar-item-hover-color: #fff;\n}\n\n/* Dark Mode Overrides */\nbody.dark-mode {\n    --primary-color: #1a1a1a;\n    --primary-color-translucent: rgba(26, 26, 26, 0.9);\n    --background-gradient-start: #232526;\n    --background-gradient-end: #414345;\n    --background-overlay: rgba(255, 255, 255, 0.2);\n    --text-color: #f0f0f0;\n    --text-color-dark: #ccc;\n    --text-color-light: #fff;\n    --shadow-color: rgba(0, 0, 0, 0.7);\n    --navbar-item-color: #ccc;\n    --navbar-item-hover-color: #fff;\n}\n\n/* Existing CSS, replacing color values with variables */\nhtml,\nbody {\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto', sans-serif;\n    background: var(--background-gradient-end);\n    background: -webkit-linear-gradient(\n        to right,\n        var(--background-gradient-start),\n        var(--background-gradient-end)\n    );\n    background: linear-gradient(\n        to right,\n        var(--background-gradient-start),\n        var(--background-gradient-end)\n    );\n    overflow-x: hidden;\n    position: relative;\n    font-size: 100%;\n}\n\n.top-box {\n    position: relative;\n    width: 100svw;\n    height: 100svh;\n    overflow: hidden;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    transition: transform 0.5s ease-in-out;\n}\n\n.intro-header {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    color: var(--text-color);\n    text-align: center;\n    z-index: 3;\n    transition: transform 0.5s ease-in-out;\n}\n\n.header {\n    height: 10svh;\n    line-height: 10svh;\n    font-size: calc(3rem - 1svh);\n    text-align: center;\n}\n\n.welcome-text {\n    margin: 0;\n    padding: 0;\n}\n\n.about-m-wrapper {\n    display: none;\n}\n\n.hidden-content {\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transform: translateX(100%);\n    transition: transform 0.5s ease-in-out;\n    z-index: 2;\n}\n\n.about-bar-content .about-text {\n    color: #333;\n    font-size: 1.5rem;\n}\n\n.action-button-wrapper {\n    position: absolute;\n    transform: translateY(-50%);\n    animation: bounce 1s infinite ease-in-out;\n}\n\n.about {\n    top: 51%;\n    right: 10%;\n}\n\n.home {\n    top: 51%;\n    left: 15%;\n}\n\n.action-button {\n    color: var(--text-color);\n    border: none;\n    font-size: 1.5rem;\n    cursor: pointer;\n    z-index: 3;\n    background: none;\n    transition:\n        transform 0.2s ease,\n        box-shadow 0.2s ease;\n}\n\n.action-button:hover {\n    transform: scale(1.2);\n}\n\n.action-button:active {\n    transform: scale(0.9);\n    box-shadow: none;\n}\n\n@keyframes bounce {\n    0%,\n    100% {\n        transform: translateY(-70%);\n    }\n    50% {\n        transform: translateY(-50%);\n    }\n}\n\n.about-img {\n    position: relative;\n    height: auto;\n    width: 20svw;\n    right: 10svw;\n    border-radius: 30%;\n}\n\n.about-title-wrapper {\n    position: absolute;\n    top: 35%;\n    left: 55%;\n}\n\n.about-title {\n    font-size: 2rem;\n    color: var(--text-color);\n    transform: translateY(-100%);\n}\n.about-title.animated {\n    animation: title-anim 1s linear forwards;\n}\n\n@keyframes title-anim {\n    from {\n        transform: translateY(-100%);\n    }\n    to {\n        transform: translateY(0);\n    }\n}\n\n.about-title.reverse {\n    animation: about-title-reverse 1s linear forwards;\n}\n\n@keyframes about-title-reverse {\n    from {\n        transform: translateY(0);\n    }\n    to {\n        transform: translateY(-200%);\n    }\n}\n\n.about-underline {\n    position: absolute;\n    top: 70%;\n    left: 0;\n    height: 0.3svh;\n    background-color: var(--text-color);\n    transition: width 1.5s ease-in-out;\n}\n\n.about-title-wrapper.active .about-underline {\n    width: 30svw;\n}\n\n.about-title-underline.reverse {\n    animation: underline-reverse 1s linear forwards;\n}\n\n@keyframes underline-reverse {\n    from {\n        width: 100%;\n    }\n    to {\n        width: 0;\n    }\n}\n\n.about-bar-wrapper {\n    position: absolute;\n    top: 45%;\n    left: 55%;\n    width: 40%;\n    margin-top: 1%;\n}\n\n.about-text {\n    font-size: 1rem;\n    color: var(--text-color);\n    transform: translateY(200%);\n}\n\n.about-text.animated {\n    animation: about-text-anim 1s linear forwards;\n}\n\n@keyframes about-text-anim {\n    from {\n        transform: translateY(200%);\n    }\n    to {\n        transform: translateY(0);\n    }\n}\n\n.about-text.reverse {\n    animation: about-text-reverse 1s linear forwards;\n}\n\n@keyframes about-text-reverse {\n    from {\n        transform: translateY(0);\n    }\n    to {\n        transform: translateY(200%);\n    }\n}\n\nmain {\n    display: flex;\n    flex-direction: column;\n    width: 100svw;\n}\n/* Carousel Styles */\n.carousel-box {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    max-width: 100svw;\n    overflow: hidden;\n    height: 100svh;\n}\n\n.carousel-title-container {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n}\n\n.carousel-title-line-1 {\n    height: 0.3svh;\n    background-color: var(--text-color);\n    width: 50svw;\n}\n\n.carousel-title-line-2 {\n    height: 0.3svh;\n    background-color: var(--text-color);\n    width: 50svw;\n    display: none;\n}\n\n.carousel-title {\n    color: var(--text-color);\n    font-size: 2rem;\n    margin: 5%;\n}\n\n.carousel {\n    position: relative;\n    height: 100%;\n    width: 70%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n}\n\n.card {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0 4px 10px var(--shadow-color);\n    height: 35svh;\n    width: 35svw;\n    max-width: 40svw;\n    transition:\n        transform 0.3s ease,\n        z-index 0s ease,\n        opacity 0.3s ease;\n    opacity: 1;\n    position: absolute;\n    \n}\n\n.carousel-img {\n    display: flex;\n    justify-content: center;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    z-index: 1;\n    pointer-events: none;\n    user-select: none;\n}\n\n.proj-name {\n    display: flex;\n    justify-content: center;\n    z-index: 2;\n    font-size: 4rem;\n    text-align: center;\n    margin: 0;\n    padding: 5px;\n    font-size: 200%;\n    color: var(--text-color);\n    margin-top: auto;\n    background: #000000c2;\n    width: 100%;\n    height: 20%;\n    user-select: none;\n}\n\n/* Active Card */\n.card[data-position='0'] {\n    transform: translateX(0) scale(1.2);\n    opacity: 1;\n    z-index: 10;\n}\n\n/* Right Card */\n.card[data-position='1'] {\n    transform: translateX(100%) scale(0.6);\n    opacity: 0.5;\n    z-index: 5;\n}\n\n/* Left Card */\n.card[data-position='-1'] {\n    transform: translateX(-100%) scale(0.6);\n    opacity: 0.5;\n    z-index: 5;\n}\n\n/* Off-Screen Cards */\n.card:not([data-position='0']):not([data-position='1']):not(\n        [data-position='-1']\n    ) {\n    transform: translateX(200%);\n    opacity: 0;\n    z-index: 1;\n}\n\n/* Hover Effects */\n.card:hover {\n    opacity: 1;\n}\n\n/* Bottom Section */\n\n.bottom-panel {\n    height: 100svh;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    gap: 3%;\n\n}\n\n.tech-box {\n    display: flex;\n    flex-direction: column;\n}\n\n.titleLine {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n}\n\n.tech-title {\n    color: var(--text-color);\n    font-size: 2rem;\n    margin: 5%;\n}\n\n.tech-title-line,\n.tech-title-line-m {\n    height: 0.3svh;\n    background-color: var(--text-color);\n    width: 50svw;\n    margin: 5%;\n    margin-left: 0%;\n}\n\n.tech-title-line-m {\n    display: none;\n}\n\n.tech-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.tech-icons-box {\n    display: flex;\n    flex-direction: row;\n    background-color: rgba(0, 0, 0, 0.452);\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);\n    width: 40svw;\n    padding: 5%;\n    justify-content: center;\n    align-items: center;\n}\n\n.tech-list-1 {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    width: 100%;\n    padding: 2%;\n    box-sizing: border-box;\n}\n\n.tech-item {\n    flex: 0 0 30%;\n    margin: 1.5%;\n    box-sizing: border-box;\n    text-align: center;\n    fill: var(--text-color);\n}\n\n.tech-item:hover {\n    transform: scale(1.2);\n}\n\n.tech-name {\n    color: var(--text-color);\n    margin-top: 3%;\n    font-size: 1rem;\n}\n\n.svg {\n    width: 50%;\n    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));\n}\n\n.hidden {\n    display: none;\n}\n\n.contact-wrapper {\n    width: 100svw;\n    height: 50svh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n    gap: 5%;\n}\n\n.contact-text {\n    color: var(--text-color);\n    font-size: 2rem;\n    padding: 2svw;\n    width: 8svw;\n    height: auto;\n    border-right: solid 1px var(--text-color);\n}\n\n.social-hub {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 5svh;\n}\n\n.con-icon {\n    height: auto;\n    width: 4svw;\n    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));\n    fill: var(--text-color);\n}\n\n.con-icon:hover {\n    transform: scale(1.2);\n    cursor: pointer;\n}\n\n/* Mobile Styles */\n@media (max-width: 768px) {\n    .navbar {\n        display: none;\n    }\n\n    .top-box {\n        display: flex;\n        flex-direction: column;\n        height: 100%;\n    }\n\n    .action-button-wrapper {\n        display: none;\n    }\n\n    .intro-header {\n        display: flex;\n        height: 100svh;\n        width: 100svw;\n        flex-grow: 1;\n    }\n\n    .hidden-content {\n        display: none;\n    }\n\n    .about-m-wrapper {\n        display: flex;\n        justify-content: center;\n        flex-direction: column;\n        align-items: center;\n        max-width: 100svw;\n        height: 100svh;\n        flex-grow: 1;\n    }\n\n    .about-title-wrapper-m {\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .about-title-m {\n        margin: 0 5% 0 5%;\n        font-size: 2rem;\n        color: var(--text-color);\n    }\n    .about-line-m {\n        height: 0.3svh;\n        width: 25svw;\n        background: var(--text-color);\n    }\n\n    .about-img-m {\n        height: 20svw;\n        width: 50svw;\n    }\n\n    .about-text-wrapper-m {\n        padding: 10%;\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .about-text-m {\n        margin: 5%;\n        padding: 5%;\n        border-color: var(--text-color);\n        border-left: 1px solid;\n        font-size: 1rem;\n        color: var(--text-color);\n    }\n\n    .carousel-box {\n        height: 100%;\n    }\n\n    .carousel-title {\n        font-size: 2rem;\n    }\n\n    .carousel-title-line-1 {\n        width: 25svw;\n    }\n    .carousel-title-line-2 {\n        display: block;\n        width: 25svw;\n    }\n\n    .carousel {\n        width: 100svw;\n        height: 65svh;\n    }\n\n    .card[data-position='0'] {\n        transform: translateX(0) scale(1);\n        opacity: 1;\n        z-index: 10;\n    }\n\n    .card {\n        width: 60%;\n        height: 80%;\n        max-width: 60%;\n    }\n\n    .proj-name {\n        font-size: 2rem;\n    }\n\n    .tech-title-line-m {\n        display: block;\n    }\n\n    .tech-box {\n        width: 90%;\n    }\n\n    .tech-icons-box {\n        width: 80%;\n    }\n\n    .tech-title-line {\n        width: 25svw;\n        background-color: var(--text-color);\n        height: 0.3svh;\n        margin: 0;\n    }\n\n    .svg {\n        width: 10svw;\n    }\n\n    .tech-name {\n        font-size: 3svw;\n    }\n\n    .contact-wrapper {\n        gap: 0%;\n        flex-direction: column;\n        text-align: center;\n    }\n\n    .contact-text {\n        width: 30svw;\n        border-right: 0;\n        border-bottom: solid 1px var(--text-color);\n    }\n\n    .social-hub {\n        flex-direction: row;\n    }\n\n    .con-icon {\n        width: 10svw;\n    }\n}\n",
                    '',
                ])
                const s = i
            },
            314: (n) => {
                n.exports = function (n) {
                    var t = []
                    return (
                        (t.toString = function () {
                            return this.map(function (t) {
                                var e = '',
                                    r = void 0 !== t[5]
                                return (
                                    t[4] &&
                                        (e += '@supports ('.concat(
                                            t[4],
                                            ') {'
                                        )),
                                    t[2] && (e += '@media '.concat(t[2], ' {')),
                                    r &&
                                        (e += '@layer'.concat(
                                            t[5].length > 0
                                                ? ' '.concat(t[5])
                                                : '',
                                            ' {'
                                        )),
                                    (e += n(t)),
                                    r && (e += '}'),
                                    t[2] && (e += '}'),
                                    t[4] && (e += '}'),
                                    e
                                )
                            }).join('')
                        }),
                        (t.i = function (n, e, r, o, a) {
                            'string' == typeof n && (n = [[null, n, void 0]])
                            var i = {}
                            if (r)
                                for (var s = 0; s < this.length; s++) {
                                    var l = this[s][0]
                                    null != l && (i[l] = !0)
                                }
                            for (var c = 0; c < n.length; c++) {
                                var d = [].concat(n[c])
                                ;(r && i[d[0]]) ||
                                    (void 0 !== a &&
                                        (void 0 === d[5] ||
                                            (d[1] = '@layer'
                                                .concat(
                                                    d[5].length > 0
                                                        ? ' '.concat(d[5])
                                                        : '',
                                                    ' {'
                                                )
                                                .concat(d[1], '}')),
                                        (d[5] = a)),
                                    e &&
                                        (d[2]
                                            ? ((d[1] = '@media '
                                                  .concat(d[2], ' {')
                                                  .concat(d[1], '}')),
                                              (d[2] = e))
                                            : (d[2] = e)),
                                    o &&
                                        (d[4]
                                            ? ((d[1] = '@supports ('
                                                  .concat(d[4], ') {')
                                                  .concat(d[1], '}')),
                                              (d[4] = o))
                                            : (d[4] = ''.concat(o))),
                                    t.push(d))
                            }
                        }),
                        t
                    )
                }
            },
            601: (n) => {
                n.exports = function (n) {
                    return n[1]
                }
            },
            72: (n) => {
                var t = []
                function e(n) {
                    for (var e = -1, r = 0; r < t.length; r++)
                        if (t[r].identifier === n) {
                            e = r
                            break
                        }
                    return e
                }
                function r(n, r) {
                    for (var a = {}, i = [], s = 0; s < n.length; s++) {
                        var l = n[s],
                            c = r.base ? l[0] + r.base : l[0],
                            d = a[c] || 0,
                            u = ''.concat(c, ' ').concat(d)
                        a[c] = d + 1
                        var f = e(u),
                            p = {
                                css: l[1],
                                media: l[2],
                                sourceMap: l[3],
                                supports: l[4],
                                layer: l[5],
                            }
                        if (-1 !== f) t[f].references++, t[f].updater(p)
                        else {
                            var h = o(p, r)
                            ;(r.byIndex = s),
                                t.splice(s, 0, {
                                    identifier: u,
                                    updater: h,
                                    references: 1,
                                })
                        }
                        i.push(u)
                    }
                    return i
                }
                function o(n, t) {
                    var e = t.domAPI(t)
                    return (
                        e.update(n),
                        function (t) {
                            if (t) {
                                if (
                                    t.css === n.css &&
                                    t.media === n.media &&
                                    t.sourceMap === n.sourceMap &&
                                    t.supports === n.supports &&
                                    t.layer === n.layer
                                )
                                    return
                                e.update((n = t))
                            } else e.remove()
                        }
                    )
                }
                n.exports = function (n, o) {
                    var a = r((n = n || []), (o = o || {}))
                    return function (n) {
                        n = n || []
                        for (var i = 0; i < a.length; i++) {
                            var s = e(a[i])
                            t[s].references--
                        }
                        for (var l = r(n, o), c = 0; c < a.length; c++) {
                            var d = e(a[c])
                            0 === t[d].references &&
                                (t[d].updater(), t.splice(d, 1))
                        }
                        a = l
                    }
                }
            },
            659: (n) => {
                var t = {}
                n.exports = function (n, e) {
                    var r = (function (n) {
                        if (void 0 === t[n]) {
                            var e = document.querySelector(n)
                            if (
                                window.HTMLIFrameElement &&
                                e instanceof window.HTMLIFrameElement
                            )
                                try {
                                    e = e.contentDocument.head
                                } catch (n) {
                                    e = null
                                }
                            t[n] = e
                        }
                        return t[n]
                    })(n)
                    if (!r)
                        throw new Error(
                            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                        )
                    r.appendChild(e)
                }
            },
            540: (n) => {
                n.exports = function (n) {
                    var t = document.createElement('style')
                    return (
                        n.setAttributes(t, n.attributes),
                        n.insert(t, n.options),
                        t
                    )
                }
            },
            56: (n, t, e) => {
                n.exports = function (n) {
                    var t = e.nc
                    t && n.setAttribute('nonce', t)
                }
            },
            825: (n) => {
                n.exports = function (n) {
                    if ('undefined' == typeof document)
                        return {
                            update: function () {},
                            remove: function () {},
                        }
                    var t = n.insertStyleElement(n)
                    return {
                        update: function (e) {
                            !(function (n, t, e) {
                                var r = ''
                                e.supports &&
                                    (r += '@supports ('.concat(
                                        e.supports,
                                        ') {'
                                    )),
                                    e.media &&
                                        (r += '@media '.concat(e.media, ' {'))
                                var o = void 0 !== e.layer
                                o &&
                                    (r += '@layer'.concat(
                                        e.layer.length > 0
                                            ? ' '.concat(e.layer)
                                            : '',
                                        ' {'
                                    )),
                                    (r += e.css),
                                    o && (r += '}'),
                                    e.media && (r += '}'),
                                    e.supports && (r += '}')
                                var a = e.sourceMap
                                a &&
                                    'undefined' != typeof btoa &&
                                    (r +=
                                        '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                            btoa(
                                                unescape(
                                                    encodeURIComponent(
                                                        JSON.stringify(a)
                                                    )
                                                )
                                            ),
                                            ' */'
                                        )),
                                    t.styleTagTransform(r, n, t.options)
                            })(t, n, e)
                        },
                        remove: function () {
                            !(function (n) {
                                if (null === n.parentNode) return !1
                                n.parentNode.removeChild(n)
                            })(t)
                        },
                    }
                }
            },
            113: (n) => {
                n.exports = function (n, t) {
                    if (t.styleSheet) t.styleSheet.cssText = n
                    else {
                        for (; t.firstChild; ) t.removeChild(t.firstChild)
                        t.appendChild(document.createTextNode(n))
                    }
                }
            },
        },
        r = {}
    function o(n) {
        var t = r[n]
        if (void 0 !== t) return t.exports
        var a = (r[n] = { id: n, exports: {} })
        return e[n](a, a.exports, o), a.exports
    }
    ;(o.m = e),
        (o.n = (n) => {
            var t = n && n.__esModule ? () => n.default : () => n
            return o.d(t, { a: t }), t
        }),
        (o.d = (n, t) => {
            for (var e in t)
                o.o(t, e) &&
                    !o.o(n, e) &&
                    Object.defineProperty(n, e, { enumerable: !0, get: t[e] })
        }),
        (o.f = {}),
        (o.e = (n) =>
            Promise.all(
                Object.keys(o.f).reduce((t, e) => (o.f[e](n, t), t), [])
            )),
        (o.u = (n) => n + '.main.js'),
        (o.g = (function () {
            if ('object' == typeof globalThis) return globalThis
            try {
                return this || new Function('return this')()
            } catch (n) {
                if ('object' == typeof window) return window
            }
        })()),
        (o.o = (n, t) => Object.prototype.hasOwnProperty.call(n, t)),
        (n = {}),
        (t = 'homepage:'),
        (o.l = (e, r, a, i) => {
            if (n[e]) n[e].push(r)
            else {
                var s, l
                if (void 0 !== a)
                    for (
                        var c = document.getElementsByTagName('script'), d = 0;
                        d < c.length;
                        d++
                    ) {
                        var u = c[d]
                        if (
                            u.getAttribute('src') == e ||
                            u.getAttribute('data-webpack') == t + a
                        ) {
                            s = u
                            break
                        }
                    }
                s ||
                    ((l = !0),
                    ((s = document.createElement('script')).charset = 'utf-8'),
                    (s.timeout = 120),
                    o.nc && s.setAttribute('nonce', o.nc),
                    s.setAttribute('data-webpack', t + a),
                    (s.src = e)),
                    (n[e] = [r])
                var f = (t, r) => {
                        ;(s.onerror = s.onload = null), clearTimeout(p)
                        var o = n[e]
                        if (
                            (delete n[e],
                            s.parentNode && s.parentNode.removeChild(s),
                            o && o.forEach((n) => n(r)),
                            t)
                        )
                            return t(r)
                    },
                    p = setTimeout(
                        f.bind(null, void 0, { type: 'timeout', target: s }),
                        12e4
                    )
                ;(s.onerror = f.bind(null, s.onerror)),
                    (s.onload = f.bind(null, s.onload)),
                    l && document.head.appendChild(s)
            }
        }),
        (o.r = (n) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(n, Symbol.toStringTag, {
                    value: 'Module',
                }),
                Object.defineProperty(n, '__esModule', { value: !0 })
        }),
        (() => {
            var n
            o.g.importScripts && (n = o.g.location + '')
            var t = o.g.document
            if (
                !n &&
                t &&
                (t.currentScript &&
                    'SCRIPT' === t.currentScript.tagName.toUpperCase() &&
                    (n = t.currentScript.src),
                !n)
            ) {
                var e = t.getElementsByTagName('script')
                if (e.length)
                    for (
                        var r = e.length - 1;
                        r > -1 && (!n || !/^http(s?):/.test(n));

                    )
                        n = e[r--].src
            }
            if (!n)
                throw new Error(
                    'Automatic publicPath is not supported in this browser'
                )
            ;(n = n
                .replace(/#.*$/, '')
                .replace(/\?.*$/, '')
                .replace(/\/[^\/]+$/, '/')),
                (o.p = n)
        })(),
        (() => {
            var n = { 524: 0 }
            o.f.j = (t, e) => {
                var r = o.o(n, t) ? n[t] : void 0
                if (0 !== r)
                    if (r) e.push(r[2])
                    else {
                        var a = new Promise((e, o) => (r = n[t] = [e, o]))
                        e.push((r[2] = a))
                        var i = o.p + o.u(t),
                            s = new Error()
                        o.l(
                            i,
                            (e) => {
                                if (
                                    o.o(n, t) &&
                                    (0 !== (r = n[t]) && (n[t] = void 0), r)
                                ) {
                                    var a =
                                            e &&
                                            ('load' === e.type
                                                ? 'missing'
                                                : e.type),
                                        i = e && e.target && e.target.src
                                    ;(s.message =
                                        'Loading chunk ' +
                                        t +
                                        ' failed.\n(' +
                                        a +
                                        ': ' +
                                        i +
                                        ')'),
                                        (s.name = 'ChunkLoadError'),
                                        (s.type = a),
                                        (s.request = i),
                                        r[1](s)
                                }
                            },
                            'chunk-' + t,
                            t
                        )
                    }
            }
            var t = (t, e) => {
                    var r,
                        a,
                        [i, s, l] = e,
                        c = 0
                    if (i.some((t) => 0 !== n[t])) {
                        for (r in s) o.o(s, r) && (o.m[r] = s[r])
                        l && l(o)
                    }
                    for (t && t(e); c < i.length; c++)
                        (a = i[c]), o.o(n, a) && n[a] && n[a][0](), (n[a] = 0)
                },
                e = (self.webpackChunkhomepage =
                    self.webpackChunkhomepage || [])
            e.forEach(t.bind(null, 0)), (e.push = t.bind(null, e.push.bind(e)))
        })(),
        (o.nc = void 0)
    var a = o(72),
        i = o.n(a),
        s = o(825),
        l = o.n(s),
        c = o(659),
        d = o.n(c),
        u = o(56),
        f = o.n(u),
        p = o(540),
        h = o.n(p),
        m = o(113),
        v = o.n(m),
        g = o(658),
        b = {}
    ;(b.styleTagTransform = v()),
        (b.setAttributes = f()),
        (b.insert = d().bind(null, 'head')),
        (b.domAPI = l()),
        (b.insertStyleElement = h()),
        i()(g.A, b),
        g.A && g.A.locals && g.A.locals
    var x = o(278),
        w = {}
    ;(w.styleTagTransform = v()),
        (w.setAttributes = f()),
        (w.insert = d().bind(null, 'head')),
        (w.domAPI = l()),
        (w.insertStyleElement = h()),
        i()(x.A, w),
        x.A && x.A.locals && x.A.locals,
        document.addEventListener('DOMContentLoaded', function () {
            o
                .e(586)
                .then(o.bind(o, 586))
                .then((n) => {
                    const { initializeCarousel: t } = n
                    t()
                }),
                o
                    .e(399)
                    .then(o.bind(o, 399))
                    .then((n) => {
                        const { initializeAbout: t, initializeAnimation: e } = n
                        t(), e()
                    }),
                o
                    .e(730)
                    .then(o.bind(o, 730))
                    .then((n) => {
                        const { initializeNavbar: t } = n
                        t()
                    }),
                o
                    .e(690)
                    .then(o.bind(o, 653))
                    .then((n) => {
                        const { addIcons: t } = n
                        t()
                    })
        })
})()
