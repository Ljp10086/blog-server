import { IsNotEmpty } from 'class-validator';

export class DeleteParamType {
  @IsNotEmpty()
  id: string;
}
