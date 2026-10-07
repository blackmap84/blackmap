# BLACKMAP — 블랙맵 홈페이지

MAP(Mission · Alignment · Performance) 경영 프레임워크 컨설팅 소개 사이트. 제공된 BlackMAP 프로그램 소개서를 바탕으로 제작했으며, 반응형 HTML/CSS/JavaScript 기반입니다. 빌드에 외부 패키지가 필요하지 않습니다.

## 실행

```sh
npm run dev
npm run check
npm run build
```

로컬 주소: http://127.0.0.1:4173

## 운영

- 콘텐츠: `index.html`
- 디자인: `styles.css`
- 상담 이메일: `script.js`의 `CONTACT_EMAIL`. 실제 공개할 이메일을 설정하면 메일 앱에서 상담 초안을 여는 버튼이 표시됩니다. 설정 전에는 상담 채널 준비 중으로 표시합니다.
- 문의 내용을 서버에 전송하거나 저장하는 폼은 없습니다.
- 폰트는 Google Fonts의 Noto Sans KR을 사용하며, 연결이 불가능하면 시스템 글꼴을 사용합니다.
- 상담 이메일: raven@blackmap.kr. 전화번호는 게시하지 않습니다.
- 소개자료의 프레임워크 비교 점수와 타사에 대한 비교 주장은 홈페이지에 게시하지 않았습니다.

## GitHub / Vercel

GitHub 저장소의 `main` 브랜치를 Vercel 프로젝트에 연결합니다. Framework Preset은 Other, Build Command는 `npm run build`, Output Directory는 `dist`입니다. 설정은 `vercel.json`에 포함되어 있습니다.
