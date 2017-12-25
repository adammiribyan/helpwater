class SearchesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @searches = Search.all
    render json: @searches, status: :ok
  end

  def create
    @search = Search.create!(search_params)

    render json: @search, status: :created
  end

  def destroy_all
    Search.destroy_all

    render nothing: true, status: :ok
  end

private

  def search_params
    params.require(:search).permit(:query, :user_ip)
  end
end
