module Api
    module V1
      class SearchesController < ApplicationController

        def college_search
            p '*******************************************'
            p '*******************************************'
            p '*******************************************'
            p params
            render json: { success: true } 
        end
      end
    end
end