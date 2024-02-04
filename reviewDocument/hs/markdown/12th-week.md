# 03 라이브러리 활용

> 자바에서 많이 사용되는 표준 라이브러리와 고급 라이브러리 활용 방법

- java.base 모듈
    - Object 클래스
    - System 클래스
    - 문자열 클래스
    - 포장 클래스


### API 도큐먼트 읽기

<b>상단 gnb 에서는 구성 멤버를 볼 수 있다.</b>
> SUMMARY: NESTED | FIELD | CONSTR | METHOD
중첩 클래스/중첩 인터페이스 목록|필드 목록|생성자 목록|메소드 목록
---

<b>전체 상속 관계를 볼 수 있다.</b>

> Module java.base
Package java.lang
Class String
java.lang.Object
java.lang.String
All Implemented Interfaces:
Serializable, CharSequence, Comparable<String>, Constable, ConstantDesc

---

<b>String 클래스 정의와 부모 클래스, 구현 인터페이스를 알 수 있다.</b>
> `public` `final` class String 
extends Object (부모 클래스)
implements Serializable, Comparable<String>, CharSequence, Constable, ConstantDesc

<br>

### java.base 모듈

>[!NOTE]/
> java.base 모듈은 모든 모듈이 의존하는 기본 모듈이다. require 하지 않아도 사용할 수 있다.


#### java.base의 주요 패키지와 용도

