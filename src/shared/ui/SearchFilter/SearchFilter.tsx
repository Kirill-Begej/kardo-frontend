import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import SearchIcon from 'shared/assets/images/icons/search.svg';
import FilterIcon from 'shared/assets/images/icons/filter.svg';
import cls from './SearchFilter.module.css';

interface SearchFilterProps {
  className?: string;
  isOpen: () => void;
}
export const SearchFilter: FC<SearchFilterProps> = ({ className, isOpen }) => {
  const [isInFocus, setIsInFocus] = useState(false);

  const handleActiveFocus = () => {
    setIsInFocus(true);
  };

  const handleCancleFocus = () => {
    setIsInFocus(false);
  };

  return (
    <>
      <label className={classNames(cls.label, { [cls.active]: isInFocus }, [className])}>
        <SearchIcon className={classNames(cls.searchIcon, {}, [])} />
        <div className={classNames(cls.block, {}, [])}>
          <input
            placeholder='Поиск'
            type='text'
            className={classNames(cls.input, {}, [])}
            onFocus={handleActiveFocus}
          />
          {!isInFocus && (
            <button className={classNames(cls.button, {}, [])}>
              <FilterIcon onClick={isOpen} className={classNames(cls.filterIcon, {}, [])} />
            </button>
          )}
        </div>
      </label>
      {isInFocus && (
        <button
          onClick={handleCancleFocus}
          className={classNames(cls.cancle, {}, [])}>Отменить</button>
      )}
    </>
  );
};
