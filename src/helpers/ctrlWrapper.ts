import type { Request, Response, NextFunction } from 'express';

type Controller = (req: Request, res: Response, next: NextFunction) => void;

const ctrlWrapper = (ctrl: Controller) => {
  const func = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      next(error);
    }
  };

  return func;
};

export default ctrlWrapper;
