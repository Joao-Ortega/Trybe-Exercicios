import pytest
from exercises import fizz_buzz, convert_expression


def test_if_fizz_buzz_function_returns_correctly():
    number_to_test = 3
    assert fizz_buzz(number_to_test) == [1, 2, "Fizz"]


def test_if_the_fizz_buzz_function_raise_value_error_with_string():
    string_to_test = "k"
    with pytest.raises(
        ValueError, match="Parameter nov valid, must be a number"
    ):
        assert fizz_buzz(string_to_test)


def test_if_given_a_string_returns_the_correct_number():
    expected = '1-4663-79338-4663'
    given_string = '1-HOME-SWEET-HOME'
    assert convert_expression(given_string) == expected
