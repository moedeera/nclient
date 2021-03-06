var mock_profiles = [
  {
    id: 1,
    status: "public",
    name: "Jennifer Smith",
    nickname: "Jenny",
    location: "Toronto, ON",
    description: "Night Owl Queen",
    age: 25,
    scores: [125, 102, 55],
    header: "Mom to 2 cats and a Dog",
    about:
      "Photography aficionado, GamerGirl, Outdoorsy-gal, solo-traveler. Vlogger...pretty much your average millennial",
    Feed: [
      { name: "Connie Williams", type: "like", id: 2 },
      { name: "Matt Russo", type: "request", id: 3 },
      { name: "James Santos", type: "request", id: 4 },
    ],
    profilePic:
      "https://images.pexels.com/photos/1090387/pexels-photo-1090387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    banner:
      "https://cdn.pixabay.com/photo/2019/03/21/05/27/flower-4070280_960_720.jpg",
    followerCount: 26,
    login: false,
    Notifications: 2,
    Notices: [
      {
        id: 50,
        type: "message",
        kind: "sent",
        previous: [],
        user: 2,
        from: "Connie",
        date: new Date("2022-03-01"),
        Date: "March 01 2022",
        picture:
          "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        text: "Hey do you wanna go skiing tomorrow?",
        pending: true,
      },
      {
        id: 20,
        type: "message",
        kind: "reply",
        previous: [
          { id: 1, messenger: 1, text: "hey how is it going?" },
          { id: 2, messenger: 2, text: "Im fine, how about you?" },
        ],
        user: 6,
        from: "Mitch Wiz",
        date: new Date("2022-02-25"),
        Date: "February 25 2022",
        text: "Thanks for the gift yo sent!",
        picture:
          "https://cdn.pixabay.com/photo/2019/11/10/11/13/couple-4615557_960_720.jpg",
        pending: true,
      },
      {
        id: 19,
        type: "post",
        kind: "follow",
        share: "none",
        user: 15,
        post: 10,
        from: "Martin Lee",
        date: new Date("2022-04-01"),
        Date: "April 01 2022",
        picture: "https://pbs.twimg.com/media/FN-ucnyXIAU735X.jpg",

        pending: true,
      },
      {
        id: 319,
        type: "post",
        kind: "follow",
        share: "none",
        user: 25,
        post: 1,
        from: "James Vitto",
        date: new Date("2022-04-09"),
        Date: "April 09 2022",
        picture:
          "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg",

        pending: true,
      },
      {
        id: 320,
        type: "post",
        kind: "follow",
        share: "none",
        user: 26,
        post: 1,
        from: "Nolan Smithson",
        date: new Date("2022-04-19"),
        Date: "April 19 2022",
        picture:
          "https://cdn.pixabay.com/photo/2016/10/06/05/19/couple-1718244_960_720.jpg",

        pending: true,
      },
      {
        id: 321,
        type: "post",
        kind: "follow",
        share: "none",
        user: 19,
        post: 1,
        from: "Stacey Baker",
        date: new Date("2022-04-21"),
        Date: "April 21 2022",
        picture:
          "https://cdn.pixabay.com/photo/2015/01/15/16/17/hands-600497_960_720.jpg",

        pending: true,
      },
      {
        id: 322,
        type: "post",
        kind: "friend",
        share: "none",
        user: 17,
        post: 1,
        from: "James Vitto",
        date: new Date("2022-04-09"),
        Date: "April 09 2022",
        picture:
          "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg",

        pending: true,
      },

      {
        id: 22,
        type: "post",
        kind: "share",
        share: "Jessica Swanson",
        user: 2,
        post: 8,
        from: "Connie Williams",
        date: new Date("2022-03-28"),
        Date: "March 28 2022",
        picture:
          "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",

        pending: false,
      },
      {
        id: 23,
        type: "post",
        kind: "posted",
        user: 5,
        post: 5,
        from: "Matthew Russo",
        date: new Date("2022-03-28"),
        Date: "March 02 2022",
        picture:
          "https://images.pexels.com/photos/1819483/pexels-photo-1819483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",

        pending: false,
      },
      {
        id: 21,
        type: "post",
        kind: "share",
        share: "SHA",
        user: 2,
        post: 10,
        from: "Connie Williams",
        date: new Date("2022-02-25"),
        Date: "February 25 2022",
        picture:
          "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",

        pending: true,
      },

      {
        id: 20,
        type: "post",
        kind: "posted",
        share: "Mitch Wiz",
        user: 2,
        post: 7,
        from: "Mitch Wiz",
        date: new Date("2022-02-22"),
        Date: "February 22 2022",
        picture:
          "https://cdn.pixabay.com/photo/2019/11/10/11/13/couple-4615557_960_720.jpg",

        pending: true,
      },
    ],

    Requests: [
      {
        id: 419,

        kind: "follow",
        share: "none",
        user: 17,
        post: 1,
        from: "James Vitto",
        date: new Date("2022-04-09"),
        Date: "April 09 2022",
        picture:
          "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg",

        pending: true,
      },
      {
        id: 319,

        kind: "friend",
        share: "none",
        user: 17,
        post: 1,
        from: "James Vitto",
        date: new Date("2022-04-09"),
        Date: "April 09 2022",
        picture:
          "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg",

        pending: true,
      },
      {
        id: 320,

        kind: "follow",
        share: "none",
        user: 19,
        post: 1,
        from: "Andreas Kollman",
        date: new Date("2022-04-09"),
        Date: "April 09 2022",
        picture:
          "https://cdn.pixabay.com/photo/2020/02/29/04/45/german-shepherd-4889095_960_720.jpg",

        pending: true,
      },
      {
        id: 321,

        kind: "follow",
        share: "none",
        user: 18,
        post: 1,
        from: "Stacey Baker",
        date: new Date("2022-04-21"),
        Date: "April 21 2022",
        picture:
          "https://cdn.pixabay.com/photo/2015/01/15/16/17/hands-600497_960_720.jpg",

        pending: true,
      },
    ],

    Friends: [2, 3, 4, 6, 11],
    followers: [5, 6, 9],
    following: [5, 7, 9],
    Posts: [6, 5, 1],
  },
  {
    id: 2,
    status: "public",
    name: "Connie Williams",
    nickname: "Connie",
    location: "Saskatoon, SK",
    description: "Master Procrastinator",
    age: 21,
    scores: [85, 42, 35],
    header: "Future Nurse in the making",
    about: "Currently enrolled in UofS Nursing, OilersFan and a shopaholic ",

    Feed: [
      { name: "Jen Smith", type: "like", id: 1 },
      { name: "James Johnson", type: "request", id: 5 },
      { name: "Jen Smith", type: "Challenge", id: 1 },
    ],
    profilePic:
      "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    banner:
      "https://cdn.pixabay.com/photo/2017/10/05/22/35/surgeon-2821375_960_720.jpg",
    followerCount: 23,
    login: false,
    Notifications: 0,
    Notices: [],
    Requests: [
      {
        id: 419,
        type: "post",
        kind: "follow",
        share: "none",
        user: 25,
        post: 1,
        from: "James Vitto",
        date: new Date("2022-04-09"),
        Date: "April 09 2022",
        picture:
          "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg",

        pending: true,
      },
      {
        id: 319,
        type: "post",
        kind: "friend",
        share: "none",
        user: 25,
        post: 1,
        from: "James Vitto",
        date: new Date("2022-04-09"),
        Date: "April 09 2022",
        picture:
          "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg",

        pending: true,
      },
    ],

    Friends: [1, 3, 5],
    followers: [1, 2],
    following: [5],
    Posts: [5],
  },
  {
    id: 3,

    status: "private",
    name: "Matthew Russo",
    nickname: "Matt",
    location: "Edmonton, AB",
    description: "Slightly pretentious",
    age: 32,
    scores: [15, 19, 25],
    header: "Misunderstood Genius",
    about:
      "My name is Matt and I don't understand why this description box is here, this is not a dating site...is it? ",

    Feed: [
      { name: "Connie Williams", type: "like", id: 2 },
      { name: "James Johnson", type: "request", id: 5 },
      { name: "Jen Smith", type: "Challenge", id: 1 },
    ],
    profilePic:
      "https://images.pexels.com/photos/1819483/pexels-photo-1819483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    banner:
      "https://cdn.pixabay.com/photo/2016/11/29/09/16/architecture-1868667_960_720.jpg",
    followerCount: 14,
    login: false,
    Notifications: 1,
    Notices: [
      {
        id: 10,
        type: "message",
        user: 4,
        from: "James",
        date: new Date("2022-03-01"),
        text: "Hey are you in town tomorrow?",
      },
    ],
    Requests: [
      {
        id: 419,
        type: "post",
        kind: "follow",
        share: "none",
        user: 25,
        post: 1,
        from: "James Vitto",
        date: new Date("2022-04-09"),
        Date: "April 09 2022",
        picture:
          "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg",

        pending: true,
      },
      {
        id: 319,
        type: "post",
        kind: "friend",
        share: "none",
        user: 25,
        post: 1,
        from: "James Vitto",
        date: new Date("2022-04-09"),
        Date: "April 09 2022",
        picture:
          "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg",

        pending: true,
      },
    ],

    Friends: [1, 2, 5],
    followers: [2],
    following: [1],
    Posts: [6],
  },
  {
    id: 4,
    status: "public",
    name: "James Santos",
    nickname: "James",
    location: "Saskatoon, SK",
    description: "Accountant at BMC",
    age: 25,
    scores: [45, 22, 15],
    header: "I am all about the numbers ",
    about:
      "Graduated from UofS finally and now I can start to live in the real world",

    Feed: [
      { name: "Jen Smith", type: "like", id: 1 },
      { name: "Connie Williams", type: "request", id: 2 },
      { name: "James Johnson", type: "request", id: 5 },
      { name: "Jen Smith", type: "Challenge", id: 1 },
    ],
    profilePic:
      "https://images.pexels.com/photos/1693085/pexels-photo-1693085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    banner:
      "https://cdn.pixabay.com/photo/2021/12/11/15/06/northern-lights-6862969_960_720.jpg",
    followerCount: 56,
    login: false,
    Notifications: 0,
    Notices: [],
    Requests: [
      {
        id: 419,
        type: "post",
        kind: "follow",
        share: "none",
        user: 25,
        post: 1,
        from: "James Vitto",
        date: new Date("2022-04-09"),
        Date: "April 09 2022",
        picture:
          "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg",

        pending: true,
      },
      {
        id: 319,
        type: "post",
        kind: "friend",
        share: "none",
        user: 25,
        post: 1,
        from: "James Vitto",
        date: new Date("2022-04-09"),
        Date: "April 09 2022",
        picture:
          "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg",

        pending: true,
      },
    ],

    Friends: [1, 4],
    followers: [2, 3],
    following: [1],
    Posts: [1],
  },
  {
    id: 5,
    status: "public",
    name: "James Johnson",
    nickname: "Jimmy",
    location: "Regina, SK",
    description: "Foreman at SG-Buildings",
    age: 35,
    scores: [15, 12, 25],
    header: "Dad to two lovely gals",
    about:
      "If you can't appreciate a cold one after a long day of work .........",

    Feed: [
      { name: "Jen Smith", type: "like", id: 1 },
      { name: "Connie Williams", type: "request", id: 2 },
      { name: "James Santos", type: "request", id: 4 },
      { name: "Jen Smith", type: "Challenge", id: 1 },
    ],
    profilePic:
      "https://images.pexels.com/photos/1693085/pexels-photo-1693085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    banner:
      "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg",
    followerCount: 56,
    login: false,
    Notifications: 0,
    Notices: [],
    Requests: [
      {
        id: 419,
        type: "post",
        kind: "follow",
        share: "none",
        user: 25,
        post: 1,
        from: "James Vitto",
        date: new Date("2022-04-09"),
        Date: "April 09 2022",
        picture:
          "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg",

        pending: true,
      },
      {
        id: 319,
        type: "post",
        kind: "friend",
        share: "none",
        user: 25,
        post: 1,
        from: "James Vitto",
        date: new Date("2022-04-09"),
        Date: "April 09 2022",
        picture:
          "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg",

        pending: true,
      },
    ],

    Friends: [1, 2, 3],
    followers: [2, 1],
    following: [1],
    Posts: [1, 6],
  },
  {
    id: 6,
    status: "public",
    name: "Mitchell Wisnewski",
    nickname: "Mitch Wiz",
    location: "Lloydminister, SK",
    description: "Engineer at Fortrec",
    age: 29,
    scores: [51, 19, 95],
    header: "Just Got Married...",
    about: "Sorry ladies, I am off the market",

    Feed: [
      { name: "Connie Williams", type: "like", id: 2 },
      { name: "James Santos", type: "like", id: 4 },
    ],
    profilePic:
      "https://cdn.pixabay.com/photo/2019/11/10/11/13/couple-4615557_960_720.jpg",
    banner:
      "https://cdn.pixabay.com/photo/2017/03/11/13/19/oilseed-rape-2135026_960_720.jpg",
    followerCount: 6,
    login: false,
    Notifications: 0,
    Notices: [],
    Requests: [
      {
        id: 419,
        type: "post",
        kind: "follow",
        share: "none",
        user: 25,
        post: 1,
        from: "James Vitto",
        date: new Date("2022-04-09"),
        Date: "April 09 2022",
        picture:
          "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg",

        pending: true,
      },
      {
        id: 319,
        type: "post",
        kind: "friend",
        share: "none",
        user: 25,
        post: 1,
        from: "James Vitto",
        date: new Date("2022-04-09"),
        Date: "April 09 2022",
        picture:
          "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg",

        pending: true,
      },
    ],

    Friends: [1, 2, 3, 4],
    followers: [1, 3],
    following: [7],
    Posts: [1, 6],
  },
  {
    id: 7,
    status: "public",
    name: "Jose Silva",
    nickname: "Dr Silva",
    location: "Regina, SK",
    description: "Emergency Physician",
    age: 39,
    scores: [51, 19, 95],
    header: "Head of Sask Hospital ER",
    about: "Organizer of StoptheSpread.ca",

    Feed: [
      { name: "Connie Williams", type: "like", id: 2 },
      { name: "James Santos", type: "like", id: 4 },
    ],
    profilePic:
      "https://cdn.pixabay.com/photo/2021/02/09/06/45/doctor-5997504_960_720.jpg",
    banner:
      "https://cdn.pixabay.com/photo/2020/04/28/06/57/medicine-5103043_960_720.jpg",
    followerCount: 6,
    login: false,
    Notifications: 0,
    Notices: [],
    Requests: [
      {
        id: 419,
        type: "post",
        kind: "follow",
        share: "none",
        user: 25,
        post: 1,
        from: "James Vitto",
        date: new Date("2022-04-09"),
        Date: "April 09 2022",
        picture:
          "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg",

        pending: true,
      },
      {
        id: 319,
        type: "post",
        kind: "friend",
        share: "none",
        user: 25,
        post: 1,
        from: "James Vitto",
        date: new Date("2022-04-09"),
        Date: "April 09 2022",
        picture:
          "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg",

        pending: true,
      },
    ],

    Friends: [1, 2, 3, 4],
    followers: [1, 3],
    following: [1],
    Posts: [1, 6],
  },
  {
    id: 8,
    status: "public",
    name: "Kendra Watkins",
    nickname: "RN Kendra",
    location: "Calgary, Alberta",
    description: "Emergency Physician",
    age: 49,
    scores: [11, 19, 15],
    header: "Royal Hospital ER Nurse",
    about: "Proud mom of 2",

    Feed: [
      { name: "Connie Williams", type: "request", id: 2 },
      { name: "James Santos", type: "request", id: 4 },
    ],
    profilePic:
      "https://cdn.pixabay.com/photo/2020/11/07/20/29/injection-5722329_960_720.jpg",
    banner:
      "https://cdn.pixabay.com/photo/2017/08/08/03/50/family-2610205_960_720.jpg",
    followerCount: 4,
    login: false,
    Notifications: 0,
    Notices: [],
    Requests: [
      {
        id: 419,
        type: "post",
        kind: "follow",
        share: "none",
        user: 25,
        post: 1,
        from: "James Vitto",
        date: new Date("2022-04-09"),
        Date: "April 09 2022",
        picture:
          "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg",

        pending: true,
      },
      {
        id: 319,
        type: "post",
        kind: "friend",
        share: "none",
        user: 25,
        post: 1,
        from: "James Vitto",
        date: new Date("2022-04-09"),
        Date: "April 09 2022",
        picture:
          "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg",

        pending: true,
      },
    ],

    Friends: [7],
    followers: [2, 5, 6, 7],
    following: [7],
    Posts: [],
  },
  {
    id: 9,
    status: "public",
    name: "Samantha Smith",
    nickname: "RN Kendra",
    location: "Calgary, Alberta",
    description: "Emergency Physician",
    age: 19,
    scores: [1, 9, 5],
    header: "ALberta gal",
    about: "Art fanatic https://www.deviantart.com/sandara",

    Feed: [
      { name: "Connie Williams", type: "request", id: 2 },
      { name: "James Santos", type: "request", id: 4 },
    ],
    profilePic:
      "https://cdn.pixabay.com/photo/2017/06/10/22/58/composing-2391033_960_720.jpg",
    banner:
      "https://cdn.pixabay.com/photo/2019/11/08/09/27/panorama-4610864_960_720.jpg",
    followerCount: 4,
    login: false,
    Notifications: 0,
    Notices: [],
    Requests: [
      {
        id: 419,
        type: "post",
        kind: "follow",
        share: "none",
        user: 25,
        post: 1,
        from: "James Vitto",
        date: new Date("2022-04-09"),
        Date: "April 09 2022",
        picture:
          "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg",

        pending: true,
      },
      {
        id: 319,
        type: "post",
        kind: "friend",
        share: "none",
        user: 25,
        post: 1,
        from: "James Vitto",
        date: new Date("2022-04-09"),
        Date: "April 09 2022",
        picture:
          "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg",

        pending: true,
      },
    ],

    Friends: [7],
    followers: [1, 2, 3, 4],
    following: [1],
    Posts: [],
  },
  {
    id: 10,
    status: "public",
    name: "Jason Wiegel",
    nickname: "Jay",
    location: "Edmonton, Alberta",
    description: "Law Enforcement",
    age: 32,
    scores: [1, 3, 1],
    header: "Long neck ice cold beer never broke my heart... ",
    about: "If you are a flames fan, get the hell out of my profile page, NOW!",

    Feed: [{ name: "Barbara Wiegel", type: "request", id: 12 }],
    profilePic:
      "https://s1.ticketm.net/dam/a/fc6/7f086b40-3c4e-4fdc-b98d-a4e599c13fc6_1277301_TABLET_LANDSCAPE_LARGE_16_9.jpg",
    banner:
      "https://cdn.pixabay.com/photo/2020/05/24/08/35/f150-5213014_960_720.jpg",
    followerCount: 1,
    login: false,
    Notifications: 1,
    Notices: [],
    Friends: [9, 11],
    followers: [10],
    following: [10],
    Posts: [],
  },
  {
    id: 11,
    status: "private",
    name: "Nicholas Janovic",
    nickname: "Nick Janovich",
    location: "Calgary, Alberta",
    description: "Night Owl",
    age: 22,
    scores: [2, 13, 11],
    header: "[insert clever tagline]..... ",
    about: "Marvel fanboy in action, DC fanboys be aware",

    Feed: [
      {
        name: "Kenneth Bolland",
        type: "request",
        id: 13,
      },
    ],
    profilePic:
      "https://cdn.pixabay.com/photo/2018/04/27/03/50/portrait-3353699_960_720.jpg",
    banner:
      "https://cdn.pixabay.com/photo/2021/08/30/21/29/port-6587129_960_720.jpg",
    followerCount: 3,
    login: false,
    Notifications: 1,
    Notices: [],
    Requests: [
      {
        id: 419,
        type: "post",
        kind: "follow",
        share: "none",
        user: 25,
        post: 1,
        from: "James Vitto",
        date: new Date("2022-04-09"),
        Date: "April 09 2022",
        picture:
          "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg",

        pending: true,
      },
      {
        id: 319,
        type: "post",
        kind: "friend",
        share: "none",
        user: 25,
        post: 1,
        from: "James Vitto",
        date: new Date("2022-04-09"),
        Date: "April 09 2022",
        picture:
          "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg",

        pending: true,
      },
    ],

    Friends: [10, 11],
    followers: [2],
    following: [2],
    Posts: [],
  },
  {
    id: 12,
    status: "unlisted",
    name: "Barbara Weigel",
    nickname: "Barbara",
    location: "Morinville, Alberta",
    description: "Farming grandma",
    age: 62,
    scores: [4, 4, 12],
    header: "Oldtimer in love with the old days ",
    about:
      "Organizer of the Eastville summer festival,  contact me if you want to collaborate",

    Feed: [
      {
        name: "Kenneth Bolland",
        type: "request",
        id: 13,
      },
    ],
    profilePic:
      "https://cdn.pixabay.com/photo/2020/08/17/12/28/woman-5495263_1280.jpg",
    banner:
      "https://cdn.pixabay.com/photo/2021/08/30/21/29/port-6587129_960_720.jpg",
    followerCount: 3,
    login: false,
    Notifications: 1,
    Notices: [],
    Requests: [
      {
        id: 419,
        type: "post",
        kind: "follow",
        share: "none",
        user: 25,
        post: 1,
        from: "James Vitto",
        date: new Date("2022-04-09"),
        Date: "April 09 2022",
        picture:
          "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg",

        pending: true,
      },
      {
        id: 319,
        type: "post",
        kind: "friend",
        share: "none",
        user: 25,
        post: 1,
        from: "James Vitto",
        date: new Date("2022-04-09"),
        Date: "April 09 2022",
        picture:
          "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg",

        pending: true,
      },
    ],

    Friends: [10],
    followers: [2],
    following: [2],
    Posts: [],
  },
  {
    id: 13,
    status: "public",
    name: "Jessica Swanson",
    nickname: "Jessica Swanson",
    location: "Winnipeg, Manitoba",
    description: "Hipster Millennial",
    age: 26,
    scores: [24, 34, 102],
    header: "Pray for Ukraine ",
    about:
      "Lead Head Organizer at UNICEF Canada Manitoba, Donations to Ukraine urgently need at ukrainecrisis.org",

    Feed: [
      {
        name: "Jason Wiegel",
        type: "like",
        id: 10,
      },
    ],
    profilePic:
      "https://cdn.pixabay.com/photo/2017/09/01/21/53/blue-2705642_960_720.jpg",
    banner:
      "https://cdn.pixabay.com/photo/2016/03/09/09/30/woman-1245817_960_720.jpg",
    followerCount: 3,
    login: false,
    Notifications: 1,
    Notices: [],
    Requests: [
      {
        id: 419,
        type: "post",
        kind: "follow",
        share: "none",
        user: 25,
        post: 1,
        from: "James Vitto",
        date: new Date("2022-04-09"),
        Date: "April 09 2022",
        picture:
          "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg",

        pending: true,
      },
      {
        id: 319,
        type: "post",
        kind: "friend",
        share: "none",
        user: 25,
        post: 1,
        from: "James Vitto",
        date: new Date("2022-04-09"),
        Date: "April 09 2022",
        picture:
          "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg",

        pending: true,
      },
    ],

    Friends: [10, 11, 12],
    followers: [8, 9, 10],
    following: [7],
    Posts: [8, 7],
  },
  {
    id: 14,
    status: "public",
    name: "David Smith",
    nickname: "Dave Smith",
    location: "Weston, Saskatoon",
    description: "Foreman at SG Construction",
    age: 46,
    scores: [4, 3, 12],
    header: "Farm boy  ",
    about: "Dave is bored.....",

    Feed: [
      {
        name: "Jason Wiegel",
        type: "like",
        id: 10,
      },
    ],
    profilePic:
      "https://cdn.pixabay.com/photo/2017/08/26/23/43/international-2684771_960_720.jpg",

    login: false,
    Notifications: 1,
    Notices: [],
    Requests: [
      {
        id: 419,
        type: "post",
        kind: "follow",
        share: "none",
        user: 25,
        post: 1,
        from: "James Vitto",
        date: new Date("2022-04-09"),
        Date: "April 09 2022",
        picture:
          "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg",

        pending: true,
      },
      {
        id: 319,
        type: "post",
        kind: "friend",
        share: "none",
        user: 25,
        post: 1,
        from: "James Vitto",
        date: new Date("2022-04-09"),
        Date: "April 09 2022",
        picture:
          "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg",

        pending: true,
      },
    ],

    Friends: [10],
    followers: [8],
    following: [7],
    Posts: [8, 7],
  },
  {
    id: 15,
    status: "public",
    name: "Martin Lee",
    nickname: "Marty",
    location: "Madison, Wisconsin",
    description: "Ambulance worker",
    age: 36,
    scores: [4, 3, 12],
    header: "Unapologetic Packers fan",
    about: "Aaron Rodgers eats Vikings for breakfast and bears for lunch",

    Feed: [
      {
        name: "Jason Wiegel",
        type: "like",
        id: 10,
      },
    ],
    profilePic: "https://pbs.twimg.com/media/FN-ucnyXIAU735X.jpg",
    banner:
      "https://cdn.pixabay.com/photo/2016/02/09/16/35/night-1189929_960_720.jpg",
    login: false,
    Notifications: 1,
    Notices: [],
    Friends: [10],
    followers: [8],
    following: [7],
    Posts: [8, 7],
  },
  {
    id: 16,
    status: "public",
    name: "Amanda Busch",
    nickname: "Amanda",
    location: "Edmonton, Alberta",
    description: "ERT",
    age: 36,
    scores: [4, 4, 12],
    header: "Mom to two lovely gals and a hockey husband",
    about: "#Pray for Ukraine, ukrainecrisis.org",

    Feed: [
      {
        name: "Jason Wiegel",
        type: "like",
        id: 10,
      },
    ],
    profilePic:
      "https://cdn.pixabay.com/photo/2021/07/18/14/59/family-6475821_960_720.jpg",
    banner:
      "https://cdn.pixabay.com/photo/2016/02/09/16/35/night-1189929_960_720.jpg",

    login: false,
    Notifications: 1,
    Notices: [],
    Requests: [
      {
        id: 419,
        type: "post",
        kind: "follow",
        share: "none",
        user: 25,
        post: 1,
        from: "James Vitto",
        date: new Date("2022-04-09"),
        Date: "April 09 2022",
        picture:
          "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg",

        pending: true,
      },
      {
        id: 319,
        type: "post",
        kind: "friend",
        share: "none",
        user: 25,
        post: 1,
        from: "James Vitto",
        date: new Date("2022-04-09"),
        Date: "April 09 2022",
        picture:
          "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg",

        pending: true,
      },
    ],

    Friends: [10, 17, 18, 19],
    followers: [8, 17, 18, 19],
    following: [7, 17, 18, 19],
    Posts: [8, 7],
  },
  {
    id: 17,
    status: "public",
    name: "James Vitto",
    nickname: "James Vitto",
    location: "Okotoks, Alberta",
    description: "Software Developer",
    age: 41,
    scores: [3, 3, 3],
    header: "Living the geek life",
    about: "Lacrosse Enthusiasts, Rush Fan for life",

    Feed: [],
    profilePic:
      "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg",
    banner:
      "https://cdn.pixabay.com/photo/2013/07/20/15/11/lacrosse-165576_960_720.jpg",

    login: false,
    Notifications: 1,
    Notices: [],
    Requests: [],

    Friends: [16, 18, 19],
    followers: [16, 18, 19],
    following: [16, 18, 19],
    Posts: [8, 7],
  },
  {
    id: 18,
    status: "public",
    name: "Stacey Baker",
    nickname: "Stacey Ann",
    location: "Saskatoon, Saskatchewan",
    description: "Dental Hygienist",
    age: 24,
    scores: [3, 3, 3],
    header: "Travel-a-holic",
    about: "Been to 39 countries, plan to get to 100 before turning 30",

    Feed: [],
    profilePic:
      "https://cdn.pixabay.com/photo/2015/01/15/16/17/hands-600497_960_720.jpg",
    banner:
      "https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_960_720.jpg",

    login: false,
    Notifications: 1,
    Notices: [],
    Requests: [],

    Friends: [16, 17, 19],
    followers: [16, 17, 19],
    following: [16, 17, 19],
    Posts: [8, 7],
  },
  {
    id: 19,
    status: "public",
    name: "Andreas Kollman",
    nickname: "Anders Koll",
    location: "Nuremberg, Germany",
    description: "Lehrer",
    age: 24,
    scores: [2, 2, 2],
    header: "Lebe, liebe und sei frei",
    about: "#stop the spread",

    Feed: [],
    profilePic:
      "https://cdn.pixabay.com/photo/2020/02/29/04/45/german-shepherd-4889095_960_720.jpg",
    banner:
      "https://cdn.pixabay.com/photo/2016/05/27/19/10/football-accessory-1420473_960_720.jpg",

    login: false,
    Notifications: 1,
    Notices: [],
    Requests: [],

    Friends: [16, 17, 18],
    followers: [16, 17, 18],
    following: [16, 17, 18],
    Posts: [8, 7],
  },
];

