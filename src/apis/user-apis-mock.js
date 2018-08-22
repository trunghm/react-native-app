const ProfilesData = [
  {
    firstName: 'John',
    lastName: 'Smith',
    playerId: 15020183,
    isVerified: true,
    agePlayer: 50,
    address: 'Level 12, 565 Bourke Street, Melbourne VIC, 3000',
    phone: '0435256256',
    emails: ['longng@nexlesoft.com'],
    isPublicContact: false,
    avatar: 'https://trung-testing.s3-accelerate.amazonaws.com/profile1.jpg',
    teams: [
      {
        teamId: 1690793,
        teamName: 'Viet Nam',
        teamAvatarURL: 'https://trung-testing.s3-accelerate.amazonaws.com/team1.jpg',
        teamType: 'Home',
        role: 'manager',
        sportId: 'Australian Rules Football',
        ageGroup: 'Under 9',
        compName: 'Under 18 Boys C',
        seasonName: '2017-18',
        clubName: 'Viet Nam National Football'
      },
      {
        teamId: 1184837,
        teamType: 'Away',
        teamName: 'Barcelona FC',
        teamAvatarURL: 'https://trung-testing.s3-accelerate.amazonaws.com/team2.jpg',
        role: 'manager',
        sportId: 'Australian Rules Football',
        ageGroup: 'Under 9',
        compName: 'Under 18 Boys C',
        seasonName: '2017-18',
        clubName: 'Barcelona Football Club'
      },
      {
        teamId: 1517745,
        teamName: 'Crystal Palace FC',
        teamAvatarURL: 'https://trung-testing.s3-accelerate.amazonaws.com/team3.jpg',
        teamType: 'Home',
        role: 'manager',
        sportId: 'Australian Rules Football',
        ageGroup: 'Under 9',
        compName: 'Under 18 Boys C',
        seasonName: '2017-18',
        clubName: 'Crystal Palace Football Club'
      },
      {
        teamId: 1683020,
        teamType: 'Home',
        isArchived: true,
        teamName: 'Liverpool',
        teamAvatarURL: 'https://trung-testing.s3-accelerate.amazonaws.com/team4.jpg',
        role: 'manager',
        sportId: 'Australian Rules Football',
        ageGroup: 'Under 9',
        compName: 'Under 18 Boys C',
        seasonName: '2017-18',
        clubName: 'Liverpool Football Club'
      },
      {
        teamId: 433773,
        teamType: 'Home',
        isArchived: true,
        teamName: 'Arsenal FC',
        teamAvatarURL: 'https://trung-testing.s3-accelerate.amazonaws.com/team5.jpg',
        role: 'manager',
        sportId: 'Australian Rules Football',
        ageGroup: 'Under 9',
        compName: 'Under 18 Boys C',
        seasonName: '2017-18',
        clubName: 'Liverpool Football Club'
      }
    ],
    parent: [
      {
        memberId: 15019717,
        fullName: 'Dukie McKinnell',
        firstName: 'Dukie',
        lastName: 'McKinnell',
        email: 'a2@g.com',
        playerNumber: 80,
        position: {
          name: 'Defender',
          abbreviation: 'DF',
          order: 1
        },
        avatarUrl: 'https://trung-testing.s3-accelerate.amazonaws.com/profile2.jpg',
        competition: 'Under 18 Boys C'
      }
    ],
    children: [
      {
        memberId: 1690793,
        fullName: 'Idelle Grinsdale',
        firstName: 'Idelle',
        lastName: 'Grinsdale',
        email: 'a3@g.com',
        playerNumber: 23,
        position: {
          name: 'Defender',
          abbreviation: 'DF',
          order: 1
        },
        avatarUrl:
          'https://trung-testing.s3-accelerate.amazonaws.com/profile3.jpg'
      }
    ],
    memberFollowings: [
      {
        memberId: 9786228,
        fullName: 'Shermy Lis',
        firstName: 'Shermy',
        lastName: 'Lis',
        email: 'a5@g.com',
        playerNumber: 23,
        position: {
          name: 'Defender',
          abbreviation: 'DF',
          order: 1
        },
        avatarUrl:
          'https://trung-testing.s3-accelerate.amazonaws.com/profile5.jpg',
        competition: 'Under 18 Boys C'
      }
    ]
  },
  {
    firstName: 'John',
    lastName: 'Smith',
    playerId: 15020183,
    isVerified: true,
    agePlayer: 50,
    address: 'Level 12, 565 Bourke Street, Melbourne VIC, 3000',
    phone: '0435256256',
    emails: ['Johnsmith@gmail.com', 'a1@g.com'],
    isPublicContact: false,
    avatar: 'https://trung-testing.s3-accelerate.amazonaws.com/profile1.jpg',
    teams: [
      {
        teamId: 1690793,
        teamName: 'Viet Nam',
        teamAvatarURL: 'https://trung-testing.s3-accelerate.amazonaws.com/team1.jpg',
        teamType: 'Home',
        role: 'manager',
        sportId: 'Australian Rules Football',
        ageGroup: 'Under 9',
        compName: 'Under 18 Boys C',
        seasonName: '2017-18',
        clubName: 'Viet Nam National Football'
      },
      {
        teamId: 1184837,
        teamType: 'Away',
        teamName: 'Barcelona FC',
        teamAvatarURL: 'https://trung-testing.s3-accelerate.amazonaws.com/team2.jpg',
        role: 'manager',
        sportId: 'Australian Rules Football',
        ageGroup: 'Under 9',
        compName: 'Under 18 Boys C',
        seasonName: '2017-18',
        clubName: 'Barcelona Football Club'
      },
      {
        teamId: 1517745,
        teamName: 'Crystal Palace FC',
        teamAvatarURL: 'https://trung-testing.s3-accelerate.amazonaws.com/team3.jpg',
        teamType: 'Home',
        role: 'manager',
        sportId: 'Australian Rules Football',
        ageGroup: 'Under 9',
        compName: 'Under 18 Boys C',
        seasonName: '2017-18',
        clubName: 'Crystal Palace Football Club'
      },
      {
        teamId: 1683020,
        teamType: 'Home',
        isArchived: true,
        teamName: 'Liverpool',
        teamAvatarURL: 'https://trung-testing.s3-accelerate.amazonaws.com/team4.jpg',
        role: 'manager',
        sportId: 'Australian Rules Football',
        ageGroup: 'Under 9',
        compName: 'Under 18 Boys C',
        seasonName: '2017-18',
        clubName: 'Liverpool Football Club'
      },
      {
        teamId: 433773,
        teamType: 'Home',
        isArchived: true,
        teamName: 'Arsenal FC',
        teamAvatarURL: 'https://trung-testing.s3-accelerate.amazonaws.com/team5.jpg',
        role: 'manager',
        sportId: 'Australian Rules Football',
        ageGroup: 'Under 9',
        compName: 'Under 18 Boys C',
        seasonName: '2017-18',
        clubName: 'Liverpool Football Club'
      }
    ],
    parent: [
      {
        memberId: 15019717,
        fullName: 'Dukie McKinnell',
        firstName: 'Dukie',
        lastName: 'McKinnell',
        email: 'a2@g.com',
        playerNumber: 80,
        position: {
          name: 'Defender',
          abbreviation: 'DF',
          order: 1
        },
        avatarUrl: 'https://trung-testing.s3-accelerate.amazonaws.com/profile2.jpg',
        competition: 'Under 18 Boys C'
      }
    ],
    children: [
      {
        memberId: 1690793,
        fullName: 'Idelle Grinsdale',
        firstName: 'Idelle',
        lastName: 'Grinsdale',
        email: 'a3@g.com',
        playerNumber: 23,
        position: {
          name: 'Defender',
          abbreviation: 'DF',
          order: 1
        },
        avatarUrl:
          'https://trung-testing.s3-accelerate.amazonaws.com/profile3.jpg'
      }
    ],
    memberFollowings: [
      {
        memberId: 9786228,
        fullName: 'Shermy Lis',
        firstName: 'Shermy',
        lastName: 'Lis',
        email: 'a5@g.com',
        playerNumber: 23,
        position: {
          name: 'Defender',
          abbreviation: 'DF',
          order: 1
        },
        avatarUrl:
          'https://trung-testing.s3-accelerate.amazonaws.com/profile5.jpg',
        competition: 'Under 18 Boys C'
      }
    ]
  },
  {
    firstName: 'Andrew',
    lastName: 'White',
    playerId: 10545871,
    isVerified: true,
    agePlayer: 22,
    email: 'awhite@sportstg.com',
    address: 'Level 12, 565 Bourke Street, Melbourne VIC, 3000',
    phone: '0435256256',
    emails: ['awhite@sportstg.com'],
    isPublicContact: false,
    avatar: 'https://trung-testing.s3-accelerate.amazonaws.com/profile2.jpg',
    parent: [
      {
        memberId: 15019717,
        fullName: 'Dukie McKinnell',
        firstName: 'Dukie',
        lastName: 'McKinnell',
        email: 'a2@g.com',
        playerNumber: 80,
        position: {
          name: 'Defender',
          abbreviation: 'DF',
          order: 1
        },
        avatarUrl: 'https://trung-testing.s3-accelerate.amazonaws.com/profile2.jpg',
        competition: 'Under 18 Boys C'
      }
    ],
    children: [
      {
        memberId: 1690793,
        fullName: 'Idelle Grinsdale',
        firstName: 'Idelle',
        lastName: 'Grinsdale',
        email: 'a3@g.com',
        playerNumber: 23,
        position: {
          name: 'Defender',
          abbreviation: 'DF',
          order: 1
        },
        avatarUrl:
          'https://trung-testing.s3-accelerate.amazonaws.com/profile3.jpg'
      }
    ],
    memberFollowings: [
      {
        memberId: 9786228,
        fullName: 'Shermy Lis',
        firstName: 'Shermy',
        lastName: 'Lis',
        email: 'a5@g.com',
        playerNumber: 23,
        position: {
          name: 'Defender',
          abbreviation: 'DF',
          order: 1
        },
        avatarUrl:
          'https://trung-testing.s3-accelerate.amazonaws.com/profile5.jpg',
        competition: 'Under 18 Boys C'
      }
    ]
  },
  {
    firstName: 'Dukie',
    lastName: 'McKinnell',
    playerId: 15019717,
    agePlayer: 80,
    email: 'a2@g.com',
    address: 'Level 12, 565 Bourke Street, Melbourne VIC, 3000',
    phone: '0435256256',
    emails: ['dmckinnell0@weibo.com', 'a2@g.com'],
    isPublicContact: true,
    avatar: 'https://trung-testing.s3-accelerate.amazonaws.com/profile2.jpg',
    teams: [
      {
        teamId: 1690793,
        teamName: 'Viet Nam',
        teamAvatarURL:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png',
        teamType: 'Home',
        role: 'player',
        sportId: 'Australian Rules Football',
        ageGroup: 'Under 9',
        compName: 'Under 18 Boys C',
        seasonName: '2017-18',
        clubName: 'Viet Nam Football Team'
      },
      {
        teamId: 1184837,
        teamType: 'Away',
        teamName: 'Barcelona FC',
        teamAvatarURL:
          'https://qph.ec.quoracdn.net/main-qimg-727f9bd06c1013cbaaa3ed34a069fd7f',
        role: 'player',
        sportId: 'Australian Rules Football',
        ageGroup: 'Under 9',
        compName: 'Under 18 Boys C',
        seasonName: '2017-18',
        clubName: 'Barcelona Football Club'
      }
    ],
    children: [
      {
        memberId: 15020183,
        fullName: 'John Smith',
        firstName: 'John',
        lastName: 'Smith',
        email: 'a1@g.com',
        playerNumber: 23,
        position: {
          name: 'Defender',
          abbreviation: 'DF',
          order: 1
        },
        avatarUrl: 'https://trung-testing.s3-accelerate.amazonaws.com/profile1.jpg'
      }
    ],
    memberFollowings: [
      {
        memberId: 9786228,
        fullName: 'Shermy Lis',
        firstName: 'Shermy',
        lastName: 'Lis',
        email: 'a5@g.com',
        playerNumber: 23,
        position: {
          name: 'Defender',
          abbreviation: 'DF',
          order: 1
        },
        avatarUrl:
          'https://trung-testing.s3-accelerate.amazonaws.com/profile5.jpg',
        competition: 'Under 18 Boys C'
      }
    ]
  },
  {
    firstName: 'Idelle',
    lastName: 'Grinsdale',
    playerId: 1690793,
    agePlayer: 22,
    email: 'a3@g.com',
    address: 'Level 12, 565 Bourke Street, Melbourne VIC, 3000',
    phone: '0435256256',
    emails: ['igrinsdale1@narod.ru', 'a3@g.com'],
    isPublicContact: true,
    avatar: 'https://trung-testing.s3-accelerate.amazonaws.com/profile3.jpg',
    teams: [
      {
        teamId: 1184837,
        teamType: 'Away',
        teamName: 'Barcelona FC',
        teamAvatarURL: 'https://trung-testing.s3-accelerate.amazonaws.com/team2.jpg',
        role: 'player',
        sportId: 'Australian Rules Football',
        ageGroup: 'Under 9',
        compName: 'Under 18 Boys C',
        seasonName: '2017-18',
        clubName: 'Barcelona Football Club'
      },
      {
        teamId: 1517745,
        teamName: 'Crystal Palace FC',
        teamAvatarURL: 'https://trung-testing.s3-accelerate.amazonaws.com/team3.jpg',
        teamType: 'Home',
        role: 'player',
        sportId: 'Australian Rules Football',
        ageGroup: 'Under 9',
        compName: 'Under 18 Boys C',
        seasonName: '2017-18',
        clubName: 'Crystal Palace Football Club'
      },
      {
        teamId: 1683020,
        teamType: 'Home',
        teamName: 'Liverpool',
        teamAvatarURL: 'https://trung-testing.s3-accelerate.amazonaws.com/team4.jpg',
        role: 'coach',
        sportId: 'Australian Rules Football',
        ageGroup: 'Under 9',
        compName: 'Under 18 Boys C',
        seasonName: '2017-18',
        clubName: 'Liverpool Football Club'
      },
      {
        teamId: 433773,
        teamType: 'Home',
        teamName: 'Arsenal FC',
        teamAvatarURL: 'https://trung-testing.s3-accelerate.amazonaws.com/team5.jpg',
        role: 'coach',
        sportId: 'Australian Rules Football',
        ageGroup: 'Under 9',
        compName: 'Under 18 Boys C',
        seasonName: '2017-18',
        clubName: 'Arsenal Football Club'
      }
    ],
    parent: [
      {
        memberId: 1690793,
        fullName: 'Jennine Padginton',
        firstName: 'Jennine',
        lastName: 'Padginton',
        email: 'jpadginton1@parallels.com',
        playerNumber: 23,
        position: {
          name: 'Defender',
          abbreviation: 'DF',
          order: 1
        },
        avatarUrl:
          'https://trung-testing.s3-accelerate.amazonaws.com/profile1.jpg',
        competition: 'Under 18 Boys C'
      }
    ],
    memberFollowings: [
      {
        memberId: 4049527,
        fullName: 'Durand Cannam',
        firstName: 'Durand',
        lastName: 'Cannam',
        email: 'a4@g.com',
        playerNumber: 23,
        position: {
          name: 'Defender',
          abbreviation: 'DF',
          order: 1
        },
        avatarUrl:
          'https://trung-testing.s3-accelerate.amazonaws.com/profile4.jpg',
        competition: 'Under 18 Boys C'
      }
    ]
  },
  {
    firstName: 'Durand',
    lastName: 'Cannam',
    playerId: 4049527,
    agePlayer: 50,
    isVerified: true,
    address: 'Level 12, 565 Bourke Street, Melbourne VIC, 3000',
    phone: '0435256256',
    emails: ['dcannam2@smh.com.au', 'a4@g.com'],
    isPublicContact: true,
    avatar: 'https://trung-testing.s3-accelerate.amazonaws.com/profile4.jpg',
    teams: [],
    // teams: [
    //   {
    //     teamId: 1690793,
    //     teamName: "Viet Nam",
    //     teamAvatarURL: "https://trung-testing.s3-accelerate.amazonaws.com/team1.jpg",
    //     teamType: "Home",
    //     role: "player",
    //     sportId: "Australian Rules Football",
    //     ageGroup: "Under 9",
    //     compName: "Under 18 Boys C",
    //     seasonName: "2017-18",
    //     clubName: "Viet Nam National Football",
    //   },
    //   {
    //     teamId: 1184837,
    //     teamType: "Away",
    //     teamName: "Barcelona FC",
    //     teamAvatarURL: "https://trung-testing.s3-accelerate.amazonaws.com/team2.jpg",
    //     role: "player",
    //     sportId: "Australian Rules Football",
    //     ageGroup: "Under 9",
    //     compName: "Under 18 Boys C",
    //     seasonName: "2017-18",
    //     clubName: "Barcelona Football Club",
    //   },
    //   {
    //     teamId: 433773,
    //     teamType: "Home",
    //     teamName: "Arsenal FC",
    //     teamAvatarURL: "https://trung-testing.s3-accelerate.amazonaws.com/team5.jpg",
    //     role: "coach",
    //     sportId: "Australian Rules Football",
    //     ageGroup: "Under 9",
    //     compName: "Under 18 Boys C",
    //     seasonName: "2017-18",
    //     clubName: "Liverpool Football Club",
    //   }
    // ],
    memberFollowings: [
      {
        memberId: 9786228,
        fullName: 'Shermy Lis',
        firstName: 'Shermy',
        lastName: 'Lis',
        email: 'a5@g.com',
        playerNumber: 23,
        position: {
          name: 'Defender',
          abbreviation: 'DF',
          order: 1
        },
        avatarUrl:
          'https://trung-testing.s3-accelerate.amazonaws.com/profile5.jpg',
        competition: 'Under 18 Boys C'
      }
    ]
  },
  {
    firstName: 'Shermy',
    lastName: 'Lis',
    playerId: 9786228,
    agePlayer: 50,
    email: 'slis3@geocities.jp',
    address: 'Level 12, 565 Bourke Street, Melbourne VIC, 3000',
    phone: '0435256256',
    emails: ['slis3@geocities.jp', 'a4@g.com'],
    isPublicContact: true,
    avatar: 'https://trung-testing.s3-accelerate.amazonaws.com/profile5.jpg',
    teams: [
      {
        teamId: 1184837,
        teamType: 'Away',
        teamName: 'Barcelona FC',
        teamAvatarURL: 'https://trung-testing.s3-accelerate.amazonaws.com/team2.jpg',
        role: 'player',
        sportId: 'Australian Rules Football',
        ageGroup: 'Under 9',
        compName: 'Under 18 Boys C',
        seasonName: '2017-18',
        clubName: 'Barcelona Football Club'
      },
      {
        teamId: 1517745,
        teamName: 'Crystal Palace FC',
        teamAvatarURL: 'https://trung-testing.s3-accelerate.amazonaws.com/team3.jpg',
        teamType: 'Home',
        role: 'player',
        sportId: 'Australian Rules Football',
        ageGroup: 'Under 9',
        compName: 'Under 18 Boys C',
        seasonName: '2017-18',
        clubName: 'Crystal Palace Football Club'
      },
      {
        teamId: 1683020,
        teamType: 'Home',
        teamName: 'Liverpool',
        teamAvatarURL: 'https://trung-testing.s3-accelerate.amazonaws.com/team4.jpg',
        role: 'coach',
        sportId: 'Australian Rules Football',
        ageGroup: 'Under 9',
        compName: 'Under 18 Boys C',
        seasonName: '2017-18',
        clubName: 'Liverpool Football Club'
      },
      {
        teamId: 433773,
        teamType: 'Home',
        teamName: 'Arsenal FC',
        teamAvatarURL: 'https://trung-testing.s3-accelerate.amazonaws.com/team5.jpg',
        role: 'coach',
        sportId: 'Australian Rules Football',
        ageGroup: 'Under 9',
        compName: 'Under 18 Boys C',
        seasonName: '2017-18',
        clubName: 'Arsenal Football Club'
      }
    ]
  },

  {
    firstName: '',
    lastName: '',
    playerId: 9792204,
    agePlayer: 50,
    email: 'a6@g.com',
    address: 'Level 12, 565 Bourke Street, Melbourne VIC, 3000',
    phone: '0435256256',
    emails: ['a6@g.com'],
    isPublicContact: true,
    avatar: 'https://trung-testing.s3-accelerate.amazonaws.com/profile5.jpg',
    teams: [
      {
        teamId: 1184837,
        teamType: 'Away',
        teamName: 'Barcelona FC',
        teamAvatarURL: 'https://trung-testing.s3-accelerate.amazonaws.com/team2.jpg',
        role: 'player',
        sportId: 'Australian Rules Football',
        ageGroup: 'Under 9',
        compName: 'Under 18 Boys C',
        seasonName: '2017-18',
        clubName: 'Barcelona Football Club'
      },
      {
        teamId: 1517745,
        teamName: 'Crystal Palace FC',
        teamAvatarURL: 'https://trung-testing.s3-accelerate.amazonaws.com/team3.jpg',
        teamType: 'Home',
        role: 'player',
        sportId: 'Australian Rules Football',
        ageGroup: 'Under 9',
        compName: 'Under 18 Boys C',
        seasonName: '2017-18',
        clubName: 'Crystal Palace Football Club'
      },
      {
        teamId: 1683020,
        teamType: 'Home',
        teamName: 'Liverpool',
        teamAvatarURL: 'https://trung-testing.s3-accelerate.amazonaws.com/team4.jpg',
        role: 'coach',
        sportId: 'Australian Rules Football',
        ageGroup: 'Under 9',
        compName: 'Under 18 Boys C',
        seasonName: '2017-18',
        clubName: 'Liverpool Football Club'
      },
      {
        teamId: 433773,
        teamType: 'Home',
        teamName: 'Arsenal FC',
        teamAvatarURL: 'https://trung-testing.s3-accelerate.amazonaws.com/team5.jpg',
        role: 'coach',
        sportId: 'Australian Rules Football',
        ageGroup: 'Under 9',
        compName: 'Under 18 Boys C',
        seasonName: '2017-18',
        clubName: 'Arsenal Football Club'
      }
    ]
  }
]

