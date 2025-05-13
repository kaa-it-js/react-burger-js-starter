import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

import { add, register } from './utils.ts';

import type { MockInstance } from 'vitest';

describe('test', () => {
  let fetchSpy: MockInstance<typeof fetch>;

  beforeEach(() => {
    fetchSpy = vi.spyOn(global, 'fetch').mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ result: 'OK' }),
    } as unknown as Response);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('cool', () => {
    const res = add('a', 'b');

    expect(res).toEqual('ab');
  });

  it('pretty', async () => {
    const result = await register('1@mail.ru', '111');

    expect(result).toEqual({ result: 'OK' });
    expect(fetchSpy).toHaveBeenCalledTimes(1);
  });
});
