import MenuItem from './MenuItem/MenuItem';
import css from './Sidebar.module.css';
import {
  PiNumberSquareOneLight,
  PiNumberSquareTwoLight,
  PiNumberSquareThreeLight,
  PiNumberSquareFourLight,
  PiNumberSquareFiveLight,
  PiNumberSquareSixLight,
  PiNumberSquareSevenLight,
} from 'react-icons/pi';

export default function Sidebar() {
  return (
    <div className={css.sidebar}>
      <ul className={css.menuList}>
        <MenuItem hwTitle="Components and styling." status={true} link="./">
          <PiNumberSquareOneLight size="20" />
        </MenuItem>
        <MenuItem hwTitle="State and life cycle." status={false} link="">
          <PiNumberSquareTwoLight size="20" />
        </MenuItem>
        <MenuItem hwTitle="Forms." status={false} link="">
          <PiNumberSquareThreeLight size="20" />
        </MenuItem>
        <MenuItem hwTitle="Hooks." status={false} link="">
          <PiNumberSquareFourLight size="20" />
        </MenuItem>
        <MenuItem hwTitle="Routing." status={false} link="">
          <PiNumberSquareFiveLight size="20" />
        </MenuItem>
        <MenuItem hwTitle="Redux basics." status={false} link="">
          <PiNumberSquareSixLight size="20" />
        </MenuItem>
        <MenuItem hwTitle="Asynch. Redux, memoization." status={false} link="">
          <PiNumberSquareSevenLight size="20" />
        </MenuItem>
      </ul>
    </div>
  );
}
