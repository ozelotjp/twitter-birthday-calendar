import { User } from '@firebase/auth';

export interface AuthStateInterface {
  user: User | null;
}

function state(): AuthStateInterface {
  return {
    user: null
  }
};

export default state;
