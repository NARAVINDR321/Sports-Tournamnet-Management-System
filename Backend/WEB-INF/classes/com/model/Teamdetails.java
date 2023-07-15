//$Id$

package com.model;

import java.math.BigInteger;
import java.sql.Date;

public class Teamdetails {
	
	
	private int team_id;

	
	public int getTeam_id() {
		return team_id;
	}
	public Teamdetails setTeam_id(int team_id) {
		this.team_id = team_id;
		return this;
	}
	public String getTeam_name() {
		return team_name;
	}
	public Teamdetails setTeam_name(String team_name) {
		this.team_name = team_name;
		return this;
	}
	public long getCreated_time() {
		return created_time;
	}
	public Teamdetails setCreated_time(long created_time) {
		this.created_time = created_time;
		return this;
	}
	public long getModified_time() {
		return modified_time;
	}
	public Teamdetails setModified_time(long modified_time) {
		this.modified_time = modified_time;
		return this;
	}
	private String team_name;
	
	
	private long created_time;
	private long modified_time;
	
	

}
