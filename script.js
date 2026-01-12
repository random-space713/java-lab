const programs = [
    {
        id: "1a",
        filename: "Lab_program1a.java",
        content: `import java.util.Scanner;

public class Lab_program1a {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter rows and columns for matrix A (m n): ");
        int m = scanner.nextInt();
        int n = scanner.nextInt();

        System.out.print("Enter rows and columns for matrix B (p q): ");
        int p = scanner.nextInt();
        int q = scanner.nextInt();

        if (n != p) {
            System.out.println("Error: The number of columns in matrix A must be equal to the number of rows in matrix B.");
            return;
        }

        int[][] matrixA = new int[m][n];
        int[][] matrixB = new int[p][q];

        System.out.println("Enter the elements of matrix A:");
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                matrixA[i][j] = scanner.nextInt();
            }
        }

        System.out.println("Enter the elements of matrix B:");
        for (int i = 0; i < p; i++) {
            for (int j = 0; j < q; j++) {
                matrixB[i][j] = scanner.nextInt();
            }
        }

        int[][] resultMatrix = multiplyMatrices(matrixA, matrixB);

        System.out.println("Matrix A:");
        printMatrix(matrixA);
        System.out.println("Matrix B:");
        printMatrix(matrixB);
        System.out.println("Resultant Matrix:");
        printMatrix(resultMatrix);
    }

    private static int[][] multiplyMatrices(int[][] matrixA, int[][] matrixB) {
        int m = matrixA.length;
        int n = matrixA[0].length;
        int q = matrixB[0].length;
        int[][] result = new int[m][q];
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < q; j++) {
                for (int k = 0; k < n; k++) {
                    result[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
        }
        return result;
    }

    private static void printMatrix(int[][] matrix) {
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[0].length; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }
    }
}`
    },
    {
        id: "1b",
        filename: "Lab_program1b.java",
        content: `import java.util.ArrayList;

class Product {
    String name;
    double price;
    int quantity;

    public Product() {
        this.name = "Unnamed Product";
        this.price = 0.0;
        this.quantity = 0;
    }

    public Product(String name, double price, int quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    public Product(Product p) { // changed parameter to 'p' for brevity
        this.name = p.name;
        this.price = p.price;
        this.quantity = p.quantity;
    }

    public void displayProduct() {
        System.out.println("Product Name: " + name + ", Price: $" + price + ", Quantity: " + quantity);
    }
}

class Inventory {
    // Renamed 'products' to 'items' to avoid confusing it with the Class name
    private ArrayList<Product> items;

    public Inventory() {
        items = new ArrayList<>();
    }

    public void addProduct(Product obj) {
        items.add(obj);
        System.out.println("Item added: " + obj.name);
    }

    public void displayInventory() {
        System.out.println("\n--- Inventory Details ---");
        // Read as: "For every Product 'p' in our 'items' list..."
        for (Product p : items) {
            p.displayProduct();
        }
    }
}

public class Lab_program1b {
    public static void main(String[] args) {
        Inventory myInventory = new Inventory();

        // Using 'obj' names as requested
        Product obj1 = new Product();
        Product obj2 = new Product("Laptop", 1200.50, 5);
        Product obj3 = new Product(obj2); // Creating a copy of obj2

        myInventory.addProduct(obj1);
        myInventory.addProduct(obj2);
        myInventory.addProduct(obj3);

        myInventory.displayInventory();
    }
}`
    },
    {
        id: "2",
        filename: "Student1.java",
        content: `import java.util.Scanner;

public class Student1 {
    String usn, name, branch;
    long ph;

    // Default Constructor
    Student1() {
        usn = name = branch = "no value";
        ph = 0;
    }

    // This is exactly how you want it: parameters assigned to class variables
    void read_data(String u, String n, String b, long p) {
        usn = u;
        name = n;
        branch = b;
        ph = p;
    }

    void display() {
        System.out.println(usn + "\t\t" + name + "\t\t" + branch + "\t\t" + ph);
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter number of records:");
        int no = sc.nextInt();
        sc.nextLine(); // "The Buffer Clearer" - prevents skipping the first USN input

        Student1[] s = new Student1[no];

        for (int i = 0; i < s.length; i++) {
            System.out.println("Enter record for Student " + (i + 1));
            
            System.out.println("Enter student USN:");
            String u = sc.nextLine();
            
            System.out.println("Enter student Name:");
            String n = sc.nextLine();
            
            System.out.println("Enter student Branch:");
            String b = sc.nextLine();
            
            System.out.println("Enter student Phone number:");
            long p = sc.nextLong();
            sc.nextLine(); // Clear buffer after reading long

            s[i] = new Student1();
            s[i].read_data(u, n, b, p); // Passing the variables exactly as requested
        }

        System.out.println("\nUSN \t\t NAME \t\t BRANCH \t PHONE NO");
        for (int i = 0; i < s.length; i++) {
            s[i].display();
        }
    }
}`
    },
    {
        id: "3a",
        filename: "Method_overloading.java",
        content: `public class Method_overloading {

    int add(int a, int b) {
        int sum = a + b;
        return sum;
    }

    int add(int a, int b, int c) {
        int sum = a + b + c;
        return sum;
    }

    double add(double a, double b) {
        double sum = a + b;
        return sum;
    }

    public static void main(String args[]) {
        Method_overloading obj = new Method_overloading();
        
        System.out.println(obj.add(10, 20));
        System.out.println(obj.add(10, 20, 30));
        System.out.println(obj.add(10.4, 20.3));
    }
}`
    },
    {
        id: "3b",
        filename: "Constructor_overloading.java",
        content: `public class Constructor_overloading {
    int id;
    String name;

    Constructor_overloading() {
        System.out.println("This a default constructor");
    }

    Constructor_overloading(int i, String n) {
        id = i;
        name = n;
    }

    public static void main(String[] args) {
        Constructor_overloading s1 = new Constructor_overloading();
        System.out.println("\\nDefault Constructor values: \\n");
        System.out.println("Student Id : " + s1.id + "\\nStudent Name : " + s1.name);

        System.out.println("\\nParameterized Constructor values: \\n");
        Constructor_overloading s2 = new Constructor_overloading(10, "David");
        System.out.println("Student Id : " + s2.id + "\\nStudent Name : " + s2.name);
    }
}`
    },
    {
        id: "4",
        filename: "Multilevel.java",
        content: `class Staff {
    int staffid, phone, salary;
    String name;

    public Staff(int id, int no, int sal, String na) {
        staffid = id;
        phone = no;
        salary = sal;
        name = na;
    }

    void display() {
        System.out.println("ID: " + staffid + " | Name: " + name + " | Phone: " + phone + " | Salary: " + salary);
    }
}

class Teaching extends Staff {
    String domain;
    int publications;

    public Teaching(int id, int no, int sal, String na, String d, int p) {
        super(id, no, sal, na);
        domain = d;
        publications = p;
    }

    @Override
    void display() {
        System.out.print("Teaching Staff   -> ");
        super.display();
        System.out.println("   Domain: " + domain + " | Publications: " + publications);
    }
}

class Technical extends Staff {
    String skills;

    public Technical(int id, int no, int sal, String na, String sk) {
        super(id, no, sal, na);
        skills = sk;
    }

    @Override
    void display() {
        System.out.print("Technical Staff  -> ");
        super.display();
        System.out.println("   Skills: " + skills);
    }
}

class Contract extends Staff {
    int period;

    public Contract(int id, int no, int sal, String na, int pd) {
        super(id, no, sal, na);
        period = pd;
    }

    @Override
    void display() {
        System.out.print("Contract Staff   -> ");
        super.display();
        System.out.println("   Period: " + period + " years");
    }
}

public class Multilevel {
    public static void main(String args[]) {
        // Teaching Staff
        Teaching t1 = new Teaching(11, 987654321, 31000, "Anil", "CSE", 10);
        Teaching t2 = new Teaching(12, 986655546, 30000, "Anu", "ISE", 9);
        Teaching t3 = new Teaching(13, 999933442, 32000, "Anusha", "EEE", 8);

        // Technical Staff
        Technical te1 = new Technical(21, 994433221, 22000, "Kumar", "C");
        Technical te2 = new Technical(22, 998877665, 28000, "Krisna", "Java");
        Technical te3 = new Technical(23, 991654321, 33000, "Kiran", "Python");

        // Contract Staff
        Contract ct1 = new Contract(31, 998765434, 35000, "Suresh", 3);
        Contract ct2 = new Contract(32, 912345678, 39000, "Meghana", 2);
        Contract ct3 = new Contract(33, 992233445, 30000, "Uma", 4);

        System.out.println("--- Staff Details ---");
        t1.display(); t2.display(); t3.display();
        te1.display(); te2.display(); te3.display();
        ct1.display(); ct2.display(); ct3.display();
    }
}`
    },
    {
        id: "5",
        filename: "Exception_handle.java",
        content: `import java.util.Scanner;

class Exception_handle {
    public static void main(String[] args) {
        int a, b, result;
        Scanner input = new Scanner(System.in);

        System.out.println("Input two integers (a b): ");
        a = input.nextInt();
        b = input.nextInt();

        try {
            result = a / b;
            System.out.println("Result = " + result);
        } catch (ArithmeticException e) {
            System.out.println("Exception caught: Divide by zero error " + e);
        } finally {
            input.close();
        }
    }
}`
    },
    {
        id: "6",
        filename: "Program6_All_Files.java",
        content: `// ==========================================
// File: Converter.java
// ==========================================
import java.util.*;
import com.mycompany.converter.Currency;
import com.mycompany.converter.Distance;
import com.mycompany.converter.Time;

class Converter {
    public static void main(String args[]) {
        Scanner s = new Scanner(System.in);
        int choice, ch;
        Currency c = new Currency();
        Distance d = new Distance();
        Time t = new Time();

        do {
            System.out.println("1.Dollar to Rupee\\n2.Rupee to Dollar\\n3.Euro to Rupee\\n4.Rupee to Euro\\n5.Yen to Rupee\\n6.Rupee to Yen");
            System.out.println("7.Meter to KM\\n8.KM to Meter\\n9.Miles to KM\\n10.KM to Miles");
            System.out.println("11.Hours to Minutes\\n12.Hours to Seconds\\n13.Seconds to Hours\\n14.Minutes to Hours");
            System.out.print("Enter your choice: ");
            choice = s.nextInt();

            switch (choice) {
                case 1: c.dollartorupee(); break;
                case 2: c.rupeetodollar(); break;
                case 3: c.eurotorupee(); break;
                case 4: c.rupeetoeuro(); break;
                case 5: c.yentorupee(); break;
                case 6: c.rupeetoyen(); break;
                case 7: d.mtokm(); break;
                case 8: d.kmtom(); break;
                case 9: d.milestokm(); break;
                case 10: d.kmtomiles(); break;
                case 11: t.hourstominutes(); break;
                case 12: t.hourstoseconds(); break;
                case 13: t.secondstohours(); break;
                case 14: t.minutestohours(); break;
                default: System.out.println("Invalid choice");
            }

            System.out.print("Enter 0 to quit and 1 to continue: ");
            ch = s.nextInt();
        } while (ch == 1);
    }
}

// ==========================================
// File: Currency.java
// ==========================================
package com.mycompany.converter;
import java.util.Scanner;

public class Currency {
    Scanner s = new Scanner(System.in);
    public void dollartorupee() {
        System.out.print("Enter Dollars: ");
        double d = s.nextDouble();
        System.out.println("Rupees: " + (d * 83.0)); // Example rate
    }
    public void rupeetodollar() {
        System.out.print("Enter Rupees: ");
        double r = s.nextDouble();
        System.out.println("Dollars: " + (r / 83.0));
    }
    public void eurotorupee() {
        System.out.print("Enter Euro: ");
        double e = s.nextDouble();
        System.out.println("Rupees: " + (e * 90.0));
    }
    public void rupeetoeuro() {
        System.out.print("Enter Rupees: ");
        double r = s.nextDouble();
        System.out.println("Euro: " + (r / 90.0));
    }
    public void yentorupee() {
        System.out.print("Enter Yen: ");
        double y = s.nextDouble();
        System.out.println("Rupees: " + (y * 0.56));
    }
    public void rupeetoyen() {
        System.out.print("Enter Rupees: ");
        double r = s.nextDouble();
        System.out.println("Yen: " + (r / 0.56));
    }
}

// ==========================================
// File: Distance.java
// ==========================================
package com.mycompany.converter;
import java.util.Scanner;

public class Distance {
    Scanner s = new Scanner(System.in);
    public void mtokm() {
        System.out.print("Enter Meters: ");
        double m = s.nextDouble();
        System.out.println("KM: " + (m / 1000));
    }
    public void kmtom() {
        System.out.print("Enter KM: ");
        double km = s.nextDouble();
        System.out.println("Meters: " + (km * 1000));
    }
    public void milestokm() {
        System.out.print("Enter Miles: ");
        double m = s.nextDouble();
        System.out.println("KM: " + (m * 1.609));
    }
    public void kmtomiles() {
        System.out.print("Enter KM: ");
        double km = s.nextDouble();
        System.out.println("Miles: " + (km / 1.609));
    }
}

// ==========================================
// File: Time.java
// ==========================================
package com.mycompany.converter;
import java.util.Scanner;

public class Time {
    Scanner s = new Scanner(System.in);
    public void hourstominutes() {
        System.out.print("Enter Hours: ");
        double h = s.nextDouble();
        System.out.println("Minutes: " + (h * 60));
    }
    public void hourstoseconds() {
        System.out.print("Enter Hours: ");
        double h = s.nextDouble();
        System.out.println("Seconds: " + (h * 3600));
    }
    public void secondstohours() {
        System.out.print("Enter Seconds: ");
        double sec = s.nextDouble();
        System.out.println("Hours: " + (sec / 3600));
    }
    public void minutestohours() {
        System.out.print("Enter Minutes: ");
        double min = s.nextDouble();
        System.out.println("Hours: " + (min / 60));
    }
}`
    },
    {
        id: "7",
        filename: "Thread_program.java",
        content: `import java.util.Random;

class Square extends Thread {
    int x;

    Square(int n) {
        x = n;
    }

    public void run() {
        int sqr = x * x;
        System.out.println("Square of " + x + " = " + sqr);
    }
}

class Cube extends Thread {
    int x;

    Cube(int n) {
        x = n;
    }

    public void run() {
        int cub = x * x * x;
        System.out.println("Cube of " + x + " = " + cub);
    }
}

class Number extends Thread {
    public void run() {
        Random random = new Random();
        for (int i = 0; i < 10; i++) {
            int randomInteger = random.nextInt(30);
            System.out.println("Random Integer generated : " + randomInteger);
            
            Square s = new Square(randomInteger);
            s.start();
            
            Cube c = new Cube(randomInteger);
            c.start();

            try {
                Thread.sleep(1000);
            } catch (InterruptedException ex) {
                System.out.println(ex);
            }
        }
    }
}

public class Thread_program {
    public static void main(String args[]) {
        Number n = new Number();
        n.start();
    }
}`
    },
    {
        id: "8",
        filename: "Collection_program.java",
        content: `import java.util.*;
import java.io.*;

public class Collection_program {
    public static void main(String args[]) throws IOException {
        ArrayList<String> obj = new ArrayList<String>();
        DataInputStream in = new DataInputStream(System.in);
        int c, ch;
        int i, j;
        String str, str1;

        do {
            System.out.println("STRING MANIPULATION");
            System.out.println("******************************");
            System.out.println(" 1. Append at end \\n 2. Insert at particular index \\n 3. Search \\n 4. List strings starting with letter \\n 5. Display\\n");
            System.out.println("Enter the choice: ");
            c = Integer.parseInt(in.readLine());

            switch (c) {
                case 1:
                    System.out.println("Enter the string: ");
                    str = in.readLine();
                    obj.add(str);
                    break;

                case 2:
                    System.out.println("Enter the string: ");
                    str = in.readLine();
                    System.out.println("Specify the index/position to insert: ");
                    i = Integer.parseInt(in.readLine());
                    obj.add(i - 1, str);
                    System.out.println("The array list has following elements: " + obj);
                    break;

                case 3:
                    System.out.println("Enter the string to search: ");
                    str = in.readLine();
                    j = obj.indexOf(str);
                    if (j == -1)
                        System.out.println("Element not found");
                    else
                        System.out.println("Index of: " + str + " is " + j);
                    break;

                case 4:
                    System.out.println("Enter the character/string to list matches: ");
                    str = in.readLine();
                    for (i = 0; i < obj.size(); i++) {
                        str1 = obj.get(i);
                        if (str1.startsWith(str)) {
                            System.out.println(str1);
                        }
                    }
                    break;

                case 5:
                    System.out.println("The array list has following elements: " + obj);
                    break;

                default:
                    System.out.println("Invalid choice");
            }

            System.out.println("Enter 0 to break and 1 to continue: ");
            ch = Integer.parseInt(in.readLine());
        } while (ch == 1);
    }
}`
    },
    {
        id: "9",
        filename: "FileDetails.java",
        content: `import java.io.*;
import java.util.*;

class FileDetails {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the name of the file: ");
        String file_name = input.nextLine();

        File f = new File(file_name);

        if (f.exists()) {
            System.out.println("The file " + file_name + " exists");
            
            if (f.canRead())
                System.out.println("The file " + file_name + " is readable");
            else
                System.out.println("The file " + file_name + " is not readable");

            if (f.canWrite())
                System.out.println("The file " + file_name + " is writeable");
            else
                System.out.println("The file " + file_name + " is not writeable");

            // Extracting file extension
            int dotIndex = file_name.lastIndexOf('.');
            if (dotIndex > 0) {
                System.out.println("The file type is: " + file_name.substring(dotIndex + 1));
            } else {
                System.out.println("The file type is: No extension found");
            }

            System.out.println("The Length of the file: " + f.length() + " bytes");
        } else {
            System.out.println("The file " + file_name + " does not exist");
        }
        
        input.close();
    }
}`
    },
    {
        id: "10",
        filename: "Interface_main.java",
        content: `interface Resume {
    void bio_data();
}

class Teacher implements Resume {
    String personal_information = "Suma";
    String qualification = "BE";
    String experience = "10";
    String achievements = "Gold medal";

    public void bio_data() {
        System.out.println("--- Teacher Resume ---");
        System.out.println("Personal Information:\\t" + personal_information);
        System.out.println("Qualification:\\t\\t" + qualification);
        System.out.println("Experience:\\t\\t" + experience);
        System.out.println("Achievements:\\t\\t" + achievements);
    }
}

class Student implements Resume {
    String personal_information = "Uma";
    String result = "80";
    String discipline = "ISE";

    public void bio_data() {
        System.out.println("--- Student Resume ---");
        System.out.println("Personal Information:\\t" + personal_information);
        System.out.println("Result:\\t\\t\\t" + result + "%");
        System.out.println("Discipline:\\t\\t" + discipline);
    }
}

public class Interface_main {
    public static void main(String[] args) {
        Teacher teach = new Teacher();
        teach.bio_data();

        Student stud = new Student();
        stud.bio_data();
    }
}`
    }
];

