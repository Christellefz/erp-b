/*require('dotenv').config()
const router = require('express').Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const connection = require('../config')

const getToken = req => {
  console.log(req.headers.authorization, 'autorisation')
  console.log(req.body, 'body')
  console.log(req.query, 'query')
  if (
    req.headers.authorization &&
    req.headers.authorization.split(' ')[0] === 'Bearer'
  ) {
    return req.headers.authorization.split(' ')[1]
  } else if (req.query && req.query.token) {
    return req.query.token
  }
  return null
}

router.get('/', (req, res) => {
  res.send('you are in get authentification')
})

router.post('/signin', (req, res) => {
  connection.query(
    'SELECT * from accounts WHERE mail= ? ',
    [req.body.mail],
    (err, result) => {
      if (err) {
        res.status(400).send('Impossible car :' + err)
      } else {
        if (
          req.body.mail === result[0].mail &&
          bcrypt.compareSync(req.body.password, result[0].password)
        ) {
          const tokenUserinfo = {
            mail: req.body.mail
          }
          const token = jwt.sign(tokenUserinfo, process.env.JWT_SECRET)
          res.header('Access-Control-Expose-Headers', 'x-access-token')
          res.set('x-access-token', token)
          res.status(200).send({ details: 'user connected' })
        } else {
          res.status(201).send('Failed')
        }
      }
    }
  )
})

router.post('/protected', (req, res) => {
  const token = getToken(req)
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.log(err)
      return res.status(200).send('echec')
    }
    console.log('decode', decoded)
    return res.status(202).send({ mail: decoded.mail })
  })
})
module.exports = router*/
