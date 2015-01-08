Feature: Browsing halunka as a logged out user
  In order to work together with the awesome halunka team
  As a random client
  I want to view the halunka website

  Scenario: Visiting the landing page
    Given I am on the "/" page
    Then I should see "Hello World!"

  Scenario: Visiting the about page
    Given I am on the "/" page
    And I click "main-nav__show"
    And I click "about"
    Then I should see "About"

  Scenario: Visiting the home page from the about page
    Given I am on the "/about" page
    And I click "main-nav__show"
    And I click "logo"
    Then I should see "Hello World!"

  Scenario: Visiting the contact page
    Given I am on the "/" page
    And I click "main-nav__show"
    And I click "contact"
    Then I should see "Contact"
