import React from 'react';
import IconButton from '../IconButton';
import { FilterWrapper, Input } from './Filter.styled';
import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue } from '../../redux/storeSelectors';
import { addFilterValue, resetFilter } from '../../redux/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilterValue);

  const handleFilterChange = e => {
    dispatch(addFilterValue(e.target.value));
  };

  return (
    <>
      <label htmlFor="filter">Find contact by name:</label>
      <FilterWrapper>
        <Input
          type="text"
          name="filter"
          value={value}
          onChange={handleFilterChange}
        />
        {value && (
          <IconButton
            color="blue"
            type="button"
            aria-label="Clear filter"
            onClick={() => dispatch(resetFilter())}
          >
            <FaTimes />
          </IconButton>
        )}
      </FilterWrapper>
    </>
  );
};

export default Filter;