var mock_posts = [
  {
    id: 1,
    status: "public",
    Poster: 4,
    PosterName: "Jamie",
    PosterPic:
      "https://images.pexels.com/photos/1693085/pexels-photo-1693085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",

    postPic:
      "https://images.pexels.com/photos/1842182/pexels-photo-1842182.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    text: "Teddy was just enjoying the sun",
    date: "March 1 2022 at 5:12pm",
    comments: [6, 5],
    views: 10,
    shares: 5,
    likers: [1, 2],
    datePosted: new Date("2022-03-01"),
    url: true,
  },
  {
    id: 2,
    status: "public",
    Poster: 7,
    PosterName: "Dr Silva",
    PosterPic:
      "https://cdn.pixabay.com/photo/2021/02/09/06/45/doctor-5997504_960_720.jpg",

    postPic:
      "https://cdn.pixabay.com/photo/2020/12/15/14/38/covid-19-5833844_960_720.png",
    text: "Booster shots now available across Canada, Book Yours at at Weston Health clinic at www.westclinic.ca",
    date: "Jan 10 2022 at 1:25am ",
    comments: [96, 95, 103, 104, 105, 106],
    views: 220,
    shares: 103,
    likers: [1, 2],
    datePosted: new Date("2022-01-10"),
    url: true,
  },
  {
    id: 3,
    status: "friends",
    Poster: 11,
    PosterName: "Nick Janovich",
    PosterPic:
      "https://cdn.pixabay.com/photo/2018/04/27/03/50/portrait-3353699_960_720.jpg",

    postPic:
      "https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_960_720.jpg",
    text: "Banff is offering free ski lessons from March 10 to the 16th, I am a newbie myself but would love it if anyone joined me ",
    date: "January 10 2022 at 8:45pm",
    comments: [97, 98],
    views: 2,
    shares: 1,
    likers: [4],
    datePosted: new Date("2022-01-10"),
    url: true,
  },
  {
    id: 4,
    status: "friends",
    Poster: 11,
    PosterName: "Nick Janovich",
    PosterPic:
      "https://cdn.pixabay.com/photo/2018/04/27/03/50/portrait-3353699_960_720.jpg",

    postPic:
      "https://cdn.pixabay.com/photo/2017/10/28/07/47/woman-2896389_960_720.jpg",
    text: "We already have 4 people attending, I will be driving so we can all car-pool, anyone care to join  ",
    date: "January 14 2022 at 8:45pm",
    comments: [99, 100, 101, 102],
    views: 30,
    shares: 25,
    likers: [],
    datePosted: new Date("2022-01-14"),
    url: true,
  },

  {
    id: 5,
    status: "followers",
    Poster: 5,
    PosterName: "Matt",
    PosterPic:
      "https://images.pexels.com/photos/1819483/pexels-photo-1819483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",

    postPic:
      "https://cdn.pixabay.com/photo/2016/11/19/14/30/aurora-borealis-1839582_960_720.jpg",
    text: "Enjoying some quite time at the cabin, amazing view of the northern lights",
    comments: [103, 104],
    date: "March 2 2022 at 2:15pm",
    views: 100,
    shares: 25,
    likers: [2, 5],
    datePosted: new Date("2022-03-02"),
    url: true,
  },
  {
    id: 6,
    status: "friends",
    Poster: 6,
    PosterName: "Mitch Wiz",
    PosterPic:
      "https://cdn.pixabay.com/photo/2019/11/10/11/13/couple-4615557_960_720.jpg",
    postPic:
      "https://cdn.pixabay.com/photo/2019/11/10/11/13/couple-4615557_960_720.jpg",
    text: "Happy Anniversary Babe",
    date: "Feb 22 2022 at 11:45pm",
    comments: [25, 24],
    views: 150,
    shares: 15,
    likers: [1, 2, 3, 4],
    datePosted: new Date("2022-02-22"),
    url: true,
  },
  {
    id: 7,
    status: "friends",
    Poster: 6,
    PosterName: "Mitch Wiz",
    PosterPic:
      "https://cdn.pixabay.com/photo/2019/11/10/11/13/couple-4615557_960_720.jpg",
    postPic:
      "https://cdn.pixabay.com/photo/2019/11/10/11/13/couple-4615557_960_720.jpg",
    text: "Hey guys, we are organizing a little party next weekend at the Western pub end for our anniversary, everyone is welcome to join but just let us know in advance, thanks",
    date: "Feb 2 2022 at 8:45pm",
    comments: [29],
    views: 2,
    shares: 1,
    likers: [4],
    datePosted: new Date("2022-02-22"),
    url: true,
  },
  {
    id: 8,
    status: "public",
    Poster: 13,
    PosterName: "Jessica Swanson",
    PosterPic:
      "https://cdn.pixabay.com/photo/2017/09/01/21/53/blue-2705642_960_720.jpg",
    postPic:
      "https://cdn.pixabay.com/photo/2022/03/02/13/42/peace-7043225_960_720.jpg",
    text: "Help Ukrainian refugees by donating to one of the following charities for as little as a dollar; UNICEF, UNESCO, WHO organization, Doctors without Borders, and Plan Canada, clink on the link for more info www.ukrainecrisis.org",
    date: "Feb 2 2022 at 8:45pm",
    comments: [21, 27, 28],
    views: 1322,
    shares: 51,
    likers: [1, 2, 3, 4, 5, 10, 11, 12, 13],
    datePosted: new Date("2022-03-17"),
    url: true,
  },
  {
    id: 9,
    status: "public",
    Poster: 14,
    PosterName: "Prairie Summer Fest",
    PosterPic:
      "https://cdn.pixabay.com/photo/2017/02/23/18/00/carnival-2092819_960_720.jpg",
    postPic:
      "https://cdn.pixabay.com/photo/2017/02/26/20/51/balloon-2101359_960_720.jpg",
    text: "Prairie Fest is back this summer! After two years of postponement we are glad to welcome everyone back. Bundle family tickets are available for this year's summer fest, see our family package bundles at prairesummerfest.com and get 20% off by using the promo-code 'summer 2022 ",
    date: "March 10 2022 at 1:45pm",
    comments: [14, 15, 16, 17, 18, 19],
    views: 1022,
    shares: 151,
    likers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    datePosted: new Date("2022-03-17"),
    url: true,
  },
  {
    id: 10,
    status: "public",
    Poster: 15,
    PosterName: "Saskatchewan Hockey Association",
    PosterPic:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Flag_of_Saskatchewan.svg/1200px-Flag_of_Saskatchewan.svg.png",
    postPic:
      "https://cdn.pixabay.com/photo/2017/06/21/07/59/pictogram-2426401_960_720.jpg",
    text: "Spring AAA Junior Hockey Tournament is here!, Get your kid signed and registered by March 18 2022 to guarantee a spot for the Saskatoon tournament",
    date: "March 14 2022 at 11:20am",
    comments: [],
    views: 189,
    shares: 151,
    likers: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    ],
    datePosted: new Date("2022-03-17"),
    url: true,
  },
  { id: 11,
    status: "public",
    Poster: 15,
    PosterName: "Uber eats",
    PosterPic:
      "https://9to5mac.com/wp-content/uploads/sites/6/2019/04/UE-FB-Post.png",
    postPic:
      "https://pics.paypal.com/00/c/gifts/us/uber_eats.jpg",
    text: "Enter SocialPanda to get 20% discount on your first order when you sign up today!",
    date: "March 14 2022 at 11:20am",
    comments: [],
    views: 1143,
    shares: 151,
    likers: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    ],
    datePosted: new Date("2022-01-17"),
    url: true,}
];

