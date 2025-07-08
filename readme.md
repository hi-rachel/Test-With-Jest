> 해당 저장소는 [테스트 with Jest: 제로초에게 제대로 배우기 ](https://www.inflearn.com/course/%ED%85%8C%EC%8A%A4%ED%8A%B8-with-jest-%EC%A0%9C%EB%A1%9C%EC%B4%88?inst=e859b3e2&utm_campaign=inflearn_%ED%8A%B8%EB%9E%98%ED%94%BD_promotion-link&utm_medium=referral&utm_source=instructor)강의를 듣고 정리한 내용입니다.
>
> 제로초 타임어택 15기 25/06/09 ~ (4주) 참여

# Section 1

## Jest 소개

[Jest](https://jestjs.io/docs/getting-started)

- 페이스북에서 만든 테스트 프레임 워크
- TS 가능, Babel/React/Node.js 전부 지원
- Vitest(Vite), Jasmine, Mocha + sinon + Chai 등의 대체재도 있음, Vite 쓰는거 아니면 Jest 추천!

> 무조건 테스트 해야 한다는 입장은 아님, 상황에 따라 다름 (추후 유지보수 고려, 잦은 기획 변경 등등)

## 테스트 해야 하는 이유

1. 예전에 났던 에러가 또 나는 경우
2. 코드가 복잡한데 많이 바꿔야 하는 경우
3. 하나의 코드를 수정했더니 import한 다른 곳에서 에러가 나는 경우
4. 장기간에 걸쳐 내가 유지보수를 해야하는 이유

## 테스트 종류

**TDD (Test-Driven Development, 테스트 주도 개발) - 테스트 먼저 작성, 그 다음 구현하는 개발 방식**

**BDD (Behavior-Driven Development, 행위 주도 개발) -** **행동(Behavior)을 기준으로 테스트**
-> FE에서 추천

모킹, 라이브러리 테스트 (라이브러리 테스트는 라이브러리의 몫)

테스트 종류: 유닛(벽돌 하나하나가 정상이어야 전체가 정상), 통합, E2E

**테스트 커버리지 100% 추구**

---

# Section 2

> 참고: https://github.com/zerocho/test-jest

## 테스트 코드를 짤 때의 원칙

1. 테스트는 틈틈히 추가하자
2. 진짜 도움이 되는 테스트를 하자
3. 테스트하기 쉬운 코드를 짜자
4. 매개변수의 타입은 최소한으로(테스트가 성공할 정도로만), 리턴 값의 타입은 최대한 자세하게
5. 라이브러리를 테스트하지 말자. 그건 라이브러리의 몫이다(테스트 경계 바깥)
6. 테스트 타이핑으로 스트레스 받지 말자(any 타입 사용 가능)
7. 먼저 실패하는 테스트를 만들고 성공시키자(Red => Green)
8. 커버리지는 100%를 목표로 하자
9. 코드 순서대로 테스트하자
10. 부작용이 있는 코드를 모킹하자(테스트 DB 요청같이 허용되는 부작용은 괜찮다)
11. 미래를 대비하는 테스트 코드르 짜자(not.toHaveBeenCalled)
12. 테스트는 두 번 실행해보자(부작용이 있는 경우 두 번째에 실패한다)
13. 앞 테스트가 뒤에 영향을 끼치지 않게 주의하자

---

[Jest CLI](https://jestjs.io/docs/cli)

--runInBand = 싱글 스레드 옵션(모노레포나 컴퓨터 성능 느릴때 테스트 속도 향상) <br>
--maxWorkers = 멀티 스레드 개수 옵션(기본은 cup 수 - 1)<br>
파일 변경 추적 --watch = 변경된 부분만 테스트, -watchAll = 모두 다 테스트<br>
테스트를 다 마쳤는데 터미널에서 끝나지 않고 계속 남아있다면 오픈 핸들을 의심하자.<br>
--detectOpenHandles로 네트워크 요청, 커넥션 확인해서 종료하기<br>
타이머 종료되지 않은 것은 clearAllTimers로 종료(fakeTimers 필요)<br>
도저히 못 찾겠으면 --forceExit 추가

---

### 테스트 꿀팁

- 기획자의 언어로 테스트 언어 작성하는 것이 좋음 + 개발 세부 사항
- 테스트 작성하다 보면 기획의 허점 발견할 수 있음
- 테스트 한정 중복 코드 괜찮음
- 삼항 연산자도 모두 고려해야 테스트 커버리지 오름
- LLM을 활용해 테스트 짜자

## mockist vs classicist

### Mockist(모키스트)

테스트에서 의존성을 모킹(mock)하여, 각 객체가 서로 독립적으로 동작하는지 확인하는 방식

주로 spyOn, mock, stub 등을 활용해 외부 의존성을 대체

객체 간 상호작용(메시지 전달)에 초점을 맞춤

TOP-DOWN 방식

예시: 데이터베이스, 네트워크 요청 등 실제 동작 대신 가짜(mock) 객체로 대체하여 테스트, 외부 라이브러리 사용시

### Classicist(클래시시스트)

실제 의존성을 그대로 사용하여, 객체의 상태 변화와 결과에 집중하는 방식

통합 테스트, 실제 구현체를 통한 테스트에 가까움

객체의 최종 결과(상태, 반환값 등)에 초점을 맞춤

BOTTOM-UP 방식

예시: 실제 데이터베이스, 네트워크 요청 등을 그대로 사용하여 테스트

### 정리

mockist: 객체 간 상호작용(메시지)에 집중, 의존성 모킹, spyOn 등 사용

classicist: 객체의 상태와 결과에 집중, 실제 의존성 사용

---

# Section 3.

프론트엔드에서는 유닛 테스트와 통합 테스트의 경계가 모호

백엔드에서는 통합 테스트와 E2E 테스트의 경계가 모호

But, 유닛 테스트와 E2E 테스트가 서로 모호한 경우는 x

BDD(Behavior Driven Development) 테스트

- 유저의 행동을 시뮬레이션 하는 테스트

supertest

- 백엔드 통합 테스트 혹은 E2E 테스트에 활용
- 임의로 서버를 특정 포트에서 돌려서 테스트를 수행함

### 정리

jest의 expect 외에 supertest만의 expect 메서드를 가지고 있음

leaked-handles로 open handle 검사 기능

beforeAll에서 DB 연결, 테이블 초기화

afterAll에서 DB 연결 끊기, 타이머 정리하기, 서버 종료하기 등...(watch 되고 있는 것 없나 체크)

## 추천

[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

[MSW](https://mswjs.io/)
네트워크 요청 목업

hook 개별 테스트
[renderHook](https://testing-library.com/docs/solid-testing-library/api/#renderhook) 활용

toMatchSnapshot, toMatchInlineSnapshot

- 절대 바뀌지 말아야 하는 값 박제 가능

getByRole

- getByRole은 React Testing Library에서 가장 권장되는 쿼리(query) 방식 중 하나로, 접근성(Accessibility, a11y) 역할(Role)을 기준으로 DOM 요소를 찾을 때 사용.
- 사용자 입장에서 실제로 접근 가능한 요소를 찾고 싶을 때
- 버튼, 입력창, 제목, 리스트 등 명확한 역할(role)이 있는 요소를 테스트할 때
- 접근성 속성(aria-role 등)이 잘 적용되어 있는지 확인하고 싶을 때

### E2E TEST

[cypress](https://www.cypress.io/)

[playwrite](https://playwright.dev/)
