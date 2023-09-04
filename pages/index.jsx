import Image from 'next/image'
import { Box, Flex, Heading, NavLink } from 'theme-ui'

function Navbar() {
  return (
    <Flex
      as="nav"
      sx={{
        p: 3,
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        left: 0,
        zIndex: 99,
        width: '100vw',
        background: 'white',
        borderBottom: '1px solid',
        borderColor: 'border'
      }}
    >
      <Image src="/logo.png" width={50} height={50} />
      <NavLink href="#!" p={2}>
        Irvine Hack Club
      </NavLink>
      <NavLink href="#!" p={2} sx={{ ml: 'auto' }}>
        Instagram
      </NavLink>
    </Flex>
  )
}

export default function Page() {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          p: 4
        }}
      >
        <Box
          sx={{
            px: 5,
            py: 6,
            background: 'red',
            borderRadius: '28px'
          }}
        >
          <Heading as="h2" color="border">
            CALLING ALL STUDENTS TO
          </Heading>
          <Heading variant="title" color="white" as="h1">
            Make cool stuff
          </Heading>
        </Box>
      </Box>
    </>
  )
}
