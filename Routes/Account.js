const express = require('express')
const connection = require('../config')
const router = express.Router()
const bcrypt = require('bcrypt')

router.get('/', (req, res) => {
  connection.query('SELECT * from Accounts', (err, results) => {
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
    'SELECT * from Accounts WHERE idAccount=?',
    [req.params.id],
    (err, results) => {
      if (err) {
        console.log(err)
        res.status(500).send('Error retrieving data')
      } else {
        res.status(200).json(results)
      }
    }
  )
})
router.post('/', async (req, res) => {
  try {
    const { Logo, Name, Adress, Postal_code, Town, Website, Email, Status, Capital, Phone, SIRET, Code, Vat } = req.body
   /* const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password, salt)
    console.log(salt)
    console.log(hashedPassword)
     const compare = await bcrypt.compare(req.body.password, hashedPassword)
    console.log(compare)*/
    connection.query(
      'INSERT INTO accounts ( Logo, Name, Adress, Postal_code, Town, Website, Email, Status, Capital, Phone, SIRET, Code, Vat ) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)',
      [Logo, Name, Adress, Postal_code, Town, Website, Email, Status, Capital, Phone, SIRET, Code, Vat],
      err => {
        if (err) {
          console.log(err)
          res.status(500).send('Error saving account')
        }
        res.status(200).send('Successfully saved account')
      }
    )
  } catch (error) {
    res.status(500).send(error.message)
  }
})
module.exports = router