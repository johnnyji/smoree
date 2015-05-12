var ImageUploader = React.createClass({
  getInitialState: function () {
      return {
        imageUrl: null     
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
  },
  render: function() {
    return (
        <input type="file" className="image-uploader" onChange={this.handlePictureUpload}></input>
    );
  }
});