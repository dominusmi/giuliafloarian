import { Title, Text, Stack, Box, Paper, Button } from '@mantine/core'
import classes from './Registry.module.css'

function Registry() {
  return (
    <Box className={classes.container}>
      <Stack gap="xl" align="center">
        <Title order={1} className={classes.title}>
          Liste de mariage / Cadeaux
        </Title>
        <Text size="lg" className={classes.description}>
          Votre présence est le plus beau des cadeaux.
          <br />
          Mais si vous souhaitez tout de même nous gâter, voici quelques idées :
        </Text>
        <Paper shadow="sm" p="xl" radius="md" className={classes.paper}>
          <Button
            component="a"
            href="#"
            target="_blank"
            size="lg"
            variant="outline"
          >
            Lien
          </Button>
        </Paper>
      </Stack>
    </Box>
  )
}

export default Registry


