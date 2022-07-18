import java.util.*;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Predicate;

public class Employee {

    String ename;
    int salary;
    String gender;

    Employee(String ename, int salary, String gender) {
        this.ename = ename;
        this.salary = salary;
        this.gender = gender;
    }
}

class test {

    public static void main(String[] args) {
        List<Employee> al = new ArrayList<Employee>();
        al.add(new Employee("David", 50000, "male"));
        al.add(new Employee("Mary", 60000, "female"));
        al.add(new Employee("Scott", 70000, "male"));
        al.add(new Employee("Julie", 80000, "female"));
        al.add(new Employee("John", 90000, "male"));
        
        Function<Employee,Integer> f = e -> (e.salary * 10) / 100;
//task 1 to calculate the bonus of employee.
        Predicate<Integer> p = b -> b >= 5000;
        Consumer<Employee> c = e -> {
            System.out.println(e.ename);
            System.out.println(e.salary);
            System.out.println(e.gender);
        };
        for(Employee a:al){
            int bonus =f.apply(a);
            if(p.test(bonus)){
               c.accept(a);
               System.out.println("Bonus is "+bonus);
            }
            
        }

    }
}
