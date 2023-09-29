import { ShortenDatePipe } from './shorten-date.pipe';

describe('ShortenDatePipe', () => {
  it('create an instance', () => {
    const pipe = new ShortenDatePipe();
    expect(pipe).toBeTruthy();
  });
});
