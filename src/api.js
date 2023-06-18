import axios from "axios"

const apiKey = process.env.REACT_APP_APIKEY
const baseURL = process.env.REACT_APP_BASEURL

export const GetGameAPI = async() => {
    const game = await axios.get(`${baseURL}/games?key=${apiKey}`);
    return game.data.results
}

export const Search = async(q) => {
    const searchGame = await axios.get(`${baseURL}/games?search=${q}&key=${apiKey}`)
    return searchGame.data
}



