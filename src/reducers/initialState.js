import Immutable from 'seamless-immutable';

export default {
  connection: {
    isConnected: null
  },
  user: Immutable({
    name: '',
    lastName: '',
    playerId: 0,
    agePlayer: 0,
    address: '',
    phone: '',
    emails: [],
    isPublicContact: true,
    avatar: ''
  })
};
