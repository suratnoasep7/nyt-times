import axios from 'axios'
import { Article } from '../models/Article'

const API_KEY = 'r5IUwkCDzcvweBeBsA7VG4Na3ueeSyb6'
const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'

/**
 * Fetch articles from NYT based on query and page number (for infinite scroll).
 * @param query - Search keyword
 * @param page - Zero-based page number (0 = first page)
 */
export const fetchArticles = async (
  query: string,
  page: number = 0
): Promise<Article[]> => {
  const res = await axios.get(BASE_URL, {
    params: {
      q: query,
      page,
      'api-key': API_KEY,
    },
  })

  return res.data.response.docs.map((doc: any) => {
    return {
      headline: doc.headline.main,
      byline: doc.byline?.original || '',
      pub_date: doc.pub_date,
      url: doc.web_url,
      imageUrl: doc.multimedia?.default?.url || '', // dibiarkan sesuai original
    }
  })
}
