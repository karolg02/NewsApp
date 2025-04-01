import {useEffect, useState} from "react";
import {Article} from "../../types/dataType.ts";
import {Button, Divider, Grid, Image, List, Paper, Text} from "@mantine/core";
import {IconArrowBackUp} from "@tabler/icons-react";
import {useNavigate} from "react-router-dom";
import {getNews} from "./api/getNews.ts";
import {useAtom} from "jotai";
import {selectedAtom} from "../../types/atoms.ts";

export const SecondPage= () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [selected] = useAtom(selectedAtom);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const result = await getNews(selected);
            if (result) setArticles(result.articles);
        };

        fetchData();
    }, []);

    return (
        <div>
            <Paper shadow="xl" p="lg" radius="lg" style={{maxWidth: '90%', margin: 'auto'}}>
                <List p="lg" ml="xl" mr="xl">
                    {articles.map((article) => (
                        <div key={article.url} style={{marginBottom: '2rem'}}>
                            <Grid align="flex-start">
                                <Grid.Col span={{base: 12, sm: 5}}>
                                    <Image
                                        src={article.urlToImage}
                                        alt={article.title}
                                        radius="md"
                                        style={{width: '100%', height: 'auto', objectFit: 'cover'}}
                                    />
                                </Grid.Col>

                                <Grid.Col span={{base: 12, sm: 7}}>
                                    <Text size="xl" fw={900} mb="sm">
                                        {article.title}
                                    </Text>
                                    <Text mb="md">{article.description}</Text>
                                    <Button
                                        component="a"
                                        href={article.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Visit original site
                                    </Button>
                                </Grid.Col>
                            </Grid>

                            <Divider my="lg"/>
                        </div>
                    ))}
                </List>
            </Paper>
            <Button pos="fixed" bottom="10px" left="10px" onClick={() => navigate("/")}
            >
                <IconArrowBackUp/>
            </Button>
        </div>
    );
}