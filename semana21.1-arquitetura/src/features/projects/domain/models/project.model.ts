import { User } from "../../../../core/domain";
import { Entity, BaseEntity } from "typeorm";

export interface Project {
  uid: string;
  name: string;
  description?: string;
  startAt?: Date;
  finishAt?: Date;
  userUid?: string;
  user?: User;
}
