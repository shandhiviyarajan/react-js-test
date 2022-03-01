import React, { useState } from 'react';
import TextInput from 'components/atoms/TextInput';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { actionFetchRobots, actionFilterByMaterial } from 'core/redux/actions/robotsAction';

const FilterBy = () => {
  const [material_name, setMaterialName] = useState('');
  const dispatch = useDispatch();
  const payload = useSelector(state => state.robots.products);
  const materials = useSelector(state => state.robots.products.materials);
  const { data } = payload;
  //filter function
  const filterByMaterial = (e) => {
    e.preventDefault();
    const filteredRobots = data.filter(robot => robot.material === material_name);
    dispatch(actionFilterByMaterial(filteredRobots));
  };
  const clearFilter = () => {
    dispatch(actionFetchRobots());
    setMaterialName('');
  };
  //handle input change
  const handleChange = (e) => {
    setMaterialName(e.target.value);
  };
  return (
    <>
      <form onSubmit={(e) => filterByMaterial(e)}>

        <InputGroup className="mb-3">
          <FormControl onChange={(e) => handleChange(e)} value={material_name} placeholder="Select material" list="materials" />
          <Button type="submit" variant="outline-secondary">Filter</Button>
          <Button onClick={clearFilter} variant="outline-secondary">Clear</Button>
        </InputGroup>

        <datalist id="materials">
          {
            materials && materials.map((material, index) => (
              <option key={'option' + index} value={material}>{material}</option>
            ))
          }
        </datalist>
      </form>
    </>
  );
};
export default FilterBy;
