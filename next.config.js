const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
module.exports = withMDX({ pageExtensions: ['js', 'jsx', 'mdx'], redirects: () => [
    {
        destination: 'https://docs.google.com/forms/d/e/1FAIpQLSec08cro79830ch3YEX6zHUhyOPD5fHHLJfU068XFLIGEwVOA/viewform',
        permanent: true,
        source: '/forms/interest'
    },
    {
      source: "/remind",
      destination: "https://www.remind.com/join/irvine-cs",
      permanent: false
    },
    {
      source: "/discord",
      destination: "https://discord.gg/RcJpnuTDj6",
      permanent: false
    }
] })
