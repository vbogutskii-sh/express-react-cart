import React, { Component } from 'react';
import { Image } from 'cloudinary-react';

class Img extends Component {
  render() {
    // example url http://res.cloudinary.com/bogutskii/image/upload/v1518501376/mbyyt6hblk4uliwocs8u.png
    const url = this.props.url || '';
    const cloudName = url ? url.split('/')[3] : 'bogutskii';
    const publicId = this.props.pid || url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('.'));

    return (
      <Image
        cloudName={cloudName}
        publicId={publicId}
        width={this.props.w}
        height={this.props.h}
        crop={this.props.crop}
        onClick={this.props.onClick}
        className={this.props.className}
      />
    );
  }
}

Img.defaultProps = {
  w: null,
  h: null,
  crop: 'fit',
};

export default Img;
