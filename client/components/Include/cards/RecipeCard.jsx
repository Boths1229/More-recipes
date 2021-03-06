import React from 'react';
import PropTypes, { any } from 'prop-types';
import { Link } from 'react-router-dom';
import RecipeCardFooter from './RecipeCardFooter';

/**
 * @description recipe card
 *
 * @param {props} props
 *
 * @returns {JSX} return JSX
 */

const RecipeCard = (props) => {
  const {
    recipe, showActionButton, setEditRecipeId, deleteRecipe, clearImageState
  } = props;
  return (
    <div className="col-sm-6 col-md-6 col-lg-4 pt-4 mb-5">
      <div className="card card-height">
        <img
          className="card-img-top img-max"
          src={recipe.image}
          alt={recipe.name}
        />
        <div className="card-body word-warp">
          <Link to={`/recipes/${recipe.id}`}>
            <h4 className="card-title text-center">{recipe.name}</h4>
          </Link>
        </div>
        <RecipeCardFooter
          recipe={recipe}
          showActionButton={showActionButton}
          setEditRecipeId={setEditRecipeId}
          clearImageState={clearImageState}
          deleteRecipe={deleteRecipe}
        />
      </div>
    </div>
  );
};

RecipeCard.defaultProps = {
  showActionButton: undefined,
  setEditRecipeId: undefined,
  deleteRecipe: undefined
};

RecipeCard.propTypes = {
  recipe: PropTypes.objectOf(any).isRequired,
  showActionButton: PropTypes.bool,
  setEditRecipeId: PropTypes.func,
  deleteRecipe: PropTypes.func,
  clearImageState: PropTypes.func.isRequired
};

export default RecipeCard;
