Feature: Login

  Scenario: User login with valid credential
    Given user open login page
    When user login with valid credential
    Then user successfully login