import { newE2EPage } from '@stencil/core/testing';
import path from 'path';

// function getTextContent(element) {
//   return Array.from(element.shadowRoot.childNodes).filter(n => n.nodeType === 3)[0].textContent;
// }


describe('chuck-norris-joke', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    page.addScriptTag({
      path: path.resolve('puppeteer-scripts/e2e-content.js')
    });

    await page.setContent('<chuck-norris-joke></chuck-norris-joke>');

    const element = await page.find('chuck-norris-joke');

    await page.waitFor(5000);

    expect(element).toHaveClass('hydrated');
    // expect(element.shadowRoot.textContent).toEqual('When you are Chuck Norris, anything + anything is equal to 1. One roundhouse kick to the face.')
  });
});
