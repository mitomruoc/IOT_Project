# IOT smart house API test

## Nội dung

<table>
      <tr>
        <td valign="top">
          <ul>
            <li><a href="#1-tổng-quan">1. Tổng quan.</a></li>
            <li><a href="#2-cách-cài-đặt-dự-án">2. Cách cài đặt dự án.</a></li>
            <li><a href="#3-tài-liệu-và-tham-khảo">3. Tài liệu tham khảo.</a></li>
          </ul>
        </td>
      </tr>
</table>

## 1. Tổng quan

Test API cho dự án MQTT smart house

Các chức năng chính:

- Test các chức năng thêm datasensor, action và hiển thị các datasensor, action
- Sắp xếp các datasensor được hiển thị ra

## 2. Cách cài đặt dự án

### Bước 1: Clone dự án ở repo

https://github.com/mitomruoc/IOT_Project.git

### Bước 2: Thêm `.env` vào project

Tạo file `.env` trong folder `back-end/` để lưu biến môi trường, cụ thể là URL của cơ sở dữ liệu

VD:

```JS
DATABASE_URL="mysql://root:1234@localhost:3306/IOT"
```

### Bước 3: Khởi chạy project
```
npm start
```
### Bước 4: Cài đặt và setup Mysql và Mysql Workbench
Link tải Mysql: [Cài đặt Mysqk trên Windows](https://dev.mysql.com/downloads/mysql/)
Link tải WorkBench: [Cài đặt Mysqk trên Windows](https://dev.mysql.com/downloads/workbench/)

Làm theo các bước để setup cơ sở dữ liệu: ![alt text](Images/image1.png)
Kết nối cơ sở dữ liệu với Mysql Workbench: ![alt text](Images/image2.png)

Tạo bảng datasensor với các thuộc tính: id, temperature, humidity, light, createdAt

Tạo bảng actionhistory với các thuộc tính: id, device, action, createdAt

![alt text](Images/image3.png)

### Bước 5: Cài đặt Postman
Link tải Postman: [Cài đặt Postman trên Windows](https://www.postman.com/downloads/)

Sau khi khởi chạy Postman, thêm request mới và dùng các URL trong folder `routes/` để test

![alt text](Images/image4.png)

Dao diện Postman sau khi thêm các request và gán API URL: ![alt text](Images/image5.png)

## 3. Tài liệu và tham khảo

### Tài liệu tham khảo

- Cài node js tại: [Nodejs](https://nodejs.org/en).
- Cài đặt arduino tại: [Arduino](https://www.arduino.cc/en/software)
- Cài đặt Mqtt tại: [Mosquitto](https://mosquitto.org/download/)
- Cách MQTT broker: [Cài đặt Local MQTT Broker trên Windows #1](https://www.youtube.com/watch?v=xLLFrLhegcw)
- Cài đặt Postman: [Cài đặt Postman trên Windows](https://www.postman.com/downloads/)
- Cài đặt Mysql: [Cài đặt Mysqk trên Windows](https://dev.mysql.com/downloads/mysql/)
- Cài đặt Mysql WorkBench: [Cài đặt Mysqk trên Windows](https://dev.mysql.com/downloads/workbench/)