모든 클래스는 [여기](https://docs.oracle.com/javase/8/docs/api/)에서 보도록 한다.

* java.lang
> java.lang 패키지는 자바의 기본 패키지로, 자동으로 임포트되기 때문에 별도의 임포트 없이 사용할 수 있다.

| 클래스   | 용도                                       |
| -------- | ------------------------------------------ |
| Object   | 모든 클래스의 최상위 클래스로서의 기능 제공 |
| String   | 문자열 다루기                                |
| System   | 시스템 속성 및 입출력 관련 유틸리티 

* java.util 

| 클래스     | 용도                                           |
| ---------- | ---------------------------------------------- |
| ArrayList  | 동적 배열을 구현한 컬렉션 클래스                 |
| HashMap    | 해시맵을 구현한 컬렉션 클래스                   |
| LinkedList | 연결 리스트를 구현한 컬렉션 클래스               |

* java.text

| 클래스           | 용도                                              |
| ---------------- | ------------------------------------------------- |
| SimpleDateFormat | 날짜 및 시간을 특정 형식으로 포맷팅하고 파싱하는 클래스 |
| DecimalFormat    | 숫자를 특정 형식으로 포맷팅하고 파싱하는 클래스      |

* java.time

| 클래스        | 용도                                   |
| ------------- | -------------------------------------- |
| LocalDate     | 날짜를 나타내는 클래스                   |
| LocalTime     | 시간을 나타내는 클래스                   |
| LocalDateTime | 날짜와 시간을 나타내는 클래스             |
| Duration      | 두 시간 사이의 기간을 나타내는 클래스       |

* java.io

| 클래스           | 용도                                        |
| ---------------- | ------------------------------------------- |
| FileInputStream  | 파일로부터 데이터를 읽기 위한 스트림 클래스   |
| FileOutputStream | 파일에 데이터를 쓰기 위한 스트림 클래스     |
| BufferedReader    | 버퍼를 이용하여 문자 입력 스트림을 읽는 클래스 |

* java.net

| 클래스          | 용도                                       |
| --------------- | ------------------------------------------ |
| URL             | 특정 자원을 가리키는 URL을 나타내는 클래스   |
| HttpURLConnection | HTTP 프로토콜을 이용한 통신을 제공하는 클래스 |

* java.nio

| 클래스       | 용도                                          |
| ------------ | --------------------------------------------- |
| ByteBuffer   | 바이트 버퍼를 사용하여 데이터를 다루는 클래스    |
| Selector     | 비동기 채널을 다루기 위한 다중 채널 처리 클래스 |


#### Object 클래스

>[!NOTE]/
>`java.lang` 패키지에 속해 있다.

```markdown
├── Object
│   ├── System
│   ├── String
│   ├── Number
│   │   ├── Integer
│   └── └── ...
└──
```

<br>

>![important]/
> 클래스를 선언할 때 모든 클래스는 직간접적으로 java.lang 의 Object 클래스를 상속받게 된다.

|메소드|용도|
|--|--|
boolean equals(Object obj)|객체의 번지를 비교하고 결과를 리턴|
|int hashCode()|객체의 해시코드를 리턴|
|String toString()|객체 문자 정보를 리턴 클래스명@16진수해시코드|

<br>

<b>== 연산자</b>
* 용도: == 연산자는 두 객체의 참조 값(메모리 상의 주소)을 비교.
* 비교 대상: == 연산자는 기본 데이터 타입일 경우 값 비교를 수행하며, 참조 타입(객체)일 경우에는 참조 값(주소)를 비교.

```java
String str1 = new String("Java");
String str2 = new String("Java");

System.out.println(str1 == str2); // false (참조 값 비교)
```

<br>equals() 메소드</b>
* 용도: equals() 메소드는 객체의 내용(값)을 비교합니다. 주로 클래스에서 재정의되어 객체의 동등성을 정의하는 데 사용.
* 비교 대상: equals() 메소드를 사용하려면 해당 클래스에서 equals() 메소드를 오버라이딩해야 합니다. 오버라이딩하지 않으면 Object 클래스의 기본 구현이 사용되어 참조 값 비교.


```java
String str1 = new String("Java");
String str2 = new String("Java");

System.out.println(str1.equals(str2)); // true (값 비교, String 클래스는 equals가 값 비교로 오버라이딩되어 있음)
```

#### 왜 중요한가?

의미적 동등성: == 연산자는 참조 값을 비교하므로 두 객체의 내용이 같더라도 서로 다른 객체일 수 있다. 
equals() 메소드는 내용을 비교하여 객체의 의미적 동등성을 확인한다.

객체의 비교 정의: 객체의 동등성은 클래스에 따라 다르게 정의될 수 있다. 예를 들어, String 클래스의 경우 문자열 값이 같으면 객체가 동등하다고 판단한다. 따라서, equals() 메소드를 적절히 오버라이딩하여 객체의 동등성을 정의하는 것이 중요하다.

컬렉션 사용 시: 많은 자료구조(예: HashSet, HashMap)에서는 equals() 메소드를 사용하여 객체의 동등성을 판단한다. 객체가 동등성을 올바르게 정의하지 않으면 예상치 못한 동작이 발생할 수 있다.

문자열 비교: 문자열 비교 시에는 equals() 메소드를 사용하는 것이 좋다. 문자열 리터럴은 자바에서 특별한 방식으로 처리되어 같은 문자열 값이라면 같은 객체를 참조하게 된다. 하지만 동적으로 생성된 문자열 객체의 경우 ==를 사용하면 참조 값이 다르게 나올 수 있다.

```java
public class StringComparisonExample {
    public static void main(String[] args) {
        // 동적으로 생성된 문자열 객체
        String dynamicString = new String("Java");

        // 문자열 리터럴로 생성된 문자열 객체
        String literalString = "Java";

        // 참조 값 비교
        boolean isEqualByReference = (dynamicString == literalString);

        // equals() 메소드를 사용한 값 비교
        boolean isEqualByValue = dynamicString.equals(literalString);

        System.out.println("참조 값 비교: " + isEqualByReference); // false
        System.out.println("값 비교: " + isEqualByValue); // true
    }
}
```

요약하면, 객체의 내용을 비교하는 equals() 메소드는 객체 동등성을 정의하는 데 중요하며, == 연산자는 참조 값을 비교하는 데 사용되므로 두 가지를 올바르게 이해하고 활용하는 것이 중요하다.


```java
package org.example;

public class Test {

    public void testObject3() {
        // Object 클래스의 equals() 메서드 사용
        String str1 = "";
        String str2 = "";
        String str3 = new String("1");
        String str4 = new String("1");

        boolean isEqual = str3.equals(str4);
        boolean isEqual2 = str3 == str4;

        boolean isEqual3 = str1.equals(str2);
        boolean isEqual4 = str1 == str2;

        System.out.println("equal(): " + isEqual + " ==: " + isEqual2);
        System.out.println("equal(): " + isEqual3 + " ==: " + isEqual4);
    }
}
```

<br>

결과
```bash
equal(): true ==: false
equal(): true ==: true
```

<br>

> [!NOTE]/
> Java에서 문자열 리터럴은 상수 풀(constant pool)에 저장되어 재사용되기 때문에 equals와 == 모두 동일하게 True 로 리턴된다.

<br>

#### System 클래스

>[!NOTE]/
>`java.lang` 패키지에 속해 있다. 운영체제의 일부 기능을 이용할 수 있다.


### 필드 (Fields)

| 필드                            | 설명                                        |
| ------------------------------- | ------------------------------------------- |
| `public static final InputStream in`  | 표준 입력 스트림을 나타내는 `InputStream` 타입의 필드입니다.   |
| `public static final PrintStream out` | 표준 출력 스트림을 나타내는 `PrintStream` 타입의 필드입니다.  |
| `public static final PrintStream err` | 표준 에러 출력 스트림을 나타내는 `PrintStream` 타입의 필드입니다. |

### 메소드 (Methods)

| 메소드                                      | 설명                                                                                           |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `public static void exit(int status)`        | 현재 실행 중인 Java Virtual Machine을 종료하는 메소드입니다. `status`는 종료 상태 코드를 나타냅니다. |
| `public static long currentTimeMillis()`    | 현재 시스템의 현재 시각을 밀리초로 반환하는 메소드입니다. 1970년 1월 1일 00:00:00 UTC부터 현재까지의 시간을 나타냅니다. |
| `public static void gc()`                    | 가비지 컬렉션을 요청하는 메소드입니다. JVM에게 가비지 컬렉션을 수행하도록 알립니다.               |
| `public static String getProperty(String key)` | 시스템 속성 중에서 지정된 `key`에 대한 값을 반환하는 메소드입니다.                           |
| `public static String getenv(String name)`   | 지정된 환경 변수 `name`에 대한 값을 반환하는 메소드입니다.                                      |
| `public static void arraycopy(Object src, int srcPos, Object dest, int destPos, int length)` | 배열의 일부를 다른 배열로 복사하는 메소드입니다. 소스 배열 `src`의 `srcPos` 위치부터 시작하여 대상 배열 `dest`의 `destPos` 위치에 복사되며, `length`만큼의 요소가 복사됩니다. |
| `public static Console console()`            | 콘솔 객체를 반환하는 메소드입니다. 콘솔이 없는 환경에서는 `null`을 반환합니다.                  |



```java
public class SystemExample {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        Scanner scanner = new Scanner(System.in); // 표준 입력 스트림을 사용한 사용자 입력 받기
    }
}
```

<br>

#### 문자열 클래스

> [!NOTE]/
>`java.lang` 패키지에 속해 있다.

### 주요 문자열 클래스

| 클래스          | 용도                                                         | 주요 메소드                                    |
| --------------- | ------------------------------------------------------------ | --------------------------------------------- |
| `String`        | 문자열을 나타내는 클래스로, 불변(immutable)한 특성을 가짐 | `length()`, `charAt(int index)`, `equals(Object obj)`, 등 |
| `StringBuilder` | 가변적인 문자열을 나타내는 클래스로, 문자열 추가 및 변경 가능 | `append(String str)`, `insert(int offset, String str)`, `toString()`, 등 |
| `StringBuffer`  | `StringBuilder`와 유사하지만 동기화된 메소드로 멀티스레드 환경에서 안전 | `StringBuilder`와 동일                           |
| `StringTokenizer`| 구분자(delimiter)를 기준으로 문자열을 토큰(token)으로 나누는 클래스 | `hasMoreTokens()`, `nextToken()`, 등            |
| `Pattern`, `Matcher` | 정규 표현식을 사용하여 문자열의 패턴 검색과 조작에 사용 | `Pattern.compile(String regex)`, `Matcher.matches()`, `Matcher.find()`, 등 |


```java
public class StringExample {
    public static void main(String[] args) {
        String str1 = "Hello";
        String str2 = "World";
        String result = str1 + ", " + str2;
        System.out.println(result);

        if (str1.equals(str2)) {
            System.out.println("Strings are equal.");
        } else {
            System.out.println("Strings are not equal.");
        }
    }
}
```


#### 포장 클래스

> [!NOTE]/
>`java.lang` 패키지에 속해 있다.

```java
public class WrapperExample {
    public static void main(String[] args) {
        int primitiveInt = 42;

        // Boxing: 기본 데이터 타입을 객체로 변환
        Integer wrappedInt = Integer.valueOf(primitiveInt);

        // Unboxing: 객체를 기본 데이터 타입으로 변환
        int unwrappedInt = wrappedInt.intValue();

        System.out.println("Original: " + primitiveInt);
        System.out.println("Wrapped: " + wrappedInt);
        System.out.println("Unwrapped: " + unwrappedInt);
    }
}
```

#### 수학 클래스

> [!NOTE]/
>`java.lang` 패키지에 속해 있다.

```java
public class MathExample {
    public static void main(String[] args) {
        double x = 10.25;
        double y = 5.75;

        double max = Math.max(x, y);
        double sqrt = Math.sqrt(x);

        System.out.println("Max: " + max);
        System.out.println("Square root: " + sqrt);
    }
}
```

#### 날짜와 시간 클래스

> [!NOTE]/
> `java.time` 패키지에 속한 클래스.

```java
import java.time.LocalDate;

public class DateTimeExample {
    public static void main(String[] args) {
        LocalDate currentDate = LocalDate.now();
        System.out.println("Current Date: " + currentDate);
    }
}
```

#### 형식 클래스

> [!NOTE]/
> `java.text` 패키지에 속해 있다.

```java
import java.text.SimpleDateFormat;
import java.util.Date;

public class FormatExample {
    public static void main(String[] args) throws Exception {
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        Date currentDate = new Date();
        String formattedDate = formatter.format(currentDate);
        System.out.println("Formatted Date: " + formattedDate);
    }
}
```

#### 정규 표현식 클래스

> [!NOTE]/
> `java.util.regex` 패키지에 속해 있다. 정규 표현식을 사용하여 문자열을 검색하거나 조작하는 데 사용된다.

```java
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegexExample {
    public static void main(String[] args) {
        String input = "Hello, Java!";

        // 정규 표현식 패턴
        Pattern pattern = Pattern.compile("Java");

        // 패턴과 매칭되는지 확인
        Matcher matcher = pattern.matcher(input);

        if (matcher.find()) {
            System.out.println("Pattern found!");
        } else {
            System.out.println("Pattern not found.");
        }
    }
}
```

#### 리플렉션

> [!NOTE]/
> `java.lang.reflect` 패키지에 속해 있다. 실행 중인 프로그램의 클래스, 메서드, 필드 등의 정보를 동적으로 가져오고 조작하는 기능을 제공

```java
public class ReflectionExample {
    public static void main(String[] args) {
        Class<?> clazz = String.class;

        System.out.println("Class Name: " + clazz.getName());
        System.out.println("Simple Name: " + clazz.getSimpleName());
        System.out.println("Package Name: " + clazz.getPackageName());
    }
}
```

#### 어노테이션

> [!NOTE]/
> `java.lang.annotation` 패키지에 속해 있다. 클래스 또는 인터페이스 정보를 컴파일러에게 전달하거나 런타임에 특정 작업을 수행하기 위해 활용

* 하나의 타입이다.



```java
import java.lang.annotation.*;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface MyAnnotation {
    String value() default "Default Value";
}

public class AnnotationExample {
    @MyAnnotation(value = "Custom Value")
    public void myAnnotatedMethod() {
        // Method body
    }

    public static void main(String[] args) throws NoSuchMethodException {
        // 어노테이션 정보 얻기
        MyAnnotation annotation = AnnotationExample.class
                .getMethod("myAnnotatedMethod")
                .getAnnotation(MyAnnotation.class);

        System.out.println("Annotation Value: " + annotation.value());
    }
}
```
