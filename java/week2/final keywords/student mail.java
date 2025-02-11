package org.example.assignment.finalexp;

public class Stmail extends student{
    private int size;

    Ebook(String name, String course, int mail){
        super(name,course);
        this.mail=mail;
    }

    public int getMail() {
        return mail;
    }

 /*   public void studentInfo(){
        System.out.println("Stmail: "+getCourse()+"\File Size: "+getMail());
    }*/
}
