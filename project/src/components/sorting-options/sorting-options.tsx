import React, { useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { setSortName } from '../../store/action';
import { sortValues } from '../../utils/utils';


type SortingListProps = {
  sortingName: string;
};

function SortingOptions({sortingName}: SortingListProps):JSX.Element {
  const [isSortOpen, setIsSortOpen] = useState(false);

  function handleSortListOpen() {
    setIsSortOpen(!isSortOpen);
  }

  const dispatch = useAppDispatch();

  function handleOnSortingClick(evt: React.MouseEvent<HTMLLIElement>) {
      (evt.target as HTMLLIElement).textContent as string;
      dispatch(setSortName((evt.target as HTMLLIElement).textContent as string));
      setIsSortOpen(false);
  }

  return(
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleSortListOpen}>
        {sortingName}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isSortOpen ? 'places__options--opened' : ''}`}>
        {sortValues.map((sortItem) => (
          <li className="places__option" tabIndex={0} key={sortItem} onClick={handleOnSortingClick}>
            {sortItem}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortingOptions;
