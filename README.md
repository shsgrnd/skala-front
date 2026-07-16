

## 프로젝트 구조

HTML, CSS, JavaScript 기초 실습과 종합 과제 결과물을 정리한 프론트엔드 프로젝트입니다. 별도의 빌드 도구 없이 `templates/` 폴더의 HTML 파일을 브라우저에서 실행하는 정적 웹 프로젝트 구조입니다.

```text
skala-front/
├── README.md
├── css/
│   ├── style.css          # 공통 페이지, 자기소개, 회원가입, 퀴즈 등 기본 스타일
│   ├── trip.css           # 여행지 소개 페이지 전용 스타일
│   ├── products.css       # 반응형 상품 카드 갤러리 스타일
│   └── todo.css           # 할 일 관리 앱 스타일
├── media/
│   ├── 리장.jpg
│   ├── 세부.jpg
│   ├── 홋카이도.jpg
│   ├── music.mp3
│   └── video.mp4
├── scripts/
│   ├── app.js             # 할 일 관리 앱 UI, 필터, 오늘의 한마디 처리
│   ├── storage.js         # 할 일 데이터 localStorage 저장/복원 모듈
│   ├── productGallery.js  # 상품 갤러리 다크 모드 전환 및 테마 저장
│   ├── quiz.js            # HTML/CSS/JavaScript 복습 퀴즈 로직
│   ├── realtimeInfo.js    # 날씨 조회 UI와 weatherAPI 모듈 연동
│   ├── weatherAPI.js      # 도시 좌표 및 날씨 API 요청 모듈
│   ├── weather.js         # 날씨 조회 단일 스크립트 버전
│   ├── upDown.js          # 업다운 숫자 맞히기 게임
│   ├── grade.js           # 과목 점수 평균 및 등급 계산
│   └── bag.js             # 가방 속 물건 출력 이벤트 실습
├── templates/
│   ├── index.html         # 메인 페이지 및 JavaScript 실습 진입점
│   ├── 02_my_intro_page.html
│   ├── 03_wrap_quiz.html
│   ├── 04_signUp.html
│   ├── signUpResult.html
│   ├── myClass.html
│   ├── myHoliday.html
│   ├── myTrip.html
│   ├── productGallery.html
│   └── todo.html
└── result/
    ├── day1/
    │   ├── assignments_image/             # Day 1 필수 과제 실행 결과
    │   ├── additional_assignments_image/  # Day 1 추가 과제 실행 결과
    │   └── final_image/                   # Day 1 최종 보완 결과
    └── day2/
        ├── assignments_image/             # Day 2 필수 과제 실행 결과
        └── additional_assignments_image/  # Day 2 추가 과제 실행 결과
```

### 주요 구성

- `templates/`: 각 실습 페이지의 HTML 파일이 모여 있는 폴더입니다.
- `css/`: 공통 스타일과 페이지별 전용 스타일을 분리해 둔 폴더입니다.
- `scripts/`: DOM 이벤트, 모듈, API 요청, localStorage, 퀴즈, 게임 등 JavaScript 실습 코드가 들어 있습니다.
- `media/`: 여행지 페이지와 멀티미디어 실습에 사용하는 이미지, 오디오, 비디오 파일이 들어 있습니다.
- `result/`: Day 1, Day 2 과제별 실행 결과 스크린샷을 보관하는 폴더입니다.


## REPORT

### 1. 각 과제의 실행 결과물
: result/

### 2. 소스 코드
: Github 및 구글 드라이브 업로드

### 3. 결과물에 대한 평가 
: 

### 4. 실습 과제 이후 추가 과제
- 교재 속 실습 및 과제 모두 완료하고 캡쳐한 사진은 'result/day1/additional_assignments_image/'와 'result/day1/additional_assignments_image/'에 저장했습니다.

### 5. Github 주소 : https://github.com/shsgrnd/skala-front

## 추가로 해야 할 일

### 여행지 소개 페이지

- [ ] `css/trip.css`의 `--trip-hero-image`에 히어로 배경 이미지 경로 입력
- [ ] `templates/myTrip.html`의 빈 `src=""`에 명소 이미지 3장 경로 입력
- [ ] 대표 음식 이미지 경로 입력
- [ ] `video`의 빈 `poster=""`에 영상 포스터 이미지 경로 입력
- [ ] 실제 여행지에 맞게 명소·음식 제목과 설명 수정
- [ ] 모든 이미지의 `alt`가 실제 이미지 내용을 설명하는지 확인

권장 이미지 크기:

- 히어로 배경: `1920 × 1080`
- 명소 및 음식 이미지: `800 × 600`
- 영상 포스터: `1280 × 720`

### 상품 카드 갤러리

- [ ] `templates/productGallery.html`의 상품 6개 빈 `src=""`에 이미지 경로 입력
- [ ] 상품명·분류·가격을 원하는 데이터로 수정
- [ ] 상품 이미지에 맞게 `alt` 내용 수정
- [ ] 화면 폭 `1200px → 800px → 500px`에서 `3열 → 2열 → 1열` 동작 확인
- [ ] 다크 모드 전환 및 새로고침 후 테마 유지 확인

권장 상품 이미지 크기: `800 × 800` 정사각형

### 할 일 관리 앱

- [ ] Live Server 또는 `python3 -m http.server 5500`으로 실행
- [ ] 추가 버튼과 Enter 키로 할 일이 등록되는지 확인
- [ ] 완료 처리·삭제·전체/진행중/완료 필터 동작 확인
- [ ] 새로고침 후 할 일이 `localStorage`에서 복원되는지 확인
- [ ] 인터넷 연결 및 차단 환경에서 오늘의 한마디와 기본 문구가 각각 표시되는지 확인

### 제출 전 최종 점검

- [ ] 회원가입 폼의 빈 값·아이디 패턴·비밀번호 길이·전화번호 형식 검증
- [ ] 회원가입 결과 페이지에서 관심 분야 복수 선택값 확인
- [ ] 여행지 페이지 내비게이션의 앵커 이동과 고정 상태 확인
- [ ] iPhone 크기와 Mac 데스크톱 크기에서 모든 페이지 레이아웃 확인
- [ ] 브라우저 개발자 도구 Console에 오류가 없는지 확인
- [ ] 종합실습 실행 결과 스크린샷을 `result/` 폴더에 저장
- [ ] 변경 파일을 Git에 추가하고 커밋한 뒤 GitHub에 push
