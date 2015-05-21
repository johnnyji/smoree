module EmailsHelper

  def format_date(date)
    date.strftime("%b %d, %Y")
  end

  def format_preview(body)
    raw_body = format_body(body)
    truncate(raw_body, length: 160, separator: " ", omission: " . . .")
  end

  def format_body(body)
    stripped_body = body.gsub("<div><br></div>", "\n\n")
    Loofah.fragment(stripped_body).text(encode_special_chars: false)
  end

end
