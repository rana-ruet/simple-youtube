export default function VideoDetails({ video }) {
  if (!video) return '';

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe
          src={videoSrc}
          frameBorder="0"
          allowFullScreen
          title="video player"
          autoPlay
        ></iframe>
      </div>
      <div className="ui segment">
        <h3 className="ui header">{video.snippet.title}</h3>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
}
