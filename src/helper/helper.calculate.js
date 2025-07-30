import { useDispatch } from "react-redux"
import { addChat, addSelectedUser } from "../store/slices/recentChats.slice"
export const useFindUserById = () => {
  const dispatch = useDispatch();

  const findUserById = (userList, targetUser) => {
    const user = userList?.find((u) => u.chat_id === targetUser.chat_id);

    if (!user) {
      dispatch(addChat(targetUser));
      dispatch(addSelectedUser(targetUser));
    } else {
      dispatch(addSelectedUser(user));
    }

    return user || targetUser; // return whichever is selected
  };

  return findUserById;
};
