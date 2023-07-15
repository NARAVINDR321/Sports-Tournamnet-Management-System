//$Id$

package com.model;

import java.math.BigInteger;
import java.sql.Date;

public class Teammembers {
	
	
	
	
	
	
	
	private int team_id;
	
	
	
	
	public int getTeam_id() {
		return team_id;
	}
	public Teammembers setTeam_id(int team_id) {
		this.team_id = team_id;
		return this;
	}
	public int getUser_id() {
		return user_id;
	}
	public Teammembers setUser_id(int user_id) {
		this.user_id = user_id;
		return this;
	}
	public long getCreated_time() {
		return created_time;
	}
	public Teammembers setCreated_time(long created_time) {
		this.created_time = created_time;
		return this;
	}
	public long getModified_time() {
		return modified_time;
	}
	public Teammembers setModified_time(long modified_time) {
		this.modified_time = modified_time;
		return this;
	}
	private int user_id;
	
	private long created_time;
	private long modified_time;
	
	
	
	

}
