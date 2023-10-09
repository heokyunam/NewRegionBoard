# New Region Board Game

주사위를 굴려 이동하며 소재를 수집 및 조합하여 생존해 탈출하는 게임

## 디렉토리 별 정의

- assets
  - css
  - images
  - stat
    - 스크립트지만 단순히 아이템, 캐릭터 등의 밸런스 스탯만을 저장
- components
  - vue 파일
- composables
  - composables(ref)
- scripts
  - core
    - typescript core code(do not use vue3)
  - test
    - unit test script

## TODO

- 맵
  - 리팩터링: tile.ts, map.ts => map.ts로 통합
  - 캐릭터 값을 넣었을 때 이미지로 나타나게끔
  - [후반작업] 튜토리얼: 처음 본 정보에 대해 설명 alert
  - [후반작업] 탈출을 위한 크래프팅이 완료되었을 때 설명 alert
  - [후반작업] 스토리 설명 alert
- 인벤토리
  - 아이템 밸런스 스탯 작성
  - 아이템 정보를 composition에서 따로 저장
  - 필터링 기능 개발
- 크래프트
  - 크래프트 밸런스 스탯 작성
  - 크래프트 필터링
  - UI 구현
  - 버튼 클릭시 크래프트 발생 및 결과 인벤토리에 저장
- 장비
  - 장비 정보를 별도 ref에 저장
- 액션
  - 이동 주사위 개발
  - 이동 주사위 애니메이션 개발
  - 수집 주사위 개발
  - 수집 주사위 애니메이션 개발
- 저장
  - 저장이 된 모든 데이터를 base64등으로 암호화한 후 cookie 저장 또는 url 쿼리에 추가
