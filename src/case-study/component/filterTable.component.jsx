import React from 'react';
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormControl,
  FormLabel,
  FormHelperText,

} from '@material-ui/core';

function FilterTableComponent(visible, setVisible) {
  return (
    <FormControl component='fieldset'>
      <FormLabel component='legend'>Visible columns</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={(
            <Checkbox
              checked={visible.index}
              onChange={() => setVisible({ ...visible, index: !visible.index })}
              name='index'
            />
                  )}
          label='Index'
        />
        <FormControlLabel
          control={(
            <Checkbox
              checked={visible.name}
              onChange={() => setVisible({ ...visible, name: !visible.name })}
              name='name'
            />
                  )}
          label='Name'
        />
        <FormControlLabel
          control={(
            <Checkbox
              checked={visible.link}
              onChange={() => setVisible({ ...visible, link: !visible.link })}
              name='link'
            />
                  )}
          label='Link'
        />
        <FormControlLabel
          control={(
            <Checkbox
              checked={visible.cors}
              onChange={() => setVisible({ ...visible, cors: !visible.cors })}
              name='cors'
            />
                  )}
          label='CORS'
        />
        <FormControlLabel
          control={(
            <Checkbox
              checked={visible.description}
              onChange={() => setVisible({ ...visible, description: !visible.description })}
              name='description'
            />
                  )}
          label='Description'
        />
        <FormControlLabel
          control={(
            <Checkbox
              checked={visible.category}
              onChange={() => setVisible({ ...visible, category: !visible.category })}
              name='category'
            />
                  )}
          label='Category'
        />
      </FormGroup>
      <FormHelperText>
        You can change the columns visibility by clicking on the checkboxes.
      </FormHelperText>
    </FormControl>
  );
}

export default FilterTableComponent;
