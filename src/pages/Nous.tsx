import { Title, Text, Stack, Box, Image } from '@mantine/core'
import coupleImage from '../assets/giuliafloarian-couple.jpg'
import classes from './Nous.module.css'

function Nous() {
  return (
    <Box className={classes.container}>
      <Stack gap="xl" align="center">
        <Title order={1} className={classes.title}>
          Our story
        </Title>
        <Image
          src={coupleImage}
          alt="Giulia & Florian"
          className={classes.image}
          radius="md"
        />
        <Text size="lg" className={classes.text}>
          Votre histoire ici...
        </Text>
      </Stack>
    </Box>
  )
}

export default Nous


