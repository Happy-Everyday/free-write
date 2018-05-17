module.exports = {
    title: 'My Heart, My Words',
    description: '心之所想，笔之所往',
    themeConfig: {
      nav: [
        { text: '前端三剑客', link: '/front/' }
      ],
      sidebar: {
        '/front/': [{
          title: '前端三剑客',
          collapsable: false,
          children: [
            ['', '介绍'],
            ['HTML.md', 'HTML'],
            ['CSS.md', 'CSS'],
            ['JS.md', 'JS']  
          ]
        }]
  
      }
    }
  }