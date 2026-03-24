package com.aicodereview;

import java.util.*;

    public class Test {
        public ArrayList<String> u = new ArrayList<>();

        public void AddUser(String name) {
            if (name != null) {
                u.add(name);
            } else {
                System.out.println("Error");
            }
        }

        public void printAll() {
            for (int i = 0; i < u.size(); i++) {
                System.out.println("User: " + u.get(i));
            }
        }
    }
