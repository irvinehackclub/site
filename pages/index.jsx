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
            borderRadius: '28px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <img
            src="/cover.jpg"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: -1,
              objectFit: 'cover'
            }}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              width: '100%',
              px: [3, 4, 5],
              py: 6,
              height: '100%',
              background:
                'linear-gradient(90deg, rgba(255,255,255,0.9) 60%, transparent)'
            }}
          >
            <Heading variant="eyebrow">CALLING ALL STUDENTS&nbsp;TO</Heading>
            <Heading color="#375F3D" variant="ultratitle" as="h1">
              Make cool stuff
            </Heading>
            <Heading
              color="#375F3D"
              sx={{ opacity: 0.6 }}
              variant="subtitle"
              as="h1"
            >
              Regardless of coding experience
            </Heading>
          </Box>
        </Box>
      </Box>
    </>
  )
}
