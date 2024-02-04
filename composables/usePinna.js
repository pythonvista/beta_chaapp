import { defineStore } from 'pinia';

export const useBookingStore = defineStore({
  id: 'stay2easy-store',
  state: () => {
    return {
      isAdmin: false,
      activeUser: '',
      token: '',
      userData: {},
      currProperty: {}
    };
  },
  actions: {
    SetActiveUser(id, set) {
      if (set) {
        this.activeUser = id;
        localStorage.setItem('activeUser', id)
      } else {
        this.activeUser = '';
      }
    },
    SetToken(id) {
      this.token = id
    },
    SetTepProperty(data) {
      this.currProperty = data
    },
    SetUserData(data) {
      this.userData = data
    },
    
    
  },
  getters: {
    // filtersList: state => state.filtersList,
  },
});
