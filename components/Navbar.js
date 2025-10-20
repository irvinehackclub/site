import { useState } from "react"
import { useMediaQuery } from "react-responsive"
import { Box, Flex, IconButton, Image, NavLink } from "theme-ui"

export function Navbar() {
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
        <NavLink href="https://instagram.com/irvine.hackclub" p={3}>
          Instagram
        </NavLink>
        <NavLink href="https://discord.gg/RcJpnuTDj6" p={3}>
          Discord
        </NavLink>
        <NavLink href="https://www.remind.com/join/ihs-hack" p={3}>
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
            Irvine Computer Science
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