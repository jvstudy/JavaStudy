# 13 제네릭

<br><br>

#### 제네릭이란?

자바에서 제네릭은 데이터의 타입을 일반화한다는 것을 의미하며 제네릭 클래스의 인스턴스나 제네릭 메소드를 호출할 때 외부에서 타입을 지정하는 역할을 한다.

<br>

>[!NOTE]
> 제네릭을 왜 사용할까? <br>
> 코드의 안정성과 재사용성을 높이기 위해서 사용한다. 
> 형변환을 줄여 코드 가독성을 높일 수 있고,
> 제네릭 타입을 사용하여 여러 종류의 객체를 다룰 수 있다.

<br><br>


#### 제네릭 타입

제네릭 타입은 결정되지 않은 타입을 파라미터로 가지는 클래스와 인터페이스를 말한다.


```java
public class 클래스명<A, B ..> {}
public interface 인터페이스명<A, B ..> {}
```


<br><br>

#### 제네릭의 선언과 생성

```java
List<T> 

List<String> stringList = new ArrayList<String>();
```

* List\<T\> : 타입 매개변수
* List\<String\> : 매개변수화된 타입

<br>

 'T'는 타입 파라미터를 뜻하는 기호로 타입 변수(type variable)라고도 하며, 임의의 참조형 타입을 의미한다.  

>[!NOTE]
> T는 암묵적인 약속같은 것으로 어떤 기호가 들어와도 상관은 없다.

<br>

|타입|설명|
|--|--|
|\<T\>|타입(Type)|
|\<E\>|요소(Element)|
|\<K\>|키(Key)|
|\<V\>|리턴 값 또는 매핑된 값(Variable)|
|\<N\>|숫자(Number)|
|<S, U, V>|2, 3, 4에 선언된 타입|


<br>

>[!NOTE]
> 제네릭은 <> 꺽쇠 괄호 키워드를 사용하는데 이것을 **다이아몬드 연산자**라고 한다. 꺽쇠 안에 **식별자 기호**를 지정하여 파라미터화 한다.

<br><br>


#### 제네릭 예시 코드

Box 클래스는 제네릭 타입 T를 사용하여 Box 클래스에 어떤 타입의 값을 저장하더라도 유연하게 동작할 수 있다.

<br> 

```java
public class Box<T> {
    private T value;

    public T getValue() {
        return value;
    }

    public void setValue(T value) {
        this.value = value;
    }
}

```
<br>

제네릭을 사용하는 클래스 또는 메서드를 생성할 때 실제 사용할 타입을 명시적으로 지정, 
아래 예시와 같이 Box 클래스는 정수와 문자열 각각 생성할 수 있다.

```java
Box<Integer> integerBox = new Box<>();
integerBox.setValue(42);
Integer value = integerBox.getValue();

Box<String> stringBox = new Box<>();
stringBox.setValue("Hello, Generics!");
String text = stringBox.getValue();

```

<br><br>

#### 타입 파라미터의 생략

```java
FruitBox<Apple> inBox = new FruitBox<Apple>();

FruitBox<Apple> inBox = new FruitBox<>();
```

>[!NOTE]
> jdk 1.7 버전 이후부터 new 생성자 부분의 제네릭 타입을 생략할 수 있다.


<br><br>


#### 할당 가능한 파라미터 타입

제네릭은 **참조 타입**에 대해서만 동작하기 때문에 기본 데이터 타입인 int, double, char 등은 값 자체를 나타내므로 **원시(primitive)타입**을 사용할 수 없다. 대신에 해당 원시 타입에 대한 래퍼(wrapper) 클래스를 사용할 수 있다.

* int > Integer
* double > Double

```java
// 원시타입 int가 들어가므로 error
Box<int> integerBox = new Box<>();

Box<Integer> integerBox = new Box<>();
```

<br><br>


#### 제한된 타입 파라미터

제네릭은 타입 파라미터를 구체적인 타입으로 제한할 수 있다. extends 와 super 로 제한할 수 있으며 상속 계층을 기반으로 한다.

```java
public <T extends 제한타입> 리턴타입 메소드(매개변수, ...) {}
```

<br><br>

