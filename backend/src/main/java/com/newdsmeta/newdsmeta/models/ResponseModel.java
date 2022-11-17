package com.newdsmeta.newdsmeta.models;

public class ResponseModel {
	
	private Long id;
	private String title;
	private boolean status;
	private String msg;
	
	public ResponseModel(){}

	public ResponseModel(Long id, String title, boolean status, String msg) {
		this.id = id;
		this.title = title;
		this.status = status;
		this.msg = msg;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}
	
	

}
