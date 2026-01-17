import axios from "axios";


const SearchRequest = async (searchTerm, page = 1) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=8m2YSdJ9iILZWgBneeeU58Cs7WxezHc6pdfVyfa1_6Y';
    const fullUrl = `${url}&query=${searchTerm}&page=${page}`;

    return await axios.get(fullUrl);
}

const GetRequest = async (fullUrl) => {
    return await axios.get(fullUrl);
}

export default {SearchRequest, GetRequest};