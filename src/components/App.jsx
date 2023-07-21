import { Profile } from "./Profile/Profile";
import user from '../user.json';

import { Statistics } from "./Statistics/Statistics";
import items from '../data.json'

import { FriendList } from "./FriendList/FriendList";
import friends from '../friends.json';

import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transactions from '../transactions.json';

export const App = () => {
  return (
    <>
      <h2>1</h2>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h2>2</h2>
      <Statistics title='Upload stats' stats={items}/>
      <Statistics stats={items}/>
      <h2>3</h2>
      <FriendList friends={friends}/>
      <h2>4</h2>
      <TransactionHistory items={transactions} />
    </>
  );
};
