# 이것이 자바다 [개정판]

## 자바 시작하기

### 언어별 사용 방법
c, c++, c# 
소스파일을 컴파일러를 통해 기계어로 만들어서 실행한다.

java 
소스파일을 컴파일러가 바이트 코드 파일로 만들고 바이트 코드 파일을 자바 가상 머신이 해석해서 기계어 파일로 만들어서 해석한다.

|JDK - 자바 개발 도구 | JVM용 소프트웨어 개발 도구|
|--|--|
|JRD - 자바 실행 환경 | JVM용 OS|
|JVM - 자바 가상 기계 | 가상의 컴퓨터|

*자바 개발 도구인 JDK를 이용해 개발된 프로그램은 JRE에 의해 가상의 컴퓨터인 JVM 상에서 구동된다.


python
소스파일을 바로 실행 가능하다. 인터프리터가 소스파일을 하나씩 해석해서 기계어로 번역해서 실행한다.


* 기계어는 0과 1로 이루어진 코드이다.

### JDK 설치

jdk(java standard)는 자바 표준판이다.
oracle jdk와 open jdk가 있는데 oracle jdk가 좀 더 안정적이다.

- lts
장기간 기술 지원을 받을 수 있다. 버그를 잡은 추가적인 빌드를 계속 한다.

### 바이트코드 파일과 자바 가상 머신

```java
class Test {
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}
```
소스파일(.java)을 저장한 후에 javac(java compiler) 명령어는 소스 파일을 컴파일하는데, 컴파일 결과는 확장명이 .class인 바이트코드 파일로 생성된다.

#### 자바 가상 머신(jvm, java virtual machine)
JDK는 자바 소스 컴파일러인 javac.exe를 포함하고 있고, JRE는 자바 프로그램 실행기인 java.exe를 포함하고 있다. 자바가 이런 구조를 택한 이유는 기존 언어로 작성한 프로그램은 윈도우 95용, 윈도우 7용, 리눅스용, 애플 맥 OS용 등 각 플랫폼(하드웨어와 OS의 조합)용으로 배포되는 설치 파일을 따로 준비해야 했던 불편함을 없애기 위해서다. 자바 개발자는 본인이 사용 중인 플랫폼에 설치된 JVM용으로 프로그램을 작성하고 배포하면 각 플랫폼에 맞는 JVM이 중재자로서 각 플랫폼에서 프로그램을 구동하는 데 아무 문제가 없게끔 만들어주는 것이다. 이러한 자바의 특성을 Write Once Run Anywhere라고 한다.

* JDK : Java Development Kit // 자바 개발 도구
* JRE : Java Runtime Environment // 자바 실행 환경
* JVM : Java Virtual Machine // 자바 가상 기계

jdk와 함께 설치한 jvm을 구동시켜서 바이트코드 파일(.class)을 기계어로 번역하고 실행시킨다.
*바이트코드 파일은 운영체제에 영향을 받지 않지만,
jvm이 바이트코드 파일을 기계어로 해석할 때는 운영체제에 영향을 받는다. jvm은 window 또는 macOS에 맞는 기계어로 해석해야 하기 때문이다. 그렇기 때문에 jdk를 운영체제 별로 다운받아야 한다.
윈도우에서 작업 후 리눅스 서버에서 실행하는 이유는 
jvm이 기계어로 만들기 때문이다. 

 자바는 한 번 작성하고 컴파일 한 것을 여러 운영체제에서
실행시킬 수 있는 장점이 있다.

### 1.6 사용부터 실행까지

* window
C:/사용자/<로그인한 계정>/temp 폴더가 있는지 확인하다.

temp/src
*src는 source의 약자로 프로그램 소스 파일이 저장되는 폴더이다.
*bin은 binary의 약자로 바이트 코드 파일이 여기에 저장된다.

1. 소스파일 컴파일하기
-d : 소스파일 컴파일 후 bin폴더에 결과물을 생성하라는 옵션이다.

temp 폴더에서 명령어 실행 : 

```bash
jdavac -d bin src/ch01/sec06/Hello.java
```

bin : 바이트 코드 파일 위치
src : 소스 경로

2. 기계어로 번역하고 실행하기
이때 자바어를 사용한다.

temp 폴더에서 명령어 실행 : 
java -cp [바이트코드파일위치] [패키지 ... 클래스명]

```bash
java -cp bin ch01.sec06.Hello
```

-cp : class path의 약자로 바이트 코드 파일이 어디에 있는지 묻는 명령어다. .class는 생략한다.

### 1.10 코드 용어 이해

```java
package ch01.sec09;

// 소스 파일 이름과 클래스 이름은 대소문자까지 일치해야 한다.  예) Hello.java
public class Hello {
// 메인 메소드 선언하기
// 실행 집입점이라고도 부른다.
public static void main(String[] args) {
    // 메인 메소드 불러오기

    System.out.println("Hello");

}

} // 클래스 불러오기

package ch01.sec11;

// 소스 파일 이름과 클래스 이름은 대소문자까지 일치해야 한다.  예) Hello.java
public class Hello {
// 메인 메소드 선언하기
// 실행 집입점이라고도 부른다.
public static void main(String[] args) {
    // 메인 메소드 불러오기

    System.out.println("Hello");
    
}

} // 클래스 불러오기

```

### 1.12 실행문과 세미콜론

