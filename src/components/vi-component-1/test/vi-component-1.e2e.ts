import { newE2EPage } from '@stencil/core/testing';

describe('vi-component-1', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<vi-component-1></vi-component-1>');

    const element = await page.find('vi-component-1');
    expect(element).toHaveClass('hydrated');
  });
});
