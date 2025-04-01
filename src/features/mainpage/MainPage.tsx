import {Card, Paper, SimpleGrid, Text} from "@mantine/core";
import {categories} from "./categories.ts";
import { useAtom } from 'jotai';
import {selectedAtom} from "../../types/atoms.ts";
import {useNavigate} from "react-router-dom";

export const MainPage= () => {
    const [, setSelected] = useAtom(selectedAtom);
    const navigate = useNavigate();

    const handleCategoryClick = (url: string) => {
        setSelected(url);
        navigate('/news');
    }

    return (
        <div>
            <Paper shadow="xl" p="lg" radius="lg" style={{maxWidth: '90%', margin: 'auto'}}>
                <SimpleGrid cols={1} pt="lg" pb="lg" pl="sm" pr="sm">
                    {categories.map((category) => (
                        <div>
                            <Card
                                p="xs"
                                radius="md"
                                shadow="xl"
                                style={{
                                    cursor: 'pointer',
                                    border: "1px solid grey",
                                }}
                                onClick={() => handleCategoryClick(category.value)}
                            >
                                <Text style={{textAlign: "center"}} size="xl">{category.label}</Text>
                            </Card>

                        </div>
                    ))}
                </SimpleGrid>
            </Paper>
        </div>
    );
}