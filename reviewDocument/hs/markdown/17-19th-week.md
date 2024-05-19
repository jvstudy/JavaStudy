
## Part 04. 데이터 입출력


> [!NOTE] 개념
> 자바의 입출력 시스템은 자바의 입출력 스트림을 통해 구현된다. 이 시스템은 데이터의 입력과 출력을 관리하고, 다양한 유형의 데이터를 다룰 수 있게 도와준다.


### 데이터 입출력

- 입출력 스트림

>키보드를 통해 입력되거나, 데이터가 모니터로 출력되는 것, 파일에 저장되거나 다른 프로그램으로 전송되는 것을 총칭하여 **데이터 입출력**이라고 한다.


|     구분     |               바이트 스트림               |                                       |          문자 스트림           |                           |
| :--------: | :---------------------------------: | :-----------------------------------: | :-----------------------: | :-----------------------: |
|            |               입력 스트림                |                출력 스트림                 |          입력 스트림           |          출력 스트림           |
| 최상위<br>클래스 |             InputStream             |             OutputStream              |          Reader           |          Writer           |
| 하위 <br>클래스 | XXXInputStream<br>(FileInputStream) | XXXOutputStream<br>(FileOutputStream) | XXXReader<br>(FileReader) | XXXWriter<br>(FileWriter) |


> [!NOTE] 스트림 종류
> 바이트 스트림 : 그림, 멀티미디어, 문자 등 모든 종류의 데이터를 입출력할 때 사용
> 문자 스트림 : 문자만 입출력할 때 사용


1. 이미지는 바이트이므로 InputStream으로만 읽을 수 있다.
2. Reader의 read() 메소드는 1문자를 읽는다.
3. InputStream의 read() 메소드는 1바이트를 읽는다.
4. InputStreamReader를 이용하면 InputStream을 Reader로 변환시킬 수 있다.


- 바이트 출력 스트림

> 데이터를 바이트 단위로 출력하는 스트림이다. **OutputStream**은 바이트 출력 스트림의 **최상위 클래스**로 **추상 클래스**이다. 모든 바이트 출력 스트림 클래스는 OutputStream 클래스를 상속받아서 만들어진다.


```java
package org.example;  
  
import java.io.OutputStream;  
import java.io.FileOutputStream;  
import java.io.IOException;  
  
public class Box {  
    public static void main(String[] args) {  
        try {  
            OutputStream os = new FileOutputStream("test.txt");  
            byte[] array = {10, 20, 30};
            
            os.write(array);  
            os.flush();  
            os.close();  
        } catch (IOException e) {  
            e.printStackTrace();  
        }  
    }  
}
```

- 바이트 입력 스트림

> 바이트 단위로 데이터를 입력하는 스트림이다. **InputStream**은 바이트 입력 스트림의 **최상위 클래스**로, 추상 클래스이다. 모든 바이트 입력 스트림은 InputStream 클래스를 상속받아 만들어진다.

| 리턴 타입 | 메소드            | 설명                                              |
| ----- | -------------- | ----------------------------------------------- |
| int   | read()         | 1byte를 읽은 후 읽은 **바이트**를 리턴                      |
| int   | read(byte[] b) | 읽은 바이트를 매개값으로 주어진 배열에 저장 후 <br>읽은 **바이트 수**를 리턴 |
| void  | close()        | 입력 스트림을 닫고 사용 메모리 해제                            |


> [!NOTE] read(byte[] b)
> 매개값 b에는 읽은 데이터가 저장된다. 
> 읽은 수 있는 바이트 수가 정해져 있다.
> 매개값 b에는 이전에 읽은 바이트가 남아있을 수 있다.


```java
package org.example;  
  
import java.io.FileOutputStream;  
import java.io.FileInputStream;  
import java.io.InputStream;  
import java.io.OutputStream;  
  
public class Box {  
    public static void main(String[] args) throws Exception {  
        String originFileNm = "/path/Downloads/test.png";  
        String tmpFileNm = "tmp.png";
        
        InputStream is = new FileInputStream(originFileNm);  
        OutputStream os = new FileOutputStream(tmpFileNm);
        
        byte[] data = new byte[1024];  
        while (true) {  
            int num = is.read(data);  
            if(num == -1) break;  
            os.write(data, 0, num);  
        }  
        
        os.flush();  
        os.close();  
        is.close();
        
        System.out.println("복사가 잘 되었습니다.");  
    }  
}
```

