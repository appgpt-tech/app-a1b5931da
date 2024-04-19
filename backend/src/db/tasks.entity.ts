//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tasks')
export class tasksEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('bool', { nullable: true })
  awareness: boolean;

  @Column('bool', { nullable: true })
  enemyTransformationDetection: boolean;

  @Column('bool', { nullable: true })
  spotEnemies: boolean;
}