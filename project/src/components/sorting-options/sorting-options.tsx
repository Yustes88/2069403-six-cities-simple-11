import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import { store } from '../../store';
import { getSortName } from '../../store/action';
import { sortValues } from '../../utils/utils';


function SortingOptions():JSX.Element {
  const [sortState, setSortState] = useState(useAppSelector((state) => state.currentSorting));
  const [isSortOpen, setIsSortOpen] = useState(false);

  function handleSortListOpen() {
    setIsSortOpen(!isSortOpen);
  }


  function handleSorting(event: React.MouseEvent<HTMLLIElement>):void {
    setSortState((event.target as HTMLLIElement).textContent as string);
    setIsSortOpen(!isSortOpen);
  }

  store.dispatch(getSortName(sortState));

  return(
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleSortListOpen}>
        {sortState}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isSortOpen ? 'places__options--opened' : ''}`}>
        {sortValues.map((sortItem) => (
          <li className="places__option" tabIndex={0} key={sortItem} onClick={handleSorting}>{sortItem}</li>
        ))}
      </ul>
    </form>
  );
}

export default SortingOptions;
