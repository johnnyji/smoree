module EmailsHelper

  def format_date(date)
    date.strftime("%b %d, %Y")
  end

  def format_preview(body)
    raw_body = strip_tags(body)
    truncate(raw_body, length: 100, separator: " ")
  end

end
