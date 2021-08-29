import { newSpecPage } from '@stencil/core/testing';
import { ViCollapse } from '../vi-collapse';

describe('vi-collapse', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ViCollapse],
      html: `<vi-collapse></vi-collapse>`,
    });
    expect(page.root).toEqualHtml(`
      <vi-collapse>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </vi-collapse>
    `);
  });
});
