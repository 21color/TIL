# REST API
  ## REST API 에서 REST 는 Representational State Transfer 의 약자. 소프트웨어 프로그램 아키텍처의 한 형식이다.
___
- 자원을 이름으로 구분하여 해당 자원의 상태를 주고 받는 모든 것을 의미!
- 월드 와이드 웹과 같은 분산 하이퍼미디어 시스템을 위한 소프트웨어 개발 아키텍처의 한 형식..
- REST 는 기본적으로 웹의 기존 기술과 HTTP 프로토콜을 그대로 활용하기때문에 웹의 장점을 최대한 활용할 수 있는 아키텍처 스타일이다.
___
## **REST의 구체적인 개념...!**

- HTTP URL을 통하여 자원을 명시하고, HTTP Method ( POST, GET, PUT, DELETE ) 를 통하여 해당 자원에 대한 CRUD OPEATION을 적용하는 것을 의미한다.
- 즉 REST는 자원 기반의 구조 설계의 중심에 Resoure가 있고 http method 를 통해 resource를 처리하도록 설계된 아키텍처를 의미한다.
- **웹의 모든 자원에 고유한 id인 http url을 부여한다.**
___
## REST API의 등장 ! 등장하게 된 배경은?

- 2000년도에 HTTP 주요 저자 중 한 사람인 로이 필딩이 그 당시 웹 설계 우수성이 비해 제대로 사용되어지지 못하는 모습에 안타까워하며 웹의 장점을 최대한 활용할 수 있는 Architecture 로써 REST 를 발표.
- 최근 서비스 , 어플리케이션의 개발흐름이 멀티 플랫폼, 멀티 디바이스 시대로 넘어와있다... 단순히 하나의 브라우저만 지원되었던 이전과 다르게 최근의 서버 프로그램은 여러 웹 브라우저는 물론이고 아이폰, 안드로이드 어플리케이션과의 통신에도 대응이 가능해야한다!
- **따라서 플랫폼에 맞추어 새로운 서버를 만드는 수고를 들이지 않기 위하여 범용적으로 사용성을 보장하는 서버 디자인이 필요하게 되버림!** 그리하여 등장!
___
## 왜 만드는가 ! RESTful APIs ?

- 가장 큰 이유는 client side를 정형화된 플랫폼이 아닌 모바일, pc, 어플리케이션 등 플랫폼에 제약을 두지 않는 것을 목표로 했기 때문..!
    
    2010년 이전까지만 해도 sever side에서 데이터를 전달해주는 client 프로그램의 대상은 pc브라우저로 그 대상이 명확했다. 그렇다보니 그냥 jsp, asp, php등을 이용한 웹페이지를 구성하고 작업을 진행하면 ok~였으나! 스마트 기기들이 등장하면서 TV, 스마트폰, 태블릿 등 Client 프로그램이 다양화 되고 그에 맞춰 server를 일일이 만든다는것이 비 효율적인 일이 되어버렸다....
    
    **이러한 과정에서 개발자들은 client side를 전혀 고려하지 않고 메세지 기반, xml, json과 같은 client에서 바로 객체로 치환 가능한 형태의 데이터 통신을 지향하게 되면서 server와 client의 역할을 분리하게 되었다.** 
    
    > 이러한 변화를 겪으면서 필요해진 것은 HTTP 표준 규약을 지키면서 API를 만드는 것!
    > 
___
## 유의사항

- REST API를 개발하다보면 HTTP의 Response 규약을 지키지 않고 본인들이 만들어낸 JSON 컨벤션으로 응답하는 경우를 많이 확인할 수 있는데 그것은 옳지 않은 개발 방향이다.
- 왜냐하면 Client Side가 정형화 되어있지 않은 환경에서 개발 속도를 저하하는 가장 큰 이유는 표준을 지키지 않았기 때문이다.

