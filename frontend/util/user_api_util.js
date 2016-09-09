export const edit = (user,success,error) => {
  $.ajax({
  		method: 'PATCH',
  		url: `/api/users/${user.id}`,
  		data: {user: user},
  		success,
  		error
  	});
};
