import { List } from "semantic-ui-react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onSelectVideo }) => {
  const renderItem = videos.map((video) => (
    <VideoItem
      onSelectVideo={onSelectVideo}
      item={video}
      key={video.id.videoId}
    />
  ));

  return <List>{renderItem}</List>;
};

export default VideoList;