var mock_comments = [
  {
    PostId: 1,
    commentList: [
      {
        id: 1,
        author: 6,
        name: "Mitch Wiz",
        picture:
          "https://cdn.pixabay.com/photo/2019/11/10/11/13/couple-4615557_960_720.jpg",
        date: "Feb 1",

        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      },
      {
        id: 2,
        author: 5,
        name: "Jimmy",
        picture:
          "https://images.pexels.com/photos/1693085/pexels-photo-1693085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        date: "Feb 11",

        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      },
    ],
  },

  {
    PostId: 2,
    commentList: [
      {
        id: 95,
        author: 6,
        name: "Mitch Wiz",
        picture:
          "https://cdn.pixabay.com/photo/2019/11/10/11/13/couple-4615557_960_720.jpg",
        date: "Feb 1",

        text: "Awesome, I will book mines today",
      },
      {
        id: 96,
        author: 5,
        name: "Jimmy",
        picture:
          "https://images.pexels.com/photos/1693085/pexels-photo-1693085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        date: "Feb 11",

        text: "Which booster is being offered? my wife wants the Moderna booster",
      },

      {
        id: 103,
        author: 1,
        name: "Jenny",
        picture:
          "https://images.pexels.com/photos/1090387/pexels-photo-1090387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        date: "Jan 1",

        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      },
      {
        id: 104,
        author: 4,
        name: "James",
        picture:
          "https://images.pexels.com/photos/1693085/pexels-photo-1693085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        date: "Feb 11",

        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      },
      {
        id: 105,
        author: 4,
        name: "Matt",
        picture:
          "https://images.pexels.com/photos/1819483/pexels-photo-1819483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        date: "Feb 4",

        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      },
      {
        id: 106,
        author: 4,
        name: "Matt",
        picture:
          "https://images.pexels.com/photos/1819483/pexels-photo-1819483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        date: "Feb 4",

        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      },
    ],
  },
  {
    PostId: 3,
    commentList: [
      {
        id: 97,
        author: 4,
        name: "Matt",
        picture:
          "https://images.pexels.com/photos/1819483/pexels-photo-1819483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        date: "Feb 4",
        post: 3,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      },

      {
        id: 98,
        author: 4,
        name: "Amanda Busch",
        picture:
          "https://cdn.pixabay.com/photo/2021/07/18/14/59/family-6475821_960_720.jpg",
        date: "Feb 4 ",
        post: 3,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      },
      {
        id: 99,
        author: 4,
        name: "Amanda Busch",
        picture:
          "https://cdn.pixabay.com/photo/2021/07/18/14/59/family-6475821_960_720.jpg",
        date: "Feb 4 ",
        post: 4,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      },
    ],
  },
  {
    PostId: 4,
    commentList: [
      {
        id: 99,
        author: 4,
        name: "James",
        picture:
          "https://images.pexels.com/photos/1693085/pexels-photo-1693085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        date: "Feb 11",

        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      },
      {
        id: 100,
        author: 4,
        name: "Matt",
        picture:
          "https://images.pexels.com/photos/1819483/pexels-photo-1819483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        date: "Feb 4",
        post: 5,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      },
      {
        id: 101,
        author: 4,
        name: "Matt",
        picture:
          "https://images.pexels.com/photos/1819483/pexels-photo-1819483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        date: "Feb 4",
        post: 3,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      },
      {
        id: 102,
        author: 4,
        name: "Matt",
        picture:
          "https://images.pexels.com/photos/1819483/pexels-photo-1819483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        date: "Feb 4",
        post: 3,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      },
    ],
  },
  {
    PostId: 5,
    commentList: [
      {
        id: 103,
        author: 4,
        name: "Matt",
        picture:
          "https://images.pexels.com/photos/1819483/pexels-photo-1819483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        date: "Feb 4",
        post: 3,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      },
      {
        id: 104,
        author: 4,
        name: "Amanda Busch",
        picture:
          "https://cdn.pixabay.com/photo/2021/07/18/14/59/family-6475821_960_720.jpg",
        date: "Feb 4 ",
        post: 3,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      },
    ],
  },
  {
    PostId: 6,
    commentList: [
      {
        id: 24,
        author: 1,
        name: "Jenny",
        picture:
          "https://images.pexels.com/photos/1090387/pexels-photo-1090387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        date: "Feb 11",

        text: "Cute Couple!, I am so jealous of U 2! ; ",
      },
      {
        id: 25,
        author: 4,
        name: "Matt",
        picture:
          "https://images.pexels.com/photos/1819483/pexels-photo-1819483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        date: "Feb 4",
        post: 5,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      },
    ],
  },
  {
    PostId: 7,
    commentList: [
      {
        id: 29,
        author: 4,
        name: "Amanda Busch",
        picture:
          "https://cdn.pixabay.com/photo/2021/07/18/14/59/family-6475821_960_720.jpg",
        date: "Feb 4 ",
        post: 4,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      },
    ],
  },
  {
    PostId: 8,
    commentList: [
      {
        id: 21,
        author: 4,
        name: "Amanda Busch",
        picture:
          "https://cdn.pixabay.com/photo/2021/07/18/14/59/family-6475821_960_720.jpg",
        date: "Feb 4 ",
        post: 8,
        text: "Slava Ukraina",
      },
      {
        id: 27,
        author: 4,
        name: "Amanda Busch",
        picture:
          "https://cdn.pixabay.com/photo/2021/07/18/14/59/family-6475821_960_720.jpg",
        date: "Feb 5 ",
        post: 8,
        text: "Lets pray for peace",
      },
      {
        id: 28,
        author: 4,
        name: "Amanda Busch",
        picture:
          "https://cdn.pixabay.com/photo/2021/07/18/14/59/family-6475821_960_720.jpg",
        date: "Feb 4 ",
        post: 8,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      },
    ],
  },

  {
    PostId: 9,
    commentList: [
      {
        id: 14,
        author: 4,
        name: "James",
        picture:
          "https://images.pexels.com/photos/1693085/pexels-photo-1693085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        date: "Feb 11",

        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      },
      {
        id: 15,
        author: 4,
        name: "Matt",
        picture:
          "https://images.pexels.com/photos/1819483/pexels-photo-1819483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        date: "Feb 4",
        post: 5,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      },
      {
        id: 16,
        author: 4,
        name: "Matt",
        picture:
          "https://images.pexels.com/photos/1819483/pexels-photo-1819483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        date: "Feb 4",
        post: 3,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      },
      {
        id: 17,
        author: 4,
        name: "Matt",
        picture:
          "https://images.pexels.com/photos/1819483/pexels-photo-1819483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        date: "Feb 4",
        post: 3,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      },
      {
        id: 18,
        author: 4,
        name: "Amanda Busch",
        picture:
          "https://cdn.pixabay.com/photo/2021/07/18/14/59/family-6475821_960_720.jpg",
        date: "Feb 4 ",
        post: 3,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      },
      {
        id: 19,
        author: 4,
        name: "Amanda Busch",
        picture:
          "https://cdn.pixabay.com/photo/2021/07/18/14/59/family-6475821_960_720.jpg",
        date: "Feb 4 ",
        post: 4,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      },
    ],
  },
  {
    PostId: 10,
    commentList: [],
  },
];

var mock_messages = [{}, {}];

module.exports = { mock_profiles, mock_posts, mock_comments };
