const express = require('express')
const connection = require('../config')
const router = express.Router()
//const bcrypt = require('bcrypt')
const { check, validationResult } = require('express-validator')

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

router.post('/', [check('Mail').isEmail()], (req, res) => {
  /*try {
    const { Logo, Denomination, Adress, Postal_code, Town, Phone, Website, Mail, Status, Capital, Siret, CodeAPE, Vat, Password } = req.body
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password, salt)
    console.log(salt)
    console.log(hashedPassword)
     const compare = await bcrypt.compare(req.body.password, hashedPassword)
    console.log(compare)*/
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  }
  const {
    Logo,
    Denomination,
    Adress,
    Postal_code,
    Town,
    Phone,
    Website,
    Mail,
    Status,
    Capital,
    Siret,
    CodeAPE,
    Vat,
    Password
  } = req.body
  return connection.query(
    `INSERT INTO Accounts
     ( Logo, Denomination, Adress, Postal_code, Town, Phone, 
      Website, Mail, Status, Capital, Siret, CodeAPE, Vat, Password) 
     VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    [
      Logo,
      Denomination,
      Adress,
      Postal_code,
      Town,
      Phone,
      Website,
      Mail,
      Status,
      Capital,
      Siret,
      CodeAPE,
      Vat,
      Password
    ],
    err => {
      if (err) {
        return res.status(500).send('Error saving account')
      }
      return res.status(200).send('Successfully saved account')
    }
  )
})
/*} catch (error) {
    res.status(500).send(error.message)
  }*/

module.exports = router
