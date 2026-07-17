

## 프로젝트 구조

HTML, CSS, JavaScript 기초 실습과 종합 과제 결과물을 정리한 정적 프론트엔드 프로젝트입니다. 별도의 빌드 도구 없이 `templates/` 폴더의 HTML 파일을 브라우저에서 실행합니다.

```text
skala-front/
├── README.md
├── 종합실습가이드_HTML_CSS_JavaScript(김성영).pdf
├── css/
│   ├── style.css          # 공통 페이지, 회원가입, 결과 페이지, 퀴즈, 표 스타일
│   ├── trip.css           # 여행지 소개 페이지 전용 스타일
│   ├── products.css       # 반응형 상품 카드 갤러리 스타일
│   └── todo.css           # 할 일 관리 앱 스타일
├── media/
│   ├── 리장.jpg
│   ├── 세부.jpg
│   ├── 홋카이도.jpg
│   ├── headphone.jpg
│   ├── keyboard.jpg
│   ├── applewatch.jpg
│   ├── bag.jpg
│   ├── daily.jpg
│   ├── desk-light.png
│   ├── music.mp3
│   └── video.mp4
├── scripts/
│   ├── app.js             # 할 일 관리 앱 UI, 필터, 이벤트 위임, 오늘의 한마디 처리
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
│   ├── index.html              # 메인 페이지 및 JavaScript 실습 진입점
│   ├── 02_my_intro_page.html   # 자기소개 페이지
│   ├── 03_wrap_quiz.html       # 복습 퀴즈 페이지
│   ├── 04_signUp.html          # 회원가입 폼 페이지
│   ├── signUpResult.html       # 회원가입 결과 출력 페이지
│   ├── myClass.html            # 수업 시간표 페이지
│   ├── myHoliday.html          # 휴일 일정 페이지
│   ├── myTrip.html             # 여행지 소개 페이지
│   ├── productGallery.html     # 반응형 상품 카드 갤러리 페이지
│   └── todo.html               # 할 일 관리 앱 페이지
└── result/
    ├── day1/
    │   ├── assignments_image/             # Day 1 실습 과제 실행 결과
    │   ├── additional_assignments_image/  # Day 1 추가 과제 실행 결과
    │   └── final_image/                   # Day 1 종합 실습 과제 결과
    └── day2/
        ├── assignments_image/             # Day 2 실습 과제 실행 결과
        ├── additional_assignments_image/  # Day 2 추가 과제 실행 결과
        └── final_image/                   # Day 2 종합 실습 과제 결과
```

### 주요 구성

- `templates/`: 실습별 HTML 페이지를 보관합니다.
- `css/`: 공통 스타일과 여행, 상품 갤러리, 할 일 앱 전용 스타일을 분리해 관리합니다.
- `scripts/`: DOM 이벤트, 이벤트 위임, 모듈, API 요청, localStorage, 퀴즈, 게임 로직을 보관합니다.
- `media/`: 여행지 이미지, 상품 이미지, 오디오, 비디오 파일을 보관합니다.
- `result/`: Day 1, Day 2 과제별 실행 결과와 최종 보완 캡처 이미지를 보관합니다.


## REPORT

### 1. 각 과제의 실행 결과물 (이미지)

각 과제의 실행 결과 캡처 이미지는 `result/` 폴더에 Day별로 구분하여 저장했습니다.

- Day 1 실습 과제 결과: `result/day1/assignments_image/`
- Day 1 추가 과제 결과: `result/day1/additional_assignments_image/`
- Day 1 종합 실습 결과: `result/day1/final_image/`
- Day 2 실습 과제 결과: `result/day2/assignments_image/`
- Day 2 추가 과제 결과: `result/day2/additional_assignments_image/`
- Day 2 종합 실습 결과: `result/day2/final_image/`

### 2. 소스 코드
: 전체 소스 코드는 GitHub 저장소에 업로드했으며, 제출용 파일은 구글 드라이브에도 함께 업로드했습니다.

### 3. 결과물에 대한 평가 
: 강의에서 배운 개념들을 이해하고 적용하기 위해 노력했으며, HTML 구조 작성, CSS 레이아웃과 반응형 처리, JavaScript 이벤트 처리 및 localStorage 활용을 전반적으로 구현해볼 수 있었습니다. 회원가입 폼 검증, 회원가입 결과 출력, 여행지 소개 페이지, 상품 카드 갤러리, 할 일 관리 앱 등 주요 요구사항을 반영했고, 실행 결과 캡처를 통해 기능이 정상적으로 동작하는지 확인했습니다.
JavaScript 파트에서 생각과 다른 결과가 나올 때는 AI를 활용해 오류의 원인, 관련 개념, 해결 방법을 학습했습니다. CSS의 경우 전체적인 디자인 방향성을 AI에게 제시하고, 프로젝트에 맞게 색상, 간격, 배치 등 디테일한 부분은 직접 수정했습니다. 특히 동적으로 추가되는 할 일 항목은 부모 `ul`에 이벤트 리스너를 한 번만 등록하는 이벤트 위임 방식으로 처리해보았습니다. 아직 일부 디자인과 사용자 경험은 더 다듬고 싶지만, 수업에서 배운 내용을 실제 페이지 형태로 연결해보는 데 의미가 있었습니다.

### 4. 실습 과제 이후 추가 과제
- 교재 속 실습 및 추가 과제를 모두 완료했으며, 실행 결과 캡처 이미지는 `result/day1/additional_assignments_image/`와 `result/day2/additional_assignments_image/`에 저장했습니다.

### 5. Github 주소 : https://github.com/shsgrnd/skala-front
