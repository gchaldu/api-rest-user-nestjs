import {
    IsEmail,
   IsString, MinLength
} from 'class-validator';

export class CreateUserDto {
    @IsString()
    @MinLength(1)
    private firstName: string;

    @IsString()
    @MinLength(1)
    private lastName: string;

    @IsString()
    @IsEmail()
    private email: string;
}
