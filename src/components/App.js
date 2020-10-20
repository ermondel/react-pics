import React from 'react';
import Dimmer from './Dimmer';
import NotAvailable from './NotAvailable';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import Loading from './Loading';
import unsplash from '../api/unsplash';
import './App.css';

class App extends React.Component {
  state = {
    images: [],
    remoteStatus: 'awaiting',
    imagesLoadStatus: 'none',
  };

  componentDidMount() {
    unsplash
      .get('/')
      .then((response) => {
        this.setState({
          remoteStatus: response.status === 200 ? 'ready' : 'not available',
        });
      })
      .catch((error) => {
        this.setState({ remoteStatus: 'not available' });
      });
  }

  onSearchSubmit = (query) => {
    this.setState({
      imagesLoadStatus: 'awaiting',
    });

    unsplash
      .get('/request/unsplash', {
        params: { query },
      })
      .then((response) => {
        this.setState({
          images: response.data.results,
          imagesLoadStatus: 'loaded',
        });
      })
      .catch((error) => {
        this.setState({
          remoteStatus: 'not available',
          imagesLoadStatus: 'none',
        });
      });
  };

  render() {
    const APP_WAIT = this.state.remoteStatus === 'awaiting';
    const APP_READY = this.state.remoteStatus === 'ready';
    const APP_NOT = this.state.remoteStatus === 'not available';
    const IMG_WAIT = this.state.imagesLoadStatus === 'awaiting';
    const IMG_READY = this.state.imagesLoadStatus === 'loaded';
    const IMG_NONE = this.state.imagesLoadStatus === 'none';

    return (
      <div className='app'>
        <div className='ui container'>
          {APP_WAIT && <Dimmer />}
          {APP_READY && (
            <div className='ui container'>
              <SearchBar onSubmit={this.onSearchSubmit} />
              {IMG_WAIT && <Loading />}
              {IMG_READY && <ImageList images={this.state.images} />}
              {IMG_NONE && null}
            </div>
          )}
          {APP_NOT && <NotAvailable />}
        </div>
      </div>
    );
  }
}

export default App;
