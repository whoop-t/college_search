module Api
    module V1
      class SearchesController < ApplicationController

        def college_search
            if params[:s].nil?
              render json: { success: false, message: "Please enter search query"} and return
            end

            college_search = CollegeSearchApi.new(params[:s])
            schools = college_search.schools
            render json: { success: true, data: schools["results"] } 
        end
      end
    end
end