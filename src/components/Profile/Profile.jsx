import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './Profile.module.css';
import Container from '../components-structure/Container/Container';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <Container variant={'profileContainer'}>
      <div className={css.imgWrap}>
        <div className={css.img}>
          <img src={image} alt="User avatar" />
        </div>
        <p className={css.name}>{name}</p>
        <p className={clsx(css.subtitle, css.tag)}>@{tag}</p>
        <p className={css.subtitle}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span>Followers</span>
          <span className={css.bold}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span>Views</span>
          <span className={css.bold}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span>
          <span className={css.bold}>{stats.likes}</span>
        </li>
      </ul>
    </Container>
  );
}

Profile.PropTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
