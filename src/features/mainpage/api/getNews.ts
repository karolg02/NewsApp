import {API_KEY} from "../../../types/config.ts";
import ky from "ky";

export const getNews = () => {
    return ky.get(`https://newsapi.org/v2/everything?q=tesla&from=2025-02-28&sortBy=publishedAt&apiKey=${API_KEY}`).json();
}