import { Request, Response } from 'express';
import { BookstoreEntity } from '../../../../database/entities/BookstoreEntity';
import { UsersRepository } from '../../../../database/repositories/UsersRepository';
import { AppError } from '../../../../errors/AppError';

import { UpdateBookstoreService } from './UpdateBookstoreService';

class UpdateBookstoreController {
  async control(req: Request, res: Response): Promise<Response> {
    // recebe user id
    const { id } = req.user;
    
    // recebe dados do body
    const bookstoreDataId = req.body as Partial<BookstoreEntity>;

    // recebe id header
    const bookstoreData = req.headers['x-bookstore-id'] as string; 

    // salva os dados recebidos do body, no id header
    const updateBookstoreService = new UpdateBookstoreService();
    const updatedBookstore = await updateBookstoreService.execute({
          bookstoreData, data: bookstoreDataId, id
    });

    return res.status(200).json(updatedBookstore);
  }
}

export { UpdateBookstoreController };
