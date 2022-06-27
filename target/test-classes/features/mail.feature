@f2
	Feature: Compose mail
		userwould like to compose and send an email
		
		Background: user logins to its profile
			Given user is at profile page already logged in
		
		@f2p @f2pblank
		Scenerio Outline: Verify if blank email could be sent
			When user clicks on the inbox option
			And user clicks on the compose button
			And user enters initials "<init>" and selects recipients "<recipts>"
			And user enters subject
			And user clicks on send email button
			Then mail send succesfully
			
			Examples:
				| init | recipts     |
				| amit | amit luthra |