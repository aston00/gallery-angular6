import { PreviewModuleModule } from './preview-module.module';

describe('PreviewModuleModule', () => {
  let previewModuleModule: PreviewModuleModule;

  beforeEach(() => {
    previewModuleModule = new PreviewModuleModule();
  });

  it('should create an instance', () => {
    expect(previewModuleModule).toBeTruthy();
  });
});