- 문자 입출력 스트림

>문자 단위로 데이터를 입출력하는 스트림이다. 바이트 입출력 스트림인 InputSteam과 OutputStream에 대응하는 문자 입출력 스트림으로 Reader와 Writer가 있다.

| 리턴 타입 | 메소드                                   | 설명                                        |
| ----- | ------------------------------------- | ----------------------------------------- |
| void  | write(int c)                          | 매개값으로 주어진 한 문자를 출력                        |
| void  | write(charp[] cbuf)                   | 매개값으로 주어진 배열의 모든 문자를 출력                   |
| void  | write(charp[] cbuf, int off, int len) | 매개값으로 주어진 배열에서 cbuf[off]부터 len개까지의 문자를 출력 |
| void  | write(String str)                     | 매개값으로 주어진 문자열을 출력                         |
| void  | write(String str, int off, int len)   | 매개값으로 주어진 문자열에서 off 순번부터 len개까지의 문자를 출력   |
| void  | flush()                               | 버퍼에 잔류하는 모든 문자를 출력                        |
| void  | close()                               | 출력 스트림을 닫고 사용 메모리를 해제                     |

```java
package org.example;  
  
import java.io.*;  
  
public class Box {  
    public static void main(String[] args) throws Exception {  
        Writer writer = new FileWriter("test2.txt");  
        
        char a = 'A';  
        char[] arr = {'C', 'D'};  
        
        writer.write(a);  
        writer.write(arr);  
        writer.write("STR");  
        
        // 버퍼에 잔류하고 있는 문자들을 출력하고, 버퍼를 비움  
        writer.flush();  
        // 출력 스트림 닫고 메모리 해제  
        writer.close();  
    }  
}
```

- 보조 스트림

> 다른 스트림에 연결되어 추가적인 기능을 제공하는 스트림. 예를 들어, 버퍼링, 압축, 인코딩 등의 기능을 제공한다. 

**입력 스트림 FileInputStream에 보조 스트림 InputStreamReader 를 연결**
```java
InputStream is = new FileInputStream("...");
InputStreamReader reader = new InputStreamReader(is);
```

**문자 변환 보조 스트림 InputStreamReader에 보조 스트림 BufferedReader 보조 스트림 연결**
```java
InputStream is = new FileInputStream("...");
InputStreamReader reader = new InputStreamReader(is);
BufferedReader br = new BufferedReader(reader);
```

- 문자 변환 스트림

> 바이트와 문자 사이의 변환을 수행하는 스트림이다. 바이트 스트림(InputStream, OutputStream)에서 입출력할 데이터가 문자라면 문자 스트림(Reader와 Writer)로 변환해서 사용하는 것이 좋다. 문자로 바로 입출력하는 편리함이 있고, 문자셋의 종류를 지정할 수 있기 때문이다.

**InputStream을 Reader로 변환**
```java
InputStream is = new FileInputStream("/path/test.txt");
Reader reader = new InputStreamReader(is);
```

**OutputStream을 Writer로 변환**
```java
OutputStream os = new FileOutputStream("/path/test.txt");
Writer writer = new OutputStreamWriter(os);
```

```java
package org.example;  
  
import java.io.FileInputStream;  
import java.io.FileOutputStream;  
import java.io.InputStream;  
import java.io.InputStreamReader;  
import java.io.OutputStream;  
import java.io.OutputStreamWriter;  
import java.io.Writer;  
import java.io.Reader;  
  
public class Box {  
    public static void main(String[] args) throws Exception {  
        write("문자 변환 스트림을 사용합니다.");  
        String data = read();  
        System.out.println(data);  
    }  
  
    public static void write(String str) throws Exception {  
        // 보조 스트림 연결  
        OutputStream os = new FileOutputStream("test2.txt");  
        Writer writer = new OutputStreamWriter(os, "UTF-8");  
        
        // 보조 스트림을 이용하여 문자 출력  
        writer.write(str);  
        writer.flush();  
        writer.close();  
    }  
  
    public static String read() throws Exception {  
        // 보조 스트림 연결  
        InputStream is = new FileInputStream("test2.txt");  
        Reader reader = new InputStreamReader(is, "UTF-8");  
        // 보조 스트림 이용하여 문자 입력  
        char[] data = new char[100];  
        int num = reader.read(data);  
        reader.close();  
        // 읽은 문자 수만큼 문자열로 변환  
        String str = new String(data, 0, num);  
        return str;  
    }  
}
```

