import Icon from '@hackclub/icons'
import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Box, Flex, Heading, NavLink, Button, Text, IconButton } from 'theme-ui'
import { theme } from '../lib/theme'
import Section from '../components/section'

import dayjs from 'dayjs'
import { Navbar } from '../components/Navbar'
import { Announcement } from '../lib/helpers/announcement'

const relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

export function HeroCard({ title, subtitleIcon, subtitle, ctaIcon, style, onClick }) {
  let borderColor;

  if (style.color) {
    const { color } = style;

    if (theme.colors[color]) borderColor = theme.colors[color] + '40';
    else if (color.startsWith('#')) borderColor = color + '40';
    else borderColor = 'rgba(255, 255, 255, .2)';
  }

  return (
    <Button
      sx={{
        display: 'flex',
        borderRadius: 5,
        gap: 3,
        minWidth: ['min(100%, 400px)', '400px', 'unset'],
        justifyContent: ['space-between', 'space-between', 'unset'],
        ...style
      }}
      onClick={onClick}
    >
      <Box sx={{ flexDirection: 'column', alignItems: 'start' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'left',
            gap: 2
          }}
        >
          {title}
        </Box>{' '}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '13px',
            fontWeight: 500
          }}
        >
          <Box sx={{
            display: ['none', 'block', 'block']
          }}>
            <Icon glyph={subtitleIcon} size={24} />
          </Box>
          <Text sx={{ my: '0px!important' }}>
            {subtitle}
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
          borderColor: borderColor || 'rgba(255, 255, 255, .2)'
        }}
      >
        <Icon glyph={ctaIcon} size={40} style={{ margin: '0px' }} />
      </Box>
    </Button>
  );
}

export default function Page() {
  return (
    <>
      <Head>
        <title>Irvine Hack Club</title>
      </Head>
      <Navbar />

      <Section.Hero announcements={[
        new Announcement('11/14/2023', 'Resources for Clicker Game', `Click below to access the starter code for the clicker game we'll make today!`),
        new Announcement('9/5/2023', 'Kicking off the 2023/2024 school year', `Hack Club is a new club to Irvine High School established to help students build creative coding projects collaboratively with friends. We meet every other Thursday in S1. We hope to see you there!`),
      ]} />

      <Section.About />
      <Section.Footer />

      {/* <Section.About /> */}
    </>
  )
}
