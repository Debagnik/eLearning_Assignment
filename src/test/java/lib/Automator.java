package lib;

import java.util.List;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriver.TargetLocator;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

//import sel_16062022.TestData;

import org.openqa.selenium.JavascriptExecutor;

public class Automator {
	public WebDriver driver;
	private static long count = 0;
	private long id;
	
	public Automator(WebDriver driver){
		this.driver= driver;
	    this.id = ++Automator.count;
	}
	
//	public static void setId(long id) {
//		Automator.id = id;
//	}

	public static String fMarkStart(Automator automaor,String desc) {
		return ":: STARTED <DRIVER_ID: "+ automaor.id + ">:: " + desc;
	}

	public static Automator fInit(Automator automator, String root){
		automator.driver.get(root);
		return automator;
	}
	
	
	public Actions useActions(){
		return new Actions(this.driver);
	}
	
	public String getWindowId(){return this.driver.getWindowHandle();}
	
	public Set<String> getAllWindows() {return  this.driver.getWindowHandles();}
	
	public void init(String root){this.driver.get(root);}

	public String getTitle(){return this.driver.getTitle();}
	
	public String getUrl(){return this.driver.getCurrentUrl();}

	public void close() {this.driver.close();}
	
	public void quit() {this.driver.quit();}
	
	public void prompt(String b){IO.put("TiO<DRIVER_ID: "+ this.id + " Windod_ID: "+ this.getWindowId() +">: " + b);}
	
	public void markStart(String desc) {IO.put(":: STARTED <DRIVER_ID: "+ this.id + ">:: " + desc);}

	public void markEnd(String desc) {IO.put(":: ENDED <DRIVER_ID: "+ this.id + ">:: " + desc);}
	
	public void sleep(long dELAY){
		try {Thread.sleep(dELAY);}
		catch (InterruptedException e) {e.printStackTrace();}
	}
	
	public WebElement locateByCssSelector(String path) {
		return this.driver.findElement(By.cssSelector(path));
	}
	
	public List<WebElement> locateAllByCssSelector(String path) {
		return this.driver.findElements(By.cssSelector(path));
	}
	
	public JavascriptExecutor getJsExecutor(){
		return (JavascriptExecutor) this.driver;
	}
	public TargetLocator switchMode(){ 
		return this.driver.switchTo();
	}
	
	public WebElement locate(String xpt){
		return this.driver.findElement(By.xpath(xpt)); 
	}
	
	
	public List<WebElement> locateAll(String xpath){
		return this.driver.findElements(By.xpath(xpath));
	}
	
	public WebElement locateByName(String name){
		return this.driver.findElement(By.name(name));
	}
	
	public WebElement locateById(String id){
		return this.driver.findElement(By.id(id));
	}
	
	public List<WebElement> locateAllByTagName(String tag){
		return this.driver.findElements(By.tagName(tag)); 
	}
	
	public WebElement locateByTagName(String tag){
		return this.driver.findElement(By.tagName(tag)); 
	}
	
	public void waitDomLoaded(long dELAY){
		this.driver
		.manage().timeouts()
		.implicitlyWait(dELAY, TimeUnit.MILLISECONDS);
		//.implicitlyWait(Duration.ofMillis(dELAY));
	}

	public Select useSelectMenu(WebElement e) {
		return new Select(e);
	}
	
}
