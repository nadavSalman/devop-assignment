FROM nginx




# set new configuration :
COPY nginx/default.conf /etc/nginx/conf.d/default.conf


EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]







# sudo docker build -t mynginx1 .
# sudo docker run  --rm  -it -p 127.0.0.1:81:80 mynginx1
# sudo docker exec -it 617a97dc65fa bash