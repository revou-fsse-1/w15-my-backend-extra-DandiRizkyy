import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class PatchProduct{
    @IsString()
    @IsOptional()
    @ApiProperty({required: false})
    title: string

    @IsString()
    @IsOptional()
    @ApiProperty({required: false})
    description: string

    @IsString()
    @IsOptional()
    @ApiProperty({required: false})
    category: string

    @IsNumber()
    @IsOptional()
    @ApiProperty({required: false})
    userId: number
}