- 성능 향상 스트림

>입출력 성능을 향상시키는 스트림이다. 버퍼링을 통해 입출력 작업을 최적화한다.
>**BufferedInputStream**과 **BufferedOutputStream** 클래스가 이에 해당한다.


> [!important] 버퍼를 이용한 성능 향상
>버퍼는 데이터가 쌓이기를 기다렸다가 꽉 차게 되면 데이터를 한꺼번에 디스크로 보냄으로써 출력 횟수를 줄여준다.
>


```java
package org.example;  
  
import java.io.*;  
  
public class Box {  
    public static void main(String[] args) throws Exception {  
        BufferedReader br = new BufferedReader(  
                new FileReader("src/main/java/org/example/Test.java")  
        );  
        
        int lineNo = 1;  
        while (true) {  
            String str = br.readLine();  
            if(str == null) break;  
            System.out.println(lineNo + "\t" + str);  
            lineNo++;  
        }  
        br.close();  
    }  
}
```

- 기본 타입 스트림

>기본 자료형에 대한 입출력을 지원하는 스트림이다. DataInputStream과 DataOutputStream 클래스를 통해 기본 자료형(boolean, char, short, int, long, float, double)의 데이터를 입출력할 수 있다.

**DataInputStream과 DataOutputStream 보조 스트림을 연결**
```java
DataInputStream dis = new DataInputStream(바이트 입력 스트림);
DataOutputStream dos = new DataOutputStream(바이트 출력 스트림);
```

| DataInputStream |               | DataOutputStream |                         |
| --------------- | ------------- | ---------------- | ----------------------- |
| boolean         | readBoolean() | void             | writeBoolean(boolean v) |
| byte            | readByte()    | void             | writeByte(int v)        |
| char            | readChar()    | void             | writeChar(int v)        |
| double          | readDouble()  | void             | writeDouble(double v)   |
| float           | readFloat()   | void             | writeFloat(float v)     |
| int             | readInt()     | void             | writeInt(int v)         |
| long            | readLong()    | void             | writeLong(long v)       |
| short           | readShort()   | void             | writeShort(int v)       |
| String          | readUTF()     | void             | writeUTF(String str)    |

- 프린트 스트림

>텍스트 데이터를 간편하게 출력하는 스트림이다. PrintStream과 PrintWriter 클래스를 사용하여 포맷팅된 텍스트를 출력할 수 있다. PrintStream과 PrintWriter는 프린터와 유사하게 출력하는 pint(), println(), printf() 메소드를 가지고 있는 보조 스트림이다.


> [!NOTE] println
> System.out.println() 에서 out은 PrintStream 타입이기 때문에 println()을 사용한다. 매개값의 타입에 따라 오버로딩되어 있다.

==**PrintStream은 바이트 출력 스트림과 연결되고, PrintWriter는 문자 출력 스트림과 연결된다.**==
```java
PrintStream ps = new PrintStream(바이트 출력 스트림);
PrintWriter pw = new PrintWriter(문자 출력 스트림);
```

```java
package org.example;  
  
import java.io.*;  
  
public class Box {  
    public static void main(String[] args) throws Exception {  
        FileOutputStream fos = new FileOutputStream("test2.txt");  
  
        PrintStream ps = new PrintStream(fos);  
  
        ps.print(" 마치");  
        ps.println();  
        ps.println("이것이 프린트다.");  
        ps.print("| %6d");  
  
        ps.flush();  
        ps.close();  
    }  
}
```

- 객체 스트림

>객체를 입출력하는 스트림이다. ObjectOutputStream과 ObjectInputStream 클래스를 사용하여 객체를 직렬화하여 저장하고, 역직렬화하여 읽어올 수 있다.


> [!NOTE] 직렬화와 역직렬화
> 객체를 출력하려면 필드값을 일렬로 늘어선 바이트로 변경해야 하는데, 이것을 직렬화라고 하고, 반대로 직렬화된 바이트를 객체의 필드값으로 복원하는 것을 역직렬화라고 한다.

