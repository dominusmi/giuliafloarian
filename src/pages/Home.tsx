import { Title, Text, Stack, Box, Container, Accordion, Button, Grid, Paper, Group, type TitleOrder, type TitleProps } from '@mantine/core'
import { IconCalendar, IconMapPin, IconClock } from '@tabler/icons-react'
import classes from './Home.module.css'
import coupleImage from '../assets/giuliafloarian-couple.jpg'

const BIENTOT_TITLE_STYLE = { order: 2 as TitleOrder, c: "black", lts: 28, fw: 100, fz: '1.5rem' }
const SECTION_TITLE_STYLE = { order: 2 as TitleOrder, c: "gray.7", fw: 200, fz: '2.5rem', ta: 'center', mb: 'xl' } as TitleProps

function Home() {
    return (
        <>
            <Box className={classes.hero}>
                <Stack align="center" gap="lg" className={classes.heroContent}>
                    <Title c="black" fz="2rem" lts={28} fw={100} order={1} className={classes.mainTitle}>
                        <span className={classes.titleLine}>GIULIA</span>
                        <span className={classes.titleLine}>&</span>
                        <span className={classes.titleLine}>FLORIAN</span>
                    </Title>
                    <Text size="xl" fw={200} lts={8} fs='italic' c='black' ff='serif'>
                        Se marient
                    </Text>
                </Stack>
            </Box>

            <Box bg='pink.1' mih={300}>
                <Container size="md" py="xl">
                    <Stack align="center" gap="xl">
                        <Title {...BIENTOT_TITLE_STYLE}>
                            BIENTÔT
                        </Title>
                        <Text size="lg" c="gray.8" fw={100} fs='italic' ta='center' lh={1.8} ff='serif'>
                            Le grand jour approche.
                            <br />
                            Rejoignez-nous pour célébrer notre amour.
                            <br />
                            On a hâte de vivre cette journée inoubliable avec vous !
                        </Text>
                    </Stack>
                </Container>
            </Box>

            <Box style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <Container size="lg" py="xl">
                    <img src={coupleImage} alt="Giulia & Florian" className={classes.coupleImage} />
                </Container>
            </Box>

            <Box className={classes.infoSection}>
                <Container size="lg" py="xl">
                    <Grid>
                        <Grid.Col span={{ base: 12, md: 4 }}>
                            <Title {...SECTION_TITLE_STYLE} ta={{ base: 'center', md: 'left' }}>
                                INFOS
                                <br />
                                PRATIQUES
                            </Title>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 8 }}>
                            <Stack gap="xl">
                                <Paper shadow="sm" p="xl" radius="md">
                                    <Group gap="md" align="flex-start">
                                        <IconCalendar size={24} />
                                        <Stack gap="xs">
                                            <Title order={3} ff='serif' fs='italic'>Cérémonie</Title>
                                            <Text size="lg" fw={500} ff='serif' fs='italic'>
                                                Samedi 4 juillet 2026
                                            </Text>
                                            <Group gap="md" mt="0">
                                                <Group gap="xs">
                                                    <IconClock size={18} />
                                                    <Text ff='serif' fs='italic' fw={100} >Cérémonie de mariage : 12h00</Text>
                                                </Group>
                                                <Group gap="xs">
                                                    <IconClock size={18} />
                                                    <Text ff='serif' fs='italic' fw={100} >Réception : 13h00</Text>
                                                </Group>
                                            </Group>
                                        </Stack>
                                    </Group>
                                </Paper>

                                <Paper shadow="sm" p="xl" radius="md">
                                    <Group gap="md" align="flex-start">
                                        <IconMapPin size={24} />
                                        <Stack gap="xs">
                                            <Title order={3} ff='serif' fs='italic'>Lieu</Title>
                                            <Stack gap="2px">
                                                <Text size="lg" fw={500} ff='serif' fs='italic'>
                                                    Casal Montani
                                                </Text>
                                                <Text ff='serif' fs='italic' fw={100} >Via di Casal Montani</Text>
                                                <Text ff='serif' fs='italic' fw={100} >00132 Roma</Text>
                                            </Stack>
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
                        </Grid.Col>
                    </Grid>
                </Container>
            </Box>

            <Box bg="rgb(247, 233, 232)">
                <Container size="md" py="xl">
                    <Stack align="center" gap="lg">
                        <Title {...SECTION_TITLE_STYLE}>
                            RSVP
                        </Title>
                        <Text size="lg" className={classes.rsvpText} ta="center">
                            Merci de confirmer votre présence avant le [date limite].
                            <br />
                            Pensez à nous indiquer si vous mangez végétarien lors de votre confirmation.
                        </Text>
                        <Button
                            component="a"
                            href="#"
                            target="_blank"
                            variant="filled"
                            className={classes.rsvpButton}
                            color="white"
                            fw={100}
                            c='gray.8'
                            size='compact-xl'
                            miw={200}
                        >
                            Confirmer
                        </Button>
                    </Stack>
                </Container>
            </Box>

            <Box className={classes.registrySection}>
                <Container size="md" py="xl">
                    <Stack align="center" gap="lg">
                        <Title {...SECTION_TITLE_STYLE}>
                            Liste de mariage / Cadeaux
                        </Title>
                        <Text size="lg" className={classes.registryText} ta="center">
                            Votre présence est le plus beau des cadeaux.
                            <br />
                            Mais si vous souhaitez tout de même nous gâter, voici quelques idées :
                        </Text>
                        <Button
                            component="a"
                            href="#"
                            target="_blank"
                            variant="filled"
                            className={classes.rsvpButton}
                            color="gray.8"
                            fw={100}
                            c='white'
                            size='compact-xl'
                            miw={200}
                        >
                            Voir la liste
                        </Button>
                    </Stack>
                </Container>
            </Box>

            <Box className={classes.faqSection}>
                <Container size="md" py="xl">
                    <Title {...SECTION_TITLE_STYLE} ta="center" mb="xl">
                        FAQ
                    </Title>
                    <Accordion>
                        <Accordion.Item value="dresscode">
                            <Accordion.Control>
                                <Text fw={500}>Y a-t-il un dress code ?</Text>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Text>
                                    Venez comme vous êtes (ou presque) !
                                    <br />
                                    Tenue : des couleurs chaudes et solaires. Pensez rose, orange, jaune, façon coucher de soleil
                                </Text>
                            </Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item value="accommodation">
                            <Accordion.Control>
                                <Text fw={500}>Recommandez-vous des hébergements ?</Text>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Text mb="md">
                                    Pour ceux qui viennent de loin, voici quelques options proches du lieu :
                                </Text>
                                <Stack gap="xs">
                                    <Text>• Option 1</Text>
                                    <Text>• Option 2</Text>
                                    <Text>• Option 3</Text>
                                </Stack>
                                <Text mt="md" fw={500}>
                                    Nous vous conseillons de réserver rapidement, le week-end risque d'être chargé !
                                </Text>
                            </Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item value="plusone">
                            <Accordion.Control>
                                <Text fw={500}>Puis-je venir avec un +1 ?</Text>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Text>
                                    Cela dépend ! Si votre invitation mentionne un +1, vous êtes bien sûr le·la bienvenu·e avec votre accompagnant·e.
                                    <br />
                                    Sinon, merci de venir seul·e — nous avons une capacité limitée et avons dû faire des choix difficiles.
                                </Text>
                            </Accordion.Panel>
                        </Accordion.Item>
                    </Accordion>
                </Container>
            </Box>
        </>
    )
}

export default Home
