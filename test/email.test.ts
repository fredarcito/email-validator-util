// validateEmail.test.js

import validateEmail from '../src/index';

describe('validateEmail', () => {
  it('should return true for a valid email address', () => {
    const validEmail = 'example@example.com';
    expect(validateEmail(validEmail)).toBe(true);
  });

  it('should return false for an invalid email address', () => {
    const invalidEmail = 'example@example';
    expect(validateEmail(invalidEmail)).toBe(false);
  });

  it('should return false for an empty string', () => {
    const emptyEmail = '';
    expect(validateEmail(emptyEmail)).toBe(false);
  });

  it('should return false for a null value', () => {
    const nullEmail = null;
    expect(validateEmail(nullEmail)).toBe(false);
  });

  it('should return false for undefined', () => {
    const undefinedEmail = null;
    expect(validateEmail(undefinedEmail)).toBe(false);
  });

  it('should return false for a number value', () => {
    const numberEmail = (12345 as unknown) as string | null;
    expect(validateEmail(numberEmail)).toBe(false);
  });
});
