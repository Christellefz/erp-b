const express = require('express')
const connection = require('../config')
const router = express.Router()
const bcrypt = require('bcrypt')

router.get('/', (req, res) => {
  connection.query('SELECT * from Products', (err, results) => {
    if (err) {
      console.log(err)
      res.status(500).send('Error retrieving data')
    } else {
      res.status(200).json(results)
    }
  })
})
router.get('/:id', (req, res) => {
  connection.query(
    'SELECT * from Products WHERE idProduct=?',
    [req.params.id],
    (err, results) => {
      if (err) {
        console.log(err)
        res.status(500).send('Error retrieving Product')
      } else {
        res.status(200).json(results)
      }
    }
  )
})
router.post('/', async (req, res) => {
  try {
    const { Designation, Pu, Code, Category, Keywords, Stock, Linked_Account } =
      req.body
    /* const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password, salt)
    console.log(salt)
    console.log(hashedPassword)
     const compare = await bcrypt.compare(req.body.password, hashedPassword)
    console.log(compare)*/
    connection.query(
      `INSERT INTO Products (Designation, 
        Pu,
        Code,
        Category,
        Keywords,
        Stock,
       Linked_Account, ) VALUES(?,?,?,?,?,?,?)`,
      [Designation, Pu, Code, Category, Keywords, Stock, Linked_Account],
      err => {
        if (err) {
          console.log(err)
          res.status(500).send('Error saving Product')
        }
        res.status(200).send('Successfully saved Product')
      }
    )
  } catch (error) {
    res.status(500).send(error.message)
  }
})
module.exports = router
