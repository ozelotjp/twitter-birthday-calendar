import { boot } from 'quasar/wrappers';
import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const firebaseConfig = {
      apiKey: 'AIzaSyDdwdGYZ9AKeaVFRoRPTDY7HIAilYAU32Y',
    authDomain: 'twitter-birthday-calendar.firebaseapp.com',
    projectId: 'twitter-birthday-calendar',
    storageBucket: 'twitter-birthday-calendar.appspot.com',
    messagingSenderId: '554535526636',
    appId: '1:554535526636:web:246f7e21e37f36fc0a45c9'
}

const getAuthenticatedUser = async () => {
  return new Promise((resolve) => {
    onAuthStateChanged(getAuth(), (user) => resolve(user))
  })
}

export default boot(async ({store}) => {
  initializeApp(firebaseConfig);

  const user = await getAuthenticatedUser();
  store.commit('auth/updateUser', user);
})