```java
package ch01.sec12;

public class Calculator {

public static void main(String[] args) {
    int x = 1;
    int y = 2;
    int result = x + y;
    
    System.out.println(result);
}

}

```

## 2.1 변수 선언

프로그램 실행 중 생성되는 데이터를 말한다. 
컴퓨터 메모리(RAM)에 저장된다.
16G에 특정 부분을 번지화 시켜서 관리하고 있는데 데이터를 비어있는 번지에 저장시킨다.
데이터를 번지에 쉽게 저장시키기 위해 변수를 사용한다.

||3||
|--|--|--|


변수는 번지를 참조해서 저장하고 번지에 있는 값이 가져와서 읽는다.

```java
package ch01.sec12;

public class Calculator {

public static void main(String[] args) {
    // 변수 선언
    // *메모리 번지를 가리키지 않는다.
    int x;
    // 처음 변수가 들어갈 때 초기값이라고 한다. 
    // 변수에 처음 값이 저장될 때 번지에 저장된다.
    x = 2;
    // 선언과 동시에 번지에 저장한다.
    int y = 10;

    /*
    @return error
    */
   // value는 메모리 번지를 참조하고 있지 않기 때문에 컴파일 에러가 발생한다.
   // The local variable value may not have been initialized : 초기화가 되어 있지 않다.
   int value;
   int result = value + 10;

    /*  
    @return success
    */
   // 값이 들어가야 메모리를 참조한다.
   int value = 30;
   int result = value + 10;
}

}
```

*변수 = `하나의 값`을 저장할 수 있는 메모리 번지에 붙여진 이름

변수는 하나의 타입, 한 종류만 저장할 수 있다.

파이썬의 경우 변수 하나를 만들어놓고 여러 타입을 넣을 수 있지만 자바는 변수의 타입을 선언하고 하나의 타입만 넣을 수 있다.

* 작성 규칙
1. 첫 번째 글자는 문자이거나 $, _ 이어야 하고 숫자로 시작할 수 없다.
2. `대소문자가 구분`된다.
3. 첫 문자는 영어 소문자로 시작하고 `calmel` 문법을 사용한다.
4. 문자 수 제한이 없다.
5. 예약어는 사용할 수 없다.


|분류|예약어|
|--|--|
|기본 데이터 타입|boolean, byte,l char, short, int, long, float, double|
|접근 지정자|private, protected, public|
|클래스와 관련된 것|class, abstract, interface, extends, implements, enum|
|객체와 관련된 것|new, instanceof, this, super, null|
|메소드와 관련된 것|void, return|
|제어문과 관련된 것|if, else, switch, case, default, for, do, while, break, continue|
|논리값|true, false|
|예외 처리와 관련된 것|try, catch, finaly, throw, throws|
|기타|transient, valatitle, package, import, synchronized, native, final, static, strictfp, assert|


```java
package ch02.sec01;

public class VariableUseExampel {

public static void main(String[] args) {
    int hour = 3;
    int minute = 4; 
    // 숫자와 문자의 결합은 숫자가 문자열로 바뀌게 된다.
    System.out.println(hour + "시간");

    int totalMinutes = (hour*60) + minute;
    System.out.println(totalMinute + "분");
}

}
```

* 변수는 다른 변수에 대입되어 메모리 간에 값을 복사할 수 있다. 

```java
package ch02.sec01;

public class VariableChangeExample {

public static void main(String[] args) {
    int x = 3; 
    int y = 5; 

    // temp가 참조하는 번지에 x가 참조하는 번지를 복사한다.
    int temp = x;
    // x가 참조하는 번지에 5가 저장되고 3은 사라진다.
    x = y;
    // temp 번지에 저장한 x의 번지를 y에 저장시킨다.
    y = temp;
}
}
```

## 2.2 정수 타입


|타입|메모리 크기|저장되는 값의 허용 범위|
|--|--|--|
|byte||
|short||
|char||




1bit : 0,1이 저장되는 메모리 단위 
- 0 : 플러스 
- 1 : 마이너스
1byte : 8bit

byte(1byte) > short(2byte) > char(2byte) > int(4byte) > long(8byte) > float > double 

byte : -128 ~ 127
int : -21억 ~ 21억

byte, short, int, long은 모두 부호 있는(signed) 정수 타입이므로 최상위 bit는 부호 bit로 사용되고, 나머지 bit는 값의 범위를 결정한다.
예) -100


##### 코드에서 프로그래머가 직접 입력한 값을 리터럴이라고 부른다. 정수 리터럴은 기본적으로 int 타입으로 간주한다.

* 2진수 : 0b 또는 0B로 시작하고 0과 1로 작성
* 8진수 : 0으로 시작하고 0~7 숫자로 작성
* 10진수 : 소수점이 없는 0~9 숫자로 작성
* 16진수 : 0x 또는 0X로 시작하고 0~9 숫자가 A, B, C, D, E, F 또는 a, b, c, d, e, f 로 작성한다.


* 코딩은 생각하면서 입력하는 것을 말한다. 

```java
package ch02.sec01;

public class ByteExample {

public static void main(String[] args) {
    byte var1 = -128;
    byte var2 = 128; // 컴파일 에러
}
}
```

