# 14. 멀티 스레드

<br>

### 멀티스레드 개념

>[!NOTE]
>프로세스는 독립적인 메모리 공간을 가지고 있지만, 스레드는 같은 프로세스 내에서 공유된 메모리 공간을 사용한다. <br>
멀티프로세스는 여러 개의 프로세스가 동시에 실행되며, 각각의 프로세스는 독립된 메모리 공간을 가지고 있다. 
예) 작업 프로그램에서 각각 실행되는 프로그램들 <br>
멀티 프로세스가 프로그램 단위의 멀티 태스킹이라면 멀티 스레드는 프로그램 내부에서 멀티 태스킹이라고 할 수 있다.

>[!important]
>멀티 태스킹은 두 가지 잇아의 작업을 동시에 처리하는 것

<br>

### 메인 스레드

>[!NOTE]
>자바 프로그램의 시작점이 되는 스레드이다. 메인 스레드는 main 메서드를 실행하는 스레드로, JVM 은 main 메서드를 찾아 실행한다.

<br>

### 작업 스레드 생성과 실행

>[!NOTE]
>자바 프로그램은 메인 스레드가 존재하기 때문에 메인 작업 이외에 추가적인 작업 수만큼 스레드를 생성한다. 자바는 작업 스레드도 객체로 관리하므로 클래스가 필요하다. Thread 클래스로 직접 객체를 생성해도 되지만, 하위 클래스를 만들어 생성할 수도 있다.

<br>

<b>Thread 클래스</b>
- Thread 클래스는 자바에서 기본적으로 제공하는 스레드 클래스이다.
- run() 메서드를 오버라이딩하여 스레드가 수행할 작업을 정의할 수 있다.
- 스레드 시작을 위해 start() 메서드를 호출한다.

```java
class MyThread extends Thread {
    public void run() {
        // 스레드가 수행할 작업 정의
    }
}
```

<b>Runnable 인터페이스</b>
- Runnable 인터페이스는 스레드가 수행할 작업을 정의하기 위한 메서드를 선언한다.
- Runnable 을 구현한 클래스에서 run() 메서드를 오버라이딩하여 스레드가 실행될 코드를 작성한다.
- Runnable 을 구현한 클래스의 인터페이스를 생성한 후, Thread 클래스의 생성자에 전달하여 새로운 스레드를 생성한다.
- Java는 다중 상속을 지원하지 않기 때문에, 이미 다른 클래스를 상속 중인 경우 Runnable 인터페이스를 구현하는 것이 유용하다.

```java
class MyRunnable implements Runnable {
    public void run() {
        // 스레드가 수행할 작업 정의
    }
}

// Runnable을 사용하여 스레드 생성
Thread thread = new Thread(new MyRunnable());
```

<br>

### 스레드 이름

>[!NOTE]
>스레드 이름은 스레드 작업을 추적하기 위한 목적으로 사용된다. 아래와 같이 사용할 수 있다.

<br>

1. 디버깅 및 로깅
* 여러 스레드가 동작하는 프로그램에서 상태 구분하기 위해

```java
Thread myThread = new Thread(() -> {
    // 스레드에서 수행되는 작업
});

myThread.setName("MyCustomThread");
myThread.start();
```

2. 스레드 풀 관리
* 스레드 풀 상태를 모니터링하거나 디버깅하기 위해

```java
ExecutorService executorService = Executors.newFixedThreadPool(5);

Runnable task = () -> {
    // 스레드 풀에서 수행되는 작업
};

ThreadFactory threadFactory = Executors.defaultThreadFactory();
executorService.execute(threadFactory.newThread(task));
```

3. 성능 프로파일링
* 애플리케이션의 성능을 분석하는 경우

```java
Thread performanceThread = new Thread(() -> {
    // 성능 프로파일링을 위한 작업
});

performanceThread.setName("PerformanceThread");
performanceThread.start();
```

<br>


### 스래드 상태

