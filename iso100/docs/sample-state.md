```js
{
  currentUser: {
    id: 1,
    username: "app-academy"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    uploadPhoto: {errors: []}
  },
  photos: {
    1: {
      title: "Sample Photo",
      body: "is useful to plan",
      user_id: 1,
      album_id: 1
      tags: [
        1: {
          id: 1,
          name: "Coding"
        }
      ]
      comments: [
        1: {
          id: 1
          body: "Good Photo"
        }
      ]
    }
  },
  albums: {
    1: {
      title: "Redux",
      user_id: 1,
      description: "is cool",
      photos: []
    }
  }
  tagFilters: [1, 7, 14]
}
```
