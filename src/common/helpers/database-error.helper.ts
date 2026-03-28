// src/common/helpers/database-error.helper.ts
import {
  BadRequestException,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

export function handleDbError(error: any): never {
  const code = error?.driverError?.code;
  const msg = error?.driverError?.message ?? error?.message;

  switch (code) {
    case '23505':
      throw new ConflictException(msg);
    case '23514':
    case '23503':
      throw new BadRequestException(msg);
    default:
      throw new InternalServerErrorException(msg);
  }
}
