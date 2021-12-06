import { List, Image } from "semantic-ui-react";
export default function VideoItem({ item, onSelectVideo }) {
  return (
    <List.Item
      onClick={() => onSelectVideo(item)}
      style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
    >
      <Image
        src={item.snippet.thumbnails.medium.url}
        size="small"
        alt={item.snippet.title}
      />
      <List.Content>
        <List.Header as="a">{item.snippet.title}</List.Header>
      </List.Content>
    </List.Item>
  );
}
