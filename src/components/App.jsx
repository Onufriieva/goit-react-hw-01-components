import user from '../information/user.json';
import data from '../information/data.json';
import Profile from '../components/Profile';
import StatisticsList from './StatisticsList';
import StatisticSection from './StatisticSection';
import FriendList from './FriendList';
import friends from '../information/friends.json'
import TransactionHistory from './TransactionHistory';
import transactions from '../information/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <StatisticSection
       title="Hello World" 
       stats={data}>

      <StatisticsList stats={data}/>
      </StatisticSection>

      <FriendList friends={friends}/>

      <TransactionHistory items={transactions}/>

   
    </div>
  );
};
