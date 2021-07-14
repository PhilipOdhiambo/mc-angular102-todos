import { DeadlineDatePipe } from './deadline-date.pipe';

describe('DeadlineDatePipe', () => {
  it('create an instance', () => {
    const pipe = new DeadlineDatePipe();
    expect(pipe).toBeTruthy();
  });
});
