import { TurnIsAdminDTO } from '../database/dtos/dtos';
import { UsersRepository } from '../database/repositories/UsersRepository';
import { AppError } from '../errors/AppError';

class TurnAdminService {
  async execute({ id, userData }: TurnIsAdminDTO) {
    const usersRepository = new UsersRepository();

    const userAlreadyExists = await usersRepository.findByID({ id });
    if (!userAlreadyExists) {
      throw new AppError('IdUser not found!', 404);
    }

    const turnAdmin = await usersRepository.turnIsAdmin({ id, userData });
    if (!turnAdmin) {
      throw new AppError('Turn Admin failed', 400);
    }
  }
}

export { TurnAdminService };