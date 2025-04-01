import {API_KEY} from "../../../types/config.ts";
import {NewsResponse} from "../../../types/dataType.ts";

export const getNews = async (selected: string | null) => {
    try {
        const response = await fetch(
            `${selected}${API_KEY}`
        );

        if (!response.ok) {
            throw new Error("Błąd API");
        }

        const data: NewsResponse = await response.json();
        return data;
    } catch (error) {
        console.error("Błąd przy pobieraniu newsów:", error);
        return null;
    }
}