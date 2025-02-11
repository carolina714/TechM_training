package org.example.assignment.finalexp;

public class student {
    private final String name;
    private final String course;

    Book(String name,String course){
        this.name=name;
        this.course=course;
    }

    public String getName() {
        return name;
    }

    public String getCourse() {
        return course;
    }

    public final void studentInfo(){
        System.out.println("Student: "+getName()+"\nCourse: "+getCourse());
    }
}
