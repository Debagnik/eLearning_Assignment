package dataStore;


public interface DataElearningMail {
	public final String URL_HOME = "http://elearningm1.upskills.in/user_portal.php";
	public final String INBOX_BTN = "//li[@class='inbox-message-social']/a";
	public final String CONFIRM_SEND_BTN_NAME = "compose";
	public final String SEARCH_BOX = "//input[@class='select2-search__field']";
	public final String SENDER = "//ul[@class='select2-results__options']";
	public final String SUBJECT_BOX = "//input[@class='form-control' and @name='title']";
//	public final String PROFILE_MENU_XPATH = "//span[@class='caret']";
//	public final String PROFILE_MENU_INBOX_OPTION_XPATH = "//a[contains(text(),'Inbox')]";
	public final String COMPOSE_BTN = "//img[@title='Compose message']";
	public final String MAIL_SUCCESS_ALERT = "div.alert.alert-success";
	
	/*
	public static String getXpathForRecipient(String s) {
		return "//li[text()='"+s+"']";
	}
	*/

}
