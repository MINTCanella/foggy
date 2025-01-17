import { makeAutoObservable } from 'mobx';
import { user } from '@nextui-org/react';

class UsersStore {
  users: any[] = [];
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setAllUsers(users: any[]) {
    this.users = users;
  }
  setError(error: string) {
    this.error = error;
  }
}

const usersStore = new UsersStore();
export default usersStore;
