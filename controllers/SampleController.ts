import { Request, Response } from 'express';

export default class SampleController {
  static getIndex(req: Request, res: Response) {
    try {
      res.render('sample');
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
}
