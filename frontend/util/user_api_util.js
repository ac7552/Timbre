export const edit = (user,success,error) => {
  $.ajax({
  		method: 'PATCH',
  		url: `/api/users/${user.id}`,
  		data: {user: user},
  		success,
  		error
  	});
};

export const fetchUser = (user,success) => {
  $.ajax({
  		method: 'GET',
  		url: `/api/users/${user.id}`,
  		success,
  		error: ()=> (
        console.log("Invalid User")
      )
  	});
};
