import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class UpdateProduct{
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
    
    // field baru
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    userId: number
}