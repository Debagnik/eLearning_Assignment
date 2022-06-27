package stepDefs;

import org.junit.Assert;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import dataStore.DataElearnRegister;
import hooks.UseEdgeAutomator;
import lib.Automator;

public class register {
	private Automator automator = UseEdgeAutomator.automator;
	private WebElement getElementByName(String name){
		return automator.locateByName(name);
	}
	
	private void fillCompulsoryFeilds(String firstName, String lastName, String email, String usrnam, String pass, String confirm_p){
		getElementByName(DataElearnRegister.FIRSTNAME.key).sendKeys(firstName);
		getElementByName(DataElearnRegister.LASTNAME.key).sendKeys(lastName);
		getElementByName(DataElearnRegister.EMAIL.key).sendKeys(email);
		getElementByName(DataElearnRegister.USRNAM.key).sendKeys(usrnam);
		getElementByName(DataElearnRegister.PASS.key).sendKeys(pass);
		getElementByName(DataElearnRegister.C_PASSWD.key).sendKeys(confirm_p);
	}
	
	@When("user clicks on the signup link")
	public void signupLink(){
		this.automator.locate(DataElearnRegister.SIGNUP_LINKX).click();
	}
	
	@When("user enters redundant details {string} {string} {string} {string} {string} {string}")
	public void userFillsFaltuDetails(String firstName, String lastName, String email, String usrnam, String pass, String confirm_p){
		fillCompulsoryFeilds(firstName, lastName, email, usrnam, pass, confirm_p);
	}
	
	@When("user clicks on Register")
	public void clicksRegister(){
		getElementByName(DataElearnRegister.REGISTER_BTN_NAME);
	}
	
	@Then("error validation messages is shown to user")
	public void userGetsError(){
		Assert.assertTrue(automator.locateByCssSelector("div.alert.alert-warning").isDisplayed());
	}
	
	@When("user fills unique details {string} {string} {string} {string} {string} {string}")
	public void userFillsUniqueDetails(String firstName, String lastName, String email, String usrnam, String pass, String confirm_p){
		fillCompulsoryFeilds(firstName, lastName, email, usrnam, pass, confirm_p);
	}
	
	@Then("user presented with profile {string} welcome messages")
	public void welcomeMessageSucess(String profile){
		automator.locate("//p[contains(text(),'"+profile+"')]");
	}	
}
