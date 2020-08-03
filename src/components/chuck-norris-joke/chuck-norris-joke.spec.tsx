import { newSpecPage } from '@stencil/core/testing';
import { ChuckNorrisJoke } from './chuck-norris-joke';

describe('chuck-norris-joke', () => {
  it('renders', async () => {

    const page = await newSpecPage({
      components: [ChuckNorrisJoke],
      html: `<chuck-norris-joke></chuck-norris-joke>`
    });

    expect(page.root).toEqualHtml(`
      <chuck-norris-joke>
        <mock:shadow-root>
        </mock:shadow-root>
      </chuck-norris-joke>
    `);
  });
});
