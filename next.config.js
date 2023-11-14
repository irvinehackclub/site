const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
module.exports = withMDX({ pageExtensions: ['js', 'jsx', 'mdx'], redirects: [
    {
        destination: 'https://docs.google.com/forms/d/e/1FAIpQLSec08cro79830ch3YEX6zHUhyOPD5fHHLJfU068XFLIGEwVOA/viewform',
        permanent: true,
        source: '/forms/interest'
    },
    {
        destination: 'https://firewalledreplit.com/@IanMadden2/ClickerGame-Template',
        permanent: true,
        source: '/clicker'
    }
] })
