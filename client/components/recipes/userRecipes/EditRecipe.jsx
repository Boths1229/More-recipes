import React from 'react';

const EditRecipe = () => {
  return (
    <div>
      <button
        type="button"
        className="btn"
        data-toggle="modal"
        data-target="#exampleModal1"
        data-whatever="@getbootstrap"
      >
        <i className="fa fa-pencil-square-o" aria-hidden="true" />
      </button>
    </div>
  );
};

export default EditRecipe;