package stepDefs;

import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import hooks.UseEdgeAutomator;
import lib.Automator;
import dataStore.DataElearningMail;

public class mail {
	
	private Automator automator = UseEdgeAutomator.automator;
	
	@Given("user is at profile page already logged in")
	public void user_is_at_profile_page() {
	    // Write code here that turns the phrase above into concrete actions
	    automator.init(DataElearningMail.URL_HOME);
	    String usr = "new0", pass = "pass123";
	    automator.locateByName("//input[@name='login']").sendKeys(usr);
		automator.locateByName("//input[@name='password']").sendKeys(pass);
		automator.locateByName("//button[@name='submitAuth']").click();
		Assert.assertTrue(automator.locate("//ul[@class='breadcrumb']/li").getText().contentEquals("My course"));
	}

	@When("user clicks on the inbox option")
	public void user_clicks_on_inbox_option() {
	    // Write code here that turns the phrase above into concrete actions
	    automator.locateByName(DataElearningMail.INBOX_BTN).click();
	}
	
	@When("user clicks on the compose button")
	public void user_clicks_on_compose_icon() {
	    // Write code here that turns the phrase above into concrete actions
		automator.locateByName(DataElearningMail.COMPOSE_BTN).click();
	}
	
	@When("user enters initials {string} and selects recipients {script}")
	public void user_inputs_initials_and_selects_recipient(String init, String fullName) {
	    // Write code here that turns the phrase above into concrete actions
	    automator.locateByName(DataElearningMail.SEARCH_BOX).sendKeys(init);
	    automator.locateByName(DataElearningMail.SENDER).click();
	}
	
	@When("user enters subject")
	public void user_inputs_subject() {
	    // Write code here that turns the phrase above into concrete actions
	    automator.locateByName(DataElearningMail.SUBJECT_BOX).sendKeys("A Random Text for Subject for testing");
	}
	
	@When("user clicks on send email button")
	public void user_clicks_on_send_mail() {
	    // Write code here that turns the phrase above into concrete actions
		automator.locateByName(DataElearningMail.COMPOSE_BTN).click();
	}
	
	@Then("mail send succesfully")
	public void mail_sent_successfully() {
		String fullName="Amit Luthra";
	    // Write code here that turns the phrase above into concrete actions
	    Assert.assertTrue(automator.locateByName(DataElearningMail.MAIL_SUCCESS_ALERT).getText().contentEquals("The message has been sent to"+fullName));
	}
}
