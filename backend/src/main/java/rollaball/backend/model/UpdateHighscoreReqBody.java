package rollaball.backend.model;

public class UpdateHighscoreReqBody {

	private String userName;
	private Integer highscore;

	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public Integer getHighscore() {
		return highscore;
	}
	public void setHighscore(Integer highscore) {
		this.highscore = highscore;
	}
	
}
