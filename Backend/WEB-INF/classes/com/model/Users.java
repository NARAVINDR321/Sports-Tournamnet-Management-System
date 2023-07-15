//$Id$
package com.model;

import java.math.BigInteger;
import java.sql.Date;

public class Users {
	
	private int user_id;
	private String pwd;
    private String name;
    private int age;
    private String address;
    private int role;
    private String blood_group;
    private long created_time;
    private long modified_time;
	
	
	public int getUser_id() {
		return user_id;
	}
	public Users setUser_id(int user_id) {
		this.user_id = user_id;
		return this;
	}
	public String getPwd() {
		return pwd;
	}
	public Users setPwd(String pwd) {
		this.pwd = pwd;
		return this;
	}
	public String getName() {
		return name;
	}
	public Users setName(String name) {
		this.name = name;
		return this;
	}
	public int getAge() {
		return age;
	}
	public Users setAge(int age) {
		this.age = age;
		return this;
	}
	public String getAddress() {
		return address;
	}
	public Users setAddress(String address) {
		this.address = address;
		return this;
	}
	public int getRole() {
		return role;
	}
	public Users setRole(int role) {
		this.role = role;
		return this;
	}
	public String getBlood_group() {
		return blood_group;

	}
	public Users setBlood_group(String blood_group) {
		this.blood_group = blood_group;
		return this;
	}
	public long getCreated_time() {
		return created_time;
	}
	public Users setCreated_time(long created_time) {
		this.created_time = created_time;
		return this;
	}
	public long getModified_time() {
		return modified_time;
	}
	public Users setModified_time(long modified_time) {
		this.modified_time = modified_time;
		return this;
	}
	
	
	

}
