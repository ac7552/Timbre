```json
{
  currentUser: {
    id: 1,
    username: "acampbe2",
    email: "aaron.campbell@gmail.com"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    uploadSong: {errors: ["title can't be blank"]}
    search:{errors: ["Please enter a track title"]}
  },
  Tracks: {
      id: 1,
      title: "oui",
      author_id: "Jeremih",
      user_id: 1,    
      comments:[
        id: 1,
        user_id: 1,
        song_id: 1,
        body: "Best Song Ever!"
      ]}
      ,
  Playlist: {
    1: {
    id: 1,
    title: "Best Playlist Ever",
    user_id: 1,    
    tracks: [
    {
      id: 2,
      title: "Frank Ocean",
      author_id: "Nike",
      user_id: 1,    
    },
    {
      id: 3,
      title: "Chances",
      author_id: "Blood Orange",
      user_id: 1,    
    }]
  }
}


}
```
