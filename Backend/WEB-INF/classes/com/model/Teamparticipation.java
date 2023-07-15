//$Id$
package com.model;

import java.math.BigInteger;

public class Teamparticipation {
	
	private int team_id;
	public int getTeam_id() {
		return team_id;
	}
	public Teamparticipation setTeam_id(int team_id) {
		this.team_id = team_id;
		return this;
	}
	public int getTournament_id() {
		return tournament_id;
	}
	public Teamparticipation setTournament_id(int tournament_id) {
		this.tournament_id = tournament_id;
		return this;
	}
	public int getStatus() {
		return status;
	}
	public Teamparticipation setStatus(int status) {
		this.status = status;
		return this;
	}
	public long getCreated_time() {
		return created_time;
	}
	public Teamparticipation setCreated_time(long created_time) {
		this.created_time = created_time;
		return this;
	}
	public long getModified_time() {
		return modified_time;
	}
	public Teamparticipation setModified_time(long modified_time) {
		this.modified_time = modified_time;
		return this;
	}
	private int tournament_id;
	private int status;
	private long created_time;
	private long modified_time;
	

}
