import { SignRouterModule } from './sign-router.module';

describe('SignRouterModule', () => {
  let signRouterModule: SignRouterModule;

  beforeEach(() => {
    signRouterModule = new SignRouterModule();
  });

  it('should create an instance', () => {
    expect(signRouterModule).toBeTruthy();
  });
});
