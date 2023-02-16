import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';


export default function Card(props) {

  const currentUser = React.useContext(CurrentUserContext);
  
  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some(user => user._id === currentUser._id);

  const cardDeleteButtonClassName = (
    `${isOwn? 'card__delete-button': 'card__delete-button card__delete-button_hidden'}`
  )

  const cardLikeButtonClassName = (
    `${isLiked? 'card__like-button card__like-button_active': 'card__like-button'}`
  );

  function handleClick() {
    props.onCardClick(props.card);
  } 

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDeleteClick(props.card)
  }

  return (
    <article className="card">
      <img src={props.card.link} className="card__image" alt={props.card.name} onClick={handleClick} />
      <button className={cardDeleteButtonClassName} onClick={handleDeleteClick} type="button"></button>
      <div className="card__caption">
        <h2 className="card__name">{props.card.name}</h2>
        <div className="card__like-display">
          <button className={cardLikeButtonClassName} onClick={handleLikeClick} type="button"></button>
          <p className="card__like-counter" name="">{props.card.likes.length}</p>
        </div>
      </div>
    </article>
  )
}