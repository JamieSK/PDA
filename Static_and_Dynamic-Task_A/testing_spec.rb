require 'minitest/autorun'

require_relative 'testing_task_2'

class Test < MiniTest::Test
  def test_func1_for_1
    assert(func1(1))
  end

  def test_func1_not_1
    refute(func1(7))
  end

  def test_max_first
    assert_equal(2, max(2, 1))
  end

  def test_max_second
    assert_equal(2, max(1, 2))
  end

  def test_looper_prints
    actual = []
    actual += capture_io do
      looper
    end
    expected = ["1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n", '']
    assert_equal(expected, actual)
  end

  def test_looper_returns_last_value_in_range
    assert_equal(10, looper)
  end
end