>[!NOTE]
>스레드 객체를 `생성(NEW)` 하고, `start()` 메소드를 호출하면 `실행 대기 상태(RUNNABLE)` 가 된다. 실행 대기 스레드는 CPU 스케쥴링에 따라 CPU 를 점유하고 run() 메소드를 실행한다. 
이때를 `실행(RUNNING)` 상태라고 한다.
실행 스레드는 run() 메소드를 모두 실행하기 전에 스케줄링에 의해 다시 실행 대기 상태로 돌아갈 수 있다. 그리고 다른 스레드가 실행 상태가 된다.
이렇게 스레드는 실행 대기 상태와 실행 상태를 번걸아 가면서 자신의 run() 메소드를 조금씩 실행한다. 실행 상태에서 run() 메소드가 종료되면 더이상 실행할 코드가 없기 때문에 스레드의 실행은 멈추게 된다. 이 상태를 `종료 상태(TERMINATED)` 라고 한다.

<br>

<b>스레드 상태</b>

| 상태             | 설명                                                    |
|------------------|---------------------------------------------------------|
| NEW (생성)       | 스레드 객체가 생성되었지만 `start()` 메서드 호출 전 상태 |
| RUNNABLE (실행 가능) | 스레드가 실행될 준비가 되었거나 현재 실행 중인 상태      |
| BLOCKED (차단)    | 동기화 블록에서 다른 스레드에 의해 차단된 상태          |
| WAITING (대기)    | 특정 조건이 충족될 때까지 무한정 대기하는 상태          |
| TIME_WAITING (일정 시간 동안 대기) | 일정 시간 동안만 대기하는 상태                |
| TERMINATED (종료) | 스레드의 실행이 완료되거나 예외로 종료된 상태          |

<br>

<b>스레드의 실행 제어 메서드</b>

| 메서드                               | 설명                                                  |
|--------------------------------------|-------------------------------------------------------|
| `Thread.interrupt()`                 | 스레드에게 인터럽트 신호를 보냅니다.                   |
| `Thread.yield()`                     | 다른 실행 가능한 스레드에게 실행 기회를 양보합니다.    |
| `Thread.sleep(long millis)`           | 스레드를 주어진 시간 동안 일시 중지시킵니다.            |
| `Thread.sleep(long millis, int nanos)` | 주어진 시간 동안 대기하며, 시간이 지나거나 다른 스레드에 의해 깨워지면 실행 가능 상태로 전환됩니다. |
| `Thread.join()`                      | 특정 스레드가 종료될 때까지 현재 스레드를 대기시킵니다. |
| `Thread.join(long millis)`           | 특정 스레드가 주어진 시간 동안 종료될 때까지 현재 스레드를 대기시킵니다. |
| `Object.wait()`                      | 스레드를 무기한으로 대기 상태로 전환시킵니다.           |
| `Object.wait(long timeout)`          | 주어진 시간 동안 대기하며, 시간이 지나거나 다른 스레드에 의해 깨워지면 실행 가능 상태로 전환됩니다. |
| `Object.wait(long timeout, int nanos)` | 주어진 시간 동안 대기하며, 시간이 지나거나 다른 스레드에 의해 깨워지면 실행 가능 상태로 전환됩니다. |
| `Object.notify()`                    | `wait()` 메서드에 의해 대기 중인 스레드 중 하나를 임의로 선택하여 깨웁니다. |
| `Object.notifyAll()`                 | `wait()` 메서드에 의해 대기 중인 모든 스레드를 깨웁니다. |


<br>


```java
public class MultiThreadExample {
    public static void main(String[] args) {
        // 메인 스레드에서 실행되는 코드
        System.out.println("Main thread is running.");

        // 다른 작업을 수행하거나 다른 스레드를 생성할 수 있음
        Thread workerThread = new Thread(() -> {
            // 작업 스레드에서 실행될 코드
            for (int i = 0; i < 5; i++) {
                System.out.println("Worker thread: " + i);
                try {
                    Thread.sleep(1000); // 1초 동안 스레드 일시 정지
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });

        // 작업 스레드 시작
        workerThread.start();

        // 메인 스레드에서 계속 실행됨
        for (int i = 0; i < 3; i++) {
            System.out.println("Main thread: " + i);
        }

        // 메인 스레드가 종료되어도 작업 스레드는 계속 실행됨
        System.out.println("Main thread is finished.");
    }
}
```


<br>


### 스레드 동기화

<br>


### 스레드 안전 종료

<br>

### 데몬 스레드

<br>

### 스레드풀




