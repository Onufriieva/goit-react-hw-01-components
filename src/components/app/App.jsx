import user from '../../information/user.json';
import data from '../../information/data.json';
import Profile from '../profile/Profile';
import StatisticsList from '../statisticsList/StatisticsList';
import StatisticSection from '../statisticSection/StatisticSection';
import FriendList from '../friendsList/FriendList';
import friends from '../../information/friends.json'
import TransactionHistory from '../transactionHistory/TransactionHistory';
import transactions from '../../information/transactions.json';
import {ContainerApp} from './App.styled'

export const App = () => {
  return (
    <ContainerApp>


      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <StatisticSection
       title="UPLOAD STATS" 
       stats={data}>

      <StatisticsList stats={data}/>
      </StatisticSection>

      <FriendList friends={friends}/>

      <TransactionHistory items={transactions}/>

   
    </ContainerApp>
  );
};
