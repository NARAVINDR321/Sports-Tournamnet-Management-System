//$Id$
package com.dao;


import java.sql.*;



public class Dbconnections {
	
	public static Connection startconnection() throws Exception {
		
		
		Connection c = null;
		try {
			Class.forName("org.postgresql.Driver");
			
		 
			
			try {
				c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/root1","aravind-pt6089","");
				
			}
			
      
			catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
			}
		
		} catch (ClassNotFoundException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
		
		
		}
	
		
		return c;
			
	}
		
				
	public  static void closeconnection (Connection c) throws Exception{
		
		
		
		try {
			c.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		
		
	}
	
}

