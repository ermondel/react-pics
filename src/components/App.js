import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import Inactive from './Inactive';

class App extends React.Component {
  state = {
    images: [],
    active: true,
  };

  onSearchSubmit = async (query) => {
    const response = await unsplash.get('/search/photos', {
      params: { query },
    });

    if (response.headers['x-ratelimit-remaining'] > 0) {
      this.setState({
        images: response.data.results,
        active: true,
      });
    } else {
      this.setState({
        images: [],
        active: false,
      });
    }
  };

  render() {
    const { active } = this.state;
    const style = { marginTop: '10px' };

    return (
      <div className="ui container" style={style}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {active ? (
          <ImageList images={this.state.images} />
        ) : (
          <Inactive />
        )}
      </div>
    );
  }
}

export default App;
