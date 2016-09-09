export const UserConstants = {
  EDIT_USER: "EDIT_USER",
  RECIEVE_USER: "RECIEVE_USER"
};


export const editUser = (user) => ({
  type: UserConstants.EDIT_USER,
  user
})

export const recieveUser = (user) => ({
  type: UserConstants.RECIEVE_USER,
  user
})
