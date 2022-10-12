import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { UserProvider } from './context/UserContext';
import { MemoryRouter } from 'react-router-dom';
import * as authFns from './services/auth';
import * as postFns from './services/posts';



jest.mock('./services/auth');
jest.mock('./services/posts');

const mockUser = {
  id: '0dab2c65-5911-469c-9f12-8fb47ebe52f2',
  aud: 'authenticated',
  role: 'authenticated',
  email: 'random@example.com',
};

const fakePosts = [
  {
    id: 1,
    title: 'Fake Post #1',
    description: '#1 description',
    user_id: '0dab2c65-5911-469c-9f12-8fb47ebe52f2',
  },
  { id: 2, title: 'Fake Post #2', description: '#2 description' },
];

const newPost = [
  {
    id: 1,
    title: 'New Post',
    description: 'Post description',
    user_id: '0dab2c65-5911-469c-9f12-8fb47ebe52f2',
  },

];

test('users see dev pal text', () => {
  render(
    <UserProvider>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </UserProvider>
  );

  const text = screen.getByText(/devPal/i);
  expect(text).toBeInTheDocument();
});


test('user can sign in', async () => {
  authFns.getUser.mockReturnValue(null);
  authFns.authUser.mockReturnValue(mockUser);

  render(
    <UserProvider>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </UserProvider>
  );

  const emailInput = screen.getByLabelText('Email');
  fireEvent.change(emailInput, { target: { value: 'random@example.com' } });
  expect(emailInput.value).toBe('random@example.com');

  const passwordInput = screen.getByLabelText('Password');
  fireEvent.change(passwordInput, { target: { value: '123456' } });
  expect(passwordInput.value).toBe('123456');

});


test('signed in users should see all posts', async () => {
  authFns.getUser.mockReturnValue(mockUser);
  postFns.getPosts.mockReturnValue(fakePosts);
  render(
    <UserProvider>
      <MemoryRouter initialEntries={['/posts']}>
        <App />
      </MemoryRouter>
    </UserProvider>
  );
  await screen.findByText(/Fake Post #1/i);
  await screen.findByText(/Fake Post #2/i);
});

test('users can add a post', async () => {
  authFns.getUser.mockReturnValue(mockUser);
  postFns.createPost.mockReturnValue(newPost.title, newPost.description);
  render(
    <UserProvider>
      <MemoryRouter initialEntries={['/create-post']}>
        <App />
      </MemoryRouter>
    </UserProvider>


  );

  const titleInput = screen.getByLabelText('Title');
  fireEvent.change(titleInput, { target: { value: 'New Post' } });
  expect(titleInput.value).toBe('New Post');

  const descriptionInput = screen.getByLabelText('Description');
  fireEvent.change(descriptionInput, { target: { value: 'Post description' } });
  expect(descriptionInput.value).toBe('Post description');


});










