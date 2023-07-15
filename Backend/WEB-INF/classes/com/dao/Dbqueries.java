//$Id$

package com.dao;

import java.io.PrintWriter;
import java.lang.reflect.Field;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Map.Entry;

import org.codehaus.jackson.map.ObjectMapper;

import org.json.JSONObject;

import com.google.gson.Gson;
import com.model.Users;

public class Dbqueries {

	public static ResultSet selectWithColumn(String tablename, String col, int id) throws Exception {

		// SELECT * FROM COMPANY WHERE AGE >= 25

		String s = "select * from ";

		s = s + tablename + " where " + col + "=" + id+";";

		String query1 = s;

		JSONObject obj = new JSONObject();
		Users user = new Users();
		ResultSet resultSet1 = null;
		System.out.println(query1);
		try {
			Connection c = Dbconnections.startconnection();
			PreparedStatement stmt = c.prepareStatement(query1);
			boolean execute = stmt.execute();

			resultSet1 = stmt.getResultSet();
			
			System.out.println(resultSet1);

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return resultSet1;

	}

	public static ResultSet fetchAll(String table_name) throws Exception {

		String select_all = "select * from ";

		String query = select_all + table_name + ";";
		ResultSet resultSet1 = null;
		try {
			Connection c = Dbconnections.startconnection();
			PreparedStatement stmt = c.prepareStatement(query);
			System.out.println(query);
			stmt.execute();

			resultSet1 = stmt.getResultSet();

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return resultSet1;
	}

	// Successfully working

	public static void updateTable(String tablename, HashMap<String, Object> map, HashMap<String, Object> map1) throws Exception {

		Connection c1 = Dbconnections.startconnection();
		Statement stmt = c1.createStatement();
     
		// UPDATE table_name
		// SET column1 = value1, column2 = value2...., columnN = valueN
		// WHERE [condition]; ok

		String s = "update " + tablename + " set ";

		int k = 1;
		int size = map.size();
		
		for (Map.Entry<String, Object> entry : map.entrySet()) {
//		    if(entry.getValue()==null||entry.getValue()==(Integer)0)continue;
		    
			s += entry.getKey() + " = ? ";
			if (k < size) {
				s += ",";
			}
			k++;
		}
		s += " where ";
		for (Entry<String, Object> entry : map1.entrySet()) {
			s += entry.getKey() + " = " + entry.getValue() + ";";
		}
		System.out.println(s);
		
		PreparedStatement ps = c1.prepareStatement(s);
		int j=0;
		for (Map.Entry<String, Object> entry : map.entrySet()) {

            ps.setObject(++j, entry.getValue());
            System.out.println(entry.getValue());

        }
		ps.executeUpdate();
		Dbconnections.closeconnection(c1);

	}

	// Successfully working

	public static void delete(HashMap<String, Object> map, String segments) throws Exception {

		// DELETE FROM table_name
		// WHERE [condition]; ok

		Connection c1 = Dbconnections.startconnection();
		Statement stmt = c1.createStatement();

		String s = "delete from " + segments;
		s += " where ";
		for (Entry<String, Object> entry : map.entrySet()) {
			s += entry.getKey() + " = " + entry.getValue() + ";";
		}
		System.out.println(s);

		stmt.executeUpdate(s);

	}

	// Successfully working and in use

	public static void insertDatas(LinkedHashMap<String, Object> dataMap, String tableName) throws Exception {

		StringBuilder sql = new StringBuilder("INSERT INTO ").append(tableName).append(" (");
		StringBuilder placeholders = new StringBuilder();

		for (Iterator<String> iter = dataMap.keySet().iterator(); iter.hasNext();) {
			sql.append(iter.next());
			placeholders.append("?");

			if (iter.hasNext()) {
				sql.append(",");
				placeholders.append(",");
			}
		}

		sql.append(") VALUES (").append(placeholders).append(")").append(";");

		String singleString = sql.toString();

		System.out.println(singleString);

		JSONObject obj = new JSONObject();
		Users user = new Users();
		ResultSet resultSet1 = null;

		Connection c = Dbconnections.startconnection();
		PreparedStatement ps = c.prepareStatement(singleString);

		int j = 0;

		for (Map.Entry<String, Object> entry : dataMap.entrySet()) {
           
			ps.setObject(++j, entry.getValue());
			 System.out.println(entry.getValue());

		}
		

		ps.executeUpdate();

	}

}
