import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';

@Controller('users')
export class UserController {
    constructor(private userService: UserService){}

    @UseGuards(AuthenticatedGuard)
    @Get()
    async getAllUsers(){
        return await this.userService.getAllUsers();
    }
}
