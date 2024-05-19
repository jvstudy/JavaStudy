# 스트림


<b>특징</b>

1) 내부 반복자이므로 처리 속도가 빠르고 병렬 처리에 효율적
2) 람다식으로 다양한 요소 처리를 정의할 수 있다.
3) 중간 처리와 최종 처리를 수행하도록 파이프 라인을 형성할 수 있다.


```java
// 리스트에 담겨있는 요소의 타입과 동일한
// 스트림 요소 타입을 반환한다.
Strean<String> stream = list.strea();
```

>[!note]
>HashSet은 Java 컬렉션 프레임워크의 일종으로, 중복을 허용하지 않고 순서를 보장하지 않는 데이터를 저장한다.

```java
package com.exam01;

import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;
import java.util.stream.Stream;

public class StreamExample {
    public static void main(String[] args) {

        // Set 컬렉션 생성
        Set<String> set = new HashSet<>();
        set.add("홍길동");
        set.add("신용권");

        // 스트림 얻기
        Stream<String> stream = set.stream();
        stream.forEach(name -> System.out.println(name));

    }
}

```


### 반복자

>[!NOTE]
>스트림은 내부 반복자를 사용한다. 


* 외부 반복자 : 컬렉션의 요소를 컬렉션 바깥쪽에서 반복해서 가져와 처리
예) for문, Iterator

특징 : 요소들을 하나씩 순차적으로 처리시킨다.싱글 코어 CPU일 경우 순차 처리가 빠르다. 병렬 스크림을 사용할 경우 스레드 수만 증가하고 동시성 작업으로 처리되기 때문이다.

* 내부 반복자 : 요소 처리 방법을 컬렉션 내부로 주입시켜서 요소를 반복 처리
예) 스트림

특징 : 멀티 코어 CPU를 활용하여 요소들을 분배시켜 병렬 작업을 할 수 있다.


단점 : 병렬 처리는 스레드풀 생성, 스레드 생성하여 추가 비용이 발생된다.


```java
package com.ch17.sec02;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

public class ParalleStreamExample {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();

        list.add("홍길동");
        list.add("신용권");
        list.add("람다식");
        list.add("병렬이");
        list.add("홍식이");
        list.add("다람이");


        // 병렬 처리
        Stream<String> paralleStream = list.parallelStream(); // 병렬 스트림 얻기

        paralleStream.forEach(name -> {
            System.out.println(name + ":" + Thread.currentThread().getName());
        });
    }
}
```


### 파이프라인

>[!NOTE]
>스트림은 하나 이상 연결될 수 있다. 이것을 스트림 파이프라인이라고 한다. 스트림 파이프라인은 반드시 맨 끝에는 최종 처리 부분이 있어야 하며, 최종 처리가 없다면 오리지널 및 중간 처리 스트림은 동작하지 않는다.




| | |중간처리|중간처리|최종처리|
|--|--|--|--|--|
|컬렉션 및 배열|오리지널 스트림|필터링 중간 스트림|매핑 중간 스트림|집계 처리|

<br>

<b>중간 처리</b>
* 필터링 : 최종 처리를 위해 요소를 걸러냄
* 매핑 : 최종 처리를 위해 요소를 변환
* 정렬

<br>

<b>최종 처리</b>
* 집계(카운팅,총합,평균) : 중간 처리에서 정제된 요소들을 집계
* 반복 : 중간 처리에서 정제된 요소들을 반복 작업


```java
Stream<Student> studentStream = list.stream();

// Student 객체를 getScore() 메소드의 리턴값으로 매핑
InsStream scoreStream = studentStean.mapToInt(student -> student.getScore());

// 평균 계산
double avg = scoreStream.average().getAsDouble();
```

메소드 체이닝 패턴을 이용하여 앞의 코드를 다음과 같이 간결하게 작성할 수 있다.

```java
double avg = list.stream()
.mapToInt(student -> student.getScore())
.average()
.getAsDouble();
```

<br>

```java
package ch17.sec03;

public class Student {
    private Stirng name;
    private int score;

    public Student (String name, int score) {
        this.name = name;
        this.score = score;
    }

    public String getName () {
        return name;
    }
    public int getScore () {
        return score;
    }
}
```

```java
package ch17.sec03;

import java.util.Arrays;
import java.util.List;

public class StreamPipeLineExample {
    public static void main(String[] args) {
        List<Student> list = Arrays.asList(
            new Student("홍길동", 10),
            new Student("신용권", 20),
            new Student("유미선", 30)
        )
    }

    double avg = list.strean()
    .mapToInt(student -> student.getScore())
    .average()
    .getAsDouble();

    System.out.println("평균 점수" + avg);
}
```

### 리소스로부터 스트림 얻기


