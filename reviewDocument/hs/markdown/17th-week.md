# 람다식

1. 람다식이란
2. 매개변수가 없는 람다식
3. 매개변수가 있는 람다식
4. 리턴값이 있는 람다식
5. 메소드 참조
6. 생성자 참조


<br>

### 람다식이란?

>[!NOTE]
>자바에서 람다식(lambda expression)은 함수형 프로그래밍 스타일을 지원하는 기능 중 하나다. 람다식은 익명 함수(anonymous function)의 일종으로, 한 줄의 간결한 코드로 함수를 표현할 수 있다.

>[!NOTE]
>함수형 프로그래밍이란 함수를 정의하고 이 함수를 데이터 처리부로 보내 데이터를 처리하는 기법을 말한다. 데이터 처리부는 데이터만 가지고 있고, 처리 방법이 정해져 있지 않아 외부에서 제공된 함수에 의존한다.


<br>


<b>람다식 구문</b>
```java
람다식 : (매개변수, ...) -> { 처리 내용 }
```

<br>


```java
Comparator<String> comparator = (String s1, String s2) -> s1.compareTo(s2);
```

Comparable는 기본 인터페이스로 
문자열을 비교하는 Comparator 인터페이스를 사용한다는 것을 나타낸다. 여기서 <String>은 비교할 요소의 형식을 명시한다. 이 경우 문자열을 비교하기 위해 String 타입이 사용된다.

(String s1, String s2) 괄호 안에는 Comparator의 compare 메서드에 전달될 매개변수가 정의되어 있다. 이 람다식은 두 개의 문자열을 비교하여 정렬 순서를 결정하는데, 첫 번째 문자열 s1이 두 번째 문자열 s2보다 작으면 음수를, 같으면 0을, 크면 양수를 반환한다. 이것이 compareTo 메서드가 하는 역할이다.

즉, 위의 코드는 문자열을 비교하는 Comparator를 람다식으로 구현하고, 이를 comparator 변수에 할당한 것이다. 이후 이 comparator를 이용하여 문자열을 정렬할 때 사용될 수 있다. 예를 들어, Collections.sort() 메서드와 함께 사용하여 문자열을 정렬할 수 있다.


<br>


<b>람다식 구문 생성 과정</b>


인터페이스
```java
public interface Calculable {
    // 추상 메소드
    void calculate(int x, int y);
}
```
<br>

인터페이스 구현 객체로 만들면 아래와 같다.

```java
new Calculable() {
    @Override
    public void calculate(int x, int y) { 처리 내용 }
}
```
<br>

위 내용을 다시 람다식으로 표현하면

```java
public void action(Calculable calculable) {
    int x = 10;
    int y = 4;
    // 데이터를 제공하고 추상 메소드 호출
    calculable.calculate(x, y);
}
```

<br>

```java
action( (x, y) -> {
    int result = x + y;
    System.out.println(result);
})
```

<br>

2. 매개변수가 없는 람다식

>[!NOTE]
>매개변수가 없는 람다식은 함수형 인터페이스의 추상 메서드가 매개변수를 요구하지 않을 때 사용된다.

```java
() -> {
    실행문;
    실행문;
}
```

```java
() -> 실행문
```

```java
() -> {
    Random random = new Random();
    return random.nextInt(100); // 0부터 99까지의 랜덤한 정수 반환
}
```

<br>


3. 매개변수가 있는 람다식

>[!NOTE]
>매개변수가 있는 람다식은 함수형 인터페이스의 추상 메서드가 매개변수를 요구할 때 사용된다.

<br>

```java
(타입 매개변수, ...) -> {
    실행문;
    실행문;
}
```

```java
(타입 매개변수, ...) -> 실행문
```

```java
(var 매개변수, ...) -> {
    실행문;
    실행문;
}
```

```java
(var 매개변수, ...) -> 실행문
```

```java
(매개변수, ...) -> {
    실행문;
    실행문;
}
```

```java
(매개변수, ...) -> 실행문
```

```java
(int x, int y) -> {
    System.out.println("Sum: " + (x + y));
}
```

<br>

4. 리턴값이 있는 람다식

<br>

```java
(매개변수, ...) -> {
    실행문;
    return 값;
}
```

```java
(매개변수, ...) -> 값
```

```java
(int x, int y) -> {
    return x + y;
}
```

<br>

5. 메소드 참조

>[!NOTE]
>메소드 참조식(Method Reference)은 람다식을 더 간결하게 표현하는 방법 중 하나이다. 주로 메서드를 호출하는 간단한 람다식을 대체하는 용도로 사용된다.

<br>

```java
(left, right) -> Math.max(left, right);
```

```java
Math :: max;
```

<br>

6. 생성자 참조

<br>

```java
(a, b) -> { return new 클래스(a, b); }
```

```java
클래스 :: new
```

<br>






