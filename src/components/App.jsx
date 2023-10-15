import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';

import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';

export const App = () => {
  return (
    <div
      style={{
        margin: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        gap: 20,
        color: '#010101',
      }}
    >
      <div className="profile">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div>
        <Statistics title="Upload stats" stats={data} />
      </div>
      <FriendList friends={friends} />
    </div>
  );
};
