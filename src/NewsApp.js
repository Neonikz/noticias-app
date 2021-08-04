import React, { useEffect, useState } from 'react';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { NewsList } from './components/NewsList';

export const NewsApp = () => {

    //Definir la categoria y las noticias
    const [category, setCategory] = useState('');
    const [news, setNews] = useState([]);

    useEffect(() => {
        
        const consultAPI = async() => {
            const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${category}&apiKey=196aa87abad743bcb1e9e95f3d2dab53`;
            const resp = await fetch(url);
            const news = await resp.json();
            setNews( news.articles )

        }

        consultAPI();
    }, [category]);


    return (
        <>
            <Header 
                title="Buscador de Noticias"
            />

            <div className="container white">
                <Form 
                    setCategory={setCategory}
                />

                <NewsList 
                    news={ news }
                />
            </div>

        </>
    )
}