![rest api](https://tse1.mm.bing.net/th?id=OIP.6cjGAevnut9YuDmprV1QmwHaC-&pid=Api&P=0&w=503&h=202)
___
## REST의 구성

* 자원(Resource) - URL 
* 행위(Verb) = Http maethod
* 표현(Representaions)

### 1. 자원(Resourece) URL
- 모든 자원에 고유한 ID가 존재하고 이 자권은 server에 존재한다. 
- 자원을 구별하는 ID는 /orders/order_id/1 와 같은 HTTP URI 이다. 

### 2. 행위(Verb) - http method
- http 프로토콜의 method를 사용한다. 
- http 프로토콜은 GET, POST, PUT, DELETE와 같은 메서드를 제공한다.

### 3. 표현(Representaion of Resource)
- Client가 자원의 상태에 대한 조작을 요청하면 Server는 이에 적절한 응답을 보낸다.

- REST에서 하나의 자원은 Json, Xml, text, Rss등 여러형태의 representaion으로 나타낼 수 있다.

- 현재는 Json으로 주고 받는것이 대부분이다. 
___
## HTTP METHOD의 역할 

|METHOD|역할|
|:--:|:--|
|**POST**|POST를 통해 해당 url을 요청하면 리소스를 생성합니다.|
|**GET**|GET을 통하여 리소스를 조회합니다. 리소스를 조회하고 해당 도큐먼트에 대한 자세한 정보를 가져옵니다.|
|**PUT**|PUT을 통해 해당 리소스를 수정합니다.|
|**DELETE**|DELETE를 통해 리소스를 삭제합니다.|
___

## REST 특징 

1. 클라이언트 / 서버 구조

    * 클라이언트는 유저와 관련된 처리를, 서버는 REST API를 제공함으로서 각각의 역할이 확실하게 구분되고 일괄적인 인터페이스로 분리되어 작동할 수 있게 한다. 
    - Client: 사용자 인증이나 context(세션..로그인정보..) 등을 직접 관리하고 책임진다. 
    - REST Server: API를 제공하고 비즈니스 로직 처리 및 저장을 책임진다. 

    - 서로간 의존성이 줄어든다. 

2. 무상태성

    * REST는 HTTP의 특성을 이용하기때문에 무상태성을 갖는다. 무상태성...? **즉 서버에서 어떤 작업을 하기 위해 상태정보를 기억할 필요가 없고 들어온 요청에 대해 처리만 해 주면 되기때문에 구현이 쉽고 단순해진다.**

3. 캐시 처리 가능(Cacheable)
    * HTTP라는 기존 웹표준을 사용하는 REST의 특징 덕분에 기존 웹에서 사용하는 인프라를 그대로 사용할 수 있다. 

    * 대량의 요청을 효율적으로 처리하기 위해 캐시가 요구된다. 

    * 캐시 사용을 통해 응답이 빨라지고 REST Server 트랙잭션이 발생하지 않기 때문에 전체 응답시간, 성능, 버서의 자원 이용률을 향상 시킬 수 있다. 

4. 자체 표현 구조 
    * JSON을 이용한 메세지 포맷을 이용하여 직관적으로 이해할 수 있고 REST API 메세지만으로 그 요청이 어떤 행위를 하는지 알 수 있다.

5. 계층화 (Layered System)
    * 클라이언트와 서버가 분리되어 있기 때문에 중간에 프록시 서버, 암호화 계층 등 중간매체를 사용할 수 있어 자유도가 높다.

6. 유니폼 인터페이스
    * 유니폼 인터페이스는 http 표준에만 따른다면 모든 플랫폼에서 사용이 가능하며 URI로 지정한 리소스에 대한 조작을 가능하게 하는 아키텍쳐 스타일을 말한다.

   * URI로 지정한 resource에 대한 조작을 통일되고 한정적인 인터페이스로 수행한다.

    * **즉, 특정 언어나 기술에 종속되지 않는다.** 
  
___

## 중심 규칙 
  > REST에서 가장 중요하며 기본적인 규칙은 아래의 두 가지이다. 
  >> * URI는 정보의 자원을 표현해야한다. 
  >> * 자원에 대한 행위는 HTTP Metod 등으로 표현한다. (get, post, put, delete. . .)
___

## 세부 규칙 
1. 슬래시 구분자 (/)는 계층 관계를 나타내는데 사용한다.

2. URI 마지막 문자로 슬래시(/)를 포함하지 않는다.
    * 즉 URI에 포함되는 모든 글자는 리소스의 유일한 식별자로 사용되어야 하며 URI가 다르다는 것은 리소스가 다르다는 것을 의미한다.

    * 역으로 리소스가 다르면 URI도 달라져야 한다.

3. 하이픈은 URI 가독성을 높이는데 사용한다.

4. 밑줄은 URI에 사용하지 않는다,
5. URI 경로에는 소문자가 적합하다. 
    - URI 경로에 대문자 사용은 피하도록 한다. 
6. 파일확장자는 URI에 포함하지 않는다.

    - REST API에서는 메시지 바디 내용의 포맷을 나타내기 위한 파일 확장자를 URI 안에 포함시키지 않는다.

    - 대신 Accept Header를 사용한다..
        - ex) GET: http://restapi.exam.com/orders/2/Accept: image/jpg
7. 리소스 간에 연관 관계가 있는 경우에? 

    - 리소스명/리소스ID/관계가 있는 다른 리소스 명
    - ex) GET:/users/2/orders 
    (일반적으로 소유의 관계를 표현할 때 사용... )

    ![restapiservice](https://hackernoon.com/hn-images/0*HU6ti25J9Y_hJQjl.)

      - [출처]https://hackernoon.com/build-restful-api-in-go-and-mongodb-5e7f2ec4be94

## 설계 목표 
REST의 핵심 설계 목표는 다음과 같다.

    1. 컴포넌트간의 유연한 상호 연동성 확보
    2. 범용 인터페이스
    3. 각 컴포넌트들의 독립적인 배포 
    4. 지연 감소, 보안강화, 레거시 시스템을 *인캡슐레이션* 하는 중간 컴포넌트로의 역할 
    (* * ==> 상위 계층에서 하위 계층으로 데이터를 보내면 물리계층에서 전기 신호 형태로 네트워크를 통해 신호를 보냄. 이 과정을 인캡슐레이션이라 칭한다.)

### 1. 상호연동성 확보
    - 상호 연동성이란 서로 상이한 컴포넌트들을 쉽게 연결할 수 있는 성질을 의미한다. 상호연동성은 두 개 이상의 컴포넌트들을 결합함으로서 작업을 더 효율적으로 수행하도록 하는데 목적이 있다. 
    - 즉 REST는 HTTP와 URI 기반인데 HTTP와 URI 모두 표준이며, 직관적이고 사용이 간단하며 어디서든 동일하게 작동하는 것을 보장할 수 있다. 

### 2. 범용 인터페이스 
    - 상호연동성과 비슷한 개념으로 REST 모델을 위한 HTTP와 URI는 표준으로 어디서든지 사용 가능한 범용 인터페이스를 제공한다.
    - 따라서 개발자는 비즈니스 로직만 고민하면 된다.