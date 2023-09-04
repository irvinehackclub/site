import Icon from '@hackclub/icons'
import dayjs from 'dayjs'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Box, Flex, Heading, NavLink, Button, Text, IconButton } from 'theme-ui'
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

function Navbar() {
  const [open, setOpen] = useState(false)

  const isMobile = useMediaQuery({
    query: '(max-width: 600px)'
  })

  const links = (
    <Flex
      sx={{
        ml: isMobile ? '' : 'auto',
        flexDirection: isMobile ? 'column' : 'row'
      }}
    >
      <NavLink href="#!" p={3}>
        Instagram
      </NavLink>
      <NavLink href="#!" p={3}>
        Discord
      </NavLink>
      <NavLink href="#!" p={3}>
        Remind
      </NavLink>
    </Flex>
  )

  return (
    <>
      <Flex
        as="nav"
        sx={{
          px: [4, 5],
          alignItems: 'center',
          position: 'fixed',
          height: '80px',
          top: 0,
          left: 0,
          zIndex: 99,
          width: '100vw',
          color: '#fff',
          gap: 2,
          background: 'linear-gradient(rgba(0,0,0,0.7), transparent)',
          '& a:hover, & a:focus': {
            color: 'white!important',
            opacity: 0.7
          }
        }}
      >
        <Image src="/logo.png" width={50} height={50} />
        <NavLink href="/" p={3} sx={{ whiteSpace: 'nowrap' }}>
          Irvine Hack Club
        </NavLink>
        {isMobile ? (
          <IconButton
            sx={{
              ml: 'auto',
              cursor: 'pointer',
              ...(open && { background: 'rgba(255,255,255,.2)!important' })
            }}
            onClick={() => setOpen(o => !o)}
          >
            <span className="material-symbols-outlined">
              {open ? 'close' : 'menu'}
            </span>
          </IconButton>
        ) : (
          links
        )}
      </Flex>
      {open && (
        <Box
          sx={{
            position: 'fixed',
            display: 'flex',
            flexDirection: 'column',
            top: '80px',
            right: '20px',
            width: 'calc(100vw - 200px)',
            maxHeight: '50vh',
            borderRadius: '20px',
            background: '#000',
            color: '#fff',
            zIndex: 9999
          }}
        >
          {links}
        </Box>
      )}
    </>
  )
}

export default function Page() {
  const meetingText = 'our interest meeting'
  const meetingDate = dayjs('9/12/2023')

  return (
    <>
      <Head>
        <title>Irvine Hack Club</title>
      </Head>
      <Navbar />
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          height: 'calc(100vh - 20px)',
          paddingTop: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#000'
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
            objectFit: 'cover',
            opacity: 0.5
          }}
        />
        <Box
          sx={{
            width: '100%',
            px: [3, 4, 5],
            zIndex: 99
          }}
        >
          <Heading
            style={{
              color: 'white',
              opacity: 0.9,
              fontSize: '20px!important'
            }}
          >
            CALLING ALL STUDENTS&nbsp;
          </Heading>
          <Heading
            color="white"
            variant="ultratitle"
            sx={{
              fontSize: [5, 6],
              mt: 3
            }}
            as="h1"
          >
            It&apos;s time to craft&nbsp;the{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #8BCCEE, #7db586)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-flex'
              }}
            >
              extraordinary&nbsp;
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: 'inherit',
                  marginLeft: '-15px',
                  verticalAlign: 'middle'
                }}
              >
                arrow_forward_ios
              </span>
            </span>
          </Heading>
          <Heading
            color="white"
            sx={{
              mt: 3,
              mb: '20px',
              fontWeight: '500'
            }}
            as="h4"
          >
            Unleash your creativity - with code. No experience necessary.
          </Heading>
          <Button
            sx={{
              mt: 2,
              display: 'flex',
              borderRadius: 5,
              gap: 3
            }}
          >
            <Box sx={{ flexDirection: 'column', alignItems: 'start' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2
                }}
              >
                Join us for {meetingText}{' '}
              </Box>{' '}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '13px',
                  fontWeight: 500
                }}
              >
                <Icon glyph="event-check" size={24} />
                <Text sx={{ my: '0px!important' }}>
                  Next meeting {meetingDate.fromNow()} &bull;{' '}
                  {meetingDate.format('MMM DD')}
                </Text>
              </Box>
            </Box>
            <Box
              sx={{
                width: 45,
                height: 45,
                flexShrink: 0,
                border: '1px solid',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 999,
                borderColor: 'rgba(255, 255, 255, .2)'
              }}
            >
              <span className="material-symbols-outlined">east</span>
            </Box>
          </Button>
        </Box>
      </Box>
    </>
  )
}
