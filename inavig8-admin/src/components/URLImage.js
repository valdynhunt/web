import React from 'react';
import { Image } from 'react-konva';


class URLImage extends React.Component {

  state = {
    image: null
  };
  componentDidMount() {
    this.loadImage();
    // console.log(this.imageNode.current.offsetWidth)
  }
  componentDidUpdate(oldProps) {
    if (oldProps.src !== this.props.src) {
      this.loadImage();
    }
  }
  componentWillUnmount() {
    this.image.removeEventListener('load', this.handleLoad);
  }
  loadImage() {
    // save to "this" to remove "load" handler on unmount
    this.image = new window.Image();
    this.image.src = this.props.src;

    this.image.addEventListener('load', this.handleLoad);
  }
  handleLoad = () => {
    // after setState react-konva will update canvas and redraw the layer
    // because "image" property is changed
    this.setState({
      image: this.image,
      image_width: this.image.width,
      image_height: this.image.height
    });
    console.log("width2..." + this.image.width);
    console.log("height2..." + this.image.height);
    // if you keep same image object during source updates
    // you will have to update layer manually:
    // this.imageNode.getLayer().batchDraw();
  };
  render() {
    return (
      <Image
        x={this.props.x}
        y={this.props.y}
        image={this.state.image}
        ref={node => node && console.log("width..." + node.offsetWidth)}
      />
    );
  }
}

export default URLImage;