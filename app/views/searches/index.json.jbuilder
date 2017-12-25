json.array! @searches do |search|
  json.query search.first
  json.count search.second
end
