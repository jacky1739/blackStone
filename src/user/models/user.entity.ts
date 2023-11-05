import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

// 和資料庫做關聯用裝飾器
@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid') // 因為用id容易被找出規律並仿造 所以使用uuid
  id: string;

  @Column({
    comment: '名稱',
    default: '',
  })
  @IsNotEmpty()
  name: string;

  @Column({
    comment: '描述訊息',
    default: '',
  })
  desc: string;

  @Column({
    comment: '手機號碼',
    nullable: true
  })
  tel: string;

  @Column({
    comment: '密碼',
    nullable: true,
  })
  password: string;

  @Column({
    comment: '帳號',
    nullable: true,
  })
  account: string;
}