**ObjectInputStream과 ObjectOutputStream 보조 스트림을 연결**
```java
ObjectInputStream ois = new ObjectInputStream(바이트 입력 스트림);
ObjectOutputStream oos = new ObjectOutputStream(바이트 출력 스트림);
```

**ObjectOutputStream으로 객체를 직렬화**
```java
oos.writeObject(객체);
```

**읽은 바이트 역직렬화**
```java
객체타입 변수 = (객체타입) ois.readObject();
```

**Serializable 인터페이스**

>자바는 Serializable 인터페이스를 구현한 클래스만 직렬화할 수 있도록 제안한다.
>Serializable 인터페이스는 멤버가 없는 빈 인터페이스지만, 객체를 직렬화할 수 있다고 표시하는 역할을 한다.
```java
public class XXX implements Serializable {
	public int field1;
	protected int field2;
	int field3;
	private int field4;
	// 정적 필드는 직렬화에서 제외
	public static int field5;
	// transient로 선언된 필드는 직렬화에서 제외
	transient int field6;
}
```

**SerialVersionUID 필드**

- 직렬화할 때 사용된 클래스와 역직렬화할 때 상요된 클래스는 동일해야 한다.
  (이름과 내용이 동일해야 한다.)
- 두 클래스가 동일한 serialVersioUID 상수값을 가졌다면 역직렬화할 수 있다.

**동일한 SerialVersionUID**
```java
public class Member implements Serializable {
	static final long serialVersionUID = 1;
	int field1;
	int field2;
}

public class Member implements Serializable {
	static final long serialVersionUID = 1;
	int field1;
	int field2;
	int field3;
}
```

```java
import java.io.*;

public class SerializationExample {
    public static void main(String[] args) {
        // 객체를 직렬화하여 파일에 저장
        Member member = new Member();
        member.field1 = 10;
        member.field2 = 20;
        member.field3 = 30;
        
        try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("member.ser"))) {
            oos.writeObject(member);
            System.out.println("Serialization completed. Object saved to member.ser");
        } catch (IOException e) {
            e.printStackTrace();
        }
        
        // 파일에서 객체를 역직렬화하여 가져오기
        try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream("member.ser"))) {
            Member deserializedMember = (Member) ois.readObject();
            System.out.println("Deserialization completed. Object loaded from member.ser");
            System.out.println("field1: " + deserializedMember.field1);
            System.out.println("field2: " + deserializedMember.field2);
            System.out.println("field3: " + deserializedMember.field3); // field3는 Serializable 인터페이스에 없는 필드이므로 0으로 초기화됨
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}

class Member implements Serializable {
    static final long serialVersionUID = 1;
    int field1;
    int field2;
    int field3;
}

```


- File과 Files 클래스

>파일 및 파일 시스템과 관련된 작업을 수행하는 클래스들. File 클래스는 단일 파일의 경로를 나타내고, Files 클래스는 파일 및 디렉터리를 다루는 다양한 메서드를 제공한다.


> [!important] 입출력 예외처리
> 자바에서 입출력을 사용할 때 반드시 예외처리를 사용하도록 강제하고 있다. 


```java
boolean isExist = file.exists();
```

| 리턴 타입   | 메소드             | 설명                  |
| ------- | --------------- | ------------------- |
| boolean | createNewFile() | 새로운 파일을 생성          |
| boolean | mkdir()         | 새로운 디렉토리를 생성        |
| boolean | mkdir()         | 경로상에 없는 모든 디렉토리를 생성 |

| 리턴 타입   | 메소드                              | 설명                                                             |
| ------- | -------------------------------- | -------------------------------------------------------------- |
| File[]  | listFiles(FilenameFilter filter) | 디렉토리에 포함된 파일 및 서브 디렉토리 목록 중에 FilenameFilter에 맞는 것만 File 배열로 리턴 |
| String  | getName()                        | 파일의 이름을 리턴                                                     |
| long    | lastModified()                   | 마지막 수정 날짜 및 시간을 리턴                                             |
| long    | length()                         | 파일의 크기 리턴                                                      |
| boolean | isDirectory()                    | 디렉토리인지 여부                                                      |

