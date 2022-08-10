import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  email: string;

  @Column()
  uid: string;

  @Column()
  provider: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  username: string;

  @Column()
  created_at: string;

  @Column()
  updated_at: string;

  @Column()
  gender: string;

  @Column()
  push_token: string;

  @Column()
  allow_password_change: boolean;

  //TODO: Avatar (tabla con imagenes)
}
