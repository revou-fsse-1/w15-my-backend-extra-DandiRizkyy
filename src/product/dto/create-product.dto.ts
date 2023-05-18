import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateProduct{
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    title: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    description: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    category: string

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    userId: number
}