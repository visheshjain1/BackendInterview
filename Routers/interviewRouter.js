const router = require('express').Router();
const { getAll,add, deleteId,edit} = require('../Controller/interviewController.js');


router.route('/getAll')
    .post(getAll);
router.route('/add')
    .post(add);
router.route('/delete').post(deleteId);
router.route('/edit').post(edit);

module.exports = router;