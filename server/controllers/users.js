import User from "../models/User.js";

/* GETTING USER */
export const getUser = async (request, response) => {
    try {
        const { id } = request.params;
        const user = await User.findById(id);
        response.status(200).json(user);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
};

/* GETTING USER FRIENDS */
export const getUserFriends = async (request, response) => {
    try {
        const { id } = request.params;
        const user = await User.findById(id);

        const friends = await Promise.all(
        user.friends.map((id) => User.findById(id))
        );
        const formattedFriends = friends.map(
        ({ _id, firstName, lastName, occupation, location, picturePath }) => {
            return { _id, firstName, lastName, occupation, location, picturePath };
        }
        );
        response.status(200).json(formattedFriends);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
};

/* UPDATE FRIEND */
export const addRemoveFriend = async (request, response) => {
    try {
      const { id, friendId } = request.params;
      const user = await User.findById(id);
      const friend = await User.findById(friendId);
  
      //if user is friend remove else add
      if (user.friends.includes(friendId)) {
        user.friends = user.friends.filter((id) => id !== friendId);
        friend.friends = friend.friends.filter((id) => id !== id);
      } else if (user.id != friend.id) {
        user.friends.push(friendId);
        friend.friends.push(id);
      }
  
      await user.save();
      await friend.save();
  
      const friends = await Promise.all(
        user.friends.map((id) => User.findById(id))
      );
      const formattedFriends = friends.map(
        ({ _id, firstName, lastName, occupation, location, picturePath }) => {
          return { _id, firstName, lastName, occupation, location, picturePath };
        }
      );
  
      response.status(200).json(formattedFriends);
    } catch (error) {
      response.status(404).json({ message: error.message });
    }
  };
  