'use strict'
;(self.webpackChunkhomepage = self.webpackChunkhomepage || []).push([
    [690],
    {
        653: (e, a, c) => {
            c.r(a), c.d(a, { addIcons: () => t })
            const n = [
                { name: 'HTML', file: c.p + '5fb7f0cd22ba6f9d8643.svg' },
                { name: 'CSS', file: c.p + 'a69c124cad5a941f520d.svg' },
                { name: 'JavaScript', file: c.p + '78215868e21ab89e8193.svg' },
                { name: 'TypeScript', file: c.p + '42ce25bf3cbb6ab65a1f.svg' },
                { name: 'React', file: c.p + '915bca6cc8c197f983ea.svg' },
                { name: 'SASS', file: c.p + 'a96a63605a14da839aae.svg' },
                { name: 'Bootstrap', file: c.p + '454a713887f7aca8b0fe.svg' },
                { name: 'NodeJS', file: c.p + '9b3de59ce1441b188ae7.svg' },
            ]
            function t() {
                const e = document.querySelector('.tech-list-1')
                e
                    ? n.forEach((a) => {
                          const c = document.createElement('div')
                          c.classList.add('tech-item'),
                              (c.style.textAlign = 'center')
                          const n = document.createElement('img')
                          ;(n.src = a.file),
                              (n.alt = `${a.name} Icon`),
                              (n.className = 'svg')
                          const t = document.createElement('p')
                          ;(t.className = 'tech-name'),
                              (t.textContent = a.name),
                              c.appendChild(n),
                              c.appendChild(t),
                              e.appendChild(c)
                      })
                    : console.error('Container element not found.')
            }
        },
    },
])
