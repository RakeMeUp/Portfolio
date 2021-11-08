import React, { Component } from "react";
import { createApi } from "unsplash-js";

//img

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSrc: 0,
    };
  }
  handleClose = () => {
    this.props.handleClose();
  };

  componentDidMount = () => {
    const unsplash = createApi({
      accessKey: "9vAYipWc-1SWEXtGZ9ARlEsxG4Z3lPWu3-C27QoJKzM",
    });
    unsplash.photos
      .getRandom({
        query: "raccoon",
        count: 1,
      })
      .then((result) => {
        if (result.errors) {
          // handle error here
          console.log("error occurred: ", result.errors[0]);
        } else {
          // handle success here
          const photo = result.response;
          this.setState({ imageSrc: photo[0].urls.small });
        }
      });
  };
  render() {
    return (
      <div
        id="modal"
        className="fixed z-50 w-full h-screen bg-black flex bg-opacity-50 justify-center items-center"
      >
        <div className="mx-5 bg-black rounded-3xl relative overflow-hidden shadow-md">
          <div
            className="w-10 h-10 bg-templatePrimary absolute top-0 right-0 rounded-bl-xl rounded-tr-xl flex justify-center items-center text-white"
            onClick={this.handleClose}
          >
            X
          </div>
          <div>
            <img src={this.state.imageSrc} alt="lorem" />
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
