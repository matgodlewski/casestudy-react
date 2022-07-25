import React from 'react';
import PropTypes from 'prop-types';
import {
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import { entryFields } from './tableHeader.component';

export default function FilterColumnsComponent({
  hiddenColumnsIds,
  onColumnsChange,
}) {
  const onCheckboxClick = (field) => {
    console.log(hiddenColumnsIds);
    const newHiddenColumnsIds = hiddenColumnsIds.includes(field.id)
      ? hiddenColumnsIds.filter((id) => id !== field.id)
      : [...hiddenColumnsIds, field.id];
    onColumnsChange(newHiddenColumnsIds);
  };

  return (
    <div>
      {entryFields.map((field) => (
        <FormControlLabel
          key={field.id}
          control={(
            <Checkbox
              checked={!hiddenColumnsIds.includes(field.id)}
              onChange={() => onCheckboxClick(field)}
            />
                  )}
          label={field.label}
        />
      ))}
    </div>

  );
}

FilterColumnsComponent.propTypes = {
  hiddenColumnsIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  onColumnsChange: PropTypes.func.isRequired,
};
