const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className=" p-2 m-2 w-64 shadow-lg">
      <img
        src={thumbnails.medium.url}
        alt="thumbnails"
        className=" rounded-lg"
      />
      <ul>
        <li className=" font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
      </ul>
    </div>
  );
};
export default VideoCard;

export const AdVideoCard = ({ info }) => {
  return (
    <div className=" p-1 m-1 border border-red-900">
      <VideoCard info={info} />
    </div>
  );
};
