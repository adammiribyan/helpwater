class SearchesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @search = Search.create!(search_params)
    render json: @search, status: :created
  end

private

  def search_params
    params.require(:search).permit(:query, :user_ip)
  end
end
