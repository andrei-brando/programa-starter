import { Request, Response } from 'express';

export default class ProductController {
  public index(req: Request, res: Response) {
    return res.send('index');
  }
  
  public show(req: Request, res: Response) {
    return res.send('show');
  }

  public store(req: Request, res: Response) {
    return res.send('store');
  }

  public update(req: Request, res: Response) {
    return res.send('update');
  }

  public delete(req: Request, res: Response) {
    return res.send('delete');
  }
}