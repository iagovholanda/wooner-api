import { Request, Response } from 'express'

import { Category } from '../../models/Category'

export async function createCategory(request: Request, response: Response) {
  try {
    const { name, icon } = request.body

    const category = await Category.create({
      name,
      icon
    })

    return response.status(200).json({ category })
  } catch (error) {
    return response.status(400).json({ error: error })
  }
}
