import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { ksiazki } from './ksiazki'
import { Ksiazka } from './ksiazka'

const ListaKsiazek = () => {
    return (
    <>
    <h1>Bestsellery empika</h1>
    <section className='listaKsiazek'>
        {ksiazki.map((ksiazka, index) => {
            const {img, tytul, autor, id} = ksiazka;
            return <Ksiazka {...ksiazka}
            key={ksiazka.id}
            number={index}
            />;
        })}
    </section>
    </>
    );
};



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<ListaKsiazek/>)