import Icon from '@hackclub/icons'
import { useModal } from '../modal'
import { Box, Flex, Heading, NavLink, Button, Text, IconButton } from 'theme-ui'
import { theme } from '../../lib/theme'

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

export default function Hero ({ announcements }) {
  const nextMeeting = {
    // date: dayjs('9/12/2023'),
    title: 'our interest meeting'
  };

  const InterestMeetingModal = useModal("Interest Meeting RSVP", { shell: 'content ' });
  const AnnouncementsModal = useModal("Latest Announcements", { shell: 'blocks' });

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '80px',
          py: [6, 6, 192],
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
            It&apos;s time to build&nbsp;the{' '}
            <span
              style={{
                animation: `60s infinite rainbow linear`,
                paddingLeft: '8px',
                paddingRight: '8px',
                borderRadius: '8px',
                display: 'inline-flex'
              }}
            >
              extraordinary
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
          <Flex sx={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: [2, 2, 3],
            mt: 4
          }}>
            <HeroCard
              // title={`Join us for ${nextMeeting.title}`}
              // subtitle={<>
              //   Next meeting {nextMeeting.date.fromNow()} in room S1 &bull;{' '}
              //   {nextMeeting.date.format('MMM D')} at lunch
              // </>}
              title="Join us for our interest meeting"
              subtitle="Date TBD at lunch in room S1"
              subtitleIcon="event-check"
              ctaIcon="enter"
              onClick={() => InterestMeetingModal.open()}
              style={{
                background: 'green'
              }} />
            <HeroCard
              title={announcements[0].title}
              subtitle={<>
                Latest announcement &bull;{' '}
                {announcements[0].date.format('MMM D')}
              </>}
              subtitleIcon="announcement"
              ctaIcon="external"
              onClick={() => AnnouncementsModal.open()}
              style={{
                background: 'white',
                color: 'blue'
              }} />
          </Flex>
        </Box>
      </Box>
      <InterestMeetingModal>
        (RSVP form under construction)
      </InterestMeetingModal>
      <AnnouncementsModal>
        <Box sx={{
          minHeight: '300px'
        }}>
          {announcements.map((announcement, i) => (
            <>
              {i > 0 && <hr style={{ margin: '0px', marginLeft: '16px', width: 'calc(100% - 32px)' }} />}
              <Flex sx={{
                px: [3, 4],
                py: 3,
                flexDirection: "column"
              }}>
                <Heading variant="subheadline" mt={0} mb={2}>{announcement.title}</Heading>
                <Text my={0}>{announcement.body}</Text>
              </Flex>
            </>
          ))}
        </Box>
      </AnnouncementsModal>
    </>
  )
}
