import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
   return (
   <ul className={css.feedbackOptions}>
      {options.map((name) => (
         <li key={name}><button type="button" name={name} className={css.button} onClick={()=>onLeaveFeedback(name)}>{name}</button></li>
      ))}
   </ul>
   )
};