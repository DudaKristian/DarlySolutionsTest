import React, { useState } from 'react';
import { ContactAddForm } from '../../components/contactAddForm/contactAddForm';
import { Table } from '../../components/table/table.component';

import styles from "./Home.module.css"
import girl from '../../images/bggirl.png'
import boy from '../../images/bgboy.png'


export const Home: React.FC = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const modalToggle = () => {
        setIsModalOpen(!isModalOpen)
    }

    

    return (
        <div className={styles.home__background}>
            <img src={girl} alt="girl" className={styles.home__girl} />
            <img src={boy} alt="boy" className={styles.home__boy} />
            <div className={styles.home__wrapper}>
                <Table />
                {isModalOpen &&
                    <ContactAddForm />
                }
                <button
                className={styles.home__addBtn}
                type='button'
                onClick={modalToggle}
                >Add contact
                </button>
            </div>
            
        </div>
    )
}