> 해당 저장소는 [테스트 with Jest: 제로초에게 제대로 배우기 ](https://www.inflearn.com/course/%ED%85%8C%EC%8A%A4%ED%8A%B8-with-jest-%EC%A0%9C%EB%A1%9C%EC%B4%88?inst=e859b3e2&utm_campaign=inflearn_%ED%8A%B8%EB%9E%98%ED%94%BD_promotion-link&utm_medium=referral&utm_source=instructor)강의를 듣고 정리한 내용입니다.
>
> 제로초 타임어택 15기 25/06/09 ~ (4주) 참여

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

## 테스트 원칙

1. 테스트는 틈틈히 추가하자
2. 진짜 도움이 되는 테스트를 하자

**테스트 커버리지 100% 추구**
