const { Router } = require('express');
const router = Router();
const path = require('path');

const productController = require('./controllers/productController');
const authController = require('./controllers/authController');

router.use('/api/products', productController);
router.use('/api/auth', authController);

// router.get("*" ,(req, res) =>{
//     res.sendFile(path.join(__dirname,'public', 'index.html'))
// });

module.exports = router;