import { FriendListItem } from 'components/FriendListItem/FriendListItem';

import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <div className={css.box}>
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        />
      ))}
    </div>
  );
};
