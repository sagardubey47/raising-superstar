import React, { useEffect } from 'react'
import moment from 'moment';
import { CgClose } from 'react-icons/cg';
import "./style.css"

const Modal = ({handleModalClose}) => {
    // const [comments, setComments] = useState(null);
    // const [page, setPage] = useState(1);
    const hardCodedComment = [
        {
          "_id": "628f6e91ccdcba64ca8f830a",
          "type": "Post",
          "publishedAt": "2022-05-26T12:12:01.686Z",
          "rank": "2022-06-17T17:13:20.865Z",
          "post": {
            "_id": "628f6e91ccdcba64ca8f830a",
            "shortId": "kABrNv",
            "lang": "en",
            "updatedAt": "2022-06-18T23:12:19.601Z",
            "createdAt": "2022-05-26T12:12:01.832Z",
            "slug": "we-joined-this-program-because-my-child-he-don-t-speak-don-t-indulge-any-ty-",
            "content": "We joined this program because my child he don’t speak don’t indulge any type of activity .. he don’t interact with new and he hesitates whenever I went to a new place.. he is very comfortable in home but whenever go out he always wants in my arms not even step out or play with other kids . I want him to feel free to interact with new people be confident and speak freely. ",
            "group": {
              "_id": "617b18a80edc765e3d50c483",
              "slug": "baby-talks-0-2-years",
              "name": "Baby Talks (0-2 Years)",
              "picture": "https://app-us-east-1.t-cdn.net/5fd3917aa371343d8b46632f/groups/617b18a80edc765e3d50c483/617b18a80edc765e3d50c483_85818.png",
              "pinned": [],
              "topics": [],
              "privacy": "private",
              "type": "general",
              "summary": "",
              "id": "617b18a80edc765e3d50c483"
            },
            "publishedAt": "2022-05-26T12:12:01.686Z",
            "portal": "5fd3917aa371343d8b46632f",
            "user": {
              "_id": "628ec3a1e79f5985943570c8",
              "profile": {
                "phone": null,
                "counts": {
                  "receivedLikes": 7,
                  "replies": 0,
                  "receivedDownloads": 0,
                  "downloads": 0,
                  "fileUploads": 0,
                  "groups": 3,
                  "requests": 0,
                  "edits": 0,
                  "questionsFollowers": 0,
                  "responses": 0,
                  "posts": 4,
                  "questions": 0,
                  "comments": 0,
                  "answersWords": 0,
                  "answersVotes": 0,
                  "pollVotes": 0,
                  "answers": 0,
                  "views": 0,
                  "followings": 0,
                  "followers": 0
                },
                "score": 320,
                "verified": false,
                "badge": {
                  "type": "silver"
                },
                "description": "",
                "title": "",
                "banner": "",
                "picture": "https://community.theprodigybaby.com/api/v1/users/628ec3a1e79f5985943570c8/avatar",
                "website": "",
                "location": "",
                "gender": "",
                "name": "Nishi ",
                "username": "nishi5",
                "bio": ""
              },
              "externalId": "5b1c6272-2b9a-4fa0-b8c1-f61e944e7618",
              "id": "628ec3a1e79f5985943570c8"
            },
            "__v": 4,
            "lastActionAt": "2022-06-17T17:13:20.865Z",
            "synced": {
              "searchFailed": true,
              "search": true
            },
            "referrers": [],
            "downvotes": [],
            "upvotes": [
              {
                "_id": "6033aed604490aa2bf02ba3b",
                "profile": {
                  "picture": "https://community.theprodigybaby.com/api/v1/users/6033aed604490aa2bf02ba3b/avatar",
                  "name": "Raising Superstars",
                  "username": "rs_agent1"
                },
                "id": "6033aed604490aa2bf02ba3b"
              },
              {
                "_id": "629482797099018314fc6984",
                "profile": {
                  "picture": "https://community.theprodigybaby.com/api/v1/users/629482797099018314fc6984/avatar",
                  "name": "shubham gupta",
                  "username": "shubham_gupta5"
                },
                "id": "629482797099018314fc6984"
              },
              {
                "_id": "62acb5abd97d3c0f5af6ea0c",
                "profile": {
                  "picture": "https://community.theprodigybaby.com/api/v1/users/62acb5abd97d3c0f5af6ea0c/avatar",
                  "name": "basha eliyas eliyas",
                  "username": "basha_eliyas_eliyas"
                },
                "id": "62acb5abd97d3c0f5af6ea0c"
              }
            ],
            "comments": [
              {
                "_id": "628f87ee6009141a13bb953a",
                "shortId": "6ZZqLl",
                "lang": "en",
                "updatedAt": "2022-05-26T14:00:14.323Z",
                "createdAt": "2022-05-26T14:00:14.323Z",
                "body": "Hi, thank you for sharing. We hope that you'll like what we have to offer. :)",
                "group": "617b18a80edc765e3d50c483",
                "publishedAt": "2022-05-26T14:00:14.321Z",
                "portal": "5fd3917aa371343d8b46632f",
                "resourceType": "posts",
                "resourceId": "628f6e91ccdcba64ca8f830a",
                "user": {
                  "_id": "6033aed604490aa2bf02ba3b",
                  "profile": {
                    "phone": null,
                    "counts": {
                      "receivedLikes": 648,
                      "replies": 200,
                      "receivedDownloads": 0,
                      "downloads": 4,
                      "fileUploads": 0,
                      "groups": 17,
                      "requests": 0,
                      "edits": 7,
                      "questionsFollowers": 0,
                      "responses": 0,
                      "posts": 38,
                      "questions": 0,
                      "comments": 8653,
                      "answersWords": 695,
                      "answersVotes": 0,
                      "pollVotes": -2,
                      "answers": 10,
                      "views": 0,
                      "followings": 2,
                      "followers": 59
                    },
                    "score": 148215,
                    "verified": true,
                    "badge": {
                      "text": "",
                      "type": "gold"
                    },
                    "description": "",
                    "title": "Community Moderator",
                    "banner": "",
                    "picture": "https://community.theprodigybaby.com/api/v1/users/6033aed604490aa2bf02ba3b/avatar",
                    "website": "",
                    "location": "",
                    "gender": "",
                    "name": "Raising Superstars",
                    "username": "rs_agent1",
                    "bio": ""
                  },
                  "externalId": "Xnv3iEIHrHbCB02O1L2d",
                  "id": "6033aed604490aa2bf02ba3b"
                },
                "__v": 0,
                "synced": {
                  "searchFailed": false,
                  "search": true
                },
                "status": "published",
                "videos": [],
                "files": [],
                "images": [],
                "bookmarks": [],
                "downvotes": [],
                "upvotes": [],
                "replies": [],
                "score": 0,
                "counts": {
                  "bookmarks": 0,
                  "replies": 0,
                  "downvotes": 0,
                  "upvotes": 0
                },
                "anonymous": false,
                "summary": "Hi, thank you for sharing. We hope that you'll like what we have to offer. :)",
                "id": "628f87ee6009141a13bb953a",
                "upvoted": false,
                "downvoted": false,
                "bookmarked": false
              }
            ],
            "rewards": [],
            "videos": [],
            "files": [],
            "images": [],
            "attachments": [],
            "links": [],
            "media": [],
            "topics": [
              {
                "_id": "6228af9a0546ef6fbd5f94ef",
                "slug": "public",
                "name": "Public",
                "id": "6228af9a0546ef6fbd5f94ef"
              }
            ],
            "posters": [],
            "bookmarks": [],
            "followers": [
              "6033aed604490aa2bf02ba3b"
            ],
            "score": 0,
            "counts": {
              "bookmarks": 0,
              "downvotes": 0,
              "links": 0,
              "totalUpvotes": 0,
              "upvotes": 3,
              "followers": 1,
              "edits": 0,
              "responses": 0,
              "comments": 1,
              "views": 18
            },
            "status": "published",
            "privacy": "private",
            "lastAction": {
              "verb": "like",
              "user": {
                "_id": "62acb5abd97d3c0f5af6ea0c",
                "profile": {
                  "phone": null,
                  "counts": {
                    "receivedLikes": 0,
                    "replies": 0,
                    "receivedDownloads": 0,
                    "downloads": 0,
                    "fileUploads": 0,
                    "groups": 2,
                    "requests": 0,
                    "edits": 0,
                    "questionsFollowers": 0,
                    "responses": 0,
                    "posts": 0,
                    "questions": 0,
                    "comments": 0,
                    "answersWords": 0,
                    "answersVotes": 0,
                    "pollVotes": 0,
                    "answers": 0,
                    "views": 0,
                    "followings": 0,
                    "followers": 0
                  },
                  "score": 100,
                  "verified": false,
                  "badge": {
                    "type": "silver"
                  },
                  "description": "",
                  "title": "",
                  "banner": "",
                  "picture": "https://community.theprodigybaby.com/api/v1/users/62acb5abd97d3c0f5af6ea0c/avatar",
                  "website": "",
                  "location": "",
                  "gender": "",
                  "name": "basha eliyas eliyas",
                  "username": "basha_eliyas_eliyas",
                  "bio": ""
                },
                "externalId": "fc4fd74d-14bd-48a1-bfeb-65c0eb80f62e",
                "id": "62acb5abd97d3c0f5af6ea0c"
              }
            },
            "kind": "simple",
            "type": "post",
            "anonymous": false,
            "verified": false,
            "responses": [],
            "summary": "We joined this program because my child he don’t speak don’t indulge any type of activity .. he don’t interact with new and he hesitates whenever I went to a new place.. he is very comfortab...",
            "id": "628f6e91ccdcba64ca8f830a",
            "upvoted": false,
            "downvoted": false,
            "followed": false,
            "bookmarked": false,
            "url": "/post/628f6e91ccdcba64ca8f830a",
            "api_url": "/posts/628f6e91ccdcba64ca8f830a"
          }
        },
        {
            "_id": "62ac4e774c95933ea134780e",
            "type": "Post",
            "publishedAt": "2022-06-17T09:50:47.102Z",
            "rank": "2022-06-17T12:28:27.622Z",
            "post": {
              "_id": "62ac4e774c95933ea134780e",
              "shortId": "wpoBBN",
              "lang": "en",
              "updatedAt": "2022-06-19T04:08:21.711Z",
              "createdAt": "2022-06-17T09:50:47.119Z",
              "slug": "why-is-that-today-no-video-have-been-uploaded",
              "content": "Why is that today no video have been uploaded",
              "group": {
                "_id": "617b18a80edc765e3d50c483",
                "slug": "baby-talks-0-2-years",
                "name": "Baby Talks (0-2 Years)",
                "picture": "https://app-us-east-1.t-cdn.net/5fd3917aa371343d8b46632f/groups/617b18a80edc765e3d50c483/617b18a80edc765e3d50c483_85818.png",
                "pinned": [],
                "topics": [],
                "privacy": "private",
                "type": "general",
                "summary": "",
                "id": "617b18a80edc765e3d50c483"
              },
              "publishedAt": "2022-06-17T09:50:47.102Z",
              "portal": "5fd3917aa371343d8b46632f",
              "user": {
                "_id": "62ab51d1359772a2bb81bc70",
                "profile": {
                  "phone": null,
                  "counts": {
                    "receivedLikes": 0,
                    "replies": 0,
                    "receivedDownloads": 0,
                    "downloads": 0,
                    "fileUploads": 0,
                    "groups": 3,
                    "requests": 0,
                    "edits": 0,
                    "questionsFollowers": 0,
                    "responses": 0,
                    "posts": 2,
                    "questions": 0,
                    "comments": 0,
                    "answersWords": 0,
                    "answersVotes": 0,
                    "pollVotes": 0,
                    "answers": 0,
                    "views": 0,
                    "followings": 0,
                    "followers": 0
                  },
                  "score": 140,
                  "verified": false,
                  "badge": {
                    "type": "silver"
                  },
                  "description": "",
                  "title": "",
                  "banner": "",
                  "picture": "https://community.theprodigybaby.com/api/v1/users/62ab51d1359772a2bb81bc70/avatar",
                  "website": "",
                  "location": "",
                  "gender": "",
                  "name": "giridhar s",
                  "username": "giridhar_s",
                  "bio": ""
                },
                "externalId": "1fbf7340-4882-4801-9012-912d7643a8e0",
                "id": "62ab51d1359772a2bb81bc70"
              },
              "__v": 1,
              "lastActionAt": "2022-06-17T12:28:27.622Z",
              "synced": {
                "searchFailed": false,
                "search": true
              },
              "referrers": [],
              "downvotes": [],
              "upvotes": [],
              "comments": [
                {
                  "_id": "62ac736bd7cf636369f238a5",
                  "shortId": "AVKL6J",
                  "lang": "en",
                  "updatedAt": "2022-06-17T12:28:27.153Z",
                  "createdAt": "2022-06-17T12:28:27.153Z",
                  "body": "Hey, for any technical queries, please write to us at support@raisingsuperstars.in ",
                  "group": "617b18a80edc765e3d50c483",
                  "publishedAt": "2022-06-17T12:28:27.152Z",
                  "portal": "5fd3917aa371343d8b46632f",
                  "resourceType": "posts",
                  "resourceId": "62ac4e774c95933ea134780e",
                  "user": {
                    "_id": "6033aed604490aa2bf02ba3b",
                    "profile": {
                      "phone": null,
                      "counts": {
                        "receivedLikes": 648,
                        "replies": 200,
                        "receivedDownloads": 0,
                        "downloads": 4,
                        "fileUploads": 0,
                        "groups": 17,
                        "requests": 0,
                        "edits": 7,
                        "questionsFollowers": 0,
                        "responses": 0,
                        "posts": 38,
                        "questions": 0,
                        "comments": 8653,
                        "answersWords": 695,
                        "answersVotes": 0,
                        "pollVotes": -2,
                        "answers": 10,
                        "views": 0,
                        "followings": 2,
                        "followers": 59
                      },
                      "score": 148215,
                      "verified": true,
                      "badge": {
                        "text": "",
                        "type": "gold"
                      },
                      "description": "",
                      "title": "Community Moderator",
                      "banner": "",
                      "picture": "https://community.theprodigybaby.com/api/v1/users/6033aed604490aa2bf02ba3b/avatar",
                      "website": "",
                      "location": "",
                      "gender": "",
                      "name": "Raising Superstars",
                      "username": "rs_agent1",
                      "bio": ""
                    },
                    "externalId": "Xnv3iEIHrHbCB02O1L2d",
                    "id": "6033aed604490aa2bf02ba3b"
                  },
                  "__v": 0,
                  "synced": {
                    "searchFailed": false,
                    "search": true
                  },
                  "status": "published",
                  "videos": [],
                  "files": [],
                  "images": [],
                  "bookmarks": [],
                  "downvotes": [],
                  "upvotes": [],
                  "replies": [],
                  "score": 0,
                  "counts": {
                    "bookmarks": 0,
                    "replies": 0,
                    "downvotes": 0,
                    "upvotes": 0
                  },
                  "anonymous": false,
                  "summary": "Hey, for any technical queries, please write to us at support@raisingsuperstars.in",
                  "id": "62ac736bd7cf636369f238a5",
                  "upvoted": false,
                  "downvoted": false,
                  "bookmarked": false
                }
              ],
              "rewards": [],
              "videos": [],
              "files": [],
              "images": [],
              "attachments": [],
              "links": [],
              "media": [],
              "topics": [
                {
                  "_id": "6228af9a0546ef6fbd5f94ef",
                  "slug": "public",
                  "name": "Public",
                  "id": "6228af9a0546ef6fbd5f94ef"
                }
              ],
              "posters": [],
              "bookmarks": [],
              "followers": [
                "6033aed604490aa2bf02ba3b"
              ],
              "score": 0,
              "counts": {
                "bookmarks": 0,
                "downvotes": 0,
                "links": 0,
                "totalUpvotes": 0,
                "upvotes": 0,
                "followers": 1,
                "edits": 0,
                "responses": 0,
                "comments": 1,
                "views": 10
              },
              "status": "published",
              "privacy": "private",
              "lastAction": {
                "verb": "comment",
                "user": {
                  "_id": "6033aed604490aa2bf02ba3b",
                  "profile": {
                    "phone": null,
                    "counts": {
                      "receivedLikes": 648,
                      "replies": 200,
                      "receivedDownloads": 0,
                      "downloads": 4,
                      "fileUploads": 0,
                      "groups": 17,
                      "requests": 0,
                      "edits": 7,
                      "questionsFollowers": 0,
                      "responses": 0,
                      "posts": 38,
                      "questions": 0,
                      "comments": 8653,
                      "answersWords": 695,
                      "answersVotes": 0,
                      "pollVotes": -2,
                      "answers": 10,
                      "views": 0,
                      "followings": 2,
                      "followers": 59
                    },
                    "score": 148215,
                    "verified": true,
                    "badge": {
                      "text": "",
                      "type": "gold"
                    },
                    "description": "",
                    "title": "Community Moderator",
                    "banner": "",
                    "picture": "https://community.theprodigybaby.com/api/v1/users/6033aed604490aa2bf02ba3b/avatar",
                    "website": "",
                    "location": "",
                    "gender": "",
                    "name": "Raising Superstars",
                    "username": "rs_agent1",
                    "bio": ""
                  },
                  "externalId": "Xnv3iEIHrHbCB02O1L2d",
                  "id": "6033aed604490aa2bf02ba3b"
                }
              },
              "kind": "simple",
              "type": "post",
              "anonymous": false,
              "verified": false,
              "responses": [],
              "summary": "Why is that today no video have been uploaded",
              "id": "62ac4e774c95933ea134780e",
              "upvoted": false,
              "downvoted": false,
              "followed": false,
              "bookmarked": false,
              "url": "/post/62ac4e774c95933ea134780e",
              "api_url": "/posts/62ac4e774c95933ea134780e"
            }
        },
        {
            "_id": "62ab67a89256f61fc3580ff3",
            "type": "Post",
            "publishedAt": "2022-06-16T17:26:00.392Z",
            "rank": "2022-06-17T12:26:52.572Z",
            "post": {
              "_id": "62ab67a89256f61fc3580ff3",
              "shortId": "Z8qRqZ",
              "lang": "en",
              "updatedAt": "2022-06-19T13:00:11.988Z",
              "createdAt": "2022-06-16T17:26:00.409Z",
              "slug": "hi-i-have-joined-today-how-this-program-works",
              "content": "Hi i have joined today... How this program works... ",
              "group": {
                "_id": "617b18a80edc765e3d50c483",
                "slug": "baby-talks-0-2-years",
                "name": "Baby Talks (0-2 Years)",
                "picture": "https://app-us-east-1.t-cdn.net/5fd3917aa371343d8b46632f/groups/617b18a80edc765e3d50c483/617b18a80edc765e3d50c483_85818.png",
                "pinned": [],
                "topics": [],
                "privacy": "private",
                "type": "general",
                "summary": "",
                "id": "617b18a80edc765e3d50c483"
              },
              "publishedAt": "2022-06-16T17:26:00.392Z",
              "portal": "5fd3917aa371343d8b46632f",
              "user": {
                "_id": "62ab51d1359772a2bb81bc70",
                "profile": {
                  "phone": null,
                  "counts": {
                    "receivedLikes": 0,
                    "replies": 0,
                    "receivedDownloads": 0,
                    "downloads": 0,
                    "fileUploads": 0,
                    "groups": 3,
                    "requests": 0,
                    "edits": 0,
                    "questionsFollowers": 0,
                    "responses": 0,
                    "posts": 2,
                    "questions": 0,
                    "comments": 0,
                    "answersWords": 0,
                    "answersVotes": 0,
                    "pollVotes": 0,
                    "answers": 0,
                    "views": 0,
                    "followings": 0,
                    "followers": 0
                  },
                  "score": 140,
                  "verified": false,
                  "badge": {
                    "type": "silver"
                  },
                  "description": "",
                  "title": "",
                  "banner": "",
                  "picture": "https://community.theprodigybaby.com/api/v1/users/62ab51d1359772a2bb81bc70/avatar",
                  "website": "",
                  "location": "",
                  "gender": "",
                  "name": "giridhar s",
                  "username": "giridhar_s",
                  "bio": ""
                },
                "externalId": "1fbf7340-4882-4801-9012-912d7643a8e0",
                "id": "62ab51d1359772a2bb81bc70"
              },
              "__v": 3,
              "lastActionAt": "2022-06-17T12:26:52.572Z",
              "synced": {
                "searchFailed": false,
                "search": true
              },
              "referrers": [],
              "downvotes": [],
              "upvotes": [],
              "comments": [
                {
                  "_id": "62ac730c5a100589e66be36d",
                  "shortId": "lNmdGN",
                  "lang": "en",
                  "updatedAt": "2022-06-17T12:26:52.545Z",
                  "createdAt": "2022-06-17T12:26:52.545Z",
                  "body": "Hey. thank you for choosing us. For detail regarding the program schedule kindly reach us at support@raisingsuperstars.in",
                  "group": "617b18a80edc765e3d50c483",
                  "publishedAt": "2022-06-17T12:26:52.544Z",
                  "portal": "5fd3917aa371343d8b46632f",
                  "resourceType": "posts",
                  "resourceId": "62ab67a89256f61fc3580ff3",
                  "user": {
                    "_id": "6033aed604490aa2bf02ba3b",
                    "profile": {
                      "phone": null,
                      "counts": {
                        "receivedLikes": 648,
                        "replies": 200,
                        "receivedDownloads": 0,
                        "downloads": 4,
                        "fileUploads": 0,
                        "groups": 17,
                        "requests": 0,
                        "edits": 7,
                        "questionsFollowers": 0,
                        "responses": 0,
                        "posts": 38,
                        "questions": 0,
                        "comments": 8653,
                        "answersWords": 695,
                        "answersVotes": 0,
                        "pollVotes": -2,
                        "answers": 10,
                        "views": 0,
                        "followings": 2,
                        "followers": 59
                      },
                      "score": 148215,
                      "verified": true,
                      "badge": {
                        "text": "",
                        "type": "gold"
                      },
                      "description": "",
                      "title": "Community Moderator",
                      "banner": "",
                      "picture": "https://community.theprodigybaby.com/api/v1/users/6033aed604490aa2bf02ba3b/avatar",
                      "website": "",
                      "location": "",
                      "gender": "",
                      "name": "Raising Superstars",
                      "username": "rs_agent1",
                      "bio": ""
                    },
                    "externalId": "Xnv3iEIHrHbCB02O1L2d",
                    "id": "6033aed604490aa2bf02ba3b"
                  },
                  "__v": 0,
                  "synced": {
                    "searchFailed": false,
                    "search": true
                  },
                  "status": "published",
                  "videos": [],
                  "files": [],
                  "images": [],
                  "bookmarks": [],
                  "downvotes": [],
                  "upvotes": [],
                  "replies": [],
                  "score": 0,
                  "counts": {
                    "bookmarks": 0,
                    "replies": 0,
                    "downvotes": 0,
                    "upvotes": 0
                  },
                  "anonymous": false,
                  "summary": "Hey. thank you for choosing us. For detail regarding the program schedule kindly reach us at support@raisingsuperstars.in",
                  "id": "62ac730c5a100589e66be36d",
                  "upvoted": false,
                  "downvoted": false,
                  "bookmarked": false
                }
              ],
              "rewards": [],
              "videos": [],
              "files": [],
              "images": [],
              "attachments": [],
              "links": [],
              "media": [],
              "topics": [],
              "posters": [],
              "bookmarks": [],
              "followers": [
                "6033aed604490aa2bf02ba3b"
              ],
              "score": 0,
              "counts": {
                "bookmarks": 0,
                "downvotes": 0,
                "links": 0,
                "totalUpvotes": 0,
                "upvotes": 0,
                "followers": 1,
                "edits": 0,
                "responses": 0,
                "comments": 1,
                "views": 15
              },
              "status": "published",
              "privacy": "private",
              "lastAction": {
                "verb": "comment",
                "user": {
                  "_id": "6033aed604490aa2bf02ba3b",
                  "profile": {
                    "phone": null,
                    "counts": {
                      "receivedLikes": 648,
                      "replies": 200,
                      "receivedDownloads": 0,
                      "downloads": 4,
                      "fileUploads": 0,
                      "groups": 17,
                      "requests": 0,
                      "edits": 7,
                      "questionsFollowers": 0,
                      "responses": 0,
                      "posts": 38,
                      "questions": 0,
                      "comments": 8653,
                      "answersWords": 695,
                      "answersVotes": 0,
                      "pollVotes": -2,
                      "answers": 10,
                      "views": 0,
                      "followings": 2,
                      "followers": 59
                    },
                    "score": 148215,
                    "verified": true,
                    "badge": {
                      "text": "",
                      "type": "gold"
                    },
                    "description": "",
                    "title": "Community Moderator",
                    "banner": "",
                    "picture": "https://community.theprodigybaby.com/api/v1/users/6033aed604490aa2bf02ba3b/avatar",
                    "website": "",
                    "location": "",
                    "gender": "",
                    "name": "Raising Superstars",
                    "username": "rs_agent1",
                    "bio": ""
                  },
                  "externalId": "Xnv3iEIHrHbCB02O1L2d",
                  "id": "6033aed604490aa2bf02ba3b"
                }
              },
              "kind": "simple",
              "type": "post",
              "anonymous": false,
              "verified": false,
              "responses": [],
              "summary": "Hi i have joined today... How this program works...",
              "id": "62ab67a89256f61fc3580ff3",
              "upvoted": false,
              "downvoted": false,
              "followed": false,
              "bookmarked": false,
              "url": "/post/62ab67a89256f61fc3580ff3",
              "api_url": "/posts/62ab67a89256f61fc3580ff3"
            }
        }
      ]

    const fetchData = () => {
        let url = `/users/feed?limit=1&page=${1}`;

        let result = fetch(url, {
            headers: {
              Authentication: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVkYXlAaHlkLmh5ZCIsIm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTUxNjIzOTAyMn0.jVAWWrvQ6gQOQbmonmL8Fbl_l0tfwksW6L20wlUcMhY'
            }
          }).then((response) => response.json())
          .then((json) => {
            console.log(json);
            return json
            // setComments(json);
          }).catch((err) => {
             console.log(err)
          });

          return result
    }

    useEffect(() => {
       fetchData()
    }, []);

  return (
    <div className='modal'>
        <div className='close-btn-wrapper'>
            <div className='close-btn' onClick={handleModalClose}>
            <CgClose size={28}/>
            </div>
        </div>
       <div className='comment-wrapper'>
       {
            hardCodedComment.map((comment) => {
                return <div key={comment.id} className>
                            <div className='comment'>
                                <img src={`${comment.post.user.profile.picture}`} alt='avatar' className='avatar'/>
                                <h4>{comment.post.user.profile.name}</h4>
                                <p className='timestamp'>{moment.utc(comment.post.publishedAt).format("D MMM, YYYY h:mm A")}</p>
                                <p className='heading'>
                                    {comment.post.content}
                                </p>
                            </div>
                        </div>
            })
        }
       </div>
    </div>
  )
}

export default Modal