import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';

// SearchNote is presentational component that display search box
class SearchNote extends Component {
  render() {
    return (
      <div>
        <Input
          size='large'
          icon='search'
          iconPosition='left'
          onChange={this.props.handleInputChange}
          onSubmit={this.props.onSubmit}
          value={this.props.query}
          name='query'
          placeholder='Search notes...'
        />
      </div>
      // <form className="searchNote">
      //   <input
      //     type="input"
      //     onChange={this.props.handleInputChange}
      //     onSubmit={this.props.onSubmit}
      //     value={this.props.query}
      //     name="query"
      //     placeholder="Search notes..."
      //     size="30"
      //   />
      // </form>
    );
  }
}

export default SearchNote;