```java
package org.example;  
  
import java.io.File;  
import java.text.SimpleDateFormat;  
import java.util.Date;  
  
public class FileExample {  
    public static void main(String[] args) throws Exception {  
        File dir = new File("data");  
        File file1 = new File("data/new1.txt");  
        File file2 = new File("data/new2.txt");  
        File file3 = new File("data/new3.txt");  
  
        if(dir.exists() == false) { dir.mkdir(); }  
        if(file1.exists() == false) { file1.createNewFile(); }  
        if(file2.exists() == false) { file2.createNewFile(); }  
        if(file3.exists() == false) { file3.createNewFile(); }  
  
        File temp = new File("data");  
        if(temp.exists() == false) { dir.mkdir(); }  
  
        File[] contents = temp.listFiles();  
  
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd a HH:mm");  
        for(File file : contents) {  
            System.out.printf("%-25s", sdf.format(new Date(file.lastModified())));  
            if(file.isDirectory()) {  
                System.out.printf("%-10s%-20s", "<DIR>", file.getName());  
            } else {  
                System.out.printf("%-10s%-20s", file.length(), file.getName());  
            }  
            System.out.println();  
        }  
    }  
}
```


> [!important] 입출력 스트림을 생성할 때 File 객체 활용하기
> 파일 또는 폴더의 정보를 얻기 위해 File 객체를 단독으로 사용할 수 있지만, 파일 입출력 스트림을 생성할 때 경로 정보를 제공할 목적으로 사용되기도 한다.

```java
// 첫 번째 방법
FileInputStream fis = new FileInputStream("./Temp");

// 두 번째 방법
File file = new File("./data");
FileInputStream fis = new FileInputStream(file);
```

**Files 클래스**

>Files 클래스는 정적 메소드로 구성되어 있기 때문에 File 클래스처럼 객체로 만들 필요가 없다. Files의 정적 메소드는 운영체제의 파일 시스템에서 파일 작업을 수행하도록 위임한다.

| 기능         | 관련 메소드                         |
| ---------- | ------------------------------ |
| 복사         | copy                           |
| 생성         | createDirectories 등            |
| 이동         | move                           |
| 삭제         | delete, deleteIfExists         |
| 존재, 검색, 비교 | exists 등                       |
| 속성         | size, getLastModifiedTime 등    |
| 디렉토리 탐색    | list, newDirectoryStream, walk |
| 데이터 입출력    | newInputStream 등               |

> [!NOTE] Path 객체
> 위 메소드들은 매개값으로 Path 객체를 받는다. Path 객체는 파일이나 디렉토리를 찾기 위한 경로 정보를 가지고 있는데, 정적 메소드인 get() 메소드로 다음과 같이 얻을 수 있다.

```java
Path path = Paths.get("/pah/file.txt");
```


```java
package org.example;  
  
import java.io.File;  
import java.nio.charset.Charset;  
import java.nio.file.Files;  
import java.nio.file.Path;  
import java.nio.file.Paths;  
  
public class FileInfo {  
    public static void main(String[] args) {  
        try {  
            String data = "id: haribo \n" + "email: haribo@github.com \n" + "tel: 010-0000-0000";  
            String my_path = "tmp/user.txt";  
  
            if(new File(my_path).exists() == false) {  
                new File("tmp").mkdir();  
                new File("tmp/user.txt").createNewFile();  
            }  
  
            Path path = Paths.get(my_path);  
  
            // 파일 생성 및 데이터 저장  
            Files.writeString(Paths.get("tmp/user.txt"), data, Charset.forName("UTF-8"));  
  
            System.out.println("파일 유형 : " + Files.probeContentType(path));  
            System.out.println("파일 크기 : " + Files.size(path) + "bytes");  
  
            // 파일 읽기  
            String content = Files.readString(path, Charset.forName("UTF-8"));  
            System.out.println(content);  
  
        } catch (Exception e) {  
            e.printStackTrace();  
        }  
    }  
}
```


### 네트워크 입출력

- 네트워크 기초


- IP 주소 얻기
- TCP 네트워킹
- UDP 네트워킹
- 서버의 동시 요청 처리
- JSON 데이터 형식
- TCP 채팅 프로그램


### 데이터베이스 입출력

- JDBC 개요
- DBMS 설치
- Client Tool 설치
- DB 구성
- DB 연결
- 데이터 저장
- 데이터 수정
- 데이터 삭제
- 데이터 읽기
- 프로시저와 함수 호출
- 트랜잭션 처리
- 게시판 구현





























