import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { User } from './user/models/user.entity';

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

  // 刪除一個用戶
  @Get('/del')
  async del(id: string): Promise<boolean> {
    return await this.userService.del(id);
  }

  // 更新用戶的資料
  @Get('/update')
  async update(): Promise<boolean> {
    return await this.userService.update(
      '71e44b16-3376-4513-b8b9-5c3c48ce37b1',
      {
        name: '水滴超級管理員1111',
      },
    )
  }

  // 查詢用戶
  @Get('/find')
  async find(): Promise<User> {
    return await this.userService.find('71e44b16-3376-4513-b8b9-5c3c48ce37b1')
  }
}
