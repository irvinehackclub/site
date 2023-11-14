const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
module.exports = withMDX({ pageExtensions: ['js', 'jsx', 'mdx'], redirects: [
    {
        destination: 'https://docs.google.com/forms/d/e/1FAIpQLSec08cro79830ch3YEX6zHUhyOPD5fHHLJfU068XFLIGEwVOA/viewform',
        permanent: true,
        source: '/forms/interest'
    },
    {
        destination: 'https://firewalledreplit.com/@IanMadden2/ClickerGame-Template?forkRepl=15afb76e-b5f2-4a51-a57a-1c72ddb68a83&forkContext=coverPage&redirecting=1',
        permanent: true,
        source: '/clicker'
    },
    {
        destination: 'https://docs.google.com/presentation/d/1SVJ4tC4Pl4FtxugCypry8w4Ey9-zVIpCWLeTkQjkqt8/edit?usp=sharing',
        permanent: true,
        source: '/clickerslides'
    }
] })
