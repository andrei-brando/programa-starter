import { Request, Response } from 'express';
import { Category } from '../../../core/data/database/entities/Category';
import { Product } from '../../../core/data/database/entities/Product';

export default class CategoryController {
  public async index(req: Request, res: Response) {
    const categories = await Category.find();

    return res.json(categories);
  }

  public async show(req: Request, res: Response) {
    const { uid } = req.params;
    const category = await Category.findOne(uid);

    return res.json(category);
  }

  public async store(req: Request, res: Response) {
    const { name, description, tag } = req.body;
    const category = await new Category(name, description, tag).save();

    return res.json(category);
  }

  public async update(req: Request, res: Response) {
    const { uid } = req.params;
    const { name, description, tag } = req.body;
    const category = await Category.findOne(uid);

    if (category) {
      category.name = name;
      category.description = description;
      category.tag = tag;
      category?.save();
    }

    return res.json(category);
  }

  public async delete(req: Request, res: Response) {
    const { uid } = req.params;

    await Product.delete({ categoryUid: uid });
    await Category.delete(uid);
    // const total = await Product.count({ where: { categoryUid: uid } });

    // if (total > 0) {
    //   return res.status(400).json({ error: 'Error' });
    // }

    return res.sendStatus(204);
  }
}