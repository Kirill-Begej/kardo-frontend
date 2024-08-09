import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import SearchIcon from 'shared/assets/images/icons/search.svg';
import FilterIcon from 'shared/assets/images/icons/filter.svg';
import cls from './SearchFilter.module.css';

interface SearchFilterProps {
  className?: string;
}
export const SearchFilter: FC<SearchFilterProps> = ({ className }) => {
  return (
    <label className={classNames(cls.label, {}, [className])}>
      <SearchIcon className={classNames(cls.searchIcon, {}, [])} />
      <div className={classNames(cls.block, {}, [])}>
        <input placeholder='Поиск' type='text' className={classNames(cls.input, {}, [])} />
        <FilterIcon className={classNames(cls.filterIcon, {}, [])} />
      </div>
    </label>
  );
};
