import {getNews} from "./api/getNews.ts";
import {useEffect, useState} from "react";
import {Article} from "../../types/dataType.ts";
import {Button, Image, List, Paper, Text} from "@mantine/core";

export const MainPage= () => {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getNews();
            if (result) setArticles(result.articles);
        };

        fetchData();
    }, []);

    return (
        <div>
            <Paper shadow="xl" p="lg" radius="lg" style={{ maxWidth: '70%', margin: ' auto' }}>
                <List p="lg" ml="xl" mr="xl">
                    {articles.map((article) => (
                        <div key={article.url}>
                            <Text size="xl" fw={900}>{article.title}</Text>
                            <Image src={article.urlToImage} alt={article.title} style={{width: "300px"}}/>
                            <Text>{article.description}</Text>
                            <Button>Przejdz do strony</Button>
                            <hr/>
                        </div>
                    ))}
                </List>
            </Paper>
        </div>
    );
}