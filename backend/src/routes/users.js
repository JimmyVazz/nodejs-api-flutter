const {Router} = require('express')

const router = Router();
const faker = require('faker')
const User = require('../models/User')

router.get('/api/users', async(req, res) =>{
    const users = await User.find()
    res.json({users})
})

router.get('/api/users/create', async(req, res) =>{
    for (let index = 0; index < 5; index++) {
        await User.create({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            imageURL: faker.image.avatar()
        })   
    }
    res.json({messsage: '5 users created'})
    
})






module.exports=router;

