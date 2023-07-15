//$Id$
package com.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Map.Entry;

import org.json.JSONObject;

import com.google.gson.Gson;
import com.model.Users;

public class Dbutils {

	public static ResultSet executeSelect(String query) {
		try {
			return Dbconnections.startconnection().createStatement().executeQuery(query);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return null;
	}

	public static Date millitodate() {
		long millis = System.currentTimeMillis();
		java.util.Date date = new java.util.Date(millis);
		System.out.println(date);
		return date;
	}

	public static Map<String, Object> querytohm(Map<String, String[]> queryString) {
		if (queryString == null) {
			return null;
		} else {
			Map<String, Object> map = new LinkedHashMap();
			Iterator var3 = queryString.entrySet().iterator();

			while (var3.hasNext()) {
				Entry<String, String[]> data = (Entry) var3.next();
				if (checkInt(((String[]) data.getValue())[0])) {
					map.put((String) data.getKey(), Integer.parseInt(((String[]) data.getValue())[0]));
				} else {
					map.put((String) data.getKey(), ((String[]) data.getValue())[0]);
				}

			}
			return map;
		}

	}

	public static boolean checkInt(String str) {
		if (str == null) {

			return false;
		} else {
			try {
				Integer.parseInt(str);
				return true;
			} catch (Exception e) {
				return false;
			}
		}
	}

	// Successfully working

	public static void insertinto(String tablename, ArrayList<Object> array, String columnNames) throws Exception {

		Connection c = Dbconnections.startconnection();

		String s = "insert into " + tablename + "(" + columnNames + ") " + "values(";
		int size = array.size();
		for (int i = 0; i < size - 1; i++) {
			s += "?,";
		}
		s += "?);";
		System.out.println(s);
		PreparedStatement pst = c.prepareStatement(s);
		int j = 0;
		for (int i = 1; i <= size; i++) {
			pst.setObject(i, array.get(j++));
		}
		pst.executeUpdate();

	}

	public static String Inserttable(String table_name, String[] cols) throws Exception {

		String insert_query = "insert into " + table_name + "(";

		String columns = "";

		String startss = "(";
		int num_of_cols = cols.length;
		for (int i = 0; i < num_of_cols; i++) {
			if (i == num_of_cols - 1) {
				columns = columns + cols[i] + ") values";
				startss = startss + "?);";

			} else {

				columns = columns + cols[i] + ",";

				startss = startss + "?,";
			}

			insert_query = insert_query + columns + startss;

		}
		return insert_query;
	}

	public static JSONObject login(HashMap<String, Object> map) throws Exception {

		JSONObject obj = new JSONObject();

		String s = " SELECT user_id , pwd , role FROM users where ";

		int k = 1;
		int size = map.size();

		for (Entry<String, Object> entry : map.entrySet()) {

			s += entry.getKey() + " = " + entry.getValue();
			if (k < size) {
				s += " AND ";
				k++;
			}
		}
		s += ";";

		System.out.println(s);
		Connection c;
		try {
			c = Dbconnections.startconnection();
			PreparedStatement stmt = c.prepareStatement(s);

			stmt.execute();
			ResultSet resultSet = stmt.getResultSet();

			Users user = new Users();
			while (resultSet.next()) {
				user.setUser_id(resultSet.getInt("user_id")).setPwd(resultSet.getString("pwd")).setRole(resultSet.getInt("role"));
			}

			obj = new JSONObject(new Gson().toJson(user));

			ResultSetMetaData rsmd = resultSet.getMetaData();
			int columnsNumber = rsmd.getColumnCount();
			while (resultSet.next()) {
				System.out.println("login successfully");

			}

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return obj;

	}

	public static String insertData(HashMap<String, Object> dataMap, String tableName) throws Exception {

		// INSERT INTO table_name(column1, column2, …)
		// VALUES (value1, value2, …);

		int size = dataMap.size();

		String sql = "INSERT INTO " + tableName;

		Iterator<Map.Entry<String, Object>> it = dataMap.entrySet().iterator();

		int counter = 1;
		while (it.hasNext()) {
			Map.Entry pairs = (Map.Entry) it.next();
			sql += pairs.getKey() + "=" + pairs.getValue();
			if (size > counter)
				sql += ", ";
			counter++;
		}
		sql += ";";

		return sql;
	}

	// public static void delete(JsonObject obj, String tableName) {
	//
	//
	// Connection c1 = Dbconnections.startconnection();
	// Statement stmt = c1.createStatement();
	//
	// ArrayList<String> keyList = new ArrayList<String>(obj.keySet());
	//
	// ArrayList<Object> valueList = new ArrayList<Object>(obj.values());
	//
	// String separator="AND ";
	//
	//
	//
	// String query="DELETE FROM "+tableName+" WHERE "+ ";";
	//
	//// stmt.executeUpdate(query, valueList);
	//
	// }

	// public static JSONArray selectdata() {
	//
	// JSONArray obj = new JSONArray();
	//
	// ArrayList<Users> list= new ArrayList<Users>();
	//// JsonElement list = null;
	//
	// try {
	//
	// ResultSet resultSet1=Dbqueries.get_all_data("users");
	// while(resultSet1.next()) {
	//
	// Users user =new Users();
	// user.setUser_id(resultSet1.getInt("user_id")).setPwd(resultSet1.getString("pwd")).setName(resultSet1.getString("name")).setAge(resultSet1.getInt("age")).setAddress(resultSet1.getString("address")).setRole(resultSet1.getInt("role")).setBlood_group(resultSet1.getString("blood_group"));
	//
	// list.add(user);
	//
	// }
	//
	//
	//
	// } catch (Exception e) {
	// // TODO Auto-generated catch block
	// e.printStackTrace();
	// }
	// System.out.println(new Gson().toJson(list));
	// obj = new JSONArray(new Gson().toJson(list));
	//
	//
	// System.out.println(obj);
	//
	// return obj;
	//
	// }

	// public static void selectdata() {
	//
	// HashMap<String, String> map1 = new HashMap<String, String>();
	//
	//
	// try {
	// Dbqueries.get_all_data("tournaments");
	// } catch (Exception e) {
	// // TODO Auto-generated catch block
	// e.printStackTrace();
	// }
	//
	//
	// }

}
