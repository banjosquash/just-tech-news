const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post_routes.js');
const commentRoutes = require('./comment_routes');

router.use('/comments', commentRoutes);
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;