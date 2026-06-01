import { describe, it, expect } from 'bun:test';
import { post, upload } from '../../src/utils/http';

describe('utils/http', () => {
  it('post should be a function', () => {
    expect(typeof post).toBe('function');
  });

  it('upload should be a function', () => {
    expect(typeof upload).toBe('function');
  });
});
