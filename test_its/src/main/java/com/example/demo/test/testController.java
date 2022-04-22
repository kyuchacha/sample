package com.example.demo.test;

import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class testController {

	@GetMapping("/")
	
	public String index() {
		return "index";
	}
	
	@RequestMapping("/hello")
	public String hello(@RequestParam Map<String, Object> param, ModelMap model) {
		model.put("test2", "modelandview!!!!!!!!!!");
		model.put("test3","zzzzzzzzzzzzz");
		model.put("test4", "되는겁니까?????????????????????");
		return "hello";
	}
	

	
}
