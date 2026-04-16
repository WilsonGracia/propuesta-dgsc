import {
  BadRequestException,
  ConflictException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

export function handleDbError(error: any): never {
  const code = error?.driverError?.code;
  const msg = error?.driverError?.message ?? error?.message;

  switch (code) {
    case 'P0002':
      throw new NotFoundException(msg);
    case '23505':
      throw new ConflictException(msg);
    case '23514':
    case '23503':
      throw new BadRequestException(msg);
    case '42P01':
      throw new NotFoundException(msg);
    case '42501':
    default:
      throw new InternalServerErrorException(msg);
  }
}
