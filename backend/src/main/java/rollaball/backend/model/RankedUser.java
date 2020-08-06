package rollaball.backend.model;

public class RankedUser {

	public RankedUser() {}

	
	public RankedUser(String userName,Integer highscore,Integer rank) {
		this.rank=rank;
		this.userName=userName;
		this.highscore=highscore;
	}

	
	private Integer rank;
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


	
	
	
	public Integer getRank() {
		return rank;
	}

	public void setRank(Integer rank) {
		this.rank = rank;
	}
	
}
