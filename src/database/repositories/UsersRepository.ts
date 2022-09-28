import { prisma } from '../../../prisma/PrismaClient';
import {
  CreateUserDTO,
  DeleteUserDTO,
  FindByAdminDTO,
  FindByEmailDTO,
  FindByIdDTO,
  TurnIsAdminDTO,
  UpdatePassword,
  UpdateUserDTO,
} from '../dtos/dtos';
import { UserEntity } from '../entities/UserEntity';

class UsersRepository {
  async create({ userData }: CreateUserDTO) {
    const newUser = await prisma.user.create({
      data: {
        ...userData,
      },
    });

    return newUser;
  }

  async findByEmail({ email }: FindByEmailDTO): Promise<UserEntity> {
    const userFound = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    return userFound;
  }

  // async findByAdmin({ isAdmin }: FindByAdminDTO): Promise<Partial<UserEntity>> {
  //   const userFound = await prisma.user.findFirst({
  //     where: {
  //       isAdmin: {
  //         equals: true,
  //       },
  //     },
  //   });
  //   return userFound;
  // }

  async findByID({ id }: FindByIdDTO): Promise<Partial<UserEntity>> {
    const userFound = await prisma.user.findFirst({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        password: false,
        isAdmin: true,
        birthDate: true,
        cellNumber: true,
        created_at: true,
        updated_at: true,
      },
    });
    return userFound;
  }

  async update({ id, userData }: UpdateUserDTO): Promise<UserEntity> {
    const updatedUser = await prisma.user.update({
      where: {
        id,
      },
      data: {
        name: userData.name,
        email: userData.email,
        cellNumber: userData.cellNumber,
        birthDate: userData.birthDate,
      },
    });

    return updatedUser;
  }

  updatePassword({ id, userData }: UpdatePassword) {
    const updatePassword = prisma.user.update({
      where: {
        id,
      },
      data: {
        password: userData.password,
      },
    });

    return updatePassword;
  }

  turnIsAdmin({ id, userData }: TurnIsAdminDTO) {
    const updatePassword = prisma.user.update({
      where: {
        id,
      },
      data: {
        isAdmin: userData.isAdmin,
      },
    });

    return updatePassword;
  }

  async delete({ id }: DeleteUserDTO) {
    await prisma.user.delete({
      where: {
        id,
      },
    });
  }

  async findAll(): Promise<Partial<UserEntity>[]> {
    const getAllUsers = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        password: false,
        isAdmin: true,
        birthDate: true,
        cellNumber: true,
        created_at: true,
        updated_at: true,
      },
    });

    return getAllUsers;
  }
}
export { UsersRepository };
