import{ Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from  'typeorm';
import { User } from './models/user.entity';

@Injectable() //使用這個裝飾器可以自動注入到整個 nest.js的體系裡
export class UserService {
  constructor(                  // 將Repository的實體注入到後面的變量(UserRepository) 已完成第二部 創建user專屬的Repository
    @InjectRepository(User) private UserRepository: Repository<User>
  ) {}

  // DeepPartial 是個工具類型, 把 user 裡的所有屬性都加問號
  // 新增一個用戶
  async create(entity: DeepPartial<User>): Promise<boolean> {
    const res = await this.UserRepository.insert(entity);
    if (res && res.raw.affectedRows > 0) {
      return true;
    }
    return false;
    console.log(res);
    return true;
  }
}