## 2.3 문자 타입
char는 문자를 그대로 저장하지 않고 문자는 숫자로 저장하기 때문에 정수 타입에 해당된다.
아스키코드 또는 유니코드처럼 문자를 매핑시키는 숫자를 저장한다.
char에 음수를 저장할 수 없는 이유는 음수로 매핑되는 문자가 없기 때문이다.

하나의 문자를 작은 따옴표로 감싼 것을 문자 리터럴이라고 한다. 문자 리터럴은 유니코드로 변환되어 저장되는데 유니코드는 세계 각국의 문자를 0~65535 숫자로 매핑한 국제 표준 규약이다. 자바는 이러한 유니코드를 저장할 수 있도록 char 타입을 제공한다.

|char|저장되는 값의 허용 범위|
|--|--|
|2byte|0~65535 (유니코드)|

```java
char var1 = 'A'; // 65로 대입
```

<br/>

## 2.4 실수 타입

|타입|메모리 크기|유효 숫자 이하 자리
|--|--|--|
|float|4byte|7자리
|double|8byte|15자리

유효범위 숫자가 double이 더 크기 때문에 double이 더 안전하다.

|1bit(부호)|지수(8bit)|가수(23bit)
|--|--|--|

|1bit(부호)|지수(11bit)|가수(52bit)
|--|--|--|

```java
float var1 = 0.1234567890123456789f;
double var2 = 0.1234567890123456789;

// 0.12345679 
// 0.12345678901234568
```

## 2.5 논리 타입

참과 거짓을 의미하는 논리 리터럴은 true와 false이다. 

```java
int x = 10;
boolean result = (x == 20); // false
boolean result = (x != 20); // true
boolean result = (x > 20); // false
boolean result = (8 < x && x < 20); // true
boolean result = (8 < x && x > 200); // false
```

## 2.6 문자열 타입

문자열은 유니코드로 변환되지 않는다.

\“	"문자 포함
\‘	'문자 포함
\\	\문자 포함
\u16진수	16진수 유니코드에 해당되는 문자 포함
\t	출력 시 탭만큼 띄움
\n	출력 시 줄바꿈(라인피드)
\r	출력 시 캐리지 리턴

- 윈도우 : \r\n
- macOS : \n 

*캐리지는 옛날 즉석 인쇄 자판기에서 타자기 앞에 있는 판이 캐리지임
문장 마지막에 캐리지가 오른쪽으로 빠져있으면 앞으로 땡겨서 첫 문장으로 돌아가는데 그걸 \r 캐리지 리턴한다고 함.
*행을 바꾸는 걸 라인 피드라고 함
그래서 엔터키를 누르면 \r\n 이 되게 됨.
## 2.11 변수 사용 범위

main() 메소드 블록에는 다른 중괄호 불록들이 작성될 수 있다.
if, for, while 등이 있는데 이 조건문 블록 내에서 선언된 변수는 해당 중괄호 블록 내에서만 사용이 가능하다.

## 2.12 콘솔로 변수값 출력

```java
System.out.println(리터럴 또는 변수);
```

## 03 연산자(operator)

- 3.1 부호/증감 연산자
- 3.2 산술 연산자
- 3.3 오버플로우와 언더플로우
- 3.5 나눗셈 연산 후 NaN과 Infinity 처리
- 3.6 비교 연산자
- 3.7 논리 연산자
- 3.8 비트 논리 연산자
- 3.9 비트 이동 연산자
- 3.10 대입 연산자
- 3.11 삼항(조건) 연산자
- 3.12 연산의 방향과 우선순위

## 3.1 부호/증감 연산자

|연산식||설명|
|--|--|--|
|+|피연산자|피연산자의 부호 유지|
|-|피연산자|피연산자의 부호 변경|

정수타입(byte, short, int) 연산의 결과는 int 타입이다.
부호의 변경도 연산이므로 int 변수에 대입해야 한다.

```java
// 양수 b를 -b로 바꾸면 리터럴이 아니라 연산자가 된다.
byte b = 100;
int result = -b;
```

|연산식||설명|
|--|--|--|
|++|피연산자|피연산자의 값을 1 증가시킴|
|--|피연산자|피연산자의 값을 1 감소시킴|
|피연산자|++|다른 연산 수행 후 피연산자의 값을 1 증가시킴|
|피연산자|--|피연산자|다은 연산 수행 후 피연산자의 값을 1 감소시킴|

```java
int x = 1;
int y = 1;
int result = ++x + 10; // 2 + 10
int result2 = y++ + 10; // 1 + 10
```

## 3.2 산술 연산자

산술 연산자는 더하기, 빼기, 곱하기, 나누기, 나머지로 총 5개 입니다.

## 3.3 오버플로우와 언더플로우

오버플로우는 타입이 허용하는 최대값을 벗어나는 것을 말하고 
언더플로우는 타입이 허용하는 최소값을 벗어나는 것을 말한다.

```java
// byte : -128 ~ 127

// 128은 최대값을 벗어나므로 최소값으로 돌아간다.
byte value = 127;
value++; // -128

// -129는 최소값을 벗어나므로 최대값으로 돌아간다.
byte value = -128;
value--; // 127
```

```java
// 1>2>3 순으로 반복
// 2. 실행 후 증가연산으로 간다. i++
// 3. 조건문으로 간다.
for(int i=0; i<5; i++){
    // 1. 실행
}
```

## 3.4 정확한 계산은 정수 연산으로

