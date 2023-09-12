import { Box, Heading } from "theme-ui"

export default function About () {
    return (
      <>
        <Box
          sx={{
            width: '100%',
            p: [3, 4, 5],
            zIndex: 99
          }}
        >
          <Heading
            variant="ultratitle"
            sx={{
              fontSize: [5, 6]
            }}
            as="h1"
          >
            Some header here
          </Heading>
          <Heading
            sx={{
              mt: 3,
              mb: '20px',
              fontWeight: '500'
            }}
            as="h4"
          >
            Unleash your creativity - with code. No experience necessary.
          </Heading>
        </Box>
      </>
    )
}