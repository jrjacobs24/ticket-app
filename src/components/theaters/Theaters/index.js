import React from 'react';
// import axios from 'axios';
import TheaterList from './../TheaterList';

class Theaters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theaters: []
    };
  }

  componentDidMount() {
    // axios.get('http://api.fandango.com/v1?op=theatersbypostalcodesearch&postalcode=29414&apikey=jf2wxtrjxe45vmg9mx9vxdan&sig=stMD2mJGpj')
    //   .then(res => {
    //     const theaters = res.data.data.children.map(obj => obj.data);
    //     this.setState({ theaters });
    //   });

    // Temp Data
    this.setState({
      theaters: [
        { name: 'Example1' },
        { name: 'Example2' }
      ]
    });
  }

  render() {
    return(
      <div>
        <h1>This is the Theaters Page</h1>
        <TheaterList theaters={this.state.theaters} />
      </div>
    );
  }
};

export default Theaters;