```java
double unit = 0.1;
int number = 7;
int apple = 1;

double result = apple - unit*number;
```

## 3.5 나눗셈 연산 후 NaN과 Infinity 처리

나눗셈(/) 또는 나머지(%) 연산에서 좌측 피연산자가 정수이고 우측 피연산자가 0일 경우 예외(ArithmeticException)가 발생한다. 무한대의 값을 정수로 표현할 수 없기 때문이다.

## 3.6 비교 연산자

비교 연산자는 동등 (==, !=) 또는 크기(<,>, <=, >=)를 평가해서 boolean 타입인 true/false 를 산출한다.
비교 연산자는 흐름 제어문인 조건문(if), 반복문(for, while)에서 실행 흐름을 제어할 때 주로 사용한다.

```java
'A' == 65 // true
3 == 3.0 // true
0.1f == 0.1 // false
0.1f == (float)0.1 // true
```

문자열을 비교할 떄는 동등 연산자 대신 equals()를 사용한다.

```java
boolean. result = str1.equals(str2);
```

```java
// java.lang.Boolean.equals
public boolean equals (Object obj)
```

- 객체의 주소인 참조주소 값을 비교한다.(x == y는 true 값을 갖습니다).


## 3.7 논리 연산자

|구분|연산식|설명|
|--|--|--|
|AND|&& / &|피연산자 모두가 true 일 경우에만 true|
|OR|l, ll|피연산자 중 하나만 true이면 연산 결과는 true|
|XOR|^|피연산자가 하나는 true이고 다른 하나가 false일 경우에만 true|
|NOT|!|피연산자의 논리값을 바꿈|

&&는 앞의 피연산자가 false라면 뒤의 피연산자를 평가하지 않고 false를 산출한다. 그러나 &는 두 피연산자 모두를 평가해서 산출 결과를 낸다. 그래서 &&가 효율적으로 동작한다.

||도 마찬가지이다. ||는 앞의 피연산자가 true이면 뒤의 피연산자를 평가하지 않고 바로 true를 산출하지만, |는 두 피연산자 모두를 평가해서 산출 결과를 낸다.

## 3.10 대입 연산자

|구분|연산식|설명|
|--|--|--|
|단순 대입 연산자|변수 = 피연산자|우측의 피연산자의 값을 변수에 저장|
|복합 대입 연산자|변수 += 피연산자|우측의 피연산자의 값을 변수의 값과 더한 후에 다시 변수에 저장|

그외 
-=, *=, /=, %=, &=,|=, %=, &=, ^=, <<=, >>=, >>>=

## 3.11 삼항(조건) 연산자

삼항 연산자(피연산자? 피연산자: 피연산자)는 총 3개의 피연산자를 가진다. ? 앞의 피연산자는 boolean 변수 또는 조건식으로 오므로 조건 연산자라고도 한다. 이 값이 true 이면 콜론(:) 앞의 피연산자가 선택되고, false이면 콜론 뒤의 피연산자가 선택된다.

## 3.12 연산의 방향과 우선순위

산술 연산식에서 덧셈(+), 뺄셈(-) 연산자보다 곱셈(*), 나눗셈(/) 연산자가 우선 처리된다. 
우선순위가 같은 연산자들끼리는 왼쪽에서 오른쪽으로 연산을 수행한다.
하지만 대입 연산자는 오른쪽에서 왼쪽으로 연산을 수행한다.
먼저 연산하고 싶다면 괄호로 묶어준다. 괄호 부분이 최우선순위를 가진다.

우선순위
1순위 증감,부호,비트,논리 <- 방향
2순위 산술(*, /, %) -> 방향
3순위 산술(+, -) -> 방향
5순위 비교(<,>,<=,>=, instanceof) -> 방향
6순위 비교(==, !=) -> 방향
7순위 논리(&) -> 방향
8순위 논리(^) -> 방향
9순위 논리(|) -> 방향
10순위 논리(&&) -> 방향
11순위 논리(||) -> 방향
12순위 조건(?: ) -> 방향
13순위 대입(=, +=, -=, *=, /=, %=, &=, ^=, |=, <<=, >>=, >>>=) <= 방향

```java
// >, < 가 우선순위가 높기 때문에 먼저 처리되고 && 가 나중에 연산된다.
x > 0 && y < 0

// *, /, % 는 같은 우선순위를 갖고 있다.
/*
(((100*2)/3)%5)
*/
100*2 / 3 % 5

// 대입연산은 왼쪽에서 오른쪽
/*
1.c=5
2.c=5=b
3.c=5=b=a
*/
a = b = c = 5

```

instanceof 연산자

instanceof 연산자는 참조 변수가 참조하고 있는 인스턴스의 실제 타입을 반환해줍니다.
즉, 해당 객체가 어떤 클래스나 인터페이스로부터 생성되었는지를 판별해 주는 연할을 합니다.

```java
인스턴스이름 instanceof 클래스 또는 인터페이스 이름

class A{}
class B extends A{}
A a = new A();
B b = new B();

a instanceof A; // true
a instanceof B; // false
```


## 04 조건문과 반복문

### 4.1 코드 실행 흐름 제어

자바 프로그램은 main() 메소드의 시작 중괄호와 끝 중괄호까지 위에서 아래로 실행한다. 개발자가 원하는 방향으로 바꿀 수 있도록 해주는 것이 흐름 제어문(이하 제어문)이다.

