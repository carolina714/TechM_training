package org.example.assignment.oopeg;

import java.util.ArrayList;

public class Mainc {
    public static void main(String[] args){
        ArrayList<Car> cars= new ArrayList<>();

        cars.add(new Car("BMW","480C", 2019));
        cars.add(new ElectricCar("Mahindra","BeV",2020,75));
        cars.add(new ElectricCar("Jeep","TrailHawk",2016,89));
        cars.add(new Car("MC","shortie",2014));

        for(Car c: cars){
            c.startEngine();
        }

    }
}
