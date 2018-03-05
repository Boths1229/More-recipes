import React, { Component } from 'react';
import miniToastr from 'mini-toastr';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import getFavoriteRecipeAction from '../../../actionController/getFavoriteRecipe';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import FavoriteRecipeTitle from '../../../components/Include/FavoriteRecipeTitle';
import UserProfile from './UserProfile';
import RecipeGrid from '../../recipes/RecipeGrid';
import upvoteRecipeAction from '../../../actionController/upvoteRecipe';
import downvoteRecipeAction from '../../../actionController/downvoteRecipe';
import favoriteRecipeAction from '../../../actionController/favoriteRecipe';


/**
 * @class UserProfileContainer
 *
 * @description container display user profile and favorited recipe of a user
 */
class UserProfileContainer extends Component {
  /**
   * @description call the action to display user favorite recipe
   *
   * @param {props} props
   *
   * @return {undefined} call getRecipe
   */
  componentDidMount() {
    const { userId } = this.props;
    this.props.getFavoriteRecipeAction(userId);
  }
  /**
   * @description upvote a recipe
   *
   * @param {id} id id of recipe to be upvoted
   *
   * @return {void} calls upvoteRecipeAction
   */
  upvoteRecipe(id) {
    this.props.upvoteRecipeAction(id);
  }

  /**
   * @description downvote a recipe
   *
   * @param {id} id id of recipe to be updated
   *
   * @return {undefined} calls downvoteRecipeAction
   */
  downvoteRecipe(id) {
    if (this.props.authenticated) {
      return this.props.downvoteRecipeAction(id);
    }
    miniToastr.init();
    return miniToastr.error('Login to continue');
  }

  /**
   * @description favorite a recipe
   *
   * @param {id} id - id of recipe to be favorited
   *
   * @return {undefined} calls favoriteRecipeAction
   */
  favoriteRecipe(id) {
    this.props.favoriteRecipeAction(id);
  }

  /**
   * @description render - display component
   *
   * @return {JSX} return JSX
   */
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <UserProfile
            userData={this.props.userData}
          />
          <FavoriteRecipeTitle />
          <section className="row">
            {
             this.props.favoriteRecipes.isFetched ?
               <RecipeGrid
                 recipeData={this.props.favoriteRecipes.recipeData.data}
                 upvoteRecipe={this.upvoteRecipe}
                 downvoteRecipe={this.downvoteRecipe}
                 favoriteRecipe={this.favoriteRecipe}
               />
            :
               <h1 style={{ marginTop: '150px' }}>I am Loading</h1>
        }
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => (
  console.log('state', state.authReducer.userData),
  {
    authenticated: state.authReducer.isAuthenticated,
    recipes: state.recipeReducer,
    userId: state.authReducer.userData.id,
    userData: state.authReducer.userData,
    favoriteRecipes: state.getFavoriteRecipeReducer
  });
/**
 * @description make actions available to AllRecipes as props
 *
 * @param {dispatch} dispatch
 *
 * @returns {undefined} call bindActionCreators function
 */
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    upvoteRecipeAction,
    downvoteRecipeAction,
    favoriteRecipeAction,
    getFavoriteRecipeAction
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileContainer);
