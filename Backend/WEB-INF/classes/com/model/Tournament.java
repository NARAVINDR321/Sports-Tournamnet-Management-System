//$Id$
package com.model;

import java.math.BigInteger;
import java.sql.Date;

public class Tournament {
	private int tournament_id;
	
	public int getTournament_id() {
		return tournament_id;
	}
	public Tournament setTournament_id(int tournament_id) {
		this.tournament_id = tournament_id;
		return this;
		
		
	}
	public String getTournament_name() {
		return tournament_name;
	}
	public Tournament setTournament_name(String tournament_name) {
		this.tournament_name = tournament_name;
		return this;
	}
	public String getSports_name() {
		return sports_name;
	}
	public Tournament setSports_name(String sports_name) {
		this.sports_name = sports_name;
		return this;
	}
	public int getEvent_type() {
		return event_type;
	}
	public Tournament setEvent_type(int event_type) {
		this.event_type = event_type;
		return this;
	}
	public int getLimits() {
		return limits;
	}
	public Tournament setLimits(int limits) {
		this.limits = limits;
		return this;
	}
	public int getStatus() {
		return status;
	}
	public Tournament setStatus(int status) {
		this.status = status;
		return this;
	}
	public long getStart_time() {
		return start_time;
	}
	public Tournament setStart_time(long start_time) {
		this.start_time = start_time;
		return this;
	}
	public long getEnd_time() {
		return end_time;
	}
	public Tournament setEnd_time(long end_time) {
		this.end_time = end_time;
		return this;
	}
	public long getCreated_time() {
		return created_time;
	}
	public Tournament setCreated_time(long created_time) {
		this.created_time = created_time;
		return this;
	}
	public long getModified_time() {
		return modified_time;
	}
	public Tournament setModified_time(long modified_time) {
		this.modified_time = modified_time;
		return this;
	}
	private String tournament_name;
	private String sports_name;
	private int event_type;
	private int limits;
	private int status;
	private long start_time;
	
	
	private long	end_time;
	
	private Date startDate;
    private Date endDate;
    
	public Date getStartDate() {
        return startDate;
    }
    public Tournament setStartDate(Date startDate) {
        this.startDate = startDate;
        return this;
    }
    public Date getEndDate() {
        return endDate;
    }
    public Tournament setEndDate(Date endDate) {
        this.endDate = endDate;
        return this;
    }
    private long created_time;
	
	private long modified_time;
	

}


