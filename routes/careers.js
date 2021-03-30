const { Router } = require('express');
const express = require('express');
const Career = require('./../models/career');
const router = express.Router();


router.get ('/new', (req, res)  => {
    res.render('careers/new')
})

router.get('/:id', async (req, res) => {
    const career = await Career.findById(req.params.id)
    if (career == null) res.redirect('/')
    res.render('careers/show', { career: career})
});



router.post('/', async (req, res) =>{
const career = new Career({
    title: req.body.title,
    description: req.body.description,
})
try {
  career = await career.save()
  res.redirect(`/careers/${career.id}`)  
} catch (e) {
    console.log(e);
    res.render('careers/new', {career: career})
}

});



module.exports = router;
