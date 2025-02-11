package org.example.assignment.finalexp;

public class Test {
    public static void main(String[] args){
        stdetails stud=new stdetails();
        stud.displaydetails();

        student b1 = new student("jamie", "commerce");
        System.out.println("name : " + b1.getName());
        System.out.println("course: " + b1.getcourse());
        b1.studentInfo();

        stmail e1=new stmail("louisa","economics",);
        System.out.println("mail: "+e1.getMail());
        System.out.println("course: "+e1.getcourse());
        System.out.println("File Size: "+e1.getSize()+"MB");
        e1.studentInfo();
    }
}
