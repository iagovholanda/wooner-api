import { Request, Response } from 'express';

import { Product } from "../../models/Product"

export async function listProductsByCategory(request: Request, response: Response) {
  try {
    const { categoryId } = request.params
    const product = await Product.find().where('category').equals(categoryId)

    return response.status(200).json({ product })
  } catch (error) {
    return response.status(400).json({ error: error })
  }
}
