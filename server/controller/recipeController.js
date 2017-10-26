import db from '../model/db';

class handleRecipeMethod {
  static addRecipe(req, res) {
    const {
      name, userId, description, mealType,
    } = req.body;
    const len = db.recipes.length;
    const id = len + 1;
    db.recipes.push({
      id,
      userId,
      name,
      description,
      mealType,
      upvotes: 10,
      downvotes: 3,
    });
    return res.status(201).send(db.recipes[id - 1]);
  }
}

export default handleRecipeMethod;
