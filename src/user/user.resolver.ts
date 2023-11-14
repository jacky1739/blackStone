import { Args, Mutation, Resolver, Query } from "@nestjs/graphql";
import { UserInput } from "./dto/user-input.type";
import { UserService } from "./user.service";
import { UserType } from "./dto/user.type";

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  
  @Mutation(() => Boolean, { description: '新增用戶' }) // 新增操作
  async create(@Args('params') params: UserInput): Promise<boolean> { // 新增參數需要使用@Args的裝飾器
    return await this.userService.create(params);
  }

  @Query(() => UserType, { description: '使用ID查詢用戶' }) // 查詢
  async find(@Args('id') id: string): Promise<UserType> {
    return await this.userService.find(id);
  }

  @Mutation(() => Boolean, { description: '更新用戶' })
  async update(@Args('id') id: string, @Args('params') params: UserInput): Promise<boolean> {
    return await this.userService.update(id, params);
  }

  @Mutation(() => Boolean, { description: '刪除一個用戶' })
  async del(@Args('id') id: string): Promise<boolean> {
    return this.userService.del(id);
  }
}