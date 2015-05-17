var ImageUploader = React.createClass({
  propTypes: {
    handleImageSave: React.PropTypes.func.isRequired
  },
  getInitialState: function () {
      return {
        imageUrl: null,
        imagePlaceholder: "Select an image here!"   
      }
  },
  handlePictureUpload: function(e) {
    var self = this;
    var blob = e.target.files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
      self.props.handleImageSave(reader.result);
    };
    reader.readAsDataURL(blob);
    this.setState({ imagePlaceholder: "Looking good!" });
  },
  render: function() {
    return (
      <div>
        <div className="image-uploader-wrapper">
          <div className="fake-uploader-cover"></div>
          <input type="text" className="fake-uploader" id="fake_uploader" placeholder={this.state.imagePlaceholder}></input>
          <input type="file" className="image-uploader" onChange={this.handlePictureUpload}></input>
        </div>
      </div>
    );
  }
});