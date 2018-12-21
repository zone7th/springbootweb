package priv.rlliu.springbootweb.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Spring Boot Hello案例
 *
 * Created by rlliu on 26/09/2017.
 */
@Controller
@RequestMapping("/book")
public class BookController {

    @RequestMapping(value = "/hello")
    public String sayHello() {
        return "home";
    }
}
