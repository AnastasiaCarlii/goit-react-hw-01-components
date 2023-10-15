import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.friend}>
      <span
        className={`${css.onlineStatus} ${isOnline ? css.online : css.offline}`}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" />
      <span className={css.name}>{name}</span>
    </div>
  );
};
