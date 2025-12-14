import { Title, Text, Stack, Box, Paper, TextInput, Textarea, Button, Checkbox } from '@mantine/core'
import { useForm } from '@mantine/form'
import classes from './RSVP.module.css'

function RSVP() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      attending: true,
      vegetarian: false,
      message: '',
    },
  })

  const handleSubmit = (values: typeof form.values) => {
    console.log(values)
    alert('Merci pour votre confirmation ! (Cette fonctionnalité nécessite un backend)')
  }

  return (
    <Box className={classes.container}>
      <Stack gap="xl" align="center">
        <Title order={1} className={classes.title}>
          RSVP
        </Title>
        <Text size="lg" className={classes.description}>
          Merci de confirmer votre présence avant le [date limite].
          <br />
          Pensez à nous indiquer si vous mangez végétarien lors de votre confirmation.
        </Text>

        <Paper shadow="sm" p="xl" radius="md" className={classes.formPaper}>
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack gap="md">
              <TextInput
                label="Nom"
                placeholder="Votre nom"
                required
                {...form.getInputProps('name')}
              />
              <TextInput
                label="Email"
                placeholder="votre@email.com"
                type="email"
                required
                {...form.getInputProps('email')}
              />
              <Checkbox
                label="Je serai présent(e)"
                {...form.getInputProps('attending', { type: 'checkbox' })}
              />
              <Checkbox
                label="Je mange végétarien"
                {...form.getInputProps('vegetarian', { type: 'checkbox' })}
              />
              <Textarea
                label="Message (optionnel)"
                placeholder="Un message pour les mariés..."
                rows={4}
                {...form.getInputProps('message')}
              />
              <Button type="submit" size="lg" fullWidth mt="md">
                Confirmer
              </Button>
            </Stack>
          </form>
        </Paper>
      </Stack>
    </Box>
  )
}

export default RSVP


