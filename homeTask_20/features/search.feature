Feature: Search Option

  Background:
    Given User navigate to "https://playwright.dev/"

  Scenario: First link from the search results should contain Playwright word
    Given User enter "Playwright" world in a search
    When User get 1 st link in a search
    Then Link should contain "Playwright" world

  Scenario: Page header text should correspond to link text from search
    Given User enter "Playwright" world in a search
    When User get 1 st link in a search
    And User go to 1 st link from a search
    Then Page header text should correspond to link text
    