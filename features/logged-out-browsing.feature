Feature: Browsing halunka as a logged out user
  In order to work together with the awesome halunka team
  As a random client
  I want to view the halunka website

  Scenario: Visiting the landing page
    Given I am on the "/" page
    Then I should see "halunka"
