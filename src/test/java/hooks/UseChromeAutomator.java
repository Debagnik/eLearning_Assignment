package hooks;

import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

import lib.Automator;
import lib.Constants;

public class UseChromeAutomator {
	public static Automator automator;
	
	@Before
	public void setup() {
		System.setProperty(Constants.CH_KEY, Constants.CH_PATH);
	    automator = new Automator(new ChromeDriver());
	}
	
	@After
	public void teardown() {
		automator.close();
	}
}
