package hooks;

import org.openqa.selenium.edge.EdgeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

import lib.Automator;
import lib.Constants;

public class UseEdgeAutomator {
	public static Automator automator;
	
	@Before
	public void setup() {
		System.setProperty(Constants.ED_KEY, Constants.ED_PATH);
	    automator = new Automator(new EdgeDriver());
	}
	
	@After
	public void teardown() {
		automator.close();
	}
}