* 조건문 : if, switch
* 반복문 : for, while, do-while

### 4.2 if 문

```java
if(조건식){}
if(조건식){}else{}
if(조건식){}else if(조건식){}else{}

int num = 4;        
if(num == 4){
System.out.println("1 num");    
} else if(num > 3){
System.out.println("2 num");
}
// 1 num 출력
```

조건식에는 true 또는 false 값을 산출할 수 있는 연산식이나 boolean 변수가 올 수 있다.

### 4.3 switch 문

if문은 조건식의 결과가 true, false 밖에 없기 때문에 경우의 수가 많아질수록 else if 가 반복되어 코드가 복잡해진다.
switch 문은 변수의 값에 따라서 실행문이 결정되기 때문에 같은 기능의 if 문보다 코드가 간결해진다.
`*break 가 없다면 다음 case가 연달아 실행되는데, 이때는 case 값과 상관없이 실행된다.`

Java 12 이후부터는 switch 문에서 Expressions(표현식)을 사용할 수 있다.


```java
switch(변수){
    case 값1:
        break;
    case 값2:
        break;
    default:
}
```

### 4.4 for 문

실행문을 반복적으로 사용하기 위한 반복문이다.

초기화식에서 선언된 변수는 for문 블록 안에서만 사용되는 로컬 변수이기 때문에 for문을 벗어나서도 사용하고 싶다면 for문 이전에 선언하여야 한다.

*초기화식과 증감식은 둘 이상 올 수 있다. 


```java
// 조건문이 false일 경우 for문 종료
for(1.초기화식; 2.조건식; 4.증감식){
    // 반복 영역
    3.실행문;
}
```

1.초기화식이 제일 먼저 실행된다. 2. 조건식을 평가했는데 true이면 3.실행문을 실행시키고 false이면 for문을 종료하고 블록을 건너뛴다. true 이면 실행문 실행 후 4.증감식이 실행된다. 그리고 다시 2.조건식을 평가하게 된다. 
true이면 3>4>2를 반복하고 false이면 for문이 끝난다.


### 4.5 while 문

while문은 조건식이 true일 경우 계속해서 반복하고, flase가 되면 반복을 멈추가 while문을 종료한다.

```java
while (1.조건식) {
    2.실행문
}
```

### 4.6 do-while 문
블록 내부를 먼저 실행시키고, 결과에 따라서 반복 실행을 계속할지 결정한다.

```java
do {
    1.실행문
} while(2.조건식)
```

### 4.7 break 문

break문은 반복문인 for문, while문, do-while문을 실행 중지하거나 조건문인 switch문을 종료할 때 사용한다.

```java
// 중첩된 반복문에서 바깥쪽 반복문까지 종료시키려면 반복문에 이름(레이블)을 붙이고 break 이름; 을 사용한다.
Label: for(){
    for(){
        break Label;
    }
}

Outter: for(char upper='A'; upper<='Z'; upper++){
    for(char lower='a'; lower<='z'; lower){
        System.out.println(upper + "-" + lower);
        if(lower == 'g'){
            break Outter;
        }
    }
}
```

### 4.8 continue 문

for문, while문, do-while문에서만 사용된다.

continue문은 특정 조건을 만족하는 경우에 continue 문을 실행해서 그 이후의 문장을 실행하지 않고 다음 반복으로 넘어간다.

```java
for(int i=1; i<=10; i++) {
    if(i%2 != 0){
        continue;
    }
    System.out.println(i + " ");
    // 2, 4, 6, 8, 10
}

```

# 02 
- 참조타입
- 클래스
- 상속
- 인터페이스
- 중첩 선언과 익명 객체
- 라이브러리와 모듈
- 예외 처리

## 05 참조 타입

### 객체 지향 프로그래밍

- 5.1 데이터 타입 분류
- 5.2 메모리 사용 영역
- 5.3 참조 타입 변수의 ==, != 연산
- 5.4 null과 NullPointerException
- 5.5 문자열(String) 타입
- 5.6 배열(Array) 타입
- 5.7 다차원 배열
- 5.8 객체를 참조하는 배열
- 5.9 배열 복사
- 5.10 배열 항목 반복을 위한 향상된 for 문
- 5.11 main() 메소드의 String[] 매개변수 용도
- 5.12 열거(Enum) 타입


> 자바에서는 goto를 사용하지 말라는 말이 있다.
goto를 사용하게 되면 프로그램의 실행 순서가 인간이 이해하기에 너무 복잡해질 가능성이 있기 때문이다. goto를 사용하게 되면 프로그램의 실행 순서를 이리저리 이동할 수 있게 된다. 그러한 이동이 잦아지면 소스를 이리저리 따라가면서 프로그램을 이해해야 하는데, 그리 만만한 작업이 아니다. goto를 이용한 이동은 프로그램을 논리적으로 잘 구성하면 모두 피할 수 있는 것들이다. 

> 구조적 프로그래밍은 함수를 쓰라는 것이다. 함수를 쓰면 좋은 이유는 우선 중복 코드를 한 곳에 모아서 관리할 수 있고, 논리를 함수 단위로 분리해서 이해하기 쉬운 코드를 작성할 수 있기 때문이다. 여기에 더해 구조적 프로그래밍의 지침 중에서 공유 사용 시 문제가 발생하기 쉬운 전역 변수보다는 지역 변수를 쓰라는 것도 있다.

