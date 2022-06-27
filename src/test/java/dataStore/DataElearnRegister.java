package dataStore;

import lib.Constants;
import lib.FieldData;

public interface DataElearnRegister {
	public final String ROOT = Constants.URL_ELEARN;
	
	public final String REGISTER_BTN_NAME = "submit";
	public final String NEXT_BTN_NAME = "next";
	public final String CONFIRM_SEND_MAIL_NAME = "compose";
	public final String SIGNUP_LINKX = "//a[contains(text(),'Sign up')]";
	public final String INBOX_XPATH = "//*[@id=\"menuone\"]/ul[2]/li[1]/a/span";
	public final String INBOX_MENU_OPTION_XPATH = "//*[@id=\"menuone\"]/ul[2]/li[1]/ul/li/a[2]";
	public final String COMPOSE_BTN_XPATH = "//*[@id=\"toolbar\"]/div/div[1]/a[1]/img";
	public final String SEND_TO_OPT_XPATH = "//li[text()='amit luthra']";
	public final String MAIL_SUCCESS_CSSPATH = "div.alert.alert-success";
	
	
	
	
	public final FieldData<String, String> FIRSTNAME = new FieldData<String, String>("firstname","Ami");
	public final FieldData<String, String> LASTNAME = new FieldData<String, String>("lastname", "Learner");
	public final FieldData<String, String> PHONE = new FieldData<String, String>("phone","7894651230");
	public final FieldData<String, String> EMAIL = new FieldData<String, String>("email","abc@xyz.com");
	public final FieldData<String, String> USRNAM = new FieldData<String, String>("username","abcdef");	
	public final FieldData<String, String> PASS = new FieldData<String, String>("pass1","pass123");
	public final FieldData<String, String> C_PASSWD = new FieldData<String, String>("pass2","pass123");
	public final FieldData<String, String> SUBJECT = new FieldData<String, String>("//*[@id=\"compose_message\"]/fieldset/div[2]/div[1]/input","Test Assesment");
	public final FieldData<String, String> SEND_TO = new FieldData<String, String>("//*[@id=\"compose_message\"]/fieldset/div[1]/div[1]/span/span[1]/span/ul/li/input","amit");
	public final FieldData<String, String> CONGRATS = new FieldData<String, String>("//*[contains(text(), 'has been sent')]", "amit luthra");
}
