import { User } from '@firebase/auth';
import { MutationTree } from 'vuex';
import { AuthStateInterface } from './state';

const mutation: MutationTree<AuthStateInterface> = {
  updateUser(state, user: User | null){
    state.user = user;
  }
};

export default mutation;