> 자, 그럼 자바 언어에서 이러한 절차적/구조적 프로그래밍의 유산은 어디에 남아 있을까? goto문은 제어 흐름을 이리저리 이동시키는 용도이고, 함수는 중복 코드 제거와 논리를 분할하기 위한 용도다. 제어하면 생각나는 것은 순서도와 제어문이다. 함수는 객체 지향 언어에서라면 메서드와 같은 것이다.
결론적으로 객체 지향 언어에서 절차적/구조적 프로그래밍의 유산은 메서드 안에서 확인할 수 있다. 객체 지향 프로그래밍에서 제어문이 존재할 수 있는 유일한 공간은 바로 메서드 내부이기 때문이다.

> 여기서 한 가지 의문은 function 함수와 메서드(Method)는 무엇이 다르냐다. 답부터 이야기하자면 전혀 다르지 않다. 절차적/구조적 프로그래밍에서 함수라 불렀는데 객체 지향에서는 좀 다르게 불러야 하지 않을까? 그래서 메서드라고 불렀다고 한다. 그래도 굳이 차이점을 찾는다면 함수는 클래스나 객체와 아무 관계가 없지만 메서드는 반드시 클래스 정의 안에 존재해야 한다는 것이다. 객체 지향 언어에서 클래스 외부에 존재할 수 있는 것은 없다. 그렇다면 import 문은? 편의 기능이며, 게으름의 산물일 뿐이다. import 구분 없이 코딩하는 것도 가능하다. 다만, import 없이 코딩하는 것은 타이핑을 많이 해야 한다. 


### 5.1 데이터 타입 분류

자바의 데이터 타입은 크게 기본 타입(primitive type)과 참조 타입(reference type)으로 분류된다. 
참조 타입이란 객체의 번지를 참조하는 타입으로 배열, 열거, 클래스, 인터페이스 타입이 있다.

#### 참조타입이란?
객체의 번지를 참조하는 타입니다.
번지는 메모리의 위치를 이야기하고, 메모리의 어느 위치에 객체가 생성되어 있고 그것을 참조하는 타입이다라고 해서 참조 타입이라고 한다.

#### 객체란?
데이터와 메모드로 구성된 덩어리라고 본다.
메모리에 생성 되어 있는 객체를 참조하는 변수를 참조타입이라고 한다.

#### 변수란?
하나의 값을 저장하는 메모리 번지를 참조하는 이름

#### 기본 타입과 참조 타입의 차이점
변수가 참조하는 메모리에 값이 있다면 기본 타입이고
메모리에 다른 메모리 번지가 있는 경우 참조 타입이라고 한다.

- 데이터 타입(Data Type)

||정수 타입|실수 타입|논리 타입|
|-|--|--|--|
|기본 타입|byte, char, short, int, long|float,double|boolean|

|참조 타입|배열 타입, 열거 타입, 클래스, 인터페이스|
|--|--|


```java
/* 스택(stack) 영역 */

// 기본 타입
int age = 14;
double price = 100.5;

// 참조 타입
String name = "신용권";
String job = "학생";
```

|  힙(Heap Area)  |
|--|
|100|
|200|

|  스택(stack)  |
|--|
|name1(100)|
|name2(100)|
|job(200)|

* 객체 : 힙
* 변수 : 스택

변수들은 모두 스택이라는 메모리 영역에 생성된다. 
기본 타입은 직접 값을 저장하고 참조 타입은 힙 메모리 영역의 
String 객체 번지를 저장하고 이 번지를 통해 String 객체를 참조한다.

* 프로그램이 메모리를 사용하는 방식
<table>
    <tr>
    <td>코드 실행 영역</td>
    <td>데이터 저장 영역</td>
    </tr>
</table>

* 객체 지향 프로그램의 메모리 사용 방식
<table>
    <tr>
    <td rowspan="2">코드 실행 영역</td>
    <td colspan="2">
    스태틱(Static) 영역
    </td>
    </tr>
    <tr>
    <td>
    스택(Stack) 영역
    </td>
    <td>
    힙(Heap) 영역
    </td>
    </tr>
</table>

```java
public class Start2 {
    public static void main(String[] args){
        int i; // 3번째 줄
        i = 10; // 4번째 줄

        double d = 20.0;
    }
}
```

3번째 줄을 실행하면 i를 선언만 하고 초기화 하지 않은 상태이기 때문에 컴파일러(javac)는 "The local variable i may not have been initialized" 경고를 토해내며 파업에 들어간다.
그 지역 변수 i는 초기화되지 않았을 수도 있습니다라는 뜻이다.

