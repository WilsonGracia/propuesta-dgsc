import { IsUUID } from 'class-validator';

export class DeleteEstudioDto {
  @IsUUID()
  estudio_id: string;
}
