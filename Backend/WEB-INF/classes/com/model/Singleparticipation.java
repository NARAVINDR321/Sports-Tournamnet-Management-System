//$Id$

package com.model;
import java.math.BigInteger;
import java.sql.Date;

public class Singleparticipation {
	
	
	
	
	
	
	
	public int getUser_id() {
		return user_id;
	}
	public Singleparticipation setUser_id(int user_id) {
		this.user_id = user_id;
		return this ;
	}
	public int getTournament_id() {
		return tournament_id;
	}
	public Singleparticipation setTournament_id(int tournament_id) {
		this.tournament_id = tournament_id;
		return this ;
	}
	public int getStatus() {
		return status;
	}
	public Singleparticipation setStatus(int status) {
		this.status = status;
		return this ;
	}
	public long getCreated_time() {
		return created_time;
	}
	public Singleparticipation setCreated_time(long created_time) {
		this.created_time = created_time;
		return this ;
	}
	public long getModified_time() {
		return modified_time;
	}
	public Singleparticipation setModified_time(long modified_time) {
		this.modified_time = modified_time;
		return this ;
	}
	private int user_id;
	private int tournament_id;
	private int status;
	private long created_time;
	private long modified_time;
	
	
	

}


//public void setUSER_ID(int uSER_ID) {
//	this.USER_ID = uSER_ID;
//}
//public int getTOURNAMENT_ID() {
//	return TOURNAMENT_ID;
//}
//public void setTOURNAMENT_ID(int tOURNAMENT_ID) {
//	this.TOURNAMENT_ID = tOURNAMENT_ID;
//}
