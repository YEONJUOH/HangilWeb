<%@page import="hangil.Member"%>
<%@page import="hangil.memberBook"%>
<%@page import="java.util.List"%>
<%@page import="net.sf.json.JSONArray"%>
<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<%!memberBook book;%>
<%

String id = request.getParameter("id");

if(book==null){
	
	book = new memberBook();
	book.addM("duswn12", "1234!@","duswn12@naver.com", "YEONJUOH");
}


String re = book.checkId(id);	

%>
<%=re%>