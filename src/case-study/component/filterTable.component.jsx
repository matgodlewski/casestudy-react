import React from 'react';

function FilterTableComponent(visible, setVisible) {
  return (
    <div>
      <form>
        <label>
          <input
            type='checkbox'
            name='index'
            value='index'
            checked={visible.index}
            onChange={() => setVisible({ ...visible, index: !visible.index })}
          />
          Index
        </label>
        <label>
          <input
            type='checkbox'
            name='name'
            value='name'
            checked={visible.name}
            onChange={() => setVisible({ ...visible, name: !visible.name })}
          />
          Name
        </label>
        <label>
          <input
            type='checkbox'
            name='link'
            value='link'
            checked={visible.link}
            onChange={() => setVisible({ ...visible, link: !visible.link })}
          />
          Link
        </label>
        <label>
          <input
            type='checkbox'
            name='cors'
            value='cors'
            checked={visible.cors}
            onChange={() => setVisible({ ...visible, cors: !visible.cors })}
          />
          CORS
        </label>
        <label>
          <input
            type='checkbox'
            name='description'
            value='description'
            checked={visible.description}
            onChange={() => setVisible({ ...visible, description: !visible.description })}
          />
          Description
        </label>
        <label>
          <input
            type='checkbox'
            name='category'
            value='category'
            checked={visible.category}
            onChange={() => setVisible({ ...visible, category: !visible.category })}
          />
          Category
        </label>
      </form>
    </div>

  );
}

export default FilterTableComponent;
