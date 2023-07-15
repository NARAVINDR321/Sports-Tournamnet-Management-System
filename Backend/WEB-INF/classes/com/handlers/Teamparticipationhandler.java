//$Id$
package com.handlers;

import java.io.BufferedReader;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.dao.Dbqueries;
import com.dao.Dbutils;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.model.Singleparticipation;
import com.model.Teammembers;
import com.model.Teamparticipation;

public class Teamparticipationhandler {

	

	public static JSONArray selectdata() {
		JSONArray obj = new JSONArray();

		ArrayList<Teamparticipation> list = new ArrayList<Teamparticipation>();

		try {
			ResultSet resultSet1 = Dbqueries.fetchAll("team_participation");
			while (resultSet1.next()) {

				Teamparticipation tp = new Teamparticipation();
				
				tp.setTeam_id(resultSet1.getInt("team_id")).setTournament_id(resultSet1.getInt("tournament_id")).setStatus(resultSet1.getInt("status"));

				list.add(tp);

			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		obj = new JSONArray(new Gson().toJson(list));

		return obj;

	}

	public static JSONArray selectwithid(int id) {

	    JSONArray obj = new JSONArray();

        ArrayList<Teamparticipation> list = new ArrayList<Teamparticipation>();

		try {
			ResultSet resultSet1 = Dbqueries.selectWithColumn("team_participation", "tournament_id", id);
			while (resultSet1.next()) {
			    Teamparticipation tp = new Teamparticipation();
			    
				tp.setTeam_id(resultSet1.getInt("team_id")).setTournament_id(resultSet1.getInt("tournament_id")).setStatus(resultSet1.getInt("status")).setCreated_time(resultSet1.getLong("created_time")).setModified_time(resultSet1.getLong("modified_time"));
				// .setCreated_time(resultSet1.getLong("created_time"))

				list.add(tp);

				

			}

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		obj = new JSONArray(new Gson().toJson(list));

		return obj;

	}

	// public static void selectwithid(int id) {
	//
	//
	//
	//
	// try {
	// Dbqueries.Selectwithcolumn("team_participation", "team_id", id);
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
	    Teamparticipation s = new Gson().fromJson(reader,Teamparticipation.class);
        
        
        System.out.println(s);
       
        
        ObjectMapper mapper = new ObjectMapper();
        
        LinkedHashMap<String,Object> map= mapper.convertValue(s, LinkedHashMap.class);
        
        System.out.println(map);
        
       
        
        map.put("created_time",System.currentTimeMillis() );
        
        map.put("modified_time",System.currentTimeMillis() );

		try {

			// can insert data into table

			Dbqueries.insertDatas(map, "team_participation");

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	public static void updatedata(String id, HashMap<String, Object> map) {

		HashMap<String, Object> map1 = new HashMap<String, Object>();

		map1.put("team_id", id);

		try {

			// can insert data into table

			Dbqueries.updateTable("team_participation", map, map1);

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	public static void deletedata(String id) {

		HashMap<String, Object> map1 = new HashMap<String, Object>();

		map1.put("team_id", id);

		try {

			// can insert data into table

			Dbqueries.delete(map1, "team_participation");

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	public static JSONArray tournamentTeam(LinkedHashMap<String, Object> map) throws JSONException, SQLException {

		String teamid = (String) map.get("teamparticipation");

		String tournamentid = (String) map.get("tournament");

		JSONArray jsonArray = new JSONArray();

		

		if (!(teamid == null)) {
			String query = "select team_participation.team_id,team_participation.tournament_id,team_details.team_name from team_participation INNER JOIN team_details ON team_participation.team_id = team_details.team_id where team_details.team_id=" + teamid + " and " + "team_participation.tournament_id=" + tournamentid + ";";

			System.out.println(query);

			ResultSet resultSet1 = null;

			// where tournament.tournamentid=2 and singleparticipation.user_id =2;

			// imp
			// select single_participation.user_id,single_participation.tournament_id,users.name,users.age,users.address,users.blood_group from single_participation INNER JOIN users ON
			// single_participation.user_id = users.user_id where users.user_id=2 and single_participation.tournament_id=1;

			resultSet1 = Dbutils.executeSelect(query);
			int i = 0;
			while (resultSet1.next()) {
			    JSONObject obj = new JSONObject();
				obj.put("team_id", resultSet1.getInt("team_id"));
				obj.put("tournament_id", resultSet1.getInt("tournament_id"));
				obj.put("team_name", resultSet1.getString("team_name"));

				jsonArray.put(obj);

				i = i + 1;

			}

		}

		else if (teamid == null) {

			String query = "select team_participation.team_id,team_participation.tournament_id,team_details.team_name from team_participation INNER JOIN team_details ON team_participation.team_id = team_details.team_id where " + "team_participation.tournament_id=" + tournamentid + ";";

			System.out.println(query);

			ResultSet resultSet1 = null;

			resultSet1 = Dbutils.executeSelect(query);
			
			while (resultSet1.next()) {
			    JSONObject obj = new JSONObject();
				obj.put("team_id", resultSet1.getInt("team_id"));
				obj.put("tournament_id", resultSet1.getInt("tournament_id"));
				obj.put("team_name", resultSet1.getString("team_name"));
				

				jsonArray.put(obj);
				
			}

		}
		System.out.println(jsonArray);
		return jsonArray;

	}

	// Select single_participation.user_id,single_participation.tournament_id,users.name,users.age,users.address,users.blood_group from single_participation INNER JOIN users ON
	// single_participation.user_id = users.user_id;

	// select with id condition

	// Select single_participation.user_id,single_participation.tournament_id,users.name,users.age,users.address,users.blood_group from single_participation INNER JOIN users ON
	// single_participation.user_id = users.user_id where users.user_id=2;

}
