import { Request, Response } from 'express';

import { Product } from "../../models/Product"

export async function listProducts(request: Request, response: Response) {
  try {
    const product = await Product.find()

    return response.status(200).json({ product })
  } catch (error) {
    return response.status(400).json({ error: error })
  }
}
