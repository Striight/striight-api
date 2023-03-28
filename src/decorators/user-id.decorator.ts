import { createParamDecorator, ExecutionContext } from '@nestjs/common';

const CtxUser = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return request.user.userId;
});

export default CtxUser;
