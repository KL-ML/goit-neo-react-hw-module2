import css from './App.module.css';

import Header from './components-structure/Header/Header';
import logoImgPath from '../images/logo.svg';

import Profile from './Profile/Profile';
import userData from '../data/userData.json';

import friends from '../data/friends.json';
import FriendList from './FriendList/FriendList';

import transactions from '../data/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import Footer from './components-structure/Footer/Footer';
import Main from './components-structure/Main/Main';

const App = () => {
  return (
    <div className={css.body}>
      <Header logoImgPath={logoImgPath} />
      <Main>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </Main>
      <Footer />
    </div>
  );
};

export default App;
