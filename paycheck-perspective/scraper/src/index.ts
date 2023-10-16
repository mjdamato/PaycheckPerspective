import axios from 'axios';
import * as cheerio from "cheerio";

const url = ''; // URL we're scraping
const AxiosInstance = axios.create(); // Create a new Axios Instance

// This is the structure of the player data we recieve
interface PlayerData {
  //create it with the values to display it
}

// Send an async HTTP Get request to the url
AxiosInstance.get(url)
  .then( // Once we have data returned ...
    response => {
      const html = response.data; // Get the HTML from the HTTP request
      const $ = cheerio.load(html); // Load the HTML string into cheerio
    
    }
  )
  .catch(console.error); // Error handling