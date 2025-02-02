/*The payload should contain the minimum, unique user data that'll be used in
subsequent requests, such as the user's ID, role, etc. It should not contain
personally identifiable information like phone number, email address, credit card
information, etc, or sensitive data like passwords.*/
export type SessionPayload = {
  userId: string;
  expiresAt: Date;
};

export type AvailableLocales = 'en' | 'ru';

export enum AvailableProviders {
  CREDENTIALS,
  GOOGLE,
  YANDEX,
}
