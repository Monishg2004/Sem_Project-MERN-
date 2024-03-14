const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');
const path = require('path');

/**
 * App Routes 
 */
router.get('/', recipeController.homepage);
router.get('/recipe/:id', recipeController.exploreRecipe);
router.get('/categories', recipeController.exploreCategories);
router.get('/categories/:id', recipeController.exploreCategoriesById);
router.post('/search', recipeController.searchRecipe);
router.get('/explore-latest', recipeController.exploreLatest);
router.get('/explore-random', recipeController.exploreRandom);
router.get('/submit-recipe', recipeController.submitRecipe);
router.post('/submit-recipe', recipeController.submitRecipeOnPost);

// Route for the About Us page
router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../about.html'));
});

// Route for the Contact page
router.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../contact.html'));
});

// Route for the Login page
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../login.html'));
});

// Route for the Signup page
router.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../signup.html'));
});

module.exports = router;
