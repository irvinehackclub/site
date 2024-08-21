import Head from "next/head"
import Section from "../components/section"
import { Navbar } from "../components/Navbar"

import Icon from '@hackclub/icons'

import { Box, Flex, Heading, NavLink, Button, Text, IconButton, Input, Card, Grid, Label, Checkbox } from 'theme-ui'
import { theme } from '../lib/theme'
import { useModal } from "../components/modal"


export default function Interest () {
    return (
        <>
            <Head>
            <title>Irvine Hack Club</title>
            </Head>
    
            <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '80px',
          py: 5,
          pt: [6, 5],
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#46764D',
          width: '100%',
          height: '100vh',
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
            opacity: 0.7,
            filter: "blur(2px)"
          }}
        />
        <Box
          sx={{
            width: '100%',
            px: [3, 4, 5],
            zIndex: 10
          }}
        >
            <Card
        sx={{
          maxWidth: 'narrowPlus',
          mx: 'auto',
          // mt: [3, 4],
          background: 'rgb(255,255,255, 0.7)',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Flex
          sx={{
            justifyContent: 'space-between',
            alignItems: ['left', 'left', 'center'],
            flexDirection: ['column', 'column', 'column'],
            gap: '10px',
            textAlign: 'center'
          }}
        >
          <Box>
            <Text
              variant="title"
              sx={{ fontSize: [4, '36px', '42px', 6], zIndex: 2 }}
            >
                Join Hack Club
            </Text>
          </Box>
          <Grid
            as="form"
            method="post"
            action="/api/interest"
            gap={[2, 3]}
            sx={{
              textAlign: 'start',
              alignItems: 'end',
              input: { bg: 'sunken' },
              width: '100%'
            }}
          >
            <Box sx={{ width: '100%' }}>
                <Label htmlFor="name">
                    <Heading as="h3" sx={{ fontSize: 2, mb: 1 }}>
                        Name
                    </Heading>
                </Label>
              <Input
                autofillBackgroundColor="highlight"
                type="text"
                name="name"
                id="name"
                placeholder="Orpheus"
                required
                sx={{ width: '100%', textAlign: 'start', fontSize: 2 }}
              />
            </Box>

            <Box sx={{ width: '100%' }}>
                <Label htmlFor="phone">
                    <Heading as="h3" sx={{ fontSize: 2, mb: 1 }}>
                        Phone Number
                    </Heading>
                </Label>
              <Input
                autofillBackgroundColor="highlight"
                type="tel"
                name="phone"
                id="phone"
                placeholder="855 625 HACK"
                required
                sx={{ width: '100%', textAlign: 'start', fontSize: 2 }}
              />
            </Box>

            <Button type="submit" sx={{ mt: [2, 0], fontSize: 2 }}>
              Submit
            </Button>
          </Grid>
        </Flex>
      </Card>
        </Box>
      </Box>
        </>
    )
}
