
package com.rc.app.framework.webapp.util;

import java.io.IOException;
import java.io.Writer;
import java.util.Collection;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;

import net.sf.json.JSON;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import net.sf.json.xml.XMLSerializer;

import org.springframework.util.Assert;

import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * Utils - JSON
 * 
 * 
 */
public final class JsonUtils {

	/** ObjectMapper */
	private static ObjectMapper mapper = new ObjectMapper();

	/**
	 * 不可实例化
	 */
	private JsonUtils() {
	}

	/**
	 * 将对象转换为JSON字符串
	 * 
	 * @param value
	 *            对象
	 * @return JSOn字符串
	 */
	public static String toJson(Object value) {
		try {
			return mapper.writeValueAsString(value);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 将JSON字符串转换为对象
	 * 
	 * @param json
	 *            JSON字符串
	 * @param valueType
	 *            对象类型
	 * @return 对象
	 */
	public static <T> T toObject(String json, Class<T> valueType) {
		Assert.hasText(json);
		Assert.notNull(valueType);
		try {
			return mapper.readValue(json, valueType);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 将JSON字符串转换为对象
	 * 
	 * @param json
	 *            JSON字符串
	 * @param typeReference
	 *            对象类型
	 * @return 对象
	 */
	public static <T> T toObject(String json, TypeReference<?> typeReference) {
		Assert.hasText(json);
		Assert.notNull(typeReference);
		try {
			return mapper.readValue(json, typeReference);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 将JSON字符串转换为对象
	 * 
	 * @param json
	 *            JSON字符串
	 * @param javaType
	 *            对象类型
	 * @return 对象
	 */
	public static <T> T toObject(String json, JavaType javaType) {
		Assert.hasText(json);
		Assert.notNull(javaType);
		try {
			return mapper.readValue(json, javaType);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 将对象转换为JSON流
	 * 
	 * @param writer
	 *            writer
	 * @param value
	 *            对象
	 */
	public static void writeValue(Writer writer, Object value) {
		try {
			mapper.writeValue(writer, value);
		} catch (JsonGenerationException e) {
			e.printStackTrace();
		} catch (JsonMappingException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * 
	 * @Title: jsonStrToCollection 
	 * @Description: 将json格式字条串转换为Collection<T>对象
	 * @param jsonStr
	 * @param c
	 * @return Collection<T>
	 * @author cwq
	 */
	@SuppressWarnings("unchecked")
	public static <T> Collection<T> jsonStrToCollection(String jsonStr,
			Class<?> c) {
		JSONArray array = JSONArray.fromObject(jsonStr);
		Collection<T> collection = JSONArray.toCollection(array, c);
		return collection;
	}
	
	/** 
     * 将xml字符串转换为JSON对象 
     * @param xmlFile xml字符串 
     * @return JSON对象 
     */  
    public static JSON xmlToJSON(String xmlString) {  
        XMLSerializer xmlSerializer = new XMLSerializer();  
        JSON json = xmlSerializer.read(xmlString);  
        return json;  
    }
    
    /**
     * 解析成map
     * @param s
     * @return
     */
    @SuppressWarnings("unchecked")
	public static Map<String,Object> JSONToMap(String str){
    	Map<String, Object> map = new LinkedHashMap<String, Object>();
    	JSONObject jsonObject = JSONObject.fromObject(str);
    	for (Object keyRoot : jsonObject.keySet()) {
			Object valueRoot = jsonObject.get(keyRoot);
			if(valueRoot instanceof Map){
				for (Object keyFirst : ((Map<String, Object>) valueRoot).keySet()) {
					Object valueFirst = ((Map<String, Object>) valueRoot).get(keyFirst);
					if(valueFirst instanceof JSONArray){
						Iterator<JSONObject> iterator = ((JSONArray) valueFirst).iterator();
						for(int i=0; iterator.hasNext();i++){
							map.put(keyFirst.toString() + i, JSONToMap(iterator.next().toString()));
						}
					}else{
						map.put(keyFirst.toString(), valueFirst);
					}
				}
			}else{
				map.put(keyRoot.toString(), valueRoot);
			}
		}
    	return map;
    }
}