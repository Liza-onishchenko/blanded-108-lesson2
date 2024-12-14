import createHttpError from 'http-errors';
import {
  addProduct,
  getAllProducts,
  getProductById,
} from '../services/products.js';

export const getAllProductsController = async (req, res) => {
  const products = await getAllProducts();
  res.json({
    status: 200,
    message: 'Successfully found products!',
    data: products,
  });
};

export const getProductsByIdController = async (req, res) => {
  const { productId } = req.params;

  const product = await getProductById(productId);
  if (!product) throw createHttpError(404, 'Product not found');

  res.json({
    status: 200,
    message: `Successfully found product with id ${productId}!`,
    data: product,
  });
};

export const addProductController = async (req, res) => {
  console.log('body:', req.body);
  const product = await addProduct(req.body);
  res.status(201).json({
    status: 201,
    message: 'Successfully created a product!',
    data: product,
  });
};
