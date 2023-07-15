
package com.servlet;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.lang.reflect.Method;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedHashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.dao.Dbutils;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.handlers.Singleparticipationhandler;
import com.handlers.Teamparticipationhandler;
import com.handlers.Userhandler;

/**
 * 
 * Servlet implementation class MainServlet
 */

@WebServlet("/v1/*")

public class MainServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public MainServlet() {
        super();

        // TODO Auto-generated constructor stub
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
     *      response)
     */

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        // selects ,login

        response.setContentType("text/html");

        PrintWriter out = response.getWriter();

        String url = request.getRequestURI().toString();
        String[] segments = url.split("/");
        int l = segments.length;

       

        LinkedHashMap<String, Object> hm = new LinkedHashMap<String, Object>();

        for (int i = 3; i < segments.length - 1; i++) {

            System.out.println(segments[i]);

            hm.put(segments[i], segments[i + 1]);

            i = i + 1;

        }

        System.out.println(l);

        if (!segments[3].equals("login") && hm.size() <= 1 && l < 6) {

            String str = segments[3];

            str = str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();

            Class<?> clazz;

            try {
                clazz = Class.forName("com.handlers." + str + "handler");

                try {

                    Object o = clazz.getConstructor().newInstance();

                    if (l == 5)

                    {
                        JSONArray obj1 = new JSONArray();

                        Method m = clazz.getDeclaredMethod("selectwithid", int.class);
                        obj1 = (JSONArray) m.invoke(o, Integer.valueOf(segments[4]));
                        out.println(obj1);

                    } else {
                        JSONArray obj1 = new JSONArray();

                        System.out.println(segments[3]);
                        Method m = clazz.getDeclaredMethod("selectdata");
                        // m.setAccessible(true);
                        obj1 = (JSONArray) m.invoke(o, null);
                        out.println(obj1);
                        // m.setAccessible(true); s

                    }

                } catch (Exception e) {
                    // TODO Auto-generated catch block
                    out.println("uri handler not found");
                }
                System.out.println(clazz);

            } catch (ClassNotFoundException e) {
                // TODO Auto-generated catch block
                out.println("uri  is invalid");
            }

            String st = segments[3] + "handler Select method";

            System.out.println(st);

        }

        else if (!segments[3].equals("login") && l >= 6) {

            System.out.println("print in hashmap method");

            String k = (String) hm.get("tournament");

            String str = "select event_type from tournaments where tournament_id=" + k + ";";

            System.out.println(str);

            ResultSet resultSet1 = Dbutils.executeSelect(str);

            int n = 0;
            try {
                while (resultSet1.next()) {
                    n = resultSet1.getInt("event_type");

                }
            } catch (SQLException e1) {
                // TODO Auto-generated catch block
                e1.printStackTrace();
            }

            System.out.println(n);

            System.out.println(segments[5]);

            if (n == 0 && segments[5].equals("singleparticipation")) {

                System.out.println("print in single method");
                try {
                    JSONArray obj = new JSONArray();

                    obj = Singleparticipationhandler.tournamentSingle(hm);

                    out.println(obj);

                } catch (JSONException e) {
                    // TODO Auto-generated catch block
                    e.printStackTrace();
                } catch (SQLException e) {
                    // TODO Auto-generated catch block
                    e.printStackTrace();
                }

            }

            else if (n == 1 && segments[5].equals("teamparticipation")) {

                System.out.println("print in team method");

                System.out.println("print in team method");
                try {
                    JSONArray obj = new JSONArray();

                    obj = Teamparticipationhandler.tournamentTeam(hm);

                    out.println(obj);

                } catch (JSONException e) {
                    // TODO Auto-generated catch block
                    e.printStackTrace();
                } catch (SQLException e) {
                    // TODO Auto-generated catch block
                    e.printStackTrace();
                }

            }

        }

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
     *      response)
     */

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        // insert , signup ,login

        PrintWriter out = response.getWriter();
        System.out.println("in post");

        String url = request.getRequestURI().toString();
        String[] segments = url.split("/");
        String lasturl = segments[segments.length - 1];
        String suburl = segments[segments.length - 2];
        
        
        StringBuilder buffer = new StringBuilder();
        BufferedReader reader = request.getReader();
        
       

       
        
        
        if (segments[3].equals("login")) {
            
            try {
                String line;
                while ((line = reader.readLine()) != null) {
                    buffer.append(line);
                    buffer.append(System.lineSeparator());
                }
                String data = buffer.toString();

                JSONObject js = new JSONObject(data);

                System.out.println(js);

                LinkedHashMap<String, String> map = hmfromjson(data);
              JSONObject obj = Userhandler.login(js);
              out.println(obj);
          } catch (Exception e) {
              // TODO Auto-generated catch block
              e.printStackTrace();
          }

            


        }

        else {

 

            String str = segments[3];

            str = str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();

            Class<?> clazz;
            try {
                clazz = Class.forName("com.handlers." + str + "handler");

                try {

                    Object o = clazz.getConstructor().newInstance();

                    Method m = clazz.getDeclaredMethod("insertdata", BufferedReader.class);
                    // m.setAccessible(true);
                    m.invoke(o, reader);

                } catch (Exception e) {
                    // TODO Auto-generated catch block
                    e.printStackTrace();
                }
                System.out.println(clazz);

            } catch (ClassNotFoundException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }

            String st = segments[3] + "handler insert method";

            System.out.println(st);

        }

    }

    // String name = data.get("name").getAsString();

    protected void doDelete(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        // delete

        System.out.println("in delete");

        String url = request.getRequestURI().toString();
        String[] segments = url.split("/");
        String lasturl = segments[segments.length - 1];
        String suburl = segments[segments.length - 2];

        String str = segments[3];

        str = str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();

        Class<?> clazz;

        try {
            clazz = Class.forName("com.handlers." + str + "handler");

            try {

                Object o = clazz.getConstructor().newInstance();

                Method m = clazz.getDeclaredMethod("deletedata", String.class);
                // m.setAccessible(true);
                m.invoke(o, segments[4]);

            } catch (Exception e) {

                // TODO Auto-generated catch block
                e.printStackTrace();
            }
            System.out.println(clazz);

        } catch (ClassNotFoundException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        String st = segments[3] + "handler delete method";

        System.out.println(st);

        // try {
        //
        //// can insert data into table
        //
        // Dbqueries.delete(map,segments[3]);
        //
        // } catch (Exception e) {
        // // TODO Auto-generated catch block
        // e.printStackTrace();
        // }
        //
        //
    }

    protected void doPut(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        System.out.println("in update");

        String url = request.getRequestURI().toString();
        String[] segments = url.split("/");
        String lasturl = segments[segments.length - 1];
        String suburl = segments[segments.length - 2];

        PrintWriter out = response.getWriter();

//		Users user = new Gson().fromJson(request.getReader(),Users.class);

//		StringBuilder buffer = new StringBuilder();
        BufferedReader reader = request.getReader();

//		String line;
//		while ((line = reader.readLine()) != null) {
//			buffer.append(line);
//			buffer.append(System.lineSeparator());
//		}
//		String data = buffer.toString();
//
//		JSONObject js = new JSONObject(data);
//		
//		System.out.println(js);
//
//		HashMap<String, String> map = hmfromjson(data);

        String str = segments[3];
        System.out.println(segments);

        str = str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();

        StringBuilder qu;

        Class<?> clazz;
        try {
            clazz = Class.forName("com.handlers." + str + "handler");

            try {

                Object o = clazz.getConstructor().newInstance();

                Method m = clazz.getDeclaredMethod("updatedata", String.class, BufferedReader.class);
                // m.setAccessible(true);
                m.invoke(o, segments[4], reader);

            } catch (Exception e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }

        } catch (ClassNotFoundException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        String st = segments[3] + "handler update method";

        System.out.println(st);

        try {

            // can insert data into table

            // Dbqueries.updatetable(segments[3],map,5);

        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

    }

    public LinkedHashMap<String, String> hmfromjson(String jsonString) {

        LinkedHashMap<String, String> map = new Gson().fromJson(jsonString,
                new TypeToken<LinkedHashMap<String, String>>() {
                }.getType());
        System.out.println(map);
        return map;

    }

    // return resp;

}