function loadProgram(index) {
    const prog = programs[index];
    document.getElementById('active-filename').innerText = prog.filename;
    document.getElementById('window-title').innerText = `eclipse-workspace - ${prog.filename} - Eclipse IDE`;

    // Explicitly set the value/content of the code area
    const codeArea = document.getElementById('code-area');
    codeArea.innerHTML = ''; // Clear first to be safe
    // We use textContent to ensure no HTML injection, but for displaying code we might want to manually create nodes if we did highlighting.
    // Since we are just dumping text:
    codeArea.textContent = prog.content;

    // Line numbers
    const lineNumbers = document.getElementById('line-numbers');
    const lines = prog.content.split('\n').length;
    // Faster string concat
    let numsHtml = '';
    for (let i = 1; i <= lines; i++) {
        numsHtml += `<div>${i}</div>`;
    }
    lineNumbers.innerHTML = numsHtml;

    // Sidebar highlight
    document.querySelectorAll('.package-explorer-item').forEach((el, i) => {
        if (i === index) el.classList.add('selected');
        else el.classList.remove('selected');
    });

    // Console update
    document.getElementById('bottom-console').innerHTML = `<span style="color: #666; font-style: italic;">'${prog.id}' loaded. Selection and scrolling enabled.</span>`;

    // Outline
    const outline = document.getElementById('outline-content');
    const matches = prog.content.match(/(class|interface|public class)\s+(\w+)/g);
    if (matches) {
        outline.innerHTML = matches.map(m => `
            <div class="package-explorer-item" style="font-size: 10px; padding-left: 10px;">
                <span class="material-symbols-outlined" style="font-size: 12px; color: #4CAF50;">class</span>
                <span>${m.split(/\s+/).pop()}</span>
            </div>
        `).join('');
    } else {
        outline.innerHTML = `<center style="color: #999; margin-top: 10px;">No outline</center>`;
    }

    // Scroll back to top
    codeArea.scrollTop = 0;
    lineNumbers.scrollTop = 0;
}