<table>
    <tr>
    <td colspan="2">
    java.lang, main(String[] args
    </td>
    </tr>
    <tr>
    <td>
    [main() 스택 프레임]
    <br/>
    i = ?
    <br/>
    args
    </td>
    <td>
    </td>
    </tr>
</table>


### 5.3 참조 타입 변수의 ==, != 연산

```java

name1 != job; // true
name1 == name2; // true
name1 == job; // false
```

### 5.4 null 과 NullPointerException

참조 타입 변수는 아직 번지를 저장하고 있지 않다는 뜻으로 nul 값을 가질 수 있다. 
null도  초기값으로 사용할 수 있기 때문에 null로 초기화된 참조 변수는 스택 영역에 생성된다.

*자바는 프로그램 실행 도중에 발생하는 오류는 예외(Exception)라고 부른다. 

```java
var1 == null // true
```

참조 변수는 참조하고 있는 객체를 이용하고 있기 때문에 null 은 변수를 사용할 수 없다.

```java
int[] inArray = null;
inArray[0] = 10; // NullPointerException
```

str 변수가 참조하는 String 객체가 없으므로 문자열 
길이를 구할 수 없다.

```java
String str = null;
str.length(); // NullPointerException
```

자바에서는 사용하지 않는 객체를 쓰레기로 취급하고, 쓰레기 수집기 (Garbage Collection) 을 실행시켜 자동으로 제거한다.
자바는 직접적으로 메모리에 접근해서 정리하는 기능이 없기 때문에(c는 있다) 코드를 이용해서 객체를 직접 제거할 수 없다. 대신 객체를 제거하기 위해 참조를 없앨 수 있다.
안쓰는 객체를 null로 참조를 없애면 쓰레기로 생각해서 자바의 수집기가 제거를 해준다.

hobby 는 10 번지에서 20번지를 대입시키므로 10번지는 
쓰레기 객체가 된다.

하지만 kind1, kind2와 같이 같은 번지를 사용하고 있는 
경우에는 변수 하나에 null을 대입하여 참조를 없애더라도 쓰레기가 되지 않는다. 
객체를 사용하고 있는 참조 변수가 있기 때문이다.

```java
String hobby = "쓰레기"; // 10번지
hobby = "폐기"; // 20번지


String fruit = "사과";
fruit = null;

String kind1 = "자동차";
String kind2 = kind1;
kind1 = null;
```

### 5.5 문자열 타입

* 참조타입
* 객체로 초기화

String 변수에 문자열 리터럴을 대입하는 것이 일반적이지만 new 연산자로 String 객체를 생성하고 대입할 수도 있다.
new 연산자는 새로운 객체를 만드는 연산자로 객체 생성 연산자라고 한다.

name1과 name2는 동일한 문자열 리터럴로 생성되었으나 서로 다른 객체이기 때문에 ==으로 비교했을 때 false가 나온다.

```java
// 리터럴 대입
// 동일한 문자열로 동일한 객체가 되어 동일한 번지가 된다.
String name1 = "홍길동"; // 10번지
String name2 = "홍길동"; // 10번지

// new로 생성
String name1 = new String("홍길동");
String name2 = new String("홍길동");

// 번지를 비교한다.
if(name1 == name2){
    
}else{
    // 실행
}

// 문자열을 비교한다.
// ()를 사용하면 메소드를 호출하는 것이다.
if(name1.equals(name2)){
    // 실행
}else{

}

// 기본타입 예 
// 오토박싱
Integer intName = 10;


// 리터럴 초기화
String str1 = "Hello, World!";
// new 연산자 초기화
String str2 = new String("Hello, World!");
// 빈문자 초기화
String str3 = ""; 
```

문자열은 불변이기 때문에 한 번 문자열을 만들면 바꿀 수 없다.
그렇기 때문에 새로운 문자열을 만들 때마다 힙에 객체가 생성된다.

| 메소드 | 설명 |
|--|--|
|charAt()|인덱스 0부터 시작. 문자열 추출|
|length()|공백 포함 문자열 길이|
|replace(문자열, 대체문자열)|문자열 대체|
|substring(시작, 끝)|인덱스 0부터 시작. 문자열 자르기|
|int indexOf()|인덱스 0부터 시작. 없으면 -1리턴. 문자열 찾기|
|boolean contains()|문자열 찾기|
|split()|문자열 분리. 분리 된 각각을 토큰이라고 부른다.|



```java
String java = "자바 프로그래밍";
String java2 = java.replace("자바", "JAVA"); // 힙에 새로 생성

// 문자열이 존재하지 않는다면 -1을 리턴하고 존재한다면
// 처음 인덱스를 리턴한다. 자바 프로그래밍은 8인덱스를 가지고 있고
// "자"는 인덱스 0 이므로 0을 리턴한다.
int index = java.indexOf("자바");

// 존재하면 true 아니라면 false 리턴
boolean result = java.contains("자바");

// 존재하면 true 아니라면 false 리턴
String[] tokens = java.split(" ");

// 괄호가 없는 length는 속성이라고 한다.
// 인덱스가 0부터 시작하기 때문에 미만으로 제한한다.
for(list i=0;  i<tokens.length; i++){
    System.out.println(tokens[i]);
}
```

### 5.6 배열(Array) 타입
변수는 하나의 값만 저장할 수 있다. 따라서 값의 수만큼 변수를 만들어야 하지만 배열을 대괄호[]와 함께 사용하여 여러 값을 저장한다.
배열은 연속된 공간에 값을 나열시키고, 각 값에 인덱스를 부여해 놓은 자료구조이다.

* 특징
1. 배열은 각 항목에 모두 동일한 타입의 값이 들어가 있어야 한다.
2. 배열의 길이는 늘리거나 줄일 수 없다.(한 번 생성된 배열의 크기를 줄이거나 늘릴 수 없다.)
3. 대괄호[] 를 사용하면 줄이거나 늘릴 수 있다.

```java
int[] array = [1, 2, 4];

// 변경
array[0] = 10;
```

#### 배열 변수 선언

배열을 사용하기 위해서는 우선 배열 변수를 선언해야 한다. 배열 변수 선언은 다음과 같이 두 가지 형태로 작성할 수 있다.

```java
타입[] 변수;
타입 변수[];

// 선언
int[] intArray;
double[] doubleArray;
STring[] stringArray;

intArray = new int[]{1, 2, 3, 4, 5};

// 값 목록으로 배열 생성
// 타입[] 변수 = {값0, 값1 ...};
```

배열 변수는 참조 변수이다. 배열도 객체이므로 힙 영역에 생성되고 배열 변수는 힙 영역의 배열 주소를 저장한다. 참조할 배열이 없다면 null로 초기화한다.

배열 객체의 각 변수는 스택 변수가 참조된다. 배열의 0인덱스의 값이 5번지를 가지고 있다면 스택의 5번지를 가진 변수가 참조된다.

중괄호[]는 나열된 값들을 항목으로 가지는 배열을 힙에 생성하고, 번지를 리턴한다. 배열 변수는 리턴된 번지를 저장함으로써 참조가 이루어진다.

중괄호 {}로 감싼 값의 목록을 배열 변수에 대입할 때 주의할 점이 있다 배열 변수를 미리 선언한 후에는 값 목록을 변수에 대입할 수 없다. 

```java
타입[] 변수;
변수 = {값0, 값1 ...} ; // 컴파일 에러
```

배열 변수를 선언한 시점과 값 목록이 대입되는 시점이 다르다면 다음과 같이 new 타입[]을 중괄호 앞에 붙여주면 된다.
타입은 배열 변수를 선언할 때 사용한 타입과 동일하게 주면 된다.

```java
변수 = new 타입[] {값0, 값1 ...};

String[] names = null;
names = new String[] {"신용권", "홍길동", "감자배"};
```

메소드의 매개변수가 배열 타입일 경우에도 마찬가지다. 아래와 같이 매개변수로 int[] 배열 타입을 갖는 printItem() 메소드가 있다고 가정하고, printItem() 메소드를 호출할 때 매개값으로 중괄호로 감싼 값 목록을 주면 컴파일 에러가 발생한다.

```java
// 메소드 선언
// int[] score 로 배열이 선언되어 있는 것이다.
void printItem(int[] score){}

// 잘못된 메소드 호출
// 메소드를 호출할 대 값을 주기 때문에 new를 붙여서 사용해야 한다.
printItem({10, 20, 30}); // 컴파일 에러

printItem(new int[] {10, 20, 30});
```

#### new 연산자로 배열 생성
* 배열 항목을 기본값으로 초기화한 배열 생성

```java
타입[] 변수 = new 타입[길이];
```

`값의 목록은 없지만 향후 값들을 저장할 목적`으로 배열을 미리 생성할 수도 있다. new 연산자를 다음과 같이 사용하면 배열 객체를 생성시킨다. 길이는 배열이 저장할 수 있는 항목 수를 말한다.

new 연산자는 해당 길이의 배열을 생성하고 배열의 번지를 리턴하기 때문에 배열 변수에 대입할 수 있다.
이미 배열 변수가 선언된 후에도 다음과 같이 대입이 가능하다.

```java
타입[] 변수 = null;
변수 = new 타입[길이];
```

new 연산자로 배열을 처음 생성하면 배열 항목은 기본값으로 초기화된다.

```java
int[] intArray = new int[5];
```


```java
// 길이 5인 int[] 배열을 생성하고, 배열 번지를 inArray 변수에 대입한다.

// [0,0,0,0,0] 으로 초기화된다.
int[] intArray = new int[5];

// [null,null,null,null,null] 으로 초기화된다.
String[] StrArray = new String[5];

// [false,false,false,false,false] 으로 초기화된다.
Boolean[] booleanArray = new Boolean[5];
```

<table>
    <tr>
    <td colspan="2">데이터 타입</td>
    <td>초기값</td>
    </tr>
    <tr>
        <td rowspan="3">기본 타입</td>
        <td>
        byte[] <br/>
        char[] <br/>
        short[] <br/>
        int[] <br/>
        long[]
        </td>
        <td>
        0 <br/>
        '\u0000' <br/>
        0 <br/>
        0 <br/>
        0L
        </td>
    </tr>
    <tr>
        <td>
        float[] <br/>
        double[]
        </td>
        <td>
        0.0F <br/>
        0.0
        </td>
    </tr>
    <tr>
        <td>
        boolean[]
        </td>
        <td>
        false
        </td>
    </tr>
    <tr>
        <td>참조 타입</td>
        <td>
        클래스[] <br/>
        인터페이스[]
        </td>
        <td>
        null <br/>
        null
        </td>
    </tr>
</table>


#### 배열 길이

배열의 길이란 배열에 저장할 수 있는 항목 수를 말한다. 코드에서 배열의 길이를 얻으려면 도트(.) 연산자를 사용해서 참조하는 배열의 length 필드를 읽으면 된다.
length 필드는 읽기만 가능하므로 값을 변경할 수 없다.

```java
inArray.length = 10; // 컴파일 에러
```

인덱스(배열의 길이)를 초과해서 사용하면 ArrayIndexOutOfBoundsException 이 발생한다.

### 5.7 다차원 배열























