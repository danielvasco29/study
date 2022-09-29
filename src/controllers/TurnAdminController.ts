import { Request, Response } from 'express';

import { TurnAdminService } from '../services/TurnAdminService';

class TurnAdminController {
  async control(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;

    const userData = req.body;

    const turnAdminService = new TurnAdminService();

    const turnAdmin = await turnAdminService.execute({ id, userData });

    return res.status(201).json(turnAdmin);
  }
}

export { TurnAdminController };
