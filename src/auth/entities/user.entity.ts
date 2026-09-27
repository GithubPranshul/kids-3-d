import { IsEmail, Length } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  @Length(4, 20)
  username!: string;

  @Column({ unique: true })
  @IsEmail()
  email!: string;

  @Column()
  @Length(6, 50)
  password!: string;
}
