//$Id$


package com.dao;

import java.sql.*;


public class Sportsdb {
	
	public static void tablecreation() throws Exception {
		
	}


public static void main(String[] args) throws Exception {
		


			Connection c = Dbconnections.startconnection();
			
			
			
			
				Statement stmt = c.createStatement(); 
				
				
				
			   		 
				   
				   
			      String sql1 = "CREATE TABLE IF NOT EXISTS USERS " +
			           "(USER_ID serial  not NULL, " +
			           " PWD VARCHAR(15) NOT NULL, " + 
			           " NAME VARCHAR(20) NOT NULL, " + 
			           " age INTEGER NOT NULL, " + 
			           "ADDRESS VARCHAR(20) NOT NULL, "+
			           "ROLE INTEGER not NULL, " +
			           "BLOOD_GROUP VARCHAR(10) NOT NULL, "+
			           "CREATED_TIME BIGINT NOT NULL, "+
			           "MODIFIED_TIME BIGINT , "+
			           " PRIMARY KEY (USER_ID))"; 
			  
			  
			  
			  stmt.executeUpdate(sql1);
			
			  
			  
			  
			  String sql21 = "CREATE TABLE IF NOT EXISTS TOURNAMENTS " +
			           "(tournament_id serial  not NULL, " +
			           " TOURNAMENT_NAME VARCHAR(15) NOT NULL, " + 
			           " SPORTS_NAME VARCHAR(20) NOT NULL, " + 
			           " EVENT_TYPE INTEGER NOT NULL , " + 
			           "LIMITS INTEGER NOT NULL, "+
			           "STATUS INTEGER not NULL, " +
			           "START_TIME BIGINT NOT NULL, "+
			           "END_TIME BIGINT NOT NULL, "+
			           "CREATED_TIME BIGINT NOT NULL, "+
			           "MODIFIED_TIME BIGINT NOT NULL, "+
			           " PRIMARY KEY (tournament_id))"; 
			  
			  
			  
			  stmt.executeUpdate(sql21);
			  
			  String sql2 = "CREATE TABLE IF NOT EXISTS TEAM_DETAILS " +
			           "(TEAM_ID serial  not NULL, " +
			           " TEAM_NAME VARCHAR(15) NOT NULL, " + 
			           
			           "CREATED_TIME BIGINT NOT NULL, "+
			           "MODIFIED_TIME BIGINT , "+
			           " PRIMARY KEY (TEAM_ID))"; 
			  
			  
			  
			  stmt.executeUpdate(sql2);
			  
			  
			  String sql3 = "CREATE TABLE IF NOT EXISTS SINGLE_PARTICIPATION " +
			           "(USER_ID INTEGER NOT NULL, " + 
			           " TOURNAMENT_ID	 INTEGER NOT NULL, " + 
			           " STATUS INTEGER NOT NULL ," +     
			           "CREATED_TIME BIGINT NOT NULL, "+
			           "MODIFIED_TIME BIGINT , "+
			           
			           "FOREIGN KEY (USER_ID) REFERENCES USERS(USER_ID),"+
			           "FOREIGN KEY (TOURNAMENT_ID) REFERENCES tournaments(tournament_id))";
			  
			  
			  stmt.executeUpdate(sql3);
			  
			  
			  
			  
			  String sql4 = "CREATE TABLE IF NOT EXISTS TEAM_PARTICIPATION " +
			           "(TEAM_ID INTEGER NOT NULL, " + 
			           " TOURNAMENT_ID	 INTEGER NOT NULL, " + 
			           " STATUS INTEGER NOT NULL," +       
			           "CREATED_TIME BIGINT NOT NULL, "+
			           "MODIFIED_TIME BIGINT , "+
			           
			           "FOREIGN KEY (TEAM_ID) REFERENCES TEAM_DETAILS(TEAM_ID),"+
			           "FOREIGN KEY (TOURNAMENT_ID) REFERENCES tournaments(tournament_id))";
			  
			  
			  stmt.executeUpdate(sql4);
			  
			  
			  
			  
			  
			  String sql5 = "CREATE TABLE IF NOT EXISTS TEAM_MEMBERS " +
			           "(TEAM_ID INTEGER NOT NULL, " + 
			           " USER_ID INTEGER NOT NULL, " + 
			              
			           "CREATED_TIME BIGINT NOT NULL, "+
			           "MODIFIED_TIME BIGINT , "+
			           
			           "FOREIGN KEY (TEAM_ID) REFERENCES TEAM_DETAILS(TEAM_ID),"+
			            "FOREIGN KEY (USER_ID) REFERENCES USERS(USER_ID))";
			  
			  stmt.executeUpdate(sql5);
			  
//			  String sql6 = "ALTER TABLE team_members ADD CONSTRAINT teamid_unique UNIQUE (team_id, user_id)";
//			  
//			  System.out.println("table altered");
			  
			  
//			 Stmt for altering table in existing tables :  
			  
//			  alter table Departments  add foreign key(companyid) references Companys(companyid);

//			  stmt.executeUpdate(sql6);
			  
			
			  
			  
			  Dbconnections.closeconnection(c);
			  

      
//		         Dbqueries.Selectwithcolumn("tournaments","tournament_id",1);

   
		
		
		
	}
	
}
		
       
		
		
	

	


	


 

