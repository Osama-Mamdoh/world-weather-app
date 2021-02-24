import { User } from './user.model';
import { Role } from './role.model';
import { FeaturedCity } from './city';

export const models: any[] = [User, Role, FeaturedCity];

export * from './user.model';
export * from './role.model';
export * from './city';
