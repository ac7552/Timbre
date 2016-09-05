# Schema Information

#### Users
| column name        | 	data type	       |details   |
| ------------- |:-------------:| -----:|
| id      | integer |   primary_key , not null|
| username      | string      |not null, unique |
| email | string      | not null, unique|
| password_digest | string     |    not null, unique|
| session_token | string     |    not null, unique|
<!--
### Follow
| column name        | 	data type	       |details   |
| ------------- |:-------------:| -----:|
| id      | integer |  primary key, not null |
| follower_id      | integer      |   not null |
| followed_id      | integer      |   not null | -->

<!--

#### Likes
| column name        | 	data type	       |details   |
| ------------- |:-------------:| -----:|
| id      | integer | primary key, not null |
| user_id      | integer |  not null |
| song_id      | integer      |   not null | -->

#### Playlist
| column name        | 	data type	       |details   |
| ------------- |:-------------:| -----:|
| id      | integer | primary key, not null |
| user_id      | integer |  not null |
| title      | string      |   not null |

#### Track
| column name        | 	data type	       |details   |
| ------------- |:-------------:| -----:|
| id      | integer | primary key, not null |
| user_id      | integer |  not null |
| title      | string      |   not null |
| pic_url      | string      |   not null |
| track_url      | string      |   not null |



#### Comment
| column name        | 	data type	       |details   |
| ------------- |:-------------:| -----:|
| id      | integer | primary key, not null |
| user_id      | integer |  not null |
| body      | string      |   not null |
| track_id      | string      |   not null |


#### PlaylistTrack

| column name        | 	data type	       |details   |
| ------------- |:-------------:| -----:|
| id      | integer | primary key, not null |
| playlist_id     | integer |  not null |
| track_id      | integer      |   not null |
