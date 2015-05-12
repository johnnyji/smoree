class S3Uploader

  def initialize(encodedImage)
    @encodedImage = encodedImage
  end

  def call
    binding.pry
    binaryImage = Base64.decode64(@encodedImage)
  end

end