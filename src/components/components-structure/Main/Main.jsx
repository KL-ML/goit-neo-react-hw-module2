import PropTypes from 'prop-types';
import Sidebar from '../Sidebar/Sidebar';
import css from './Main.module.css';

export default function Main({ children }) {
  return (
    <div className={css.container}>
      <div className={css.main}>{children}</div>
      <Sidebar />
    </div>
  );
}

Main.PropTypes = {
  children: PropTypes.any,
};