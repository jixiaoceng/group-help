module.exports = {
    base: '/views/',
    title: '互知圈',
    description: '',
    dest: 'GroupHelp',
    head: [
        [ 'link', { rel: 'icon', href: '/favicon.ico' } ]
    ],
    themeConfig: {
        nav: [
            { text: '首页', link: '/' }
        ],
        sidebar: [
            {
                title: '互知圈是什么',
                collapsable: true,
                children: [
                    'mustRead'
                ]
            },
            {
                title: '新人必读',
                collapsable: true,
                children: [
                    'mustRead',
                    'home'
                ]
            },
            {
                title: '精通',
                collapsable: true,
                children: [
                    'mustRead',
                    'home'
                ]
            }
        ]
    }
}