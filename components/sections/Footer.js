import { Box, Card, Heading, Input, Text } from "theme-ui"

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          p: [3, 4],
          display: "flex",
          justifyContent: "center",
            alignItems: "center",
          zIndex: 99,
          background: "smoke"
        }}
      >
        <Text
          sx={{
          }}
          as="p"
        >
          Irvine Computer Science is fiscally sponsored by The Hack Foundation, a 501(c)(3) nonprofit.
        </Text>
      </Box>
    </>
  )
}