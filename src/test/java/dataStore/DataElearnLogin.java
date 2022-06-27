package dataStore;

import lib.Constants;
import lib.FieldData;

public interface DataElearnLogin {
	public final String ROOT = Constants.URL_ELEARN;
	public final FieldData<String, String> LOGIN_FIELD_USRNAM = new FieldData<String, String>("login","abcde");
	public final FieldData<String, String> LOGIN_FIELD_PASS = new FieldData<String, String>("password","pass123");
	public final String LOGIN_BTN_NAME = "submitAuth";
	public final String LOGIN_FAIL_CSS = "div.alert.alert-danger";
	
	//public static String LOGIN_SUCCESS(String b) {
	//	return "//strong[contains(text(), '"+b+"')]";
	//}
	
}
