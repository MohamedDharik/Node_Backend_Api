const express = require('express')

const {getProduct,getProducts,createProduct,updateProduct,deleteProduct} = require('../controller/prod.controller')


const routes = express.Router();

routes.get('/api/prod',getProduct)
routes.get('/api/prod',getProducts)
routes.post('/api/prod', createProduct)
routes.put('/api/prod',updateProduct)
routes.delete('/api/prod',deleteProduct)

module.exports = routes