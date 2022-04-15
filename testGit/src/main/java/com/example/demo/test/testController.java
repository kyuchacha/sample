package com.example.demo.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class testController {

	@GetMapping("/")
	public String index() {
		System.out.println("????????????");
		return "index";
	}
	@GetMapping("/hello")
	public String hello() {
		return "hello!!!";
	}
}
