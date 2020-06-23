import React from 'react';
import SearchBar from "./SearchBar";
import YoutubeApi from "../apis/YoutubeApi";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component{

    state = {videos: [], selectedVideo: null };



    onSearchFetch = (value) => {
        const KEY = 'AIzaSyCluzOSUA18Vw8aTT3NGOKp8tYdPeUNSiA';

        YoutubeApi.get('/search', {
            params: {
                key: KEY,
                part: 'snippet',
                maxResults: 5,
                q: value
            }
        }).then(
            response => this.setState({videos: response.data.items, selectedVideo: response.data.items[0]})
        ).catch(
            error => console.log(error)
        );
        

    };

    componentDidMount(){
        this.onSearchFetch('carton');
        // this.setState({selectedVideo: response.data.items[0]})
    }

    selectedVideo = (video) => {
        this.setState({selectedVideo: video})
    };



    render() {

    return (<div className="container ui" >
        <SearchBar onFormSearch={this.onSearchFetch}/>
    <h3 className="ui message"> {this.state.videos.length} videos found</h3>

        <div className="ui two column grid">
            <div className="row">

                <div className="column">
                    <VideoDetail video={this.state.selectedVideo}/>
                </div>
                <div className="column">
                    <VideoList videos={this.state.videos} selectedVideo={this.selectedVideo}/>
                </div>
            </div>
        </div>

    </div>)
    }
}

export default App;
