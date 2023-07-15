//$Id$
package com.handlers;

import java.io.BufferedReader;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;

import org.json.JSONArray;
import org.json.JSONObject;

import com.dao.Dbqueries;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.model.Teamdetails;
import com.model.Teammembers;
import com.model.Teamparticipation;

public class Teamdetailshandler {
	
	static Teamdetails teammembers =new Teamdetails();
//	insert ,update ,delete,select 
	
public static JSONArray selectdata() {
	JSONArray obj = new JSONArray();
	 
	ArrayList<Teamdetails> list= new ArrayList<Teamdetails>();
		
		
		
		try {
			ResultSet resultSet1=Dbqueries.fetchAll("team_details");
			while(resultSet1.next()) {
				
				Teamdetails tm =new Teamdetails();
							tm.setTeam_id(resultSet1.getInt("team_id")).setTeam_name(resultSet1.getString("team_name"));
				        
					        list.add(tm);
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
		ResultSet resultSet1=Dbqueries.selectWithColumn("team_details", "team_id", id);
		while(resultSet1.next()) {
	        
			teammembers.setTeam_id(resultSet1.getInt("team_id")).setTeam_name(resultSet1.getString("team_name"));
//        .setCreated_time(resultSet1.getLong("created_time"))
       
	 		obj = new JSONObject(new Gson().toJson(teammembers));
	 		
	 		System.out.println(obj);
	 		

	        }
		
	} catch (Exception e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
		
		return obj;
		
	}	
	
	

//	ok
	
	public static void insertdata(BufferedReader reader)  {
	    
	    Teamdetails t = new Gson().fromJson(reader,Teamdetails.class);
        
        System.out.println(t);
       
        
        ObjectMapper mapper = new ObjectMapper();
        
        LinkedHashMap<String,Object> map= mapper.convertValue(t, LinkedHashMap.class);
        
        map.remove("team_id");        
        
        map.put("created_time",System.currentTimeMillis() );
        
        map.put("modified_time",System.currentTimeMillis() );
//    
        System.out.println(map);
        
		
		
		
		
		try {
		    
		    
			
//			can insert data into table

		 Dbqueries.insertDatas(map,"team_details");
		 
//		 inteeert inot  Output In
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		
	}
	
	
	
	
	
	public static void updatedata(String id,HashMap<String, Object> map)  {
		
		
		HashMap<String, Object> map1 = new HashMap<String, Object>();
		
		map1.put("team_id", id);
		
		
		try {
			
//			can insert data into table

		 Dbqueries.updateTable("team_details",map,map1);
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		
	}
	
	
public static void deletedata(String id)  {
	
	HashMap<String, Object> map1 = new HashMap<String, Object>();
	
	map1.put("team_id", id);
	
	try {
			
	//		can insert data into table
	
		 Dbqueries.delete(map1,"team_details");
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	
	
	
		
		
	}
	
	
	
	
	
	
	

}
