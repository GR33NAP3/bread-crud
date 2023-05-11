const router = require('express').Router()
const Bread = require('../models/bread')


// GET all the bread
router.get('/', async (req,res) => {
    const bread = await Bread.find()
    res.render('index', {
        breads: bread
    })
})

router.get('/new',(req,res) => {
    res.render('new')
})


//GET bread by a specific bread
router.get('/:id', async (req,res) => {
    const { id }= req.params
    const bread = await Bread.findById(id)
    res.render('show', { 
        bread
    })
})

router.get('/:id/edit', async (req,res) => {
    const { id }= req.params
    const bread = await Bread.findById(id)
    res.render('edit', {
        bread
    })
})

router.post('/', async (req,res) => {
    if(!req.body.image) req.body.image = undefined

    if (req.body.hasGluten === 'on'){
        req.body.hasGluten = true
    }else{
        req.body.hasGluten = false
    }

    await Bread.create(req.body)
    res.status(303).redirect('/breads')
})

// DELETE pathway
router.delete('/:id', async (req,res) => {
    const { id } = req.params
    await Bread.findByIdAndDelete(id)
    res.status(303).redirect('/breads')
})

//put is whole update/ patch is for part for updates
router.put('/:id', async (req,res) => {
    const { id } = req.params

    // if(!req.body.image) req.body.image = 'https://thumbs.dreamstime.com/b/bread-cut-14027607.jpg'
    if(!req.body.image) req.body.image = undefined

    if (req.body.hasGluten === 'on'){
        req.body.hasGluten = true
    }else{
        req.body.hasGluten = false
    }

    await Bread.findByIdAndUpdate(id, req.body)
    res.status(303).redirect(`/breads/${id}`)
})

module.exports = router