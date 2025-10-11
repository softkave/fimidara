import {vi} from 'vitest';
import {ResendEmailProviderContext} from '../../../../contexts/email/ResendEmailProviderContext.js';
import {mockWith} from '../../helpers/mock.js';
import {TestEmailProviderContext} from '../types.js';

export default class TestResendEmailProviderContext
  implements TestEmailProviderContext
{
  private client: ResendEmailProviderContext;

  sendEmail: TestEmailProviderContext['sendEmail'];
  dispose: TestEmailProviderContext['dispose'];

  constructor(apiKey: string) {
    this.client = new ResendEmailProviderContext(apiKey);
    this.sendEmail = vi.fn(this.client.sendEmail).mockName('sendEmail');
    this.dispose = vi.fn(this.client.dispose).mockName('dispose');

    mockWith(this.client, this);
  }
}
