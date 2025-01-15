import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./UserCard";
import TinderCard from "react-tinder-card";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data?.data));
    } catch (err) {
      //TODO: handle error
    }
  };

  const handleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {}
  };

  function onSwipe(direction, userId) {
    if (direction == "right") {
      handleSendRequest("interested", userId);
    } else if (direction == "left") {
      handleSendRequest("ignored", userId);
    }
  }

  useEffect(() => {
    getFeed();
  }, []);
  if (!feed) return;

  if (feed.length <= 0)
    return <h1 className="flex justify-center my-10">No new users founds!</h1>;

  return (
    feed && (
      <div className="flex justify-center items-center h-70% select-none">
        <div className="relative w-[400px] h-[600px] overflow-hidden ">
          {feed.map((people, index) => (
            <TinderCard
              key={index}
              className="absolute"
              onSwipe={(direction) => {
                onSwipe(direction, people._id);
              }}
              preventSwipe={["up", "down"]}
              style={{
                zIndex: feed.length - index,
              }}
            >
              <UserCard user={people} />
            </TinderCard>
          ))}
        </div>
      </div>
    )
  );
};
export default Feed;
