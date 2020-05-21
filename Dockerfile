FROM node
 
FROM jenkins/jenkins
USER root
COPY --from=0 /usr/local  /usr/local
RUN npm --version
USER jenkins



