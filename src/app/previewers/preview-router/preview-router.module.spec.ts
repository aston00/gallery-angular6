import { PreviewRouterModule } from './preview-router.module';

describe('PreviewRouterModule', () => {
  let previewRouterModule: PreviewRouterModule;

  beforeEach(() => {
    previewRouterModule = new PreviewRouterModule();
  });

  it('should create an instance', () => {
    expect(previewRouterModule).toBeTruthy();
  });
});
