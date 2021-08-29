import { newSpecPage } from '@stencil/core/testing';
import { ViComponent1 } from '../vi-component-1';

describe('vi-component-1', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ViComponent1],
      html: `<vi-component-1></vi-component-1>`,
    });
    expect(page.root).toEqualHtml(`
      <vi-component-1>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </vi-component-1>
    `);
  });
});
