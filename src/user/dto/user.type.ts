import { Field ,ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UserType {
  @Field()
  id?: string;
  @Field()
  name?: string;
  @Field()
  desc: string;
  @Field({ description: '帳號訊息'})
  account: string;
}