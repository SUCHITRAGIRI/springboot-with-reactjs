package com.example.springbootwithreactjs;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PongController {
@RequestMapping(value = "/pong", method = RequestMethod.GET)
@CrossOrigin("*")
public String pong(){
return "pong";
}
   
}
