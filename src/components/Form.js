import React from 'react';
import { useSelect } from '../hooks/useSelect';
import styles from './Form.module.css'

export const Form = ({setCategory}) => {

    const options = [
        { value:'general', label:'General' },
        { value:'business', label:'Negocios' },
        { value:'entertainment', label:'Entretenimiento' },
        { value:'health', label:'Salud' },
        { value:'science', label:'Ciencia' },
        { value:'sports', label:'Deportes' },
        { value:'technology', label:'Tecnologia' },
    ];

    //Utilizamos el hook
    const [ category, SelectNews ] = useSelect('technology',options);

    //Submit del form, pasar categoria al NewsApp
    const handleSubmit = e => {
        e.preventDefault();
        setCategory(category);
    }


    return (
        <div className={ `${styles.buscador} row` }>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={ handleSubmit }
                >
                    <h1 className={styles.heading}>Encuentra noticias por categoria</h1>

                    <SelectNews />

                    <div className="input-field col s12">
                        <input 
                            type="submit"
                            className={ `${styles.btn_block} btn-large amber darken-2` }
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}
