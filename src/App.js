import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';
import searchApi from './searchApi';

export default function App() {
    const [photos, setPhotos] = useState([]);
    const [linkHeader, setLinkHeader] = useState('');


    const handleOnSearch = (searchTermParam) => {
        searchApi.SearchRequest(searchTermParam)
            .then(response => {
                setPhotos(response.data.results);
                setLinkHeader(response.headers.link);
                })
            .catch(error => console.error(error));
    }

    const handlePageChange = (pageUrl) => {
        searchApi.GetRequest(pageUrl)
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