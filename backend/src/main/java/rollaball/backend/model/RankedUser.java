package rollaball.backend.model;

public class RankedUser extends User {

	public RankedUser() {}

	
	public RankedUser(String userName,Integer highscore,Integer rank) {
		this.rank=rank;
		this.userName=userName;
		this.highscore=highscore;
	}

	
	private Integer rank;

	public Integer getRank() {
		return rank;
	}

	public void setRank(Integer rank) {
		this.rank = rank;
	}
	
}
