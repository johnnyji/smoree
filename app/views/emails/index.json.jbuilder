json.array! @emails_by_month do |date, emails|
   #array contains objects, each object has 2 key/value (created_at, emails)
  json.set! :created_at, date #creating a date key/value
    json.set! :emails do #creating email key/value
      json.array! emails, partial: "emails/email", as: :email #value = array of emails
    end
end