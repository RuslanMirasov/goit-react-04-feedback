import css from './Notification.module.css';

export default function Notification ({ message }) {
   return message && (<p className={css.notification}>{message}</p>);
}