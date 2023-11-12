
# 08 인터페이스

#### 특징

* 다중 상속을 지원한다.


#### 인터페이스 선언

* defautl interfaceName {}
* public interface interfaceName {}


#### 인터페이스 멤버

```java
public interface interfaceName {
    //public 상수 필드
    //public 추상 메소드
    //public 디폴트 메소드
    //public 정적 메소드
    //private 메소드
    //private 정적 메소드
}
```

#### 상수 필드

* 자동으로 상수로 컴파일되기 때문에 초기화시켜야 한다.

```java
[public static final] 타입 변수명 = 값;
```

#### 추상 메소드

* 리턴 타입, 메소드명, 매개변수만 가지고 중괄호를 붙지 않는다.

```java
public abstract 리턴타입 메소드명(매개변수);
```

#### 다중 인터페이스 구현

```java
public class 구현클래스명 implements 인터페이스A, 인터페이스B {}
```


<br/>
<br/>
<br/>


* 같은 패키지에 위치한 파일

```java
public class A implements InterfaceController 
{

    public void name() {
        System.out.println("이름이 뭐야?");
    }

    public void age() {
        System.out.println("너 몇살이야?");
    }

}
```

```java
public class B implements InterfaceController 
{   

    public void name() {
        System.out.println("What's your name?");
    }

    public void age() {
        System.out.println("How old are you?");
    }
    
}
```

```java
public interface InterfaceController
{
    boolean ask = true;

    public void name();

    public void age();
}
```

```java
public class main
{
    // tip: arguments are passed via the field below this editor
    public static void main(String[] args)
    {
        InterfaceController rc;

        rc = new A();
        rc.name();

        rc = new B();
        rc.name();
    }
}
```
 
> excute : 
이름이 뭐야?
What's your name?


#### 추상 

```java
public abstract class AbsctractController
{
    void metdho() {};
}
```

```java
public class Child extends AbsctractController
{
    void method() {}
}
```



### 상속과 인터페이스의 차이점

클래스 상속
1. 단일 상속만 지원한다.
2. 상위 클래스의 메서드를 오버라이드하여 재정의하거나 확장할 수 있다.
3. 상위 클래스의 동작을 상속받는다.


추상 클래스 상속
1. 단일 상속만 지원한다.
2. 추상 필드/ 메서드와 일반 필드 및 메서드 모두 가질 수 있다.


인터페이스
1. 다중 상속을 지원한다.
2. 클래스는 인터페이스의 메서드를 모두 구현해야 한다.
3. 인터페이스는 메소드의 중괄호를 생략할 수 있다.

