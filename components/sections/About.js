import { Box, Card, Heading, Input } from "theme-ui"

export default function About() {
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
          variant="title"
          sx={{
            fontSize: [4, 5],
            mb: 5
          }}
          as="h2"
        >
          Join us for the 2024-2025 school year
        </Heading>
        <Box sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <Card variant="translucent" sx={{
            border: s => `2px solid ${s.colors.steel}`,
            borderRadius: 10,
            width: 700,
            maxWidth: '100%',
          }}>
            <div id="interest-form" dangerouslySetInnerHTML={{ __html: `
              <div style="width:100%;height:500px;" data-fillout-id="6fMAfsDC8Fus" data-fillout-embed-type="standard" data-fillout-inherit-parameters data-fillout-dynamic-resize data-fillout-domain="forms.hackclub.com"></div><script src="https://server.fillout.com/embed/v1/"></script>
              `}} />
          </Card>
        </Box>
      </Box>
    </>
  )
}