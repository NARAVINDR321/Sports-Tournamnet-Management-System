//$Id$
package com.dao;

public class Constants {

	public final static String userTable = "users";

	public final static String tournamentTable = "tournaments";

	public final static String teamdetailsTable = "team_details";

	public final static String teamparticipationTable = "team_participation";

	public final static String teammembersTable = "team_members";

	public final static String singleparticipationTable = "single_participation";

	public enum handler {

		tournament, user, teammembers, teamdetails, singleparticipation, teamparticipation

	}

	// max chesss count =4;
	// max cricket count=11;
	public final static int chessCount = 4;

	public final static int cricketCount = 11;

	public final static int hockeyCount = 11;

}
