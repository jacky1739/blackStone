import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user/user.service';

@Controller()
export class AppController {
  //constructor(private readonly appService: AppService) {} // 先將service注入進來

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  constructor(private readonly userService: UserService) {}

  @Get('/create')
  async create(): Promise<boolean>{
    return await this.userService.create({
      name: '水滴超級管理員',
      desc: '管理員',
      tel: '8800888',
      password: '123456',
      account: 'admin',
    })
  }
}
