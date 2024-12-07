# 단계 1: Node.js LTS 버전 사용
FROM node:20-alpine as build

# 작업 디렉토리 설정
WORKDIR /app

# package 파일 복사 및 의존성 설치
COPY package*.json ./
RUN npm install

# 소스 코드 복사 및 앱 빌드
COPY . .
RUN npm run build

# 단계 2: Nginx를 사용하여 앱 서빙
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html

# 필요한 경우 nginx 설정 추가
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# 8002번 포트 노출
EXPOSE 8002

# Nginx 서버 시작
CMD ["nginx", "-g", "daemon off;"]