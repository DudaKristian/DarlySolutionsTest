import React from 'react';
import { ContactAddForm } from '../../components/contactAddForm/contactAddForm';
import { Table } from '../../components/table/table.component';

import styles from "./Home.module.css"
import girl from '../../images/bggirl.png'
import boy from '../../images/bgboy.png'



export const Home: React.FC = () => {

    return (
        <div className={styles.home__background}>
            <img src={girl} alt="girl" className={styles.home__girl} />
            <img src={boy} alt="boy" className={styles.home__boy} />
            <div className={styles.home__wrapper}>            
                <Table />
                {/* <ContactAddForm /> */}
            </div>
        </div>
    )
}