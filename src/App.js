import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';

export default function App() {
    const url = 'https://api.unsplash.com/search/photos/?client_id=8m2YSdJ9iILZWgBneeeU58Cs7WxezHc6pdfVyfa1_6Y';
    const [photos, setPhotos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [linkHeader, setLinkHeader] = useState('');

    const handleOnSearch = (searchTermParam) => {
        setSearchTerm(searchTermParam);

        axios
            .get(`${url}&query=${searchTermParam}`)
            .then(response => {
                setPhotos(response.data.results);
                setLinkHeader(response.headers.link);
                })
            .catch(error => console.error(error));
    }

    const handlePageChange = (pageUrl) => {
        axios
            .get(pageUrl)
            .then(response => {
                setPhotos(response.data.results);
                setLinkHeader(response.headers.link);
            })
            .catch(error => console.error(error));
    }
return(

    <>
            <SearchBar onSearch={handleOnSearch}></SearchBar>

            {photos.map(photo => (
                    <div key={photo.id}>
                            <img src={photo.urls.small} alt={photo.alt_description} />
                    </div>
            ))}

            {photos.length > 0 && (
                    <Pagination linkHeader={linkHeader} onPageChange={handlePageChange}></Pagination>
            )}

           
    </>

 

);
}