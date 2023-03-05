import AuthModule from './auth/auth.module';
import UserModule from './user/user.module';
import UserEntity from './user/user.entity';

const entities = [UserEntity];
const modules = [AuthModule, UserModule];

export default modules;

export { entities };
