require 'httparty'

class CollegeSearchApi
  include HTTParty
  API_KEY = "Mi4nEmXVpM0qCE0WAyVbxMT9IqgNQAbaXYm0QgQq"
  base_uri 'https://api.data.gov/ed/collegescorecard/v1'

  def initialize(query)
    @query = query
  end

  def schools
    fields = "id,school.name,school.city,school.zip,location,school.state"
    response = self.class.get("/schools.json?school.name=#{@query}&_fields=#{fields}=&api_key=#{API_KEY}")
    response.parsed_response
  end
end