import clsx from 'clsx';
import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.friendItem}>
      <img className={css.img} src={avatar} alt="Avatar" width="24" />
      <p className={css.subtitle}>{name}</p>
      <p className={clsx(css.status, isOnline ? css.isOnline : css.isOffline)}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}

FriendListItem.PropTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
