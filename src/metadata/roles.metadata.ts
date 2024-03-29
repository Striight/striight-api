import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'roles';

export const ADMIN_KEY = 'admin';

export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);

export const Admin = () => Roles(ADMIN_KEY);
