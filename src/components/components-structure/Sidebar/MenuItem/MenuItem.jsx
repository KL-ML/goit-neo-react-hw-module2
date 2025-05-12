import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './MenuItem.module.css';

export default function MenuItem({ children, hwTitle, status, link }) {
  return (
    <li className={clsx(css.menuItem, status ? css.active : css.inactive)}>
      <a href={link}>
        <p>Homework</p>
        <p className={css.hwTitle}>{hwTitle}</p>
      </a>
      {children}
    </li>
  );
}


MenuItem.PropTypes = {
  children: PropTypes.any,
  hwTitle: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  link: PropTypes.string.isRequired,
};