document.addEventListener('DOMContentLoaded', () => {
    const fileList = document.getElementById('file-list');
    const codeArea = document.getElementById('code-area');
    const lineNumbers = document.getElementById('line-numbers');

    // Copy Logic
    document.getElementById('copy-btn').addEventListener('click', () => {
        const code = document.getElementById('code-area').textContent;
        navigator.clipboard.writeText(code).then(() => {
            const btn = document.getElementById('copy-btn');
            const originalHTML = btn.innerHTML;
            btn.innerHTML = `<span class="material-symbols-outlined icon-xs mr-1" style="font-size: 12px;">check</span> Copied!`;
            setTimeout(() => {
                btn.innerHTML = originalHTML;
            }, 1000);
        });
    });

    // Sync scroll
    codeArea.addEventListener('scroll', () => {
        lineNumbers.scrollTop = codeArea.scrollTop;
    });

    // Dynamic Line Numbers on Edit
    const updateLineNumbers = () => {
        const text = codeArea.innerText;
        // Basic line count estimate for contenteditable
        const lines = text.split('\n').length;
        // Ensure at least equal number of lines to cover wrapped text or blank lines if possible
        // Ideally we closely match visual lines, but simple newline count is standard for basic editors
        if (lineNumbers.childElementCount !== lines) {
            let numsHtml = '';
            for (let i = 1; i <= lines; i++) {
                numsHtml += `<div>${i}</div>`;
            }
            lineNumbers.innerHTML = numsHtml;
        }
    };
    codeArea.addEventListener('input', updateLineNumbers);

    programs.forEach((prog, index) => {
        const item = document.createElement('div');
        item.className = 'package-explorer-item';
        item.innerHTML = `
            <span class="material-symbols-outlined icon-xs text-blue-500 mr-1">code</span>
            <span class="text-tiny">${prog.id}</span>
        `;
        item.onclick = () => loadProgram(index);
        fileList.appendChild(item);
    });

    loadProgram(0);

    // Taskbar Clock
    function updateClock() {
        const now = new Date();
        const timeOptions = { hour: 'numeric', minute: '2-digit', hour12: true };
        const dateOptions = { month: 'numeric', day: 'numeric', year: 'numeric' };

        const timeEl = document.getElementById('taskbar-time');
        const dateEl = document.getElementById('taskbar-date');

        if (timeEl) timeEl.textContent = now.toLocaleTimeString([], timeOptions);
        if (dateEl) dateEl.textContent = now.toLocaleDateString([], dateOptions);
    }
    setInterval(updateClock, 1000);
    updateClock();
});


