import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  uid: string;

  @Column({ nullable: true })
  provider: string;

  @Column({ nullable: true })
  first_name: string;

  @Column({ nullable: true })
  last_name: string;

  @Column({ unique: true })
  username: string;

  @Column({ nullable: true })
  created_at: string;

  @Column({ nullable: true })
  updated_at: string;

  @Column()
  gender: string;

  @Column({ nullable: true })
  push_token: string;

  @Column({ nullable: true })
  allow_password_change: boolean;

  //TODO: Avatar (tabla con imagenes)
}
