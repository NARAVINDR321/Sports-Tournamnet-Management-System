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
import com.model.Teammembers;
import com.model.Teamparticipation;
import com.model.Tournament;
import com.model.Users;

public class Teammembershandler {
	
	static Teammembers teammembers =new Teammembers();
	
	
	
public static JSONArray selectdata() {
	
	JSONArray obj = new JSONArray();
	 
	ArrayList<Teammembers> list= new ArrayList<Teammembers>(); 
	
	
		
		
		
		
		try {
			ResultSet resultSet1=Dbqueries.fetchAll("team_members");
while(resultSet1.next()) {
				
	Teammembers tm =new Teammembers();
				tm.setTeam_id(resultSet1.getInt("team_id")).setUser_id(resultSet1.getInt("user_id"));
	        
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
		ResultSet resultSet1=Dbqueries.selectWithColumn("team_members", "user_id", id);
		while(resultSet1.next()) {
	        
			teammembers.setTeam_id(resultSet1.getInt("team_id")).setUser_id(resultSet1.getInt("user_id"));
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
	    Teammembers t = new Gson().fromJson(reader,Teammembers.class);
        
        System.out.println(t);
       
        
        ObjectMapper mapper = new ObjectMapper();
        
        LinkedHashMap<String,Object> map= mapper.convertValue(t, LinkedHashMap.class);
        
       
        
        map.put("created_time",System.currentTimeMillis() );
        
        map.put("modified_time",System.currentTimeMillis() );
//    
        System.out.println(map);
		
		
		
		try {
			
//			can insert data into table

		 Dbqueries.insertDatas(map,"team_members");
			
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

		 Dbqueries.updateTable("team_members",map,map1);
			
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
	
		 Dbqueries.delete(map1,"team_members");
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	
	
	
		
		
	}
	
	
	
	

}
