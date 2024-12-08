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

# Nginx 설정 추가 - SPA를 위한 라우팅 설정
RUN echo 'server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

# 80번 포트 노출
EXPOSE 80

# Nginx 서버 시작
CMD ["nginx", "-g", "daemon off;"]