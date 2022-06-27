@f0
Feature: Elearning registration page
	As a new user wants to enroll itself to the website
	
	Background: Trying to register
		Given user is on homepage
		When user clicks on the signup link
	
	@f0n
	Scenario Outline: invalid user registration
	And user enters redundant details "<firstName>" "<lastName>" "<email>" "<usrnam>" "<pass>" "<confirmPass>"
	And user clicks on Register
	Then error validation messages is shown to user
	
	Examples:
		| firstName | lastName | email         | usrnam   | pass    | confirmPass | profile     |
		| Rick      | Ashley   | rick@roll.xyz | rollrick | pass123 | pass123     | Rick Ashley |
		| John      | Doe      | JohnDoe@fb    | Doe      | Pass1   | Pass1       | John Doe    |
	
	@f0p
	Scenario Outline: Valid user registration
		And user fills unique details "<firstName>" "<lastName>" "<email>" "<usrnam>" "<pass>" "<confirmPass>"
    And user clicks on Register
    Then user presented with profile "<profile>" welcome messages

    Examples: 
      | firstName | lastName | email        | username | pass    | confirmPass | profile  |
      | John      | Doe      | doe@john.net | DoeJ123  | pass123 | pass123     | John Doe |
      