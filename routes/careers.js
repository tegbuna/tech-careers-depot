const { Router } = require('express');
const express = require('express');
const career = require('./../models/career');
const Career = require('./../models/career');
const router = express.Router();

//GET
router.get ('/new', (req, res)  => {
    res.render('careers/new')
})

router.get('/show', async (req, res) => {
    const career = await Career.find(req.params.body)
    if (career == null) res.redirect('/')
    res.render('careers/show', { career: career})
});

router.get ('/dss', (req, res)  => {
    res.render('careers/dss')
})

router.get ('/ses', (req, res)  => {
    res.render('careers/ses')
})

router.get ('/uxuis', (req, res)  => {
    res.render('careers/uxuis')
})


//POST
router.post ('/', async (req, res, next) =>{
    req.career = new Career()
    next()
}, saveCareerAndRedirect('new'))

// EDIT

router.put('/edit', async (req, res, next) => {
    req.career = await Career.find(req.params.body)
    next()
    })
    
    function saveCareerAndRedirect(path) {
        return async(req, res) => {
           const career = req.career 
           career.title = req.body.title
           career.description = req.body.description
           try {
              career = await career.save()
              res.redirect(`/careers/${career.id}`)  
            } catch (e) {
                res.render(`careers/${path}`, {career: career})
            }  
    
        }
    }
    

// //UPDATE

router.put('/:id',  async (req, res) => {
   let career 
try {
    career = await Career.findById(req.params.id)
    career.title = req.body.title
    career.description = req.body.description
    await career.save()
    res.redirect(`/careers/${career.id}`)
} catch {
    if (career == null) {
        res.redirect('/')
    } else {
    res.render('careers/edit', {
        career: career,
        errorMessage: 'Error Updating Career"'
    })
    }
}
})


//DELETE
router.delete ('/:id', async(req, res) => {
    await Career.findByIdAndDelete(req.params.id)
    res.redirect('/')
});


module.exports = router;