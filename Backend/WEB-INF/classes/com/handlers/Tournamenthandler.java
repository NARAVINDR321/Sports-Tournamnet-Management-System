//$Id$
package com.handlers;

import java.io.BufferedReader;
import java.math.BigDecimal;
import java.sql.Date;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;

import org.json.JSONArray;
import org.json.JSONObject;

import com.dao.Dbqueries;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.model.Tournament;
import com.model.Users;

public class Tournamenthandler {
	
	
public static JSONArray selectdata() {
		
	JSONArray obj = new JSONArray();
	
	ArrayList<Tournament> list= new ArrayList<Tournament>();  
	
		
		try {
			
			
			ResultSet resultSet1=Dbqueries.fetchAll("tournaments");
			
			while(resultSet1.next()) {
				Tournament tournament =new Tournament();
				
				tournament.setTournament_id(resultSet1.getInt("tournament_id")).setTournament_name(resultSet1.getString("tournament_name")).setSports_name(resultSet1.getString("sports_name")).setEvent_type(resultSet1.getInt("event_type")).setLimits(resultSet1.getInt("limits")).setStatus(resultSet1.getInt("status"));
				
				long start=resultSet1.getLong("start_time");
				
				Date date1 =  new Date(start);
				System.out.println(date1);
				
				long end=resultSet1.getLong("end_time");
				Date date2 =  new Date(end);
				System.out.println(date2);
				tournament.setStartDate(date1);
				
				tournament.setEndDate(date2);
				
				
				
				
				list.add(tournament);
	       
		 		
		 		
		        }
			
			

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		obj = new JSONArray(new Gson().toJson(list));
		
 		
 		
		
		return obj;
		
		
	}
	



		public static JSONObject selectwithid(int id) {
			
			
			JSONObject obj = new JSONObject();
				
			try {
				ResultSet resultSet1=Dbqueries.selectWithColumn("tournaments", "tournament_id", id);
				while(resultSet1.next()) {
					Tournament tournament =new Tournament();
					tournament.setTournament_id(resultSet1.getInt("tournament_id")).setTournament_name(resultSet1.getString("tournament_name")).setSports_name(resultSet1.getString("sports_name")).setEvent_type(resultSet1.getInt("event_type")).setLimits(resultSet1.getInt("limits")).setStatus(resultSet1.getInt("status"));
		        
		       
			 		obj = new JSONObject(new Gson().toJson(tournament));
			 		
			 		System.out.println(obj);
			 		

			        }
				
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
				
				return obj;
				
			}
		

		
		
		
		public static void insertdata(BufferedReader reader)  {
		    Tournament t = new Gson().fromJson(reader,Tournament.class);
	        
	        System.out.println(t);
	       
	        
	        ObjectMapper mapper = new ObjectMapper();
	        
	        LinkedHashMap<String,Object> map= mapper.convertValue(t, LinkedHashMap.class);
	        
	        System.out.println(map);
	        
	        map.remove("tournament_id");
	        
	        map.remove("startDate");
	        
	        map.remove("endDate");
	        
	        
	        map.put("start_time",System.currentTimeMillis() );
	        
	        map.put("end_time",System.currentTimeMillis() );
	        
	        map.put("created_time",System.currentTimeMillis() );
            
            map.put("modified_time",System.currentTimeMillis() );
//	      
            System.out.println(map);
		    
			
			try {
				
//				can insert data into table

			 Dbqueries.insertDatas(map,"tournaments");
				
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		
		
		}
		
		
		
		
		
		public static void updatedata(String id,BufferedReader reader)  {
		    
          Tournament t = new Gson().fromJson(reader,Tournament.class);
            
            System.out.println(t);
           
            
            ObjectMapper mapper = new ObjectMapper();
            
            LinkedHashMap<String,Object> map= mapper.convertValue(t, LinkedHashMap.class);
            
            System.out.println(map);
            
            map.remove("tournament_id");
            
            
            map.put("created_time",System.currentTimeMillis() );
            
            map.put("modified_time",System.currentTimeMillis() );
//        
			
			
			HashMap<String, Object> map1 = new HashMap<String, Object>();
			
			map1.put("tournament_id", id);
			
			
			try {
				
//				can insert data into table

			 Dbqueries.updateTable("tournaments",map,map1);
				
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			
			
		}
		
		
	public static void deletedata(String id)  {
		
		
		HashMap<String, Object> map1 = new HashMap<String, Object>();
		
		map1.put("tournament_id", id);
		
		try {
				
		
		
			 Dbqueries.delete(map1,"tournaments");
				
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		
		
		
			
			
		}
		
		
		
		
		
		

	}

	
	
	
	


