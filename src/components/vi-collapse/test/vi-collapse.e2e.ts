import { newE2EPage } from '@stencil/core/testing';

describe('vi-collapse', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<vi-collapse></vi-collapse>');

    const element = await page.find('vi-collapse');
    expect(element).toHaveClass('hydrated');
  });
});
