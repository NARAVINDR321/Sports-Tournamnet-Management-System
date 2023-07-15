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
import java.util.Map.Entry;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.dao.Dbconnections;
import com.dao.Dbqueries;
import com.dao.Dbutils;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.model.Singleparticipation;
import com.model.Teamdetails;
import com.model.Users;

public class Singleparticipationhandler {

	static Singleparticipation singleparticipation = new Singleparticipation();

	public static JSONArray selectdata() {

		JSONArray obj = new JSONArray();

		ArrayList<Singleparticipation> list = new ArrayList<Singleparticipation>();

		try {

			ResultSet resultSet1 = Dbqueries.fetchAll("single_participation");
			while (resultSet1.next()) {

				Singleparticipation sp = new Singleparticipation();
				sp.setUser_id(resultSet1.getInt("user_id")).setTournament_id(resultSet1.getInt("tournament_id")).setStatus(resultSet1.getInt("status"));

				list.add(sp);

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
			ResultSet resultSet1 = Dbqueries.selectWithColumn("single_participation", "user_id", id);
			while (resultSet1.next()) {

				singleparticipation.setUser_id(resultSet1.getInt("user_id")).setTournament_id(resultSet1.getInt("tournament_id")).setStatus(resultSet1.getInt("status"));

				obj = new JSONObject(new Gson().toJson(singleparticipation));

				System.out.println(obj);

			}

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return obj;

	}

	// public static void selectwithid(int id) {
	//
	//
	//
	//
	// try {
	// Dbqueries.Selectwithcolumn("single_participation", "user_id", id);
	// } catch (Exception e) {
	// // TODO Auto-generated catch block
	// e.printStackTrace();
	// }
	//
	//
	//
	// }

	// ok

	public static void insertdata(BufferedReader reader) {

        Singleparticipation s = new Gson().fromJson(reader,Singleparticipation.class);
        
        
        System.out.println(s);
       
        
        ObjectMapper mapper = new ObjectMapper();
        
        LinkedHashMap<String,Object> map= mapper.convertValue(s, LinkedHashMap.class);
        
        System.out.println(map);
        
       
        
        map.put("created_time",System.currentTimeMillis() );
        
        map.put("modified_time",System.currentTimeMillis() );
//      
       
		try {

			// can insert data into table

			Dbqueries.insertDatas(map, "single_participation");

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	public static void updatedata(String id, HashMap<String, Object> map) {

		HashMap<String, Object> map1 = new HashMap<String, Object>();

		map1.put("user_id", id);

		try {

			// can insert data into table

			Dbqueries.updateTable("single_participation", map, map1);

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

			Dbqueries.delete(map1, "single_participation");

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	public static JSONArray tournamentSingle(LinkedHashMap<String, Object> map) throws JSONException, SQLException {

		String userid = (String) map.get("singleparticipation");

		String tournamentid = (String) map.get("tournament");

		JSONArray jsonArray = new JSONArray();

		JSONObject obj = new JSONObject();

		if (!(userid == null)) {
			String query = "select single_participation.user_id,single_participation.tournament_id,users.name,users.age,users.address,users.blood_group from single_participation INNER JOIN users ON single_participation.user_id = users.user_id where users.user_id=" + userid + " and " + "single_participation.tournament_id=" + tournamentid + ";";

			ResultSet resultSet1 = null;

			// where tournament.tournamentid=2 and singleparticipation.user_id =2;

			// imp
			// elect single_participation.user_id,single_participation.tournament_id,users.name,users.age,users.address,users.blood_group from single_participation INNER JOIN users ON
			// single_participation.user_id = users.user_id where users.user_id=2 and single_participation.tournament_id=1;

			resultSet1 = Dbutils.executeSelect(query);

			int i = 0;
			while (resultSet1.next()) {

				obj.put("user_id", resultSet1.getInt("user_id"));
				obj.put("tournament_id", resultSet1.getInt("tournament_id"));
				obj.put("name", resultSet1.getString("name"));
				obj.put("age", resultSet1.getInt("age"));
				obj.put("address", resultSet1.getString("address"));
				obj.put("blood_group", resultSet1.getString("blood_group"));

				jsonArray.put(obj);

				i = i + 1;

			}

		}

		else if (userid == null) {

			String query = "select single_participation.user_id,single_participation.tournament_id,users.name,users.age,users.address,users.blood_group from single_participation INNER JOIN users ON single_participation.user_id = users.user_id where single_participation.tournament_id=" + tournamentid + ";";

			System.out.println(query);

			ResultSet resultSet1 = null;

			resultSet1 = Dbutils.executeSelect(query);
			int i = 0;
			while (resultSet1.next()) {

				obj.put("user_id", resultSet1.getInt("user_id"));
				obj.put("tournament_id", resultSet1.getInt("tournament_id"));
				obj.put("name", resultSet1.getString("name"));
				obj.put("age", resultSet1.getInt("age"));
				obj.put("address", resultSet1.getString("address"));
				obj.put("blood_group", resultSet1.getString("blood_group"));

				jsonArray.put(obj);

				i = i + 1;

			}

		}
		return jsonArray;

	}

	// Select single_participation.user_id,single_participation.tournament_id,users.name,users.age,users.address,users.blood_group from single_participation INNER JOIN users ON
	// single_participation.user_id = users.user_id;

	// select with id condition

	// Select single_participation.user_id,single_participation.tournament_id,users.name,users.age,users.address,users.blood_group from single_participation INNER JOIN users ON
	// single_participation.user_id = users.user_id where users.user_id=2;

}
