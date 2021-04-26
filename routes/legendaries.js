const express = require('express');
const router = express.Router();
const controller = require('../controllers/LegendariesController');

const validation = require('../middlewares/validationLegendary');
const legendaryValidation = require('../validations/legendarieValidation');

const validator = require('../middlewares/LegendariesRouter');

/* legendaries. */
router.get('/', controller.index);
router.post('/', validation(legendaryValidation), controller.create);
router.put('/:id', validator, controller.update);
router.delete('/id', controller.delete);

module.exports = router;
