import React from 'react';
import './VideoItem.css';


const VideoItem = (props) => {
    console.log(props.video);

    return (<div className= "ui celled list video-item" onClick={() => props.selectedVideo(props.video)}>
        <div className="item">
            <img className="ui image" src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.title}/>
            <div className="content">
                <div className="header">{props.video.snippet.title}</div>
                {props.video.snippet.description}
            </div>
        </div>
    </div>)
        };

        export default VideoItem;
