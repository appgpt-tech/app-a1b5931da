//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('roles')
export class rolesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('bool', { nullable: true })
  guardingKeyAreas: boolean;

  @Column('bool', { nullable: true })
  secretRoomForBossStage: boolean;
}