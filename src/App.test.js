import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { UserProvider } from './context/UserContext';

import * as authFns from './services/auth';
import * as postFns from './services/posts';

jest.mock('./services/auth');
jest.mock('./services/posts');

const testUser = {
  id: '03498265-5911-463c-9f12-8fb47ebe52f2',
  aud: 'authenticated',
  role: 'authenticated',
  email: 'beans@chili.cookout',
};

test('user can sign in', async () => {
  authFns.getUser.mockReturnValue(null);
  authFns.authUser.mockReturnValue(testUser);

  render(
    <UserProvider>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </UserProvider>
  );

  const emailInput = screen.getByLabelText('Email:');
  fireEvent.change(emailInput, { target: { value: 'beans@chili.cookout' } });
  expect(emailInput.value).toBe('beans@chili.cookout');

  const passwordInput = screen.getByLabelText('Password:');
  fireEvent.change(passwordInput, { target: { value: '123456' } });

  const button = screen.getByText(/submit/i);
  fireEvent.click(button);
});

test('devPal link renders on page', () => {
  render(
    <UserProvider>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </UserProvider>
  );

  const link = screen.getByText(/devPal/i);
  expect(link).toBeInTheDocument();
});

test('email field to appear on auth page', () => {
  render(
    <UserProvider>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </UserProvider>
  );

  const signInLink = screen.getByText('Sign In');
  fireEvent.click(signInLink);
});

const testPosts = [
  {
    id: 999,
    title: 'posty test',
    description: "we're testing posts here boys",
    user_id: '9acca4d7-f566-44d4-b91b-74e4ae8368ac',
  },
  {
    id: 8292,
    title: 'another test',
    description: 'testing testing attention please',
    user_id: '9acca4d7-f566-44d4-b91b-74e4ae8368ac',
  },
  {
    id: 83976,
    title: "let's do another",
    description: 'DJ Khaled wants another one',
    user_id: '9acca4d7-f566-44d4-b91b-74e4ae8368ac',
  },
];

test('authenticated user can views post', async () => {
  authFns.getUser.mockReturnValue(testUser);
  postFns.getPosts.mockReturnValue(testPosts);
  render(
    <UserProvider>
      <MemoryRouter initialEntries={['/posts']}>
        <App />
      </MemoryRouter>
    </UserProvider>
  );
  await screen.findByText(/posty test/i);
  await screen.findByText(/another test/i);
  await screen.findByText(/another one/i);
});