const logigMockResponse = {
  statusCode: 401,
  message: 'Login failed.',
  success: false,
  data: {
    email: '',
    token: 'hard-token'
  }
}

const Mock404Response = {
  statusCode: 404,
  message: 'Player not found',
  success: false,
  data: {}
}

const resetPasswordMockResponse = {
  statusCode: 200,
  success: true,
  message: 'Send email success.',
  data: null
}

const playerStatsSeason = {
  statusCode: 200,
  success: true,
  message: 'get player stats success.',
  data: {
    'results': [
      {
        'memberId': 'a062800000QvKjeAAF',
        'photourl': '',
        'seasonId': 'a2C28000000WMIPEA4',
        'seasonName': 'Winter 2017',
        'memberFirstName': 'Amy',
        'memberLastName': 'Clarke',
        'compId': 'a0A2800000US1zdEAD',
        'compName': 'Sam Test Comp 50',
        'compParticipantId': 94421,
        'compTeamId': 24473,
        'teamId': 'a0R28000009gwVQEAY',
        'compTeamName': 'PS Test 3',
        'compTeamAlias': null,
        'games': '1',
        'category': null,
        'publicprofilevisibility': null,
        'preferredname': null,
        'stats': [
          {
            'value': '1',
            'code': '2PM()',
            'name': 'Two Pointers Made',
            'scale': null,
            'category': 'scoring',
            'aggregate': 'total',
            'confirmed': null
          },
          {
            'value': '1',
            'code': '3PM()',
            'name': 'Three Point Made',
            'scale': null,
            'category': 'scoring',
            'aggregate': 'total',
            'confirmed': null
          },
          {
            'value': '1',
            'code': 'TF',
            'name': 'Technical Fouls',
            'scale': null,
            'category': 'floor game',
            'aggregate': 'total',
            'confirmed': null
          },
          {
            'value': '2',
            'code': 'FTM',
            'name': 'Free Throws Made',
            'scale': null,
            'category': 'scoring',
            'aggregate': 'total',
            'confirmed': null
          },
          {
            'value': '4',
            'code': 'TO',
            'name': 'Turnovers',
            'scale': null,
            'category': 'floor game',
            'aggregate': 'total',
            'confirmed': null
          },
          {
            'value': null,
            'code': 'AS',
            'name': 'Assists',
            'scale': null,
            'category': 'floor game',
            'aggregate': 'total',
            'confirmed': null
          },
          {
            'value': '2',
            'code': 'FGM',
            'name': 'Field Goals Made',
            'scale': null,
            'category': 'scoring',
            'aggregate': 'average',
            'confirmed': null
          },
          {
            'value': null,
            'code': 'A/T',
            'name': 'A/T Ratio',
            'scale': null,
            'category': 'floor game',
            'aggregate': 'average',
            'confirmed': null
          }
        ]
      },
      {
        'memberId': 'a062800000QvKjeAAF',
        'photourl': '',
        'seasonId': 'a2C28000000WMIPEA4',
        'seasonName': 'Winter 2017',
        'memberFirstName': 'Amy',
        'memberLastName': 'Clarke',
        'compId': 'a0A2800000URyGYEA1',
        'compName': 'Sam Test Comp 47',
        'compParticipantId': 93626,
        'compTeamId': 24453,
        'teamId': 'a0R28000009gwVQEAY',
        'compTeamName': 'PS Test 3',
        'compTeamAlias': null,
        'games': '1',
        'category': null,
        'publicprofilevisibility': null,
        'preferredname': null,
        'stats': [
          {
            'value': '2',
            'code': 'AS',
            'name': 'Assists',
            'scale': null,
            'category': 'floor game',
            'aggregate': 'total',
            'confirmed': null
          },
          {
            'value': '2',
            'code': 'TO',
            'name': 'Turnovers',
            'scale': null,
            'category': 'floor game',
            'aggregate': 'total',
            'confirmed': null
          },
          {
            'value': null,
            'code': '2PM()',
            'name': 'Two Pointers Made',
            'scale': null,
            'category': 'scoring',
            'aggregate': 'total',
            'confirmed': null
          },
          {
            'value': null,
            'code': '3PM()',
            'name': 'Three Point Made',
            'scale': null,
            'category': 'scoring',
            'aggregate': 'total',
            'confirmed': null
          },
          {
            'value': null,
            'code': 'FTM',
            'name': 'Free Throws Made',
            'scale': null,
            'category': 'scoring',
            'aggregate': 'total',
            'confirmed': null
          },
          {
            'value': null,
            'code': 'TF',
            'name': 'Technical Fouls',
            'scale': null,
            'category': 'floor game',
            'aggregate': 'total',
            'confirmed': null
          },
          {
            'value': null,
            'code': 'A/T',
            'name': 'A/T Ratio',
            'scale': null,
            'category': 'floor game',
            'aggregate': 'average',
            'confirmed': null
          },
          {
            'value': null,
            'code': 'FGM',
            'name': 'Field Goals Made',
            'scale': null,
            'category': 'scoring',
            'aggregate': 'average',
            'confirmed': null
          }
        ]
      },
      {
        'memberId': 'a062800000QvKjeAAF',
        'photourl': '',
        'seasonId': 'a2C28000000WMIPEA4',
        'seasonName': 'Winter 2017',
        'memberFirstName': 'Amy',
        'memberLastName': 'Clarke',
        'compId': 'a0A2800000URbfvEAD',
        'compName': 'Senior Div 1',
        'compParticipantId': 94289,
        'compTeamId': 24339,
        'teamId': 'a0R28000009gw7AEAQ',
        'compTeamName': 'PS Test 2',
        'compTeamAlias': null,
        'games': '1',
        'category': null,
        'publicprofilevisibility': null,
        'preferredname': null,
        'stats': [
          {
            'value': null,
            'code': '2PM()',
            'name': 'Two Pointers Made',
            'scale': null,
            'category': 'scoring',
            'aggregate': 'total',
            'confirmed': null
          },
          {
            'value': null,
            'code': '3PM()',
            'name': 'Three Point Made',
            'scale': null,
            'category': 'scoring',
            'aggregate': 'total',
            'confirmed': null
          },
          {
            'value': null,
            'code': 'AS',
            'name': 'Assists',
            'scale': null,
            'category': 'floor game',
            'aggregate': 'total',
            'confirmed': null
          },
          {
            'value': null,
            'code': 'FTM',
            'name': 'Free Throws Made',
            'scale': null,
            'category': 'scoring',
            'aggregate': 'total',
            'confirmed': null
          },
          {
            'value': null,
            'code': 'TF',
            'name': 'Technical Fouls',
            'scale': null,
            'category': 'floor game',
            'aggregate': 'total',
            'confirmed': null
          },
          {
            'value': null,
            'code': 'TO',
            'name': 'Turnovers',
            'scale': null,
            'category': 'floor game',
            'aggregate': 'total',
            'confirmed': null
          },
          {
            'value': null,
            'code': 'A/T',
            'name': 'A/T Ratio',
            'scale': null,
            'category': 'floor game',
            'aggregate': 'average',
            'confirmed': null
          },
          {
            'value': null,
            'code': 'FGM',
            'name': 'Field Goals Made',
            'scale': null,
            'category': 'scoring',
            'aggregate': 'average',
            'confirmed': null
          }
        ]
      }
    ],
    'header': {
      'seasonId': 'a2C28000000WMIPEA4',
      'seasonName': 'Winter 2017',
      'seasonStartDate': '2017-05-01T00:00:00Z',
      'seasonEndDate': '2017-09-30T00:00:00Z'
    }
  }
}

export function login (userName, passWord) {
  return new Promise((resolve, reject) => {
    const profile = ProfilesData.find(user => user.emails.find(email => email === userName))
    const response = {
      data: {...profile, loggingEmail: userName} || {},
      statusCode: 200,
      message: 'Get profile success.',
      success: true
    }
    resole(response)
  })
}
