import React from 'react';
import Card from './Card';
import CurrentUserContext from '../contexts/CurrentUserContext';

export default function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-container">
          <img src={currentUser.avatar} alt={props.isAvatarLoading ? "Загрузка..." : `Аватар пользователя: ${currentUser.name}`}
            className="profile__avatar" />
          <button className="profile__avatar-edit" type="button" onClick={props.onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{props.isUserInfoLoading ? "Загрузка..." : currentUser.name}</h1>
          <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
          <p className="profile__caption">{props.isUserInfoLoading ? "Загрузка..." : currentUser.about}</p>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="cards">
        {props.cards.map(card => (
          <Card
          key={card._id}
          card={card}
          onCardClick={props.onCardClick}
          onCardLike={props.onCardLike}
          onCardDeleteClick={props.onCardDeleteClick}
          />
        ))}
      </section>
    </main>
  )

}