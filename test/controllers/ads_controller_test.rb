require 'test_helper'

class AdsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get ads_index_url
    assert_response :success
  end

  test "should get edit" do
    get ads_edit_url
    assert_response :success
  end

end
