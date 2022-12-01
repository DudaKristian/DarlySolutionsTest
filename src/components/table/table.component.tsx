
import { useGetAllContactsQuery } from '../../services/contacts.endpoint.service';
import styles from './table.module.css'


export const Table: React.FC = () => {

    const { data } = useGetAllContactsQuery()

    return (
        <div>
        <table className={styles.table__container__sticky}>
            <thead>
                <tr className={styles.table__item__header}>
                    <th className={styles.table__header}>Name</th>
                    <th className={styles.table__header}>Last name</th>
                    <th className={styles.table__header}>Company</th>
                    <th className={styles.table__header}>Email</th>
                    <th className={styles.table__header}>Phone Number</th>
                </tr>
            </thead>
        </table>
        <table className={styles.table__body}>
            <tbody>
            {data && data.map(
                contact => (
                    <tr key={contact.id} className={styles.table__item}>
                        <th className={styles.table__contact}>{contact.name}</th>
                        <th className={styles.table__contact}>{contact.lastName}</th>
                        <th className={styles.table__contact}>{contact.company}</th>
                        <th className={styles.table__contact}>{contact.email}</th>
                        <th className={styles.table__contact}>{contact.phoneNumber}</th>
                    </tr>    
                )
                )}
            </tbody>
                </table>
        </div>
    )
}