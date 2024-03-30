# 14. 멀티 스레드

<br>

### 스레드 동기화

<br>

>[!NOTE]
>자바에서 스레드 동기화는 여러 스레드가 공유 자원에 안전하게 접근할 수 있도록 하는 메커니즘을 말합니다. 여러 스레드가 동시에 공유 데이터에 접근하면서 발생하는 문제를 해결하고, 데이터 일관성과 안전성을 보장하기 위해 사용됩니다.


* Synchronized 메서드

>메서드 전체를 임계 영역으로 만들어 여러 스레드가 동시에 실행될 수 없도록 합니다.

>[!important]
>공유되는 자원, 즉 동시접근하려고 하는 자원에서 문제가 발생하지 않게 독점을 보장해줘야 하는 영역을 임계영역이라고 한다.

<br>

```java
public synchronized void synchronizedMethod() {
    // 동기화가 보장되는 코드 영역
}
```

* Synchronized 블록

특정 코드 블록을 임계 영역으로 만들어 해당 블록을 하나의 스레드만 실행하도록 합니다.

<br>

```java
public void someMethod() {
    // 비동기화 코드

    synchronized (lockObject) {
        // 동기화가 보장되는 코드 영역
    }

    // 비동기화 코드
}
```

* Volatile 키워드

>volatile 키워드를 변수에 사용하면 해당 변수의 값을 메인 메모리에서 직접 읽고 쓸 수 있게 됩니다. 이를 통해 스레드 간의 가시성(visibility)을 보장합니다.

<br>

```java
private volatile int sharedVariable;
```

* Lock 인터페이스

>java.util.concurrent.locks 패키지에서 제공하는 Lock 인터페이스와 그 구현체를 사용하여 더 유연한 동기화를 구현할 수 있습니다.

<br>

```java
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class SomeClass {
    private Lock lock = new ReentrantLock();

    public void someMethod() {
        lock.lock();
        try {
            // 동기화가 보장되는 코드 영역
        } finally {
            lock.unlock();
        }
    }
}
```

>[!important]
>스레드 동기화를 신중하게 다루어야 하며, 잘못 사용할 경우 데드락(deadlock)과 같은 문제가 발생할 수 있습니다.


### 스레드 안전 종료

<br>

>[!NOTE]
>스레드는 자신의 run() 메소드가 모두 실행되면 자동적으로 종료되지만, 경우에 따라서
실행 중인 스레드를 즉시 종료할 필요가 있다.
스레드를 강제 종료시키기 위해 Thread는 stop() 메소드를 제공하고 있으나 이 메소드는 
deprevated (더 이상 사용하지 않음)되었다. 
스레드를 안전하게 종료하는 방법은 사용하던 리소스들을 정리하고 run() 메소드를 빨리 
종료하는 것이다. 주로 조건 이용 방법과 interrupt() 메소드 이용 방법을 사용한다.

<br>

<b>스레드 안정 종료 고려사항</b>

* 플래그(flag) 사용

>종료 여부를 나타내는 플래그를 사용하여 스레드가 종료해야 하는지 확인합니다.
주기적으로 플래그를 확인하고 종료 조건이 충족되면 스레드가 종료됩니다.

<br>

* Interrupt 메서드

>Thread 클래스의 interrupt 메서드를 사용하여 스레드에 인터럽트 신호를 보낼 수 있습니다.
스레드는 주기적으로 인터럽트 여부를 확인하고, 인터럽트가 발생했을 경우 적절히 종료될 수 있도록 작성합니다.

<br>

```java
public class XXXThread extends Thread {
    private boolean stop;

    public void run() {
        while(!stop) {
            // 스레드가 반복 실행하는 코드;
        }
        // 스레드가 사용한 리소스 정리
    }

}
```

```java
package ch14.sec07.exam03;

public class PrintThread extends Thread {
    public void run() {
        while(true) {
            System.out.printLn("실행중");
            if(Thread.interrupted()) {
                break;
            }
        }
        System.out.println("리소스 정리");
        System.out.println("실행 종료");
    }
}
```

```java
package ch14.sec07.exam03;

public class InterrruptExample {
    public static void main(String[] args) {
        Thread thread = new PrintThread();
        thread.start();

        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {

        }

        thread.interrrupt();
    }
}
```
\

### 데몬 스레드

<br>

>[!NOTE]
>데몬 스레드는 주 스레드의 작업을 돕는 보조적인 역할을 수행하는 스레드이다.
주 스레드가 종료되면 데몬 스레드도 따라서 자동으로 종료된다.
데몬 스레드를 적용한 예로는 워드프로세서의 자동 저장, 미디어플레이어의 동영상 및
음악 재생, 가비지 컬렉터 등이 있는데, 여기에서 주 스데르(워드프로세스, 미디어플레이어, JVM)가
종료되면 데몬 스레드도 같이 종료된다.
스레드를 데몬으로 만들기 위해서는 주 스레드가 데몬이 될 스레드의 setDaemon(true)를 호출하면 된다.

<br>

```java
public static void main(String[] args) {
    AutoSaveThread thread = new AutoSaveThread();
    thread.setDaemon(true);
    thread.start();
}
```


### 스레드풀

<br>

>[!NOTE]
>병렬 작업 처리가 많아지면 스레드의 개수가 폭증하여 CPU가 바빠지고 메모리 사용량이 늘어난다.
이에 따라 애플리케이션의 성능 또한 급격히 저하된다. 이렇게 병렬 작업 증가로 인한 스레드의 폭증을 
막으려면 스레드풀을 사용하는 것이 좋다.
스레드풀은 작업 처리에 사용되는 스레드를 제한된 개수만큼 정해 놓고 작업 큐에 들어오는 작업들을 
스레드가 하나씩 맡아 처리하는 방식이다.
작업 처리가 끝난 스레드는 다시 작업 큐에서 새로운 작업을 자겨와 처리한다. 이렇게 하면 작업량이 증가해도
스레드의 개수가 늘어나지 않아 애플리케이션의 성능이 급격히 저하되지 않는다.

<br>

```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ThreadPoolExample {

    public static void main(String[] args) {
        // 스레드풀 생성
        ExecutorService executorService = Executors.newFixedThreadPool(3);

        // 작업 생성 및 스레드풀에 제출
        for (int i = 1; i <= 5; i++) {
            final int taskId = i;
            executorService.submit(() -> {
                System.out.println("Task " + taskId + " is running on thread " + Thread.currentThread().getName());
                // 작업 내용 수행
            });
        }

        // 스레드풀 종료
        executorService.shutdown();
    }
}
```



