import { HttpError } from '../../helpers';
import { AuthService } from '../../services';

import type { Request, Response } from 'express';

const logout = async (req: Request, res: Response) => {
  const result = await AuthService.logout(req);
  res.clearCookie('refreshToken');

  if (!result) {
    throw HttpError.set(400);
  }
  res.status(204).send();
};

export default logout;
