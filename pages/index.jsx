import Icon from '@hackclub/icons';
import Image from 'next/image'
import { Box, Flex, Heading, NavLink, Button, Text } from 'theme-ui'

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
      <Flex sx={{ ml: 'auto' }}>
        <NavLink href="#!" p={2}>
          Instagram
        </NavLink>
        <NavLink href="#!" p={2}>
          Discord
        </NavLink>
        <NavLink href="#!" p={2}>
          Remind
        </NavLink>
      </Flex>
    </Flex>
  )
}

export default function Page() {
  const meetingText = 'our interest meeting';
  const meetingDate = 'Next Tuesday, September 12th'

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
            src="https://cloud-8lj4t1m8o-hack-club-bot.vercel.app/0image__45_-min__1_.png"
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
            <Heading color="primary" variant="ultratitle" sx={{ fontSize: [5, 6, 7, 8] }} as="h1">
              Make cool stuff
            </Heading>
            <Heading
              color="green"
              variant="subtitle"
              sx={{
                fontWeight: '500',
              }}
              as="h1"
            >
              Regardless of coding experience
            </Heading>

            <Flex sx={{
              flexDirection: ['column', 'column', 'row'],
              alignItems: ['start', 'start', 'center'],
              mt: 5,
              // gap 10px, add css
              gap: [2, 2, 3]
            }}>
              <Button>Join us for {meetingText} →</Button>

              <Flex sx={{
                flexDirection: 'row',
                alignItems: 'center',
                // gap 10px, add css
                gap: 1
              }}>
                <Icon glyph="event-check" size={24} />
                <Text sx={{
                  my: '0px!important'
                }}>
                  {meetingDate}
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  )
}
