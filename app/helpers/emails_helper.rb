module EmailsHelper

  def format_date(date)
    date.strftime("%b %d, %Y")
  end

  def format_preview(body)
    raw_body = format_body(body)
    raw_body[0..160] + ". . ."
  end

  def format_body(body)
    stripped_body = body.gsub("<div><br></div>", "\n\n")
    Loofah.fragment(stripped_body).text(encode_special_chars: false)
  end

end
