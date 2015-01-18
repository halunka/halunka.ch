Feature: Contacting halunka via the contact form as a User
  In order to throw money at the awesome people at halunka
  As a potential client
  I want to contact halunka via the contact form

  Scenario: Filling in the contact form with valid data
    Given I am on the "/" page
    And I click "main-nav__show"
    And I click "contact"
    And I fill in the contact form with valid data
    And I click on "send"
    Then I should see "Success!"
