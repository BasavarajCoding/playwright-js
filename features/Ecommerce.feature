Feature: Ecommerce validation
@End2End
  Scenario Outline: Verify whether product is added to cart
    Given I am logged in to the Ecommerce site with "<username>" and "<password>"
    When I add "Nexus 6" to the cart
    Then "Nexus 6" should be displayed in the cart

    Examples:
    | username       | password |
    | Test@gmail.com | Test@123 |
    | pavanol        | test@123 |
