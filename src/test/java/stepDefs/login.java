package stepDefs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import dataStore.DataElearnLogin;
import hooks.UseEdgeAutomator;
import junit.framework.Assert;
import lib.Automator;

@SuppressWarnings("deprecation")
public class login {
	private Automator automator = UseEdgeAutomator.automator;
	
	@Given("user is on homepage")
	public void verifyHomePage(){
		automator.init(DataElearnLogin.ROOT);
	}
	
	@When("user provides invalid false creds {string} {string}")
	public void invalidSigninTrial(String usrnam, String pass){
		automator.locateByName(DataElearnLogin.LOGIN_FIELD_USRNAM.key).sendKeys(usrnam);
		automator.locateByName(DataElearnLogin.LOGIN_FIELD_PASS.key).sendKeys(pass);
	}
	
	@When("user clicks on login button")
	public void clicksLoginBtn(){
		automator.locateByName(DataElearnLogin.LOGIN_BTN_NAME).click();
	}
	
	@SuppressWarnings("deprecation")
	@Then("validation message is displayed")
	private void errorMessagePopsup(){
		Assert.assertTrue(automator.locateByName(DataElearnLogin.LOGIN_FAIL_CSS).getText().contains("Login failed"));
	}
	
	@When("user provides valid creds {string} {string}")
	public void enterProperCreds(String usrnam, String pass){
		automator.locateByName(DataElearnLogin.LOGIN_FIELD_USRNAM.key).sendKeys(usrnam);
		automator.locateByName(DataElearnLogin.LOGIN_FIELD_PASS.key).sendKeys(pass);
	}
	
	@SuppressWarnings("deprecation")
	@Then("user navigates to profile {string} homepage")
	public void verifySuccessfulLogin(String profile){
		Assert.assertTrue(automator.locate("//strong[contains(text(), '"+profile+"')]").getText().contentEquals(profile));
	}
}
