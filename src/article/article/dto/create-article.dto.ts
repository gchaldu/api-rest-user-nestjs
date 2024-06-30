import { IsString } from "class-validator";

export class CreateArticleDto {

    @IsString()
    private title: string;

    @IsString()
    private subtitle: string;

    @IsString()
    private descripcion: string;
}
