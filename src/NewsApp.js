import React from 'react';
import { Form } from './components/Form';
import { Header } from './components/Header';

export const NewsApp = () => {
    return (
        <>
            <Header 
                title="Buscador de Noticias"
            />

            <div className="container white">
                <Form />
            </div>

        </>
    )
}
