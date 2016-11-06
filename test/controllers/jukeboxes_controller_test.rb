require 'test_helper'

class JukeboxesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get jukeboxes_index_url
    assert_response :success
  end

end
