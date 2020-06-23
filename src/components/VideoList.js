import React from 'react';
import VideoItem from "./VideoItem";



const VideoList = (props) => {

    const vdoItem = props.videos.map(
        video => <VideoItem key={video.id.videoId} video={video} selectedVideo={props.selectedVideo} />
    );

    return (<div>{vdoItem} </div>)
};

export default VideoList;
