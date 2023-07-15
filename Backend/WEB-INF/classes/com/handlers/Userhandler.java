//$Id$
package com.handlers;

import java.io.BufferedReader;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;

import org.json.JSONArray;
import org.json.JSONObject;

import com.dao.Dbconnections;
import com.dao.Dbqueries;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.model.Users;

public class Userhandler {

	public static JSONObject login(JSONObject obj) throws Exception {

		String query = "SELECT * FROM users WHERE name=? and pwd=? ";
		
		Connection connection = Dbconnections.startconnection();
		Users user = new Users();
		try {

			PreparedStatement p = connection.prepareStatement(query);
			p.setString(1, obj.getString("name"));
			p.setString(2,obj.getString("pwd") );
			ResultSet resultSet1 = p.executeQuery();
			while (resultSet1.next()) {

				user.setUser_id(resultSet1.getInt("user_id")).setPwd(resultSet1.getString("pwd")).setName(resultSet1.getString("name")).setAge(resultSet1.getInt("age")).setAddress(resultSet1.getString("address")).setRole(resultSet1.getInt("role")).setBlood_group(resultSet1.getString("blood_group"));

				obj = new JSONObject(new Gson().toJson(user));

				System.out.println(obj);

			}
		} catch (SQLException var) {
			var.printStackTrace();
		}

		return obj;
	}

	public static JSONArray selectdata() {

		JSONArray obj = new JSONArray();

		ArrayList<Users> list = new ArrayList<Users>();
		// JsonElement list = null;

		try {

			ResultSet resultSet1 = Dbqueries.fetchAll("users");
			while (resultSet1.next()) {

				Users user = new Users();
				user.setUser_id(resultSet1.getInt("user_id")).setPwd(resultSet1.getString("pwd")).setName(resultSet1.getString("name")).setAge(resultSet1.getInt("age")).setAddress(resultSet1.getString("address")).setRole(resultSet1.getInt("role")).setBlood_group(resultSet1.getString("blood_group"));

				list.add(user);

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

		Users user = new Users();
		try {
			ResultSet resultSet1 = Dbqueries.selectWithColumn("users", "user_id", id);
			while (resultSet1.next()) {

				user.setUser_id(resultSet1.getInt("user_id")).setPwd(resultSet1.getString("pwd")).setName(resultSet1.getString("name")).setAge(resultSet1.getInt("age")).setAddress(resultSet1.getString("address")).setRole(resultSet1.getInt("role")).setBlood_group(resultSet1.getString("blood_group"));

				obj = new JSONObject(new Gson().toJson(user));

				System.out.println(obj);

			}

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return obj;

	}

	// ok

	public static void insertdata(BufferedReader reader) {

	    Users user = new Gson().fromJson(reader,Users.class);
	    
	    System.out.println(user);
	   
	    
	    ObjectMapper mapper = new ObjectMapper();
	    
	    LinkedHashMap<String,Object> map= mapper.convertValue(user, LinkedHashMap.class);
	    
	    System.out.println(map);
	    
	    map.remove("user_id");
	    
	    map.put("created_time",System.currentTimeMillis() );
	    
	    map.put("modified_time",System.currentTimeMillis() );
//	    
	   
	    
	    
		try {

			// can insert data into table

			Dbqueries.insertDatas(map, "users");

			// User user = mapper.readValue(jsonString, User.class);
			//

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	public static void updatedata(String id, BufferedReader reader) {

		HashMap<String, Object> map1 = new HashMap<String, Object>();
		
		
		
		Users user = new Gson().fromJson(reader,Users.class);
		
		
		
		ObjectMapper mapper = new ObjectMapper();
//		HashMap<String,Object> map=new HashMap<String,Object>();
//		map.put("name", user.getName());
//		map.put("pwd", user.getPwd());
//		map.put("age", user.getAge());
		HashMap<String,Object> map= mapper.convertValue(user, HashMap.class);
		
		while (map.values().remove(null));
		while (map.values().remove(0));
		
		
		
		
		
		map1.put("user_id", id);
		
		map.put("created_time",System.currentTimeMillis() );
	        
	    map.put("modified_time",System.currentTimeMillis() );
//	      
		
	    System.out.println(map);
        

		try {

			// can insert data into table

			Dbqueries.updateTable("users", map, map1);

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	public static void deletedata(String id) {

		HashMap<String, Object> map1 = new HashMap<String, Object>();

		map1.put("user_id", id);

		try {

			// can insert data into table

			Dbqueries.delete(map1, "users");

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

}
