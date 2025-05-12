import PropTypes from 'prop-types';
import HeaderTitle from './HeaderTitle/HeaderTitle';
import Logo from './Logo/Logo';
import css from './Header.module.css';

export default function Header({ logoImgPath }) {
  return (
    <header className={css.header}>
      <Logo logoImgPath={logoImgPath} />
      <HeaderTitle moduleNumber={1} moduleTitle={'Components and styling.'} />
    </header>
  );
}


Header.PropTypes = {
  logoImgPath: PropTypes.string.isRequired,
};