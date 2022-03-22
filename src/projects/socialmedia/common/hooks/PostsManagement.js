import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../../../../Context/Context";
import { general } from "../function/GeneralFunctions";

export const PostsManagement = () => {
  const { days, months } = general();
  const user = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const [trendingPosts, setTrendingPosts] = useState([]);
  const [friendsPosts, setFriendsPosts] = useState([]);
  var postImage = "http://localhost:8080/images/";
  // var productionImage ='http://deeracode.com/images/'

  //GetsAllposts
  const GetAllPosts = () => {
    var allPosts = [
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
        comments: [3],
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
        text: "Booster shots now available across Canada",
        date: "Jan 10 2022 at 1:25am ",
        comments: [],
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
          "https://cdn.pixabay.com/photo/2016/03/26/22/13/man-1281562_1280.jpg",

        postPic:
          "https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_960_720.jpg",
        text: "Banff is offering free ski lessons from March 10 to the 16th, I am a newbie myself but would love it if anyone joined me ",
        date: "January 10 2022 at 8:45pm",
        comments: [],
        views: 2,
        shares: 1,
        likers: [],
        datePosted: new Date("2022-01-10"),
        url: true,
      },
      {
        id: 4,
        status: "friends",
        Poster: 11,
        PosterName: "Nick Janovich",
        PosterPic:
          "https://cdn.pixabay.com/photo/2016/03/26/22/13/man-1281562_1280.jpg",

        postPic:
          "https://cdn.pixabay.com/photo/2017/10/28/07/47/woman-2896389_960_720.jpg",
        text: "We already have 4 people attending, I will be driving so we can all car-pool, anyone care to join  ",
        date: "January 14 2022 at 8:45pm",
        comments: [],
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
        comments: [1, 5],
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
        comments: [2, 4],
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
        comments: [],
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
        comments: [],
        views: 322,
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
        comments: [],
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
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21,
        ],
        datePosted: new Date("2022-03-17"),
        url: true,
      },
    ];

    setPosts(allPosts);

    return allPosts;
  };
  // GetsPersonalPosts
  const GetFriendsPosts = () => {
    var PostSet = GetAllPosts();
    setFriendsPosts(PostSet.filter((post) => post.status === "friends"));
  };
  // Get Trending Posts
  const getTrendingPosts = () => {
    var allPosts = GetAllPosts();

    setTrendingPosts(
      allPosts.sort(function (a, b) {
        return b.views - a.views;
      })
    );
  };
  //Create Posts
  const CreatePosts = async (PostInfo) => {
    console.log("new post was created", PostInfo);
    var PostID = Math.floor(Math.random() * 1000 + 1);
    var CurrentDate = new Date();
    var day = JSON.stringify(days[CurrentDate.getDay()]);
    var month = JSON.stringify(months[CurrentDate.getMonth()]);
    var Year = JSON.stringify(CurrentDate.getUTCFullYear());
    var time = CurrentDate.toLocaleTimeString();
    console.log(time);
    const newDate =
      day.substring(1, 4) +
      " " +
      month.substring(1, 4) +
      " " +
      Year.substring(2, 4) +
      " " +
      "at" +
      " " +
      time.substring(3, 10);
    var date = new Date();
    const newPost = {
      id: PostID,
      status: "public",
      Poster: user.id,
      PosterName: user.nickname,
      PosterPic: user.profilePic,
      postPic: postImage.concat(PostInfo.PstPicture.name),
      text: PostInfo.textPstText,
      date: newDate,
      comments: [],
      views: 1,
      shares: 0,
      likers: [user.id],
      datePosted: date,
    };

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const configuration = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const data = new FormData();

    data.append("file", PostInfo.PstPicture.name);
    const body = newPost;

    try {
      const res = await axios.post(
        "http://localhost:8080/posts/upload",
        data,
        config
      );
      const response = await axios.post(
        "http://localhost:8080/posts/create",
        body,
        configuration
      );
      var addPosts = posts.push(newPost);
      setPosts(addPosts);
      console.log("post sent, filename:", PostInfo.PstPicture.name);
    } catch (error) {
      console.log(error);
      const res = await axios.post(
        "http://deercoded.herokuapp.com/upload",
        data,
        config
      );
      const response = await axios.post(
        "http://deercoded.herokuapp.com/create",
        body,
        configuration
      );

      setPosts(res.data);
      console.log("new post was successful", response);
    }
  };
  // Update Post Likes
  const UpdatePostLikes = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, likers: [...post.likers, user.id] } : post
      )
    );
    GetFriendsPosts();
  };

  useEffect(() => {
    GetAllPosts();
    GetFriendsPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    posts,
    GetAllPosts,
    GetFriendsPosts,
    CreatePosts,
    trendingPosts,
    getTrendingPosts,
    friendsPosts,
    setFriendsPosts,
    UpdatePostLikes,
  };
};
