export class UsersTable {
  public static users: any = [
    {
      id: 4,
      username: 'costa',
      password: 'demo2025',
      email: 'admin@demo.com',
      authToken: 'auth-token-d2dff7b82f784de584b60964abbe45b9',
      refreshToken: 'auth-token-c999ccfe74aa40d0aa1a64c5e620c1a5',
      roles: [1], // Administrator
      pic: './assets/media/avatars/300-20.jpg',
      fullname: 'Costa G',
      firstname: 'Costa',
      lastname: 'G',
      occupation: 'CFO',
      companyName: 'Keenthemes',
      phone: '456669067892',
      language: 'en',
      timeZone: 'International Date Line West',
      communication: {
        email: true,
        sms: true,
        phone: false,
      },
      emailSettings: {
        emailNotification: true,
        sendCopyToPersonalEmail: false,
        activityRelatesEmail: {
          youHaveNewNotifications: false,
          youAreSentADirectMessage: false,
          someoneAddsYouAsAsAConnection: true,
          uponNewOrder: false,
          newMembershipApproval: false,
          memberRegistration: true,
        },
        updatesFromKeenthemes: {
          newsAboutKeenthemesProductsAndFeatureUpdates: false,
          tipsOnGettingMoreOutOfKeen: false,
          thingsYouMissedSindeYouLastLoggedIntoKeen: true,
          newsAboutMetronicOnPartnerProductsAndOtherServices: true,
          tipsOnMetronicBusinessProducts: true,
        },
      },
      address: {
        addressLine: '1467  Griffin Street',
        city: 'Phoenix',
        state: 'Arizona',
        postCode: '85012',
      },
      socialNetworks: {
        linkedIn: 'https://linkedin.com/guest',
        facebook: 'https://facebook.com/guest',
        twitter: 'https://twitter.com/guest',
        instagram: 'https://instagram.com/guest',
      },
    },
  ];

  public static tokens: any = [
    {
      id: 1,
      authToken: 'auth-token-' + Math.random(),
      refreshToken: 'auth-token-' + Math.random(),
    },
  ];
}
