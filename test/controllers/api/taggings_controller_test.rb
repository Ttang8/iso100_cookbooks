require 'test_helper'

class Api::TaggingsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_taggings_create_url
    assert_response :success
  end

  test "should get destory" do
    get api_taggings_destory_url
    assert_response :success
  end

end
