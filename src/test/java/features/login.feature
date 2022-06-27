@f1
Feature: E-learning Login page
  as a recurring user, it wants to login

  Background: User is at homepage trying to login
    Given user is on homepage

  @f1n
  Scenario Outline: user tries invalid login
    When user provides false creds "<usrnam>" "<pass>"
    And user clicks on login button
    Then validation message is displayed

    Examples: 
      | usrnam | pass    |
      | zsxdr  | pass12  |
      | qwert  | pass123 |
      | abs    | a123    |

  @f1p
  Scenario Outline: user tries valid login
    When user provides valid creds "<usrnam>" "<pass>"
    And user clicks on login button
    Then user navigates to profile "<profile>" homepage

    Examples: 
      | usrnam | pass    | profile      |
      | John   | pass123 | John Doe     |
      | Rick   | pass123 | Rick Ashley  |
      | new1   | pass123 | New Learner1 |