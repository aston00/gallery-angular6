import { SignModuleModule } from './sign-module.module';

describe('SignModuleModule', () => {
  let signModuleModule: SignModuleModule;

  beforeEach(() => {
    signModuleModule = new SignModuleModule();
  });

  it('should create an instance', () => {
    expect(signModuleModule).toBeTruthy();
  });
});
