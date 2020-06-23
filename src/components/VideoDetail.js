import React from 'react';

const VideoDetail = (props) => {

    if (props.video){

        return (<div className='ui raised segments'>

            {/*<div className='ui segment'>*/}
                <iframe  width="550" height="315" src={`https://www.youtube.com/embed/${props.video.id.videoId}`} title={props.video.snippet.title} allowFullScreen></iframe>

            {/*</div>*/}


            <div className='ui segment'>
                <div className="header">{props.video.snippet.title}</div>

                <div className='description'>
                    {props.video.snippet.description}
                </div>

            </div>

        </div>)

    } else {
        return (<div>loading...</div>)
    }



};

export default VideoDetail;
