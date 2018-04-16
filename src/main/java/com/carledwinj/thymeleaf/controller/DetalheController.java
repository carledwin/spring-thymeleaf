package com.carledwinj.thymeleaf.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.carledwinj.thymeleaf.model.Detalhe;

@Controller
@RequestMapping("/detalhes")
public class DetalheController {
    
    public static final List<Detalhe> DADOS = new ArrayList<>(Arrays.asList(
            new Detalhe(1L, "Detalhe 1"),
            new Detalhe(2L, "Detalhe 2"),
            new Detalhe(3L, "Detalhe 3"),
            new Detalhe(4L, "Detalhe 4"),
            new Detalhe(5L, "Detalhe 5"),
            new Detalhe(6L, "Detalhe 6"))); 
    
    @GetMapping
    public ModelAndView lista(Detalhe detalhe) {
        ModelAndView model = new ModelAndView();
        
        List<Detalhe> lista = DADOS.stream()
                .filter(d -> detalhe.getId() == null || detalhe.getId().equals(d.getId()))
                .filter(d -> StringUtils.isEmpty(detalhe.getDescricao()) || d.getDescricao().startsWith(detalhe.getDescricao()))
                .collect(Collectors.toList());
        
        model.addObject("detalhes", lista);
        
        return model;
    }
}