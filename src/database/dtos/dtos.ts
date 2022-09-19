import { TokenEntity } from '../entities/TokenEntity';
import { UserEntity } from '../entities/UserEntity';

type CreateUserDTO = {
  userData: UserEntity;
};

type CreateTokenDTO = {
  tokenData: Partial<TokenEntity>;
};

type UpdateUserDTO = {
  id: string;
  userData: Partial<UserEntity>;
};

type FindByEmailDTO = {
  email: string;
};

type FindByNumberDTO = {
  cellNumber: string;
};

type FindByIdDTO = {
  id: string;
};

type UserLoginDTO = {
  email: string;
  password: string;
};

type NewTokenDTO = {
  newToken: string;
};

type DeleteUserDTO = {
  id: string;
};

type ReadUserDTO = {
  id: string;
};

type FindByUserIdDTO = {
  userId: string;
};

type DeleteTokenDTO = {
  userId: string;
};

export {
  FindByUserIdDTO,
  DeleteTokenDTO,
  UpdateUserDTO,
  FindByNumberDTO,
  FindByIdDTO,
  FindByEmailDTO,
  CreateUserDTO,
  UserLoginDTO,
  NewTokenDTO,
  DeleteUserDTO,
  ReadUserDTO,
  CreateTokenDTO,
};
