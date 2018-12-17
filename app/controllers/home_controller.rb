class HomeController < ApplicationController
  def index
    render component: 'Hello', props: { title: 'hello!' }, tag: 'span', class: 'hello'
  end
end
