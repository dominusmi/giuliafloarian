import { Title, Text, Stack, Box, Paper, Group } from '@mantine/core'
import { IconCalendar, IconMapPin, IconClock } from '@tabler/icons-react'
import classes from './Infos.module.css'

function Infos() {
  return (
    <Box className={classes.container}>
      <Stack gap="xl" align="center">
        <Title order={1} className={classes.title}>
          INFOS PRATIQUES
        </Title>

        <Paper shadow="sm" p="xl" radius="md" className={classes.section}>
          <Group gap="md" align="flex-start">
            <IconCalendar size={24} className={classes.icon} />
            <Stack gap="xs">
              <Title order={3}>Cérémonie</Title>
              <Text size="lg" fw={500}>
                Samedi 4 juillet 2026
              </Text>
              <Group gap="md" mt="sm">
                <Group gap="xs">
                  <IconClock size={18} />
                  <Text>Cérémonie de mariage : 12h00</Text>
                </Group>
                <Group gap="xs">
                  <IconClock size={18} />
                  <Text>Réception : 13h00</Text>
                </Group>
              </Group>
            </Stack>
          </Group>
        </Paper>

        <Paper shadow="sm" p="xl" radius="md" className={classes.section}>
          <Group gap="md" align="flex-start">
            <IconMapPin size={24} className={classes.icon} />
            <Stack gap="xs">
              <Title order={3}>Lieu</Title>
              <Text size="lg" fw={500}>
                Casal Montani
              </Text>
              <Text>Via di Casal Montani</Text>
              <Text>00132 Roma</Text>
              <Text
                component="a"
                href="https://maps.google.com/?q=Via+di+Casal+Montani,+00132+Roma"
                target="_blank"
                rel="noopener noreferrer"
                c="blue"
                td="underline"
                mt="xs"
              >
                Voir le plan
              </Text>
            </Stack>
          </Group>
        </Paper>
      </Stack>
    </Box>
  )
}

export default Infos