#### 상위 타입 한정 (Upper Bounded Wildcard)

T extends Number는 Box 클래스에 사용되는 제네릭 타입 T를 Number 클래스 또는 Number의 하위 클래스로 제한한다. 따라서 integerBox는 Box<Integer>로, doubleBox는 Box<Double>로 사용할 수 있지만, stringBox는 Box<String>으로 사용할 수 없다.


```java
public class Box<T extends Number> {
    private T value;

    public Box(T value) {
        this.value = value;
    }

    public T getValue() {
        return value;
    }

    public void setValue(T value) {
        this.value = value;
    }
}

// 사용 예시
Box<Integer> integerBox = new Box<>(10);
Box<Double> doubleBox = new Box<>(10.5);

// 에러 발생
// Box<String> stringBox = new Box<>("Hello");
```

<br><br>


#### 하위 타입 한정 (Lower Bounded Wildcard)

List<? super Integer>는 Box 클래스 내부에서 사용되는 리스트에 들어갈 요소의 타입을 Integer의 상위 타입으로 제한한다. 즉, Integer 또는 Integer의 상위 클래스만 허용된다. 이 경우 objectBox에는 Integer, Double, String 등의 값을 추가할 수 있다.


```java
public class Box<T> {
    private List<? super Integer> values;

    public Box() {
        this.values = new ArrayList<>();
    }

    public void addValue(T value) {
        values.add(value);
    }

    public void printValues() {
        for (Object value : values) {
            System.out.println(value);
        }
    }
}

// 사용 예시
Box<Object> objectBox = new Box<>();
objectBox.addValue(10);
objectBox.addValue(10.5);
objectBox.addValue("Hello");

objectBox.printValues();
```

<br><br>


#### 제네릭 와일드 카드

<b>\<?\> : Unbounded Wildcards (제한 없음)</b>

타입 파라미터를 대치하는 구체적인 타입으로 모든 클래스나 인터페이스 타입이 올 수 있다


<b>\<? extends 상위타입\></b>
Upper Bounded Wildcards (상위 클래스 제한)

타입 파라미터를 대치하는 구체적인 타입으로 상위 타입이나 상위 타입의 하위 타입만 올 수 있다

<b>\<? super 하위타입\></b>
Lower Bounded Wildcards (하위 클래스 제한)

타입 파라미터를 대치하는 구체적인 타입으로 하위 타입이나 하위 타입의 상위 타입만 올 수 있다


[인용:Inpa Dev 👨‍💻:티스토리](https://inpa.tistory.com/entry/JAVA-☕-제네릭Generics-개념-문법-정복하기)


<br><br>

#### 제네릭 메서드

```java
public <A, B ...> 리턴타입 메소드명(매개변수) {}

public <A, B ...> Box<T> boxing(T t) {}
```

* <A, B ...> : 타입 파라미터 정의
* Box\<T\> : 리턴타입

<br>

제네릭 메서드란, 메서드의 선언부에 \<T\> 가 선언된 메서드를 말한다.
메서드에 \<T\> 제네릭을 설정함으로서 동적으로 타입을 받아와 사용할 수 있다.

```java
public class GenericMethodExample {

    // 클래스의 타입 파라미터를 받아와 사용하는 일반 메서드
    public T addBox(T x, T y) {
        // ...
    }

    // 제네릭 메서드
    public static <T> void printValue(T value) {
        System.out.println("Value: " + value);
    }

    // 다른 타입의 제네릭 메서드
    public static <T, U> void printValues(T value1, U value2) {
        System.out.println("Value 1: " + value1);
        System.out.println("Value 2: " + value2);
    }

    public static void main(String[] args) {
        // 제네릭 메서드 호출
        printValue("Hello, Generics!"); 
        // 문자열을 전달
        printValue(42); // 정수를 전달
        printValue(3.14); // 실수를 전달

        // 다른 타입의 제네릭 메서드 호출
        printValues("Java", 2022); // 문자열과 정수를 전달
    }
}
```

<br><br>

#### 제네릭 사용 주의사항

1. 제네릭 타입은 객체 생성이 불가하다
2. static 멤버에 제네릭 타입이 올 수 없다.



