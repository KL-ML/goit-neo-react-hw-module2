import PropTypes from 'prop-types';
import css from './HeaderTitle.module.css';

export default function HeaderTitle({ moduleNumber, moduleTitle }) {
  return (
    <div className={css.headerTitle}>
      <p className={css.headerTitleGradient}>{`React. HW-${moduleNumber}.`}</p>
      <p className={css.headerText}>{moduleTitle}</p>
    </div>
  );
}


HeaderTitle.PropTypes = {
  moduleNumber: PropTypes.string.isRequired,
  moduleTitle: PropTypes.string.isRequired,
};