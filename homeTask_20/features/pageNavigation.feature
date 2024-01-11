Feature: Navigation Option

  Background:
    Given User navigate to "https://playwright.dev/"

  Scenario Outline: Button from page paginator should lead to appropriate page
    Given User goes to "<tab>" tab
    When User goes to "<direction>" page using navigation button
    Then Page header text should be "<header>"

    Examples:
    | tab | direction | header |
    |    API |   prev |    Playwright Test |
    |    API |   next |   APIRequest |