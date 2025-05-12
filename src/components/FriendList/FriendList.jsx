import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';
import css from './FriendList.module.css';
import Container from '../components-structure/Container/Container';

export default function FriendList({ friends }) {
  return (
    <Container variant={'friendsListContainer'}>
      <ul className={css.friendsList}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        ))}
      </ul>
    </Container>
  );
}

FriendList.PropTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
