import { User } from '@firebase/auth';

export interface AuthStateInterface {
  user: User | null;
  status: 'loading' | 'guest' | 'user';
}

function state(): AuthStateInterface {
  return {
    user: null,
    status: 'loading'
  }
};

export default state;
