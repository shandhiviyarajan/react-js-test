import React from 'react';
import List from 'components/atoms/Link';
import ListItem from 'components/atoms/ListItem';
import Text from 'components/atoms/Text';

const FilterMenu = ({ filters,handleFilter }) => {


  return (
    <List>
      {
        filters && filters.map((filter,index) => (
          <ListItem key={'filter'+index}>
            <Text>
              <label htmlFor={'filter'+index} >
                <input value={filter} id={'filter'+index} type="checkbox"
                       onChange={(e) => handleFilter(e.target.value)}/>
                {filter}
              </label>
            </Text>
          </ListItem>
        ))
      }
    </List>
  );
};
export default FilterMenu;
