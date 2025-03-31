import {getNews} from "./api/getNews.ts";
import {Button} from "@mantine/core";

export const MainPage= () => {
    return (
        <>
            <Button onClick={getNews}>Kliknij mnie</Button>
        </>
    )
}