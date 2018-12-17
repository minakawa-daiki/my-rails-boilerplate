# frozen_string_literal: true

class HomeController < ApplicationController
  def index
    respond_to do |format|
      format.html
      format.json
    end
  end
end
