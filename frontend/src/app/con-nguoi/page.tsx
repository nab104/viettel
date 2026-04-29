"use client"; // test

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import useEmblaCarousel from 'embla-carousel-react';
import { motion, AnimatePresence } from "framer-motion";

// Mock Data
const leaders = [
  { name: "THƯỢNG TÁ\nTRƯƠNG ĐẠI NGHĨA", role: "Phó giám đốc Viettel Store", img: "/images/truong-dai-nghia.jpg", objectPosition: "20% 20%", scale: 1.2 },
  { name: "THIẾU TÁ\nĐINH THỊ DUNG", role: "Phó giám đốc công ty Viettel Commerce\nGiám đốc Viettel Store", img: "/images/dinh-thi-dung-new.jpg", objectPosition: "50% 0%", scale: 1.8 },
  { name: "THIẾU TÁ\nĐINH SƠN TÙNG", role: "Phó giám đốc Viettel Store", img: "/images/dinh-son-tung.jpg", objectPosition: "60% 0%", scale: 1.2 },
];

const longService = [
  { name: "ĐỒNG CHÍ NGÔ NGÂN HÀ", years: 20, dept: "Phòng Kinh doanh Thiết bị", date: "01/10/2005", img: "/images/vinhdanh/v1.jpg" },
  { name: "ĐỒNG CHÍ NGUYỄN THỊ THÙY DƯƠNG", years: 20, dept: "Phòng Chất lượng dịch vụ", date: "01/10/2005", img: "/images/vinhdanh/v2.jpg" },
  { name: "ĐỒNG CHÍ ĐOÀN CHÍ HIẾU", years: 20, dept: "Phòng Kế hoạch và kiểm soát", date: "01/10/2005", img: "/images/vinhdanh/v3.jpg" },
  { name: "ĐỒNG CHÍ BÙI ĐỨC TOÀN", years: 20, dept: "Phòng Chất lượng dịch vụ", date: "01/10/2005", img: "/images/vinhdanh/v4.jpg" },
  { name: "ĐỒNG CHÍ PHAN MINH TUẤN", years: 19, dept: "Phòng Kinh doanh Thiết bị", date: "27/12/2005", img: "/images/vinhdanh/v5.jpg" },
  { name: "ĐỒNG CHÍ NGUYỄN THỊ DUYÊN", years: 19, dept: "Hệ thống siêu thị: HNI03", date: "01/07/2006", img: "/images/vinhdanh/v6.jpg" },
  { name: "ĐỒNG CHÍ NGUYỄN THỊ NGỌC OANH", years: 19, dept: "Hệ thống cửa hàng: HYN-CH01", date: "03/01/2006", img: "/images/vinhdanh/v7.jpg" },
  { name: "ĐỒNG CHÍ BÙI THỊ THU LỆ", years: 19, dept: "Phòng Marketing", date: "15/10/2006", img: "/images/vinhdanh/v8.jpg" },
  { name: "ĐỒNG CHÍ PHÙNG THU HUYỀN", years: 18, dept: "Phòng Kế hoạch và Kiểm soát", date: "01/05/2007", img: "/images/vinhdanh/v9.jpg" },
  { name: "ĐỒNG CHÍ BÙI THỊ LƯ", years: 18, dept: "Hệ thống siêu thị: HNI06", date: "01/05/2007", img: "/images/vinhdanh/v10.jpg" },
  { name: "ĐỒNG CHÍ TRẦN HẢI VINH", years: 18, dept: "Phòng Điều hành và Phát triển siêu thị", date: "01/05/2007", img: "/images/vinhdanh/v11.jpg" },
  { name: "ĐỒNG CHÍ NGUYỄN THỊ THU HƯỜNG", years: 18, dept: "Hệ thống siêu thị: HNI06", date: "05/01/2007", img: "/images/vinhdanh/v12.jpg" },
  { name: "ĐỒNG CHÍ VŨ KIM CHUNG", years: 18, dept: "Phòng Kinh doanh Thiết bị", date: "01/11/2007", img: "/images/vinhdanh/v13.jpg" },
  { name: "ĐỒNG CHÍ DƯƠNG SƠN TÙNG", years: 18, dept: "Phòng Kinh doanh Dịch vụ", date: "01/11/2007", img: "/images/vinhdanh/v14.jpg" },
  { name: "ĐỒNG CHÍ NGUYỄN THỊ HẠNH", years: 18, dept: "Phòng Kinh doanh Thiết bị", date: "01/10/2006", img: "/images/vinhdanh/v15.jpg" },
  { name: "ĐỒNG CHÍ NGUYỄN THỊ NGÀ", years: 17, dept: "Phòng Kinh doanh Thiết bị", date: "01/08/2008", img: "/images/vinhdanh/v16.jpg" },
  { name: "ĐỒNG CHÍ LÊ DUY BÁCH", years: 17, dept: "Phòng Chất lượng dịch vụ", date: "01/09/2008", img: "/images/vinhdanh/v17.jpg" },
  { name: "ĐỒNG CHÍ TRƯƠNG ĐẠI NGHĨA", years: 17, dept: "Ban Giám đốc Trung tâm", date: "01/10/2007", img: "/images/vinhdanh/v18.jpg" },
  { name: "ĐỒNG CHÍ HUỲNH THỊ BÁ THẢO", years: 17, dept: "Hệ thống siêu thị: LDG08", date: "01/12/2006", img: "/images/vinhdanh/v19.jpg" },
  { name: "ĐỒNG CHÍ VÕ THỊ CHÂU TRINH", years: 17, dept: "Hệ thống siêu thị: QNI02", date: "01/11/2007", img: "/images/vinhdanh/v20.jpg" },
];

const departments = [
  {
    name: "Phòng Kinh doanh Thiết bị",
    img: "/images/tapthephong/Phòng Kinh doanh Thiết bị.jpg",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đồng chí Trần Hoàng Chung", role: "Trưởng phòng Kinh doanh Thiết bị", img: encodeURI("/images/tapthephong/tp-pp/kinh doanh thiết bị/TP-Trần Hoàng Chung.jpg") },
      group: { name: "Tập thể Phòng Kinh doanh Thiết bị", subName: "Phòng Kinh doanh Thiết bị", img: "/images/tapthephong/Phòng Kinh doanh Thiết bị.jpg" },
      deputies: [
        { name: "Đồng chí Nguyễn Thị Quỳnh Mai", role: "Phó phòng Kinh doanh Thiết bị", img: encodeURI("/images/tapthephong/tp-pp/kinh doanh thiết bị/PP-Nguyễn Thị Quỳnh Mai.jpg") }
      ]
    }
  },
  {
    name: "Kênh Thương mại Điện tử",
    img: "/images/tapthephong/Kênh TMĐT.jpg",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đang cập nhật...", role: "Trưởng phòng", img: "/images/logo-viettel-store.png" },
      group: { name: "Tập thể Kênh Thương mại Điện tử", subName: "Kênh Thương mại Điện tử", img: "/images/tapthephong/Kênh TMĐT.jpg" },
      deputies: [
        { name: "Đồng chí Lê Thị Thanh Mai", role: "Phó giám đốc kênh Thương mại Điện tử", img: encodeURI("/images/tapthephong/tp-pp/kênh thương mại điện tử/Phó giám đốc -Lê Thị Thanh Mai.jpg") }
      ]
    }
  },
  {
    name: "Phòng Kinh doanh Dịch vụ",
    img: "/images/tapthephong/Phòng Kinh doanh tịch vụ.jpg",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đồng chí Dương Sơn Tùng", role: "Trưởng phòng Kinh doanh Dịch vụ", img: encodeURI("/images/tapthephong/tp-pp/kinh doanh dịch vụ/TP-Dương Sơn Tùng.jpg") },
      group: { name: "Tập thể Phòng Kinh doanh Dịch vụ", subName: "Phòng Kinh doanh Dịch vụ", img: "/images/tapthephong/Phòng Kinh doanh tịch vụ.jpg" },
      deputies: []
    }
  },
  {
    name: "Phòng Marketing",
    img: "/images/tapthephong/Phòng Marketing.jpg",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đồng chí Bùi Quốc Hưng", role: "Trưởng phòng Marketing", img: encodeURI("/images/tapthephong/tp-pp/mkt/TP-Bùi Quốc Hưng.jpg") },
      group: { name: "Tập thể Phòng Marketing", subName: "Phòng Marketing", img: "/images/tapthephong/Phòng Marketing.jpg" },
      deputies: [
        { name: "Đồng chí Bùi Xuân Vinh", role: "Phó phòng Marketing", img: encodeURI("/images/tapthephong/tp-pp/mkt/PP-Bùi Xuân Vinh.JPG") }
      ]
    }
  },
  {
    name: "Bộ phận Điều hành Siêu thị",
    img: "/images/tapthephong/Bộ Phận Điều hành Siêu thị.jpg",
    hasTextOnImage: false,
    details: {
      leader: { name: "Phạm Anh Tuấn", role: "Trưởng phòng Điều hành và Phát triển Siêu thị", img: encodeURI("/images/tapthephong/tp-pp/điều hành siêu thị/TP-Phạm Anh Tuấn.jpg") },
      group: { name: "Tập thể Bộ phận Điều hành Siêu thị", subName: "Phòng Điều hành và Phát triển Siêu thị", img: "/images/tapthephong/Bộ Phận Điều hành Siêu thị.jpg" },
      deputies: [
        { name: "Chung Duy Tuấn", role: "Phó phòng Điều hành và Phát triển Siêu thị", img: encodeURI("/images/tapthephong/tp-pp/điều hành siêu thị/PP-Chung Duy Tuấn 2.jpg") }
      ],
      extraPages: [
        {
          title: "QUẢN LÝ VÙNG",
          items: [
            { img: encodeURI("/images/ảnh nhân sự/c36c2549b912de31f2ee7b038e17379c516c6727.jpg"), name: "Đồng chí Lê Đình Giáp", role: "Quản lý vùng" },
            { img: encodeURI("/images/ảnh nhân sự/3452289c633053c6b3fe745eaf2f7d5a099f94c4.jpg"), name: "Đồng chí Phạm Duy Phố", role: "Quản lý vùng" },
            { img: encodeURI("/images/ảnh nhân sự/92cde5e665f12890cab6b4bdf78b5017dbc0d33c.jpg"), name: "Đồng chí Nguyễn Đại Khiêm", role: "Quản lý vùng" }
          ]
        },
        {
          title: "QUẢN LÝ VÙNG",
          items: [
            { img: encodeURI("/images/ảnh nhân sự/34bb5189995efad634242857370b4bbc6ee11e4d.jpg"), name: "Đồng chí Đinh Hồng Quân", role: "Quản lý vùng" },
            { img: encodeURI("/images/ảnh nhân sự/b4bc0e5e5ca76b372afd88e8ae520dc8e9d35114.jpg"), name: "Đồng chí Quách Thị Thuý", role: "Quản lý vùng" },
            { img: encodeURI("/images/ảnh nhân sự/22d31805f85f7a992ea00cf54ab3553fc50aa129.jpg"), name: "Đồng chí Phạm Đình Phong", role: "Quản lý vùng" }
          ]
        },
        {
          title: "QUẢN LÝ VÙNG",
          items: [
            { img: encodeURI("/images/ảnh nhân sự/064a53ee4386709bb10fb44a62cf4c361b9f57ae.jpg"), name: "Đồng chí Nguyễn Xuân Thuỳ", role: "Quản lý vùng" },
            { img: encodeURI("/images/ảnh nhân sự/b4114357a0d12811dd38ad78d948a5f7c0b25f57.jpg"), name: "Đồng chí Lê Thế Công", role: "Quản lý vùng" },
            { img: encodeURI("/images/ảnh nhân sự/fa04ec1e9e02ec16e305122e9a88b52d79cbe903.jpg"), name: "Đồng chí Nguyễn Công Hưởng", role: "Quản lý vùng" }
          ]
        },
        {
          title: "QUẢN LÝ VÙNG",
          items: [
            { img: encodeURI("/images/ảnh nhân sự/b507b621cf655996ecd369b151d16ffb69b66ef9.jpg"), name: "Đồng chí Phạm Minh Khánh", role: "Quản lý vùng" },
            { img: encodeURI("/images/ảnh nhân sự/c9baf5fce77b0830df0d30ea3b68db90aad27746.jpg"), name: "Đồng chí Vũ Mạnh Tiến", role: "Quản lý vùng" },
            { img: encodeURI("/images/ảnh nhân sự/2e9ffe8e2df08ab9c8ac1336a310393054c14541.jpg"), name: "Đồng chí Trịnh Xuân Hạnh", role: "Quản lý vùng" }
          ]
        },
        {
          title: "QUẢN LÝ VÙNG",
          items: [
            { img: encodeURI("/images/ảnh nhân sự/1.jpg"), name: "Đồng chí Trương Công Luân", role: "Quản lý vùng" },
            { img: encodeURI("/images/ảnh nhân sự/2.jpg"), name: "Đồng chí Phan Minh Hải", role: "Quản lý vùng" },
            { img: encodeURI("/images/ảnh nhân sự/3.jpg"), name: "Đồng chí Trương Minh Sang", role: "Quản lý vùng" }
          ]
        },
        {
          title: "QUẢN LÝ VÙNG",
          items: [
            { img: encodeURI("/images/ảnh nhân sự/4.jpg"), name: "Đồng chí Diệp Nghĩa Trọng", role: "Quản lý vùng" },
            { img: encodeURI("/images/ảnh nhân sự/5.jpg"), name: "Đồng chí Trần Quốc Việt", role: "Quản lý vùng" },
            { img: encodeURI("/images/ảnh nhân sự/6.png"), name: "Đồng chí Đoàn Anh Thao", role: "Quản lý vùng" }
          ]
        }
      ]
    }
  },
  {
    name: "Bộ phận Phát triển Kênh",
    img: "/images/tapthephong/Phát triển Siêu thị.jpg",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đang cập nhật...", role: "Trưởng phòng", img: "/images/logo-viettel-store.png" },
      group: { name: "Tập thể Bộ phận Phát triển Kênh", subName: "Phòng Điều hành và Phát triển Siêu thị", img: "/images/tapthephong/Phát triển Siêu thị.jpg" },
      deputies: [
        { name: "Đồng chí Trần Hải Vinh", role: "Phó phòng - Phụ trách bộ phận Phát triển Kênh", img: encodeURI("/images/tapthephong/tp-pp/phát triển kênh/PP-Trần Hải Vinh.jpg") }
      ]
    }
  },
  {
    name: "Phòng Chất lượng Dịch vụ",
    img: "/images/tapthephong/Phòng Chất Lượng Dịch vụ.jpg",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đang cập nhật...", role: "Trưởng phòng", img: "/images/logo-viettel-store.png" },
      group: { name: "Tập thể Phòng Chất lượng Dịch vụ", subName: "Phòng Chất lượng Dịch vụ", img: "/images/tapthephong/Phòng Chất Lượng Dịch vụ.jpg" },
      deputies: [
        { name: "Đồng chí Lê Duy Bách", role: "Trưởng phòng Chất lượng Dịch vụ", img: encodeURI("/images/tapthephong/tp-pp/chất lượng dvu/TP-Lê Duy Bách.jpg") }
      ]
    }
  },
  {
    name: "Phòng Tài chính Kế toán",
    img: "/images/tapthephong/Phòng Tài chính kế toán.jpg",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đồng chí Nguyễn Thị Nguyên", role: "Trưởng phòng Tài chính Kế toán", img: encodeURI("/images/tapthephong/tp-pp/tài chính/TP-Nguyễn Thị Nguyên.jpg") },
      group: { name: "Tập thể Phòng Tài chính Kế toán", subName: "Phòng Tài chính Kế toán", img: "/images/tapthephong/Phòng Tài chính kế toán.jpg" },
      deputies: [
        { name: "Đồng chí Trần Thị Nghĩa", role: "Phó phòng Tài chính Kế toán", img: encodeURI("/images/tapthephong/tp-pp/tài chính/PP-Trần Thị Nghĩa.jpg") },
        { name: "Đồng chí Đỗ Thị Khánh Hòa", role: "Phó phòng Tài chính Kế toán", img: encodeURI("/images/tapthephong/tp-pp/tài chính/PP-Đỗ Thị Khánh Hòa.jpg"), objectPosition: "center 20%" }
      ]
    }
  },
  {
    name: "Bộ phận Kế hoạch",
    img: "/images/tapthephong/Bộ phận kế hoạch Tổng hợp.jpg",
    gridObjectPosition: "80% center",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đồng chí Phan Thị Ngọc Tú", role: "Trưởng phòng Bộ phận Kế hoạch", img: encodeURI("/images/tapthephong/tp-pp/bộ phận kế hoạch/TP-Phan Thị Ngọc Tú.jpg") },
      group: { name: "Tập thể Bộ phận Kế hoạch", subName: "Phòng Kế hoạch và Kiểm soát", img: "/images/tapthephong/Bộ phận kế hoạch Tổng hợp.jpg" },
      deputies: [
        { name: "Đồng chí Phạm Anh Quân", role: "Phó phòng Bộ phận Kế hoạch", img: encodeURI("/images/tapthephong/tp-pp/bộ phận kế hoạch/PP-Phạm Anh Quân.jpg") }
      ]
    }
  },
  {
    name: "Bộ phận Kiểm soát",
    img: "/images/tapthephong/Bộ phận Kiểm soát.jpg",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đang cập nhật...", role: "Trưởng phòng", img: "/images/logo-viettel-store.png" },
      group: { name: "Tập thể Bộ phận Kiểm soát", subName: "Phòng Kế hoạch và Kiểm soát", img: "/images/tapthephong/Bộ phận Kiểm soát.jpg" },
      deputies: [
        { name: "Đồng chí Đoàn Chí Hiếu", role: "Phó phòng - Phụ trách bộ phận Kiểm soát", img: encodeURI("/images/tapthephong/tp-pp/bộ phận kiểm soát/PP-Đoàn Chí Hiếu.jpg") }
      ]
    }
  },
  {
    name: "Phòng Công nghệ Thông tin",
    img: "/images/tapthephong/cntt.JPG",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đồng chí Đặng Thị Quỳnh Nga", role: "Trưởng phòng Công nghệ Thông tin", img: encodeURI("/images/tapthephong/tp-pp/cntt/TP-Đặng Thị Quỳnh Nga.jpg") },
      group: { name: "Tập thể Phòng Công nghệ Thông tin", subName: "", img: "/images/tapthephong/cntt.JPG" },
      deputies: [
        { name: "Đồng chí Đinh Đăng Thiên", role: "Phó phòng Công nghệ Thông tin", img: encodeURI("/images/tapthephong/tp-pp/cntt/PP-Đinh Đăng Thiên.jpg") }
      ]
    }
  },
  {
    name: "Phòng Chính trị Nhân sự",
    img: "/images/tapthephong/Phòng Chính trị Nhân sự.jpg",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đồng chí Nguyễn Thị Hà Doan", role: "Trưởng phòng Chính trị Nhân sự", img: "/images/tapthephong/tp-pp/chính trị nhân sự/TP-Nguyễn Thị Hà Doan.jpg" },
      group: { name: "Tập thể Phòng Chính trị Nhân sự", subName: "", img: "/images/tapthephong/Phòng Chính trị Nhân sự.jpg" },
      deputies: [
        { name: "Đồng chí Ngô Quang Hiếu", role: "Phó phòng Chính trị Nhân sự", img: "/images/tapthephong/tp-pp/chính trị nhân sự/PP-Ngô Quang Hiếu.jpg" }
      ]
    }
  },

  {
    name: "Đảng bộ bộ phận và các Chi bộ",
    img: "/images/dangbophanvachibo/anhmain.jpg",
    hasTextOnImage: true,
    details: {
      useStaggeredOnMain: true,
      mainItems: [
        { img: "/images/dangbophanvachibo/anhmain.jpg", name: "", role: "" },
        { img: "/images/dangbophanvachibo/anh2.jpg", name: "", role: "" },
        { img: "/images/dangbophanvachibo/anh3.jpg", name: "Đảng bộ bộ phận Trung tâm bán lẻ", role: "" },
        { img: "/images/dangbophanvachibo/anh4.jpg", name: "Chi bộ khối kinh doanh", role: "", objectPosition: "30% center" },
        { img: "/images/dangbophanvachibo/anh5.jpg", name: "Chi bộ khối Dịch vụ Khách hàng", role: "" },
        { img: "/images/dangbophanvachibo/anh6.jpg", name: "Chi bộ khối Đảm bảo", role: "", scale: 1.05 }
      ],
      leader: { name: "Đang cập nhật...", role: "Trưởng phòng", img: "/images/logo-viettel-store.png" },
      group: { name: "Đảng bộ bộ phận và các Chi bộ", subName: "Viettel Store", img: "/images/dangbophanvachibo/anhmain.jpg" },
      deputies: [],
      extraPages: [
        {
          title: "",
          layout: "page2-special",
          items: [
            { img: "/images/dangbophanvachibo/anh7.jpg", name: "", role: "", objectPosition: "left center" },
            { img: "/images/dangbophanvachibo/anh8.jpg", name: "", role: "" },
            { img: "/images/dangbophanvachibo/anh9.jpg", name: "", role: "" },
            { img: "/images/dangbophanvachibo/anh10.jpg", name: "", role: "" }
          ]
        }
      ]
    }
  },
  {
    name: "Công đoàn cơ sở thành viên",
    img: "/images/phong-ban-moi/dept-14.png",
    hasTextOnImage: true,
    details: {
      leader: { name: "Đang cập nhật...", role: "Trưởng phòng", img: "/images/logo-viettel-store.png" },
      group: { name: "Công đoàn cơ sở thành viên", subName: "Viettel Store", img: "/images/phong-ban-moi/dept-14.png" },
      deputies: []
    }
  },
  {
    name: "Liên chi đoàn",
    img: "/images/phong-ban-moi/dept-15.png",
    hasTextOnImage: true,
    details: {
      leader: { name: "Đang cập nhật...", role: "Trưởng phòng", img: "/images/logo-viettel-store.png?v=clear" },
      group: { name: "Liên chi đoàn", subName: "Viettel Store", img: "/images/phong-ban-moi/dept-15.png" },
      deputies: []
    }
  },
  {
    name: "Chi hội phụ nữ",
    img: "/images/phong-ban-moi/dept-16.png",
    hasTextOnImage: true,
    details: {
      leader: { name: "Đang cập nhật...", role: "Trưởng phòng", img: "/images/logo-viettel-store.png?v=clear" },
      group: { name: "Chi hội phụ nữ", subName: "Viettel Store", img: "/images/phong-ban-moi/dept-16.png" },
      deputies: []
    }
  },
];

const branches = [
  {
    name: "Chi nhánh Bình Dương",
    img: "/images/bình dương.jpg",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đang cập nhật...", role: "Giám đốc Chi nhánh", img: "/images/logo-viettel-store.png" },
      group: { name: "Tập thể Chi nhánh Bình Dương", subName: "Chi nhánh bán lẻ Bình Dương", img: "/images/bình dương.jpg" },
      deputies: [
        { name: "Đang cập nhật...", role: "Phó giám đốc", img: "/images/logo-viettel-store.png" }
      ]
    }
  },
  {
    name: "Chi nhánh Cà Mau",
    img: "/images/logo-viettel-store.png",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đang cập nhật...", role: "Giám đốc Chi nhánh", img: "/images/logo-viettel-store.png" },
      group: { name: "Tập thể Chi nhánh Cà Mau", subName: "Chi nhánh bán lẻ Cà Mau", img: "/images/logo-viettel-store.png" },
      deputies: [
        { name: "Đang cập nhật...", role: "Phó giám đốc", img: "/images/logo-viettel-store.png" }
      ]
    }
  },
  {
    name: "Chi nhánh TP. Hồ Chí Minh",
    img: "/images/logo-viettel-store.png",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đang cập nhật...", role: "Giám đốc Chi nhánh", img: "/images/logo-viettel-store.png" },
      group: { name: "Tập thể Chi nhánh TP. Hồ Chí Minh", subName: "Chi nhánh bán lẻ TP. HCM", img: "/images/logo-viettel-store.png" },
      deputies: [
        { name: "Đang cập nhật...", role: "Phó giám đốc", img: "/images/logo-viettel-store.png" }
      ]
    }
  },
  {
    name: "Chi nhánh Đồng Nai",
    img: "/images/logo-viettel-store.png",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đang cập nhật...", role: "Giám đốc Chi nhánh", img: "/images/logo-viettel-store.png" },
      group: { name: "Tập thể Chi nhánh Đồng Nai", subName: "Chi nhánh bán lẻ Đồng Nai", img: "/images/logo-viettel-store.png" },
      deputy: { name: "Đang cập nhật...", role: "Phó giám đốc", img: "/images/logo-viettel-store.png" }
    }
  },
  {
    name: "Chi nhánh Long An",
    img: "/images/logo-viettel-store.png",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đang cập nhật...", role: "Giám đốc Chi nhánh", img: "/images/logo-viettel-store.png" },
      group: { name: "Tập thể Chi nhánh Long An", subName: "Chi nhánh bán lẻ Long An", img: "/images/logo-viettel-store.png" },
      deputy: { name: "Đang cập nhật...", role: "Phó giám đốc", img: "/images/logo-viettel-store.png" }
    }
  },
  {
    name: "Chi nhánh Tiền Giang",
    img: "/images/logo-viettel-store.png",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đang cập nhật...", role: "Giám đốc Chi nhánh", img: "/images/logo-viettel-store.png" },
      group: { name: "Tập thể Chi nhánh Tiền Giang", subName: "Chi nhánh bán lẻ Tiền Giang", img: "/images/logo-viettel-store.png" },
      deputy: { name: "Đang cập nhật...", role: "Phó giám đốc", img: "/images/logo-viettel-store.png" }
    }
  },
  {
    name: "Chi nhánh Vũng Tàu",
    img: "/images/logo-viettel-store.png",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đang cập nhật...", role: "Giám đốc Chi nhánh", img: "/images/logo-viettel-store.png" },
      group: { name: "Tập thể Chi nhánh Vũng Tàu", subName: "Chi nhánh bán lẻ Vũng Tàu", img: "/images/logo-viettel-store.png" },
      deputy: { name: "Đang cập nhật...", role: "Phó giám đốc", img: "/images/logo-viettel-store.png" }
    }
  },
  {
    name: "Chi nhánh Cần Thơ",
    img: "/images/logo-viettel-store.png",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đang cập nhật...", role: "Giám đốc Chi nhánh", img: "/images/logo-viettel-store.png" },
      group: { name: "Tập thể Chi nhánh Cần Thơ", subName: "Chi nhánh bán lẻ Cần Thơ", img: "/images/logo-viettel-store.png" },
      deputy: { name: "Đang cập nhật...", role: "Phó giám đốc", img: "/images/logo-viettel-store.png" }
    }
  },
];

const provinces = [
  {
    name: "TUYÊN QUANG",
    map: encodeURI("/images/provinces/tuyen_quang_thumb.png"),
    mapWithText: encodeURI("/images/provinces/tuyen_quang_thumb chữ.png"),
    stores: [
      { id: "TQG01", img: "/images/hethongsieuthi/tuyenquang/tuyenquang-1.jpg", objectPosition: "center 60%" },
      { id: "TQG02", img: "/images/hethongsieuthi/tuyenquang/tuyenquang-2.jpg", objectPosition: "center 60%" },
      { id: "TQG03", img: "/images/hethongsieuthi/tuyenquang/tuyenquang-3.jpg" },
      { id: "TQG04", img: "/images/hethongsieuthi/tuyenquang/tuyenquang-4.jpg" },
      { id: "TQG05", img: "/images/hethongsieuthi/tuyenquang/tuyenquang-5.jpg" },
    ]
  },
  {
    name: "CAO BẰNG",
    map: encodeURI("/images/provinces/cao bằng.png"),
    mapWithText: encodeURI("/images/provinces/cao bằng chữ.png"),
    stores: [
      { id: "CBG01", img: "/images/hethongsieuthi/caobang/caobang-1.jpg" },
      { id: "CBG02", img: "/images/hethongsieuthi/caobang/caobang-2.jpg" },
      { id: "CBG03", img: "/images/hethongsieuthi/caobang/caobang-3.jpg", objectPosition: "center 20%" },
    ]
  },
  {
    name: "THÁI NGUYÊN",
    map: encodeURI("/images/provinces/thai_nguyen_thumb.png"),
    mapWithText: encodeURI("/images/provinces/thai_nguyen_thumb chữ.png"),
    stores: [
      { id: "TNN01", img: "/images/hethongsieuthi/thainguyen/thainguyen-1.jpg" },
      { id: "TNN02", img: "/images/hethongsieuthi/thainguyen/thainguyen-2.jpg" },
      { id: "TNN03", img: "/images/hethongsieuthi/thainguyen/thainguyen-3.jpg" },
      { id: "TNN04", img: "/images/hethongsieuthi/thainguyen/thainguyen-4.jpg" },
      { id: "TNN05", img: "/images/hethongsieuthi/thainguyen/thainguyen-5.jpg" },
      { id: "TNN06", img: "/images/hethongsieuthi/thainguyen/thainguyen-6.jpg" },
      { id: "TNN07", img: "/images/hethongsieuthi/thainguyen/thainguyen-7.jpg", objectPosition: "center 5%" },
      { id: "TNN08", img: "/images/hethongsieuthi/thainguyen/thainguyen-8.jpg" },
      { id: "TNN09", img: "/images/hethongsieuthi/thainguyen/thainguyen-9.jpg", objectPosition: "center 40%" },
      { id: "TNN10", img: "/images/hethongsieuthi/thainguyen/thainguyen-10.jpg" },
    ]
  },
  {
    name: "ĐIỆN BIÊN",
    map: encodeURI("/images/provinces/điện biên.png"),
    mapWithText: encodeURI("/images/provinces/điện biên chữ.png"),
    stores: [
      { id: "DBN01", img: "/images/hethongsieuthi/dienbien/dienbien-1.jpg" },
      { id: "DBN02", img: "/images/hethongsieuthi/dienbien/dienbien-2.jpg", objectPosition: "center 50%" },
    ]
  },
  {
    name: "LẠNG SƠN",
    map: encodeURI("/images/provinces/lang_son_thumb.png"),
    mapWithText: encodeURI("/images/provinces/lang_son_thumb chữ.png"),
    stores: [
      { id: "LSN01", img: "/images/hethongsieuthi/langson/langson-2.jpg" },
      { id: "LSN02", img: "/images/hethongsieuthi/langson/langson-1.jpg", objectPosition: "center 40%" },
    ]
  },
  {
    name: "SƠN LA",
    map: encodeURI("/images/provinces/son_la_thumb.png"),
    mapWithText: encodeURI("/images/provinces/son_la_thumb chữ.png"),
    stores: [
      { id: "SLA01", img: "/images/hethongsieuthi/sonla/sonla-3.jpg", objectPosition: "center 85%" },
      { id: "SLA02", img: "/images/hethongsieuthi/sonla/sonla-1.jpg", objectPosition: "center 85%", scale: "scale-140" },
      { id: "SLA03", img: "/images/hethongsieuthi/sonla/sonla-4.jpg" },
      { id: "SLA04", img: "/images/hethongsieuthi/sonla/sonla-2.jpg", scale: "scale-150", objectPosition: "center 60%" },
    ]
  },
  {
    name: "PHÚ THỌ",
    map: encodeURI("/images/provinces/phu_tho_thumb.png"),
    mapWithText: encodeURI("/images/provinces/phu_tho_thumb chữ.png"),
    stores: [
      { id: "PTO01", img: "/images/hethongsieuthi/phutho/pt001.jpg" },
      { id: "PTO02", img: "/images/hethongsieuthi/phutho/pt002.jpg" },
      { id: "PTO03", img: "/images/hethongsieuthi/phutho/pt003.jpg" },
      { id: "PTO04", img: "/images/hethongsieuthi/phutho/pt004.jpg", objectPosition: "center 30%" },
      { id: "PTO05", img: "/images/hethongsieuthi/phutho/pt005.jpg", scale: "scale-120", objectPosition: "60% center" },
      { id: "PTO06", img: "/images/hethongsieuthi/phutho/pt006.jpg" },
      { id: "PTO07", img: "/images/hethongsieuthi/phutho/pt007.jpg" },
      { id: "PTO08", img: "/images/hethongsieuthi/phutho/pt008.png" },
      { id: "PTO10", img: "/images/hethongsieuthi/phutho/pt010.jpg", objectPosition: "center 80%" },
      { id: "PTO11", img: "/images/hethongsieuthi/phutho/pt011.jpg", objectPosition: "center 80%" },
      { id: "PTO12", img: "/images/hethongsieuthi/phutho/pt012.jpg" },
      { id: "PTO13", img: "/images/hethongsieuthi/phutho/pt013.jpg" },
      { id: "PTO14", img: "/images/hethongsieuthi/phutho/pt014.jpg", objectPosition: "center 80%" },
      { id: "PTO15", img: "/images/hethongsieuthi/phutho/pt015.jpg" },
      { id: "PTO16", img: "/images/hethongsieuthi/phutho/pt016.jpg" },
      { id: "PTO17", img: "/images/hethongsieuthi/phutho/pt017.jpg" },
      { id: "PTO18", img: "/images/hethongsieuthi/phutho/pt018.jpg", objectPosition: "center 20%" },
      { id: "PTO19", img: "/images/hethongsieuthi/phutho/pt019.jpg" },
      { id: "PTO20", img: "/images/hethongsieuthi/phutho/pt020.jpg", objectPosition: "center 80%" },
      { id: "PTO21", img: "/images/hethongsieuthi/phutho/pt021.jpg" },
      { id: "PTO22", img: "/images/hethongsieuthi/phutho/pt022.jpg", objectPosition: "center 60%" },
      { id: "PTO-CH01", img: "/images/hethongsieuthi/phutho/pto-ch01.jpg", objectPosition: "center 80%" },
      { id: "PTO-CH02", img: "/images/hethongsieuthi/phutho/pto-ch2.jpg" },
    ]
  },
  {
    name: "BẮC NINH",
    map: encodeURI("/images/provinces/bắc nih.png"),
    mapWithText: encodeURI("/images/provinces/bắc nih chữ.png"),
    stores: [
      { id: "BNH01", img: "/images/hethongsieuthi/bacninh/bnh01.jpg" },
      { id: "BNH02", img: "/images/hethongsieuthi/bacninh/bnh02.jpg", objectPosition: "center 30%" },
      { id: "BNH03", img: "/images/hethongsieuthi/bacninh/bnh03.jpg" },
      { id: "BNH04", img: "/images/hethongsieuthi/bacninh/bnh04.jpg", scale: "scale-[1.5]", objectPosition: "center 80%" },
      { id: "BNH05", img: "/images/hethongsieuthi/bacninh/bnh05.jpg" },
      { id: "BNH06", img: "/images/hethongsieuthi/bacninh/bnh06.jpg", scale: "scale-110" },
      { id: "BNH07", img: "/images/hethongsieuthi/bacninh/bnh07.jpg" },
      { id: "BNH08", img: "/images/hethongsieuthi/bacninh/bnh08.jpg" },
      { id: "BNH09", img: "/images/hethongsieuthi/bacninh/bnh09.jpg", objectPosition: "center 80%" },
      { id: "BNH10", img: "/images/hethongsieuthi/bacninh/bnh10.jpg", objectPosition: "center 90%" },
      { id: "BNH11", img: "/images/hethongsieuthi/bacninh/bnh11.jpg", objectPosition: "42% center", scale: "scale-[1.2]" },
      { id: "BNH12", img: "/images/hethongsieuthi/bacninh/bnh12.jpg", objectPosition: "center 70%" },
      { id: "BNH-CH01", img: "/images/hethongsieuthi/bacninh/bnh-ch01.jpg", objectPosition: "center 70%" },
    ]
  },
  {
    name: "QUẢNG NINH",
    map: encodeURI("/images/provinces/quang_ninh_thumb.png"),
    mapWithText: encodeURI("/images/provinces/quang_ninh_thumb chữ.png"),
    stores: [
      { id: "QNH01", img: "/images/hethongsieuthi/quangninh/qnh01.jpg" },
      { id: "QNH02", img: "/images/hethongsieuthi/quangninh/qnh02.jpg" },
      { id: "QNH03", img: "/images/hethongsieuthi/quangninh/qnh03.jpg", objectPosition: "center 25%", scale: "scale-100" },
      { id: "QNH04", img: "/images/hethongsieuthi/quangninh/qnh04.jpg", objectPosition: "center 80%" },
      { id: "QNH05", img: "/images/hethongsieuthi/quangninh/qnh05.jpg" },
      { id: "QNH06", img: "/images/hethongsieuthi/quangninh/qnh06.jpg" },
      { id: "QNH07", img: "/images/hethongsieuthi/quangninh/qnh07.jpg", objectPosition: "center 70%" },
      { id: "QNH08", img: "/images/hethongsieuthi/quangninh/qnh08.jpg", objectPosition: "center 40%" },
      { id: "QNH09", img: "/images/hethongsieuthi/quangninh/qnh09.jpg", objectPosition: "center 40%" },
      { id: "QNH-CH01", img: "/images/hethongsieuthi/quangninh/ch-01.jpg" },
    ]
  },
  {
    name: "HÀ NỘI",
    map: encodeURI("/images/provinces/hà nội.png"),
    mapWithText: encodeURI("/images/provinces/hà nội chữ.png"),
    stores: [
      { id: "HNI01", img: "/images/hethongsieuthi/hanoi/hni01.jpg" },
      { id: "HNI02", img: "/images/hethongsieuthi/hanoi/hni02.jpg", scale: "scale-[1.6]", objectPosition: "center 90%" },
      { id: "HNI03", img: "/images/hethongsieuthi/hanoi/hni03.jpg", objectPosition: "center 70%" },
      { id: "HNI04", img: "/images/hethongsieuthi/hanoi/hni04.jpg", objectPosition: "center 40%" },
      { id: "HNI05", img: "/images/hethongsieuthi/hanoi/hni05.jpg" },
      { id: "HNI06", img: "/images/hethongsieuthi/hanoi/hni06.jpg", objectPosition: "center 30%" },
      { id: "HNI07", img: "/images/hethongsieuthi/hanoi/hni07.jpg", objectPosition: "center 20%" },
      { id: "HNI08", img: "/images/hethongsieuthi/hanoi/hni08.jpg", objectPosition: "center 70%" },
      { id: "HNI09", img: "/images/hethongsieuthi/hanoi/hni09.jpg" },
      { id: "HNI10", img: "/images/hethongsieuthi/hanoi/hni010.jpg" },
      { id: "HNI11", img: "/images/hethongsieuthi/hanoi/hni011.jpg" },
      { id: "HNI12", img: "/images/hethongsieuthi/hanoi/hni012.jpg" },
      { id: "HNI13", img: "/images/hethongsieuthi/hanoi/hni013.jpg" },
      { id: "HNI14", img: "/images/hethongsieuthi/hanoi/hni014.jpg" },
      { id: "HNI15", img: "/images/hethongsieuthi/hanoi/hni015.jpg", objectPosition: "center 60%" },
      { id: "HNI16", img: "/images/hethongsieuthi/hanoi/hni016.jpg" },
      { id: "HNI17", img: "/images/hethongsieuthi/hanoi/hni017.jpg", objectPosition: "center 20%" },
      { id: "HNI18", img: "/images/hethongsieuthi/hanoi/hni018.png" },
      { id: "HNI19", img: "/images/hethongsieuthi/hanoi/hni019.jpg" },
      { id: "HNI21", img: "/images/hethongsieuthi/hanoi/hni021.jpg" },
      { id: "HNI22", img: "/images/hethongsieuthi/hanoi/hni022.jpg" },
      { id: "HNI23", img: "/images/hethongsieuthi/hanoi/hni023.jpg" },
      { id: "HNI24", img: "/images/hethongsieuthi/hanoi/hni024.jpg", scale: "scale-[1.4]" },
      { id: "HNI25", img: "/images/hethongsieuthi/hanoi/hni025.jpg", objectPosition: "center 40%" },
      { id: "HNI26", img: "/images/hethongsieuthi/hanoi/hni026.jpg", scale: "scale-[1.4]" },
      { id: "HNI27", img: "/images/hethongsieuthi/hanoi/hni-ch027.jpg", scale: "scale-[1.2]", objectPosition: "center 45%" },
      { id: "HNI28", img: "/images/hethongsieuthi/hanoi/hni028.jpg" },
      { id: "HNI-CH01", img: "/images/hethongsieuthi/hanoi/hni-ch01.png", objectPosition: "center 30%" },
      { id: "HNI-CH02", img: "/images/hethongsieuthi/hanoi/hni-ch02.jpg", objectPosition: "center 40%" },
      { id: "HNI-CH03", img: "/images/hethongsieuthi/hanoi/hni-ch03.jpg" },
      { id: "HNI-CH04", img: "/images/hethongsieuthi/hanoi/hni-ch04.jpg", objectPosition: "center 10%" },
      { id: "HNI-CH06", img: "/images/hethongsieuthi/hanoi/hni-ch06.jpg" },
      { id: "HNI-CH07", img: "/images/hethongsieuthi/hanoi/hni-ch07.jpg" },
      { id: "HNI-CH11", img: "/images/hethongsieuthi/hanoi/hni-ch011.jpg", objectPosition: "center 40%" },
      { id: "HNI-CH12", img: "/images/hethongsieuthi/hanoi/hni-ch012.jpg" },
      { id: "HNI-CH13", img: "/images/hethongsieuthi/hanoi/hni-ch013.jpg", objectPosition: "center 70%" },
      { id: "HNI-CH14", img: "/images/hethongsieuthi/hanoi/hni-ch014.jpg", objectPosition: "center 40%" },
      { id: "HNI-CH16", img: "/images/hethongsieuthi/hanoi/hni-ch016.jpg", objectPosition: "center 40%" },
      { id: "HNI-CH19", img: "/images/hethongsieuthi/hanoi/hni-ch019.jpg" },
    ]
  },
  {
    name: "HẢI PHÒNG",
    map: encodeURI("/images/provinces/hải phòng.png"),
    mapWithText: encodeURI("/images/provinces/hải phòng chữ.png"),
    stores: [
      { id: "HPG01", img: "/images/hethongsieuthi/haiphong/hpg01.jpg", objectPosition: "center 70%" },
      { id: "HPG02", img: "/images/hethongsieuthi/haiphong/hpg02.jpg" },
      { id: "HPG03", img: "/images/hethongsieuthi/haiphong/hpg03.jpg" },
      { id: "HPG04", img: "/images/hethongsieuthi/haiphong/hpg04.jpg", objectPosition: "center 80%" },
      { id: "HPG05", img: "/images/hethongsieuthi/haiphong/hpg05.jpg" },
      { id: "HPG06", img: "/images/hethongsieuthi/haiphong/hpg06.jpg", objectPosition: "center 20%" },
      { id: "HPG07", img: "/images/hethongsieuthi/haiphong/hpg07.jpg" },
      { id: "HPG08", img: "/images/hethongsieuthi/haiphong/hpg08.jpg" },
      { id: "HPG09", img: "/images/hethongsieuthi/haiphong/hpg09.jpg" },
      { id: "HPG10", img: "/images/hethongsieuthi/haiphong/hpg10.jpg", objectPosition: "center 30%" },
      { id: "HPG11", img: "/images/hethongsieuthi/haiphong/hpg11.jpg" },
      { id: "HPG12", img: "/images/hethongsieuthi/haiphong/hpg12.jpg" },
      { id: "HPG13", img: "/images/hethongsieuthi/haiphong/hpg13.jpg", objectPosition: "center 70%" },
      { id: "HPG14", img: "/images/hethongsieuthi/haiphong/hpg14.jpg", objectPosition: "center 30%" },
    ]
  },
  {
    name: "HƯNG YÊN",
    map: encodeURI("/images/provinces/hung_yen_thumb.png"),
    mapWithText: encodeURI("/images/provinces/hung_yen_thumb chữ.png"),
    stores: [
      { id: "HYN01", img: "/images/hethongsieuthi/hungyen/hyn01.jpg" },
      { id: "HYN02", img: "/images/hethongsieuthi/hungyen/hyn02.jpg", objectPosition: "center 80%" },
      { id: "HYN03", img: "/images/hethongsieuthi/hungyen/hyn03.jpg", objectPosition: "center 80%" },
      { id: "HYN04", img: "/images/hethongsieuthi/hungyen/hyn04.jpg" },
      { id: "HYN05", img: "/images/hethongsieuthi/hungyen/hyn05.jpg" },
      { id: "HYN06", img: "/images/hethongsieuthi/hungyen/hyn06.jpg" },
      { id: "HYN07", img: "/images/hethongsieuthi/hungyen/hyn07.jpg" },
      { id: "HYN08", img: "/images/hethongsieuthi/hungyen/hyn08.jpg", objectPosition: "center 60%" },
      { id: "HYN09", img: "/images/hethongsieuthi/hungyen/hyn09.jpg" },
      { id: "HYN10", img: "/images/hethongsieuthi/hungyen/hyn10.jpg" },
      { id: "HYN11", img: "/images/hethongsieuthi/hungyen/hyn11.jpg" },
      { id: "HYN12", img: "/images/hethongsieuthi/hungyen/hyn12.jpg" },
      { id: "HYN13", img: "/images/hethongsieuthi/hungyen/hyn13.jpg" },
      { id: "HYN-CH01", img: "/images/hethongsieuthi/hungyen/hyn-ch01.jpg", objectPosition: "center 20%" },
    ]
  },
  {
    name: "NINH BÌNH",
    map: encodeURI("/images/provinces/ninh_binh_thumb.png"),
    mapWithText: encodeURI("/images/provinces/ninh_binh_thumb có chữ.png"),
    stores: [
      { id: "NBH01", img: "/images/hethongsieuthi/ninhbinh/nbh01.jpg" },
      { id: "NBH02", img: "/images/hethongsieuthi/ninhbinh/nbh02.jpg" },
      { id: "NBH03", img: "/images/hethongsieuthi/ninhbinh/nbh03.jpg" },
      { id: "NBH04", img: "/images/hethongsieuthi/ninhbinh/nbh04.jpg" },
      { id: "NBH05", img: "/images/hethongsieuthi/ninhbinh/nbh05.jpg", objectPosition: "center 60%" },
      { id: "NBH06", img: "/images/hethongsieuthi/ninhbinh/nbh06.jpg" },
      { id: "NBH07", img: "/images/hethongsieuthi/ninhbinh/nbh07.jpg" },
      { id: "NBH08", img: "/images/hethongsieuthi/ninhbinh/nbh08.jpg", objectPosition: "center 60%" },
      { id: "NBH09", img: "/images/hethongsieuthi/ninhbinh/nbh09.jpg", objectPosition: "center 60%" },
      { id: "NBH10", img: "/images/hethongsieuthi/ninhbinh/nbh10.jpg", objectPosition: "center 30%" },
      { id: "NBH11", img: "/images/hethongsieuthi/ninhbinh/nbh11.jpg", objectPosition: "center 30%" },
      { id: "NBH12", img: "/images/hethongsieuthi/ninhbinh/nbh12.png", objectPosition: "center 10%" },
      { id: "NBH13", img: "/images/hethongsieuthi/ninhbinh/nbh13.jpg", objectPosition: "center 60%" },
    ]
  },
  {
    name: "THANH HOÁ",
    map: encodeURI("/images/provinces/thanh_hoa_thumb.png"),
    mapWithText: encodeURI("/images/provinces/thanh_hoa_thumb chữ.png"),
    stores: [
      { id: "THA01", img: "/images/hethongsieuthi/thanhhoa/tha01.jpg" },
      { id: "THA02", img: "/images/hethongsieuthi/thanhhoa/tha02.jpg", objectPosition: "center 60%" },
      { id: "THA03", img: "/images/hethongsieuthi/thanhhoa/tha03.jpg", objectPosition: "center 60%" },
      { id: "THA04", img: "/images/hethongsieuthi/thanhhoa/tha04.jpg", objectPosition: "center 80%" },
      { id: "THA05", img: "/images/hethongsieuthi/thanhhoa/tha05.jpg", objectPosition: "center 80%" },
      { id: "THA06", img: "/images/hethongsieuthi/thanhhoa/tha06.jpg", objectPosition: "center 40%" },
      { id: "THA07", img: "/images/hethongsieuthi/thanhhoa/tha07.jpg" },
      { id: "THA08", img: "/images/hethongsieuthi/thanhhoa/tha08.jpg", objectPosition: "center 70%" },
      { id: "THA09", img: "/images/hethongsieuthi/thanhhoa/tha09.jpg" },
      { id: "THA-CH01", img: "/images/hethongsieuthi/thanhhoa/tha-ch01.jpg" },
    ]
  },
  {
    name: "NGHỆ AN",
    map: encodeURI("/images/provinces/nghe_an_thumb.png"),
    mapWithText: encodeURI("/images/provinces/nghe_an_thumb chữ.png"),
    stores: [
      { id: "NAN01", img: "/images/hethongsieuthi/nghean/nan01.jpg" },
      { id: "NAN02", img: "/images/hethongsieuthi/nghean/nan02.jpg" },
      { id: "NAN03", img: "/images/hethongsieuthi/nghean/nan03.jpg", objectPosition: "center 60%" },
      { id: "NAN04", img: "/images/hethongsieuthi/nghean/nan04.jpg", objectPosition: "center 20%" },
      { id: "NAN05", img: "/images/hethongsieuthi/nghean/nan05.jpg" },
      { id: "NAN06", img: "/images/hethongsieuthi/nghean/nan06.jpg" },
      { id: "NAN07", img: "/images/hethongsieuthi/nghean/nan07.jpg" },
      { id: "NAN08", img: "/images/hethongsieuthi/nghean/nan08.jpg" },
      { id: "NAN09", img: "/images/hethongsieuthi/nghean/nan09.jpg", objectPosition: "center 70%" },
      { id: "NAN10", img: "/images/hethongsieuthi/nghean/nan10.jpg" },
      { id: "NAN11", img: "/images/hethongsieuthi/nghean/nan11.jpg" },
      { id: "NAN12", img: "/images/hethongsieuthi/nghean/nan12.jpg", objectPosition: "center 10%" },
      { id: "NAN13", img: "/images/hethongsieuthi/nghean/nan13.jpg", scale: "scale-[1.0]" },
      { id: "NAN14", img: "/images/hethongsieuthi/nghean/nan14.jpg" },
    ]
  },
  {
    name: "HÀ TĨNH",
    map: encodeURI("/images/provinces/ha_tinh_thumb.png"),
    mapWithText: encodeURI("/images/provinces/ha_tinh_thumb chữ.png"),
    stores: [
      { id: "HTH01", img: "/images/hethongsieuthi/hatinh/hth01.jpg" },
      { id: "HTH02", img: "/images/hethongsieuthi/hatinh/hth02.jpg", objectPosition: "center 60%" },
      { id: "HTH03", img: "/images/hethongsieuthi/hatinh/hth03.jpg" },
      { id: "HTH04", img: "/images/hethongsieuthi/hatinh/hth04.jpg", objectPosition: "center 60%" },
      { id: "HTH05", img: "/images/hethongsieuthi/hatinh/hth05.jpg", objectPosition: "center 20%" },
      { id: "HTH06", img: "/images/hethongsieuthi/hatinh/hth06.jpg" },
    ]
  },
  {
    name: "QUẢNG TRỊ",
    map: encodeURI("/images/provinces/quang_tri_thumb.png"),
    mapWithText: encodeURI("/images/provinces/quang_tri_thumb chữ.png"),
    stores: [
      { id: "QTI01", img: "/images/hethongsieuthi/quangtri/qti01.jpg" },
      { id: "QTI02", img: "/images/hethongsieuthi/quangtri/qti02.jpg" },
      { id: "QTI03", img: "/images/hethongsieuthi/quangtri/qti03.jpg" },
      { id: "QTI04", img: "/images/hethongsieuthi/quangtri/qti04.jpg", objectPosition: "center 60%" },
      { id: "QTI05", img: "/images/hethongsieuthi/quangtri/qti05.jpg", objectPosition: "center 30%" },
      { id: "QTI06", img: "/images/hethongsieuthi/quangtri/qti06.jpg" },
      { id: "QTI07", img: "/images/hethongsieuthi/quangtri/qti07.jpg" },
      { id: "QTI08", img: "/images/hethongsieuthi/quangtri/qti08.jpg" },
      { id: "QTI-CH01", img: "/images/hethongsieuthi/quangtri/qti-ch01.jpg", objectPosition: "center 60%" },
    ]
  },
  {
    name: "HUẾ",
    map: encodeURI("/images/provinces/huế.png"),
    mapWithText: encodeURI("/images/provinces/huế chữ.png"),
    stores: [
      { id: "HUE01", img: "/images/hethongsieuthi/hue/hue01.jpg" },
      { id: "HUE02", img: "/images/hethongsieuthi/hue/hue02.jpg", objectPosition: "center 25%" },
      { id: "HUE03", img: "/images/hethongsieuthi/hue/hue03.jpg" },
      { id: "HUE-CH01", img: "/images/hethongsieuthi/hue/hue-ch01.jpg", objectPosition: "center 45%" },
    ]
  },
  {
    name: "ĐÀ NẴNG",
    map: encodeURI("/images/provinces/đà nẵng.png"),
    mapWithText: encodeURI("/images/provinces/đà nẵng chữ.png"),
    stores: [
      { id: "DNG01", img: "/images/hethongsieuthi/danang/dng01.jpg", objectPosition: "center 60%" },
      { id: "DNG02", img: "/images/hethongsieuthi/danang/dng02.jpg", objectPosition: "center 10%" },
      { id: "DNG03", img: "/images/hethongsieuthi/danang/dng03.jpg" },
      { id: "DNG04", img: "/images/hethongsieuthi/danang/dng04.jpg", objectPosition: "center 60%" },
      { id: "DNG05", img: "/images/hethongsieuthi/danang/dng05.jpg", objectPosition: "center 40%" },
      { id: "DNG06", img: "/images/hethongsieuthi/danang/dng06.jpg", objectPosition: "center 60%" },
      { id: "DNG07", img: "/images/hethongsieuthi/danang/dng07.jpg" },
      { id: "DNG08", img: "/images/hethongsieuthi/danang/dng08.jpg", objectPosition: "center 80%" },
      { id: "DNG09", img: "/images/hethongsieuthi/danang/DNG09.jpg" },
      { id: "DNG10", img: "/images/hethongsieuthi/danang/dng10.jpg", objectPosition: "center 60%" },
      { id: "DNG11", img: "/images/hethongsieuthi/danang/dng11.jpg" },
      { id: "DNG-CH01", img: "/images/hethongsieuthi/danang/dng-ch01.jpg", objectPosition: "center 70%" },
      { id: "DNG-CH02", img: "/images/hethongsieuthi/danang/dng-ch02.jpg" },
      { id: "DNG-CH03", img: "/images/hethongsieuthi/danang/dng-ch03.jpg" },
      { id: "DNG-CH04", img: "/images/hethongsieuthi/danang/dng-ch04.jpg" },
    ]
  },
  {
    name: "GIA LAI",
    map: encodeURI("/images/provinces/gia_lai_thumb.png"),
    mapWithText: encodeURI("/images/provinces/gia_lai_thumb chữ.png"),
    stores: [
      { id: "GLI01", img: "/images/hethongsieuthi/gialai/gli01.jpg", scale: "scale-[1.0]", objectFit: "object-contain" },
      { id: "GLI02", img: "/images/hethongsieuthi/gialai/gli02.jpg" },
      { id: "GLI03", img: "/images/hethongsieuthi/gialai/GLI03.jpg" },
      { id: "GLI04", img: "/images/hethongsieuthi/gialai/gli04.jpg", objectPosition: "center 60%" },
      { id: "GLI05", img: "/images/hethongsieuthi/gialai/GLI05.jpg" },
      { id: "GLI06", img: "/images/hethongsieuthi/gialai/gli06.jpg" },
      { id: "GLI-CH01", img: "/images/hethongsieuthi/gialai/gli-ch01.jpg", objectPosition: "center 20%" },
    ]
  },
  {
    name: "QUẢNG NGÃI",
    map: encodeURI("/images/provinces/quang_ngai_thumb.png"),
    mapWithText: encodeURI("/images/provinces/quang_ngai_thumb chữ.png"),
    stores: [
      { id: "QNI01", img: "/images/hethongsieuthi/quangngai/QNI01.jpg" },
      { id: "QNI02", img: "/images/hethongsieuthi/quangngai/qni02.jpg", objectPosition: "center 80%" },
      { id: "QNI03", img: "/images/hethongsieuthi/quangngai/qni03.jpg", objectPosition: "center 60%" },
      { id: "QNI04", img: "/images/hethongsieuthi/quangngai/qni04.jpg" },
      { id: "QNI05", img: "/images/hethongsieuthi/quangngai/qni05.jpg" },
      { id: "QNI-CH01", img: "/images/hethongsieuthi/quangngai/qni-ch01.jpg" },
    ]
  },
  {
    name: "ĐẮK LẮK",
    map: encodeURI("/images/provinces/đắk lắk.png"),
    mapWithText: encodeURI("/images/provinces/đắk lắk chữ.png"),
    stores: [
      { id: "DLK01", img: "/images/hethongsieuthi/daklak/dlk01.png", objectPosition: "center 40%" },
      { id: "DLK02", img: "/images/hethongsieuthi/daklak/dlk02.jpg", objectPosition: "center 60%" },
      { id: "DLK03", img: "/images/hethongsieuthi/daklak/dlk03.jpg", objectPosition: "center 70%" },
      { id: "DLK04", img: "/images/hethongsieuthi/daklak/DLK04.jpg" },
      { id: "DLK05", img: "/images/hethongsieuthi/daklak/dlk05.jpg" },
      { id: "DLK06", img: "/images/hethongsieuthi/daklak/DLK06.jpg", objectPosition: "center 80%" },
      { id: "DLK07", img: "/images/hethongsieuthi/daklak/dlk07.JPG" },
      { id: "DLK09", img: "/images/hethongsieuthi/daklak/dlk09.jpg", objectPosition: "center 60%" },
      { id: "DLK-CH01", img: "/images/hethongsieuthi/daklak/DLK-CH01.jpg", objectPosition: "center 30%" },
    ]
  },
  {
    name: "KHÁNH HOÀ",
    map: encodeURI("/images/provinces/khanh_hoa_thumb.png"),
    mapWithText: encodeURI("/images/provinces/khanh_hoa_thumb chữ.png"),
    stores: [
      { id: "KHA01", img: "/images/hethongsieuthi/khanhhoa/kha01.jpg" },
      { id: "KHA02", img: "/images/hethongsieuthi/khanhhoa/kha02.jpg" },
      { id: "KHA03", img: "/images/hethongsieuthi/khanhhoa/KHA03.jpg", objectPosition: "center 80%" },
      { id: "KHA04", img: "/images/hethongsieuthi/khanhhoa/kha04.jpg" },
      { id: "KHA05", img: "/images/hethongsieuthi/khanhhoa/KHA05.jpg", objectPosition: "center 40%" },
      { id: "KHA06", img: "/images/hethongsieuthi/khanhhoa/KHA06.jpg" },
    ]
  },
  {
    name: "LÂM ĐỒNG",
    map: encodeURI("/images/provinces/lam_dong_thumb.png"),
    mapWithText: encodeURI("/images/provinces/lam_dong_thumb chữ.png"),
    stores: [
      { id: "LDG01", img: "/images/hethongsieuthi/lamdong/ldg01.jpg", objectPosition: "center 60%" },
      { id: "LDG02", img: "/images/hethongsieuthi/lamdong/LDG02.jpg", objectPosition: "center 40%" },
      { id: "LDG03", img: "/images/hethongsieuthi/lamdong/ldg03.jpg" },
      { id: "LDG04", img: "/images/hethongsieuthi/lamdong/LDG04.jpg", objectPosition: "center 30%" },
      { id: "LDG05", img: "/images/hethongsieuthi/lamdong/ldg05.jpg", objectPosition: "center 30%" },
      { id: "LDG06", img: "/images/hethongsieuthi/lamdong/LDG06.jpg", objectPosition: "center 20%" },
      { id: "LDG07", img: "/images/hethongsieuthi/lamdong/LDG07.jpg" },
      { id: "LDG08", img: "/images/hethongsieuthi/lamdong/LDG08.jpg" },
      { id: "LDG09", img: "/images/hethongsieuthi/lamdong/LDG09.jpg", objectPosition: "center 70%" },
      { id: "LDG-CH01", img: "/images/hethongsieuthi/lamdong/ldg-ch01.jpg", objectPosition: "center 30%" },
    ]
  },
  {
    name: "ĐỒNG NAI",
    map: encodeURI("/images/provinces/đồng nai.png"),
    mapWithText: encodeURI("/images/provinces/đồng nai chữ.png"),
    stores: [
      { id: "DNI01", img: "/images/hethongsieuthi/đồng nai_ đni/DNI01/DNI01-Tập thể bên trong ST.jpg" },
      { id: "DNI02", img: "/images/hethongsieuthi/đồng nai_ đni/DNI02/DNI02-Tập thể bên trong ST.jpg" },
    ]
  },
  {
    name: "TÂY NINH",
    map: encodeURI("/images/provinces/tay_ninh_thumb.png"),
    mapWithText: encodeURI("/images/provinces/tay_ninh_thumb chữ.png"),
    stores: [
      { id: "TNH01", img: "/images/hethongsieuthi/tayninh/tnh01.jpg", objectPosition: "center 60%" },
      { id: "TNH02", img: "/images/hethongsieuthi/tayninh/tnh02.jpg", objectPosition: "center 40%" },
      { id: "TNH03", img: "/images/hethongsieuthi/tayninh/tnh03.jpg", objectPosition: "center 10%" },
      { id: "TNH04", img: "/images/hethongsieuthi/tayninh/tnh04.jpg", objectPosition: "center 30%" },
      { id: "TNH05", img: "/images/hethongsieuthi/tayninh/tnh05.jpg", objectPosition: "center 5%" },
      { id: "TNH06", img: "/images/hethongsieuthi/tayninh/tnh06.jpg" },
      { id: "TNH07", img: "/images/hethongsieuthi/tayninh/tnh07.jpg", objectPosition: "center 40%" },
      { id: "TNH08", img: "/images/hethongsieuthi/tayninh/tnh08.jpg", objectPosition: "center 30%" },
      { id: "TNH09", img: "/images/hethongsieuthi/tayninh/tnh09.jpg" },
    ]
  },
  {
    name: "HỒ CHÍ MINH",
    map: encodeURI("/images/provinces/sài gòn.png"),
    mapWithText: encodeURI("/images/provinces/sài gòn chữ.png"),
    stores: [
      { id: "HCM01", img: "/images/hethongsieuthi/hcm/hcm01.jpg" },
      { id: "HCM02", img: "/images/hethongsieuthi/hcm/hcm02.jpg", objectPosition: "center 30%" },
      { id: "HCM03", img: "/images/hethongsieuthi/hcm/hcm03.JPG" },
      { id: "HCM04", img: "/images/hethongsieuthi/hcm/hcm04.jpg" },
      { id: "HCM05", img: "/images/hethongsieuthi/hcm/HCM05.jpg", objectPosition: "center 30%" },
      { id: "HCM06", img: "/images/hethongsieuthi/hcm/hcm06.jpg", objectPosition: "center 70%" },
      { id: "HCM07", img: "/images/hethongsieuthi/hcm/hcm07.jpg" },
      { id: "HCM08", img: "/images/hethongsieuthi/hcm/hcm08.jpg", objectPosition: "center 40%" },
      { id: "HCM09", img: "/images/hethongsieuthi/hcm/HCM09.jpg", objectPosition: "center 60%" },
      { id: "HCM10", img: "/images/hethongsieuthi/hcm/hcm10.jpg", objectPosition: "center 30%" },
      { id: "HCM11", img: "/images/hethongsieuthi/hcm/hcm11.jpg", objectPosition: "center 40%" },
      { id: "HCM12", img: "/images/hethongsieuthi/hcm/hcm12.jpg" },
      { id: "HCM13", img: "/images/hethongsieuthi/hcm/hcm13.jpg" },
      { id: "HCM15", img: "/images/hethongsieuthi/hcm/HCM15.jpg" },
      { id: "HCM16", img: "/images/hethongsieuthi/hcm/hcm16.jpg" },
      { id: "HCM18", img: "/images/hethongsieuthi/hcm/hcm18.jpg" },
      { id: "HCM19", img: "/images/hethongsieuthi/hcm/hcm19.jpg" },
      { id: "HCM20", img: "/images/hethongsieuthi/hcm/hcm20.jpg" },
      { id: "HCM21", img: "/images/hethongsieuthi/hcm/hcm21.jpg" },
      { id: "HCM22", img: "/images/hethongsieuthi/hcm/hcm22.jpg", objectPosition: "center 30%" },
      { id: "HCM23", img: "/images/hethongsieuthi/hcm/hcm23.jpg" },
      { id: "HCM24", img: "/images/hethongsieuthi/hcm/hcm24.jpg" },
      { id: "HCM25", img: "/images/hethongsieuthi/hcm/hcm25.jpg" },
      { id: "HCM26", img: "/images/hethongsieuthi/hcm/hcm26.jpg" },
      { id: "HCM27", img: "/images/hethongsieuthi/hcm/hcm27.jpg" },
      { id: "HCM28", img: "/images/hethongsieuthi/hcm/hcm28.jpeg" },
      { id: "HCM29", img: "/images/hethongsieuthi/hcm/hcm29.jpg" },
      { id: "HCM30", img: "/images/hethongsieuthi/hcm/hcm30.jpg" },
      { id: "HCM31", img: "/images/hethongsieuthi/hcm/hcm31.jpg" },
      { id: "HCM32", img: "/images/hethongsieuthi/hcm/hcm32.jpg" },
      { id: "HCM33", img: "/images/hethongsieuthi/hcm/hcm33.jpg" },
      { id: "HCM34", img: "/images/hethongsieuthi/hcm/hcm34.jpg", objectPosition: "center 30%" },
      { id: "HCM35", img: "/images/hethongsieuthi/hcm/hcm35.JPG" },
      { id: "HCM36", img: "/images/hethongsieuthi/hcm/hcm36.jpg" },
      { id: "HCM37", img: "/images/hethongsieuthi/hcm/hcm37.jpg", objectPosition: "center 50%" },
      { id: "HCM38", img: "/images/hethongsieuthi/hcm/hcm38.jpg" },
      { id: "HCM39", img: "/images/hethongsieuthi/hcm/HCM39.jpg" },
      { id: "HCM40", img: "/images/hethongsieuthi/hcm/hcm40.jpg" },
      { id: "HCM41", img: "/images/hethongsieuthi/hcm/hcm41.jpg" },
      { id: "HCM42", img: "/images/hethongsieuthi/hcm/HCM42.jpg" },
      { id: "HCM43", img: "/images/hethongsieuthi/hcm/hcm43.jpg", objectPosition: "center 60%" },
      { id: "HCM44", img: "/images/hethongsieuthi/hcm/hcm44.jpg" },
      { id: "HCM45", img: "/images/hethongsieuthi/hcm/HCM45.jpg" },
      { id: "HCM46", img: "/images/hethongsieuthi/hcm/hcm46.jpg", objectPosition: "center 70%" },
      { id: "HCM47", img: "/images/hethongsieuthi/hcm/hcm47.jpg" },
      { id: "HCM48", img: "/images/hethongsieuthi/hcm/hcm48.jpg" },
      { id: "HCM49", img: "/images/hethongsieuthi/hcm/hcm49.jpg" },
      { id: "HCM50", img: "/images/hethongsieuthi/hcm/HCM50.jpeg", objectPosition: "center 30%" },
      { id: "HCM51", img: "/images/hethongsieuthi/hcm/HCM51.jpg" },
      { id: "HCM53", img: "/images/hethongsieuthi/hcm/hcm53.jpg" },
      { id: "HCM-CH01", img: "/images/hethongsieuthi/hcm/hcm-ch01.jpg" },
      { id: "HCM-CH02", img: "/images/hethongsieuthi/hcm/hcm-ch02.jpg" },
      { id: "HCM-CH04", img: "/images/hethongsieuthi/hcm/hcm-ch04.jpg", objectPosition: "center 30%" },
      { id: "HCM-CH05", img: "/images/hethongsieuthi/hcm/hcm-ch05.jpg", objectPosition: "center 60%" },
      { id: "HCM-CH06", img: "/images/hethongsieuthi/hcm/hcm-ch06.jpg" },
      { id: "HCM-CH08", img: "/images/hethongsieuthi/hcm/hcm-ch08.jpg" },
      { id: "HCM-CH09", img: "/images/hethongsieuthi/hcm/hcm-ch09.jpg", objectPosition: "center 40%" },
      { id: "HCM-CH10", img: "/images/hethongsieuthi/hcm/hcm-ch10.jpg" },
      { id: "HCM-CH11", img: "/images/hethongsieuthi/hcm/hcm-ch11.jpg" },
      { id: "HCM-CH12", img: "/images/hethongsieuthi/hcm/hcm-ch12.jpg", objectPosition: "center 40%" },
      { id: "HCM-CH14", img: "/images/hethongsieuthi/hcm/hcm-ch14.jpg", objectPosition: "center 40%" },
      { id: "HCM-CH15", img: "/images/hethongsieuthi/hcm/hcm-ch15.jpg", objectPosition: "center 30%" },
      { id: "HCM-CH16", img: "/images/hethongsieuthi/hcm/hcm-ch16.jpg", objectPosition: "center 40%" },
      { id: "HCM-CH17", img: "/images/hethongsieuthi/hcm/hcm-ch17.jpg" },
      { id: "HCM-CH18", img: "/images/hethongsieuthi/hcm/hcm-ch18.jpg" },
      { id: "HCM-CH19", img: "/images/hethongsieuthi/hcm/hcm-ch19.jpg", objectPosition: "center 30%" },
      { id: "HCM-CH20", img: "/images/hethongsieuthi/hcm/hcm-ch20.jpg" },
      { id: "HCM-CH21", img: "/images/hethongsieuthi/hcm/hcm-ch21.jpg", objectPosition: "center 20%" },
    ]
  },
  {
    name: "ĐỒNG THÁP",
    map: encodeURI("/images/provinces/dong_thap_thumb.png"),
    mapWithText: encodeURI("/images/provinces/dong_thap_thumb chữ.png"),
    stores: [
      { id: "DTP01", img: "/images/hethongsieuthi/dongthap/dtp01.jpg" },
      { id: "DTP02", img: "/images/hethongsieuthi/dongthap/dtp02.jpg" },
      { id: "DTP03", img: "/images/hethongsieuthi/dongthap/dtp03.jpg" },
      { id: "DTP04", img: "/images/hethongsieuthi/dongthap/dtp04.jpg" },
      { id: "DTP05", img: "/images/hethongsieuthi/dongthap/dtp05.jpg" },
      { id: "DTP06", img: "/images/hethongsieuthi/dongthap/dtp06.jpg", objectPosition: "center 30%" },
      { id: "DTP07", img: "/images/hethongsieuthi/dongthap/dtp07.jpg", objectPosition: "center 30%" },
      { id: "DTP09", img: "/images/hethongsieuthi/dongthap/dtp09.jpg" },
      { id: "DTP-CH01", img: "/images/hethongsieuthi/dongthap/dtp-ch01.jpg" },
    ]
  },
  {
    name: "AN GIANG",
    map: encodeURI("/images/provinces/an giang_.png"),
    mapWithText: encodeURI("/images/provinces/an giang chữ.png"),
    stores: [
      { id: "AGG01", img: "/images/hethongsieuthi/angiang/sthi agg01.jpg" },
      { id: "AGG02", img: "/images/hethongsieuthi/angiang/sthi agg02.jpg" },
      { id: "AGG03", img: "/images/hethongsieuthi/angiang/sthi agg03.jpg" },
      { id: "AGG04", img: "/images/hethongsieuthi/angiang/sthi agg04.jpg" },
      { id: "AGG05", img: "/images/hethongsieuthi/angiang/sthi agg05.jpg" },
      { id: "AGG06", img: "/images/hethongsieuthi/angiang/sthi agg06.jpg", objectPosition: "center 30%" },
      { id: "AGG07", img: "/images/hethongsieuthi/angiang/sthi agg07.jpg" },
      { id: "AGG-CH01", img: "/images/hethongsieuthi/angiang/agg ch01.jpg", objectPosition: "center 30%" },
      { id: "AGG-CH02", img: "/images/hethongsieuthi/angiang/agg-ch02.jpg" },
      { id: "AGG-CH03", img: "/images/hethongsieuthi/angiang/agg ch03.jpg" },
    ]
  },
  {
    name: "VĨNH LONG",
    map: encodeURI("/images/provinces/vinh_long_thumb.png"),
    mapWithText: encodeURI("/images/provinces/vinh_long_thumb chữ.png"),
    stores: [
      { id: "VLG01", img: "/images/hethongsieuthi/vinhlong/vlg01.jpg" },
      { id: "VLG02", img: "/images/hethongsieuthi/vinhlong/vlg02.jpg", objectPosition: "center 40%" },
      { id: "VLG03", img: "/images/hethongsieuthi/vinhlong/vlg03.jpg" },
      { id: "VLG04", img: "/images/hethongsieuthi/vinhlong/vlg04.jpg" },
      { id: "VLG05", img: "/images/hethongsieuthi/vinhlong/vlg05.jpg", objectPosition: "center 35%" },
      { id: "VLG06", img: "/images/hethongsieuthi/vinhlong/vlg06.JPG" },
      { id: "VLG07", img: "/images/hethongsieuthi/vinhlong/vlg07.jpg" },
      { id: "VLG08", img: "/images/hethongsieuthi/vinhlong/vlg08.jpg" },
      { id: "VLG-CH01", img: "/images/hethongsieuthi/vinhlong/ch-vlg01.jpg" },
    ]
  },
  {
    name: "CẦN THƠ",
    map: encodeURI("/images/provinces/cần thơ.png"),
    mapWithText: encodeURI("/images/provinces/cần thơ chữ.png"),
    stores: [
      { id: "CTO01", img: "/images/hethongsieuthi/cto/cto01.jpg" },
      { id: "CTO02", img: "/images/hethongsieuthi/cto/cto02.jpg" },
      { id: "CTO03", img: "/images/hethongsieuthi/cto/cto03.jpg", objectPosition: "center 40%" },
      { id: "CTO04", img: "/images/hethongsieuthi/cto/cto04.jpg", objectPosition: "center 60%" },
      { id: "CTO05", img: "/images/hethongsieuthi/cto/cto05.jpg" },
      { id: "CTO06", img: "/images/hethongsieuthi/cto/CTO06..jpg" },
      { id: "CTO07", img: "/images/hethongsieuthi/cto/cto07.jpg" },
      { id: "CTO08", img: "/images/hethongsieuthi/cto/cto08.jpg" },
      { id: "CTO09", img: "/images/hethongsieuthi/cto/cto09.jpg" },
      { id: "CTO-CH01", img: "/images/hethongsieuthi/cto/ch-cto01.jpg", objectPosition: "center 40%" },
    ]
  },
  {
    name: "CÀ MAU",
    map: encodeURI("/images/provinces/cà mau.png"),
    mapWithText: encodeURI("/images/provinces/cà mau chữ.png"),
    stores: [
      { id: "CMU01", img: "/images/hethongsieuthi/camau/cmu01.jpg" },
      { id: "CMU02", img: "/images/hethongsieuthi/camau/cmu02.jpg", objectPosition: "center 20%" },
      { id: "CMU03", img: "/images/hethongsieuthi/camau/cmu03.jpg", objectPosition: "center 20%" },
      { id: "CMU04", img: "/images/hethongsieuthi/camau/cmu04.JPEG", objectPosition: "center 40%" },
      { id: "CMU05", img: "/images/hethongsieuthi/camau/cmu05.jpg" },
    ]
  },
  {
    name: "LAI CHÂU",
    map: encodeURI("/images/provinces/lai_chau_thumb.png"),
    mapWithText: encodeURI("/images/provinces/lai_chau_thumb chữ.png"),
    stores: [
      { id: "LCU01", img: "/images/hethongsieuthi/laichau/laichau-1.jpg" },
    ]
  },
  {
    name: "LÀO CAI",
    map: encodeURI("/images/provinces/lao_cai_thumb.png"),
    mapWithText: encodeURI("/images/provinces/lao_cai_thumb chữ 2.png"),
    stores: [
      { id: "LCI01", img: "/images/hethongsieuthi/laocai/laocai-1.jpg" },
      { id: "LCI02", img: "/images/hethongsieuthi/laocai/laocai-2.jpg" },
      { id: "LCI03", img: "/images/hethongsieuthi/laocai/laocai-3.jpg", objectPosition: "center 30%" },
      { id: "LCI04", img: "/images/hethongsieuthi/laocai/laocai-4.jpg" },
      { id: "LCI05", img: "/images/hethongsieuthi/laocai/laocai-5.jpg" },
      { id: "LCI06", img: "/images/hethongsieuthi/laocai/laocai-6.jpg", objectPosition: "center 60%" },
    ]
  },
];

console.log("COMPONENT RENDERED - VERSION 3");

const ChevronLeft = ({ size = 36, className = "" }: { size?: number, className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
);

const ChevronRight = ({ size = 36, className = "" }: { size?: number, className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
);



export default function ConNguoiPage() {
  // Popup configuration for easy customization
  const popupConfig = {
    // --- Carousel Tỉnh thành (Cái box ở giữa) ---
    carousel: {
      cardWidth: "257px",      // Chiều rộng của mỗi card
      cardHeight: "350px",     // Chiều cao của mỗi card
      centerScale: 1.15,       // Tỷ lệ to ra của cái box ở giữa
      cardBorderRadius: "40px", // Độ bo góc
      spacing: 300,            // Khoảng cách giữa các card
    },

    // --- Các thông số khác ---
    gap: "gap-4 md:gap-10",
    leader: {
      containerMaxWidth: "320px",
      width: "100%",
      height: "450px",
      mobileHeight: "220px",
      translateX: "translate-x-0"
    },
    group: {
      containerMaxWidth: "850px",
      width: "850px",
      height: "450px"
    },
    deputy: {
      containerMaxWidth: "320px",
      width: "100%",
      height: "450px",
      mobileHeight: "350px",
      translateX: "translate-x-0"
    }
  };

  const [positions, setPositions] = useState([0, 1, 2]);
  const leadersSectionRef = useRef<HTMLDivElement>(null);

  // Tự động reset Ban Giám đốc về mặc định khi kéo qua (ra khỏi tầm mắt)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Nếu không còn ở trong khung hình thì reset về mặc định (index 1 là Thiếu tá Đinh Thị Dung ở giữa)
        if (!entry.isIntersecting) {
          setPositions([0, 1, 2]);
        }
      },
      { threshold: 0 }
    );

    if (leadersSectionRef.current) {
      observer.observe(leadersSectionRef.current);
    }

    return () => {
      if (leadersSectionRef.current) {
        observer.unobserve(leadersSectionRef.current);
      }
    };
  }, []);
  const [activeDeptPage, setActiveDeptPage] = useState(0);
  const [activeBranchPage, setActiveBranchPage] = useState(0);
  const [selectedDirector, setSelectedDirector] = useState<any>(null);
  const [selectedDept, setSelectedDept] = useState<any>(null);
  const [selectedBranch, setSelectedBranch] = useState<any>(null);
  const [activeProvince, setActiveProvince] = useState(2);
  const [activeStoreIndex, setActiveStoreIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(0);
  const [vdIndex, setVdIndex] = useState(0);
  const [selectedHonoree, setSelectedHonoree] = useState<any>(null);
  const [selectedProvince, setSelectedProvince] = useState<any>(null);
  const [deptPopupPage, setDeptPopupPage] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isAnyModalOpen, setIsAnyModalOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const isOpen = !!(selectedDept || selectedDirector || selectedBranch || selectedProvince);
    setIsAnyModalOpen(isOpen);

    // Toggle header visibility
    const header = document.querySelector('header');
    if (header) {
      if (isOpen) {
        header.style.opacity = '0';
        header.style.pointerEvents = 'none';
        header.style.transition = 'opacity 0.3s ease';
      } else {
        header.style.opacity = '1';
        header.style.pointerEvents = 'auto';
      }
    }

    // Toggle body scroll
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedDept, selectedDirector, selectedBranch, selectedProvince]);

  const handleVdNext = () => setVdIndex((prev) => (prev + 1) % longService.length);
  const handleVdPrev = () => setVdIndex((prev) => (prev - 1 + longService.length) % longService.length);

  const prevProvince = () => {
    setActiveProvince((prev) => (prev === 0 ? provinces.length - 1 : prev - 1));
  };

  const nextProvince = () => {
    setActiveProvince((prev) => (prev === provinces.length - 1 ? 0 : prev + 1));
  };

  const rotateLeaders = (direction: 'cw' | 'ccw') => {
    setPositions(prev => {
      const next = [...prev];
      if (direction === 'ccw') {
        const first = next.shift()!;
        next.push(first);
      } else {
        const last = next.pop()!;
        next.unshift(last);
      }
      return next;
    });
  };

  const formerDirectorsData = [
    {
      name: "Đại Tá Nguyễn Chí Thanh",
      img: "/images/giamdoc/nguyen-chi-thanh.jpg",
      role: "Giám đốc đầu tiên của Trung tâm Viettel Store",
      period: "01/2009 - 06/2012",
      description: (
        <>
          <p className="mb-2 text-[#333333]">Là Giám đốc đầu tiên khi Trung tâm Bán lẻ được thành lập, đồng chí đã có những đóng góp đặt nền móng quan trọng:</p>
          <ul className="space-y-2 text-[#333333]">
            <li>- <strong>Xây dựng hệ thống từ sơ khởi</strong>: Chủ trì việc bàn bạc và đẩy mạnh phát triển chuỗi bán lẻ điện thoại trong bối cảnh thị trường viễn thông bùng&nbsp;nổ.</li>
            <li>- <strong>Học tập và ổn định hệ thống</strong>: Trực tiếp chỉ đạo Ban Giám đốc Trung tâm làm việc cật lực, học hỏi các chuỗi bán lẻ nước ngoài để ổn định tất cả các khâu từ xây dựng cửa hàng, nhập hàng đến điều chuyển hàng hóa và marketing.</li>
            <li>- <strong>Mở rộng quy mô thần tốc</strong>: Dưới sự điều hành của đồng chí, hệ thống đã cán mốc <span className="text-[#EE0033] font-bold">100 siêu thị</span> vào năm 2010 và hoàn thành độ phủ tại <span className="text-[#EE0033] font-bold">63/63 tỉnh, thành phố</span> vào tháng 8/2011.</li>
          </ul>
        </>
      )
    },
    {
      name: "Đại Úy Nguyễn Duy Tuấn",
      img: "/images/giamdoc/nguyen-duy-tuan.jpg",
      role: "Giám đốc Viettel Store",
      period: "06/2012 - 09/2014",
      description: (
        <>
          <p className="mb-2 text-[#333333]">Trong nhiệm kỳ của mình, đồng chí tập trung vào việc chuyên nghiệp hóa và mở rộng kênh bán hàng:</p>
          <ul className="space-y-2 text-[#333333]">
            <li>- <strong>Đẩy mạnh kênh Online</strong>: Bắt đầu đầu tư mạnh cho kênh bán hàng trực tuyến từ quý 2/2012, cử nhân sự chuyên trách truyền thông cho website và triển khai gian hàng trên các trang thương mại điện tử.</li>
            <li>- <strong>Cải thiện hình ảnh và dịch vụ</strong>: Triển khai chương trình nâng cao hình ảnh siêu thị "<span className="text-[#EE0033] font-bold">5S</span>", ban hành bộ tài liệu cẩm nang và tổ chức đào tạo trực tiếp cho khối siêu thị.</li>
            <li>- <strong>Tiếp nhận hệ thống cửa hàng</strong>: Chỉ đạo trực tiếp việc tiếp nhận và quản lý tài sản, trang thiết bị của hệ thống <span className="text-[#EE0033] font-bold">807 cửa hàng Viettel</span> điều chuyển từ Viettel Telecom sang.</li>
          </ul>
        </>
      )
    },
    {
      name: "Đồng chí Nguyễn Quang Vinh",
      img: "/images/giamdoc/nguyen-quang-vinh.jpg",
      role: "Quyền Giám đốc Viettel Store",
      period: "10/2014 - 01/2015 (Sau đó tiếp tục giữ chức vụ này từ tháng 11/2015)",
      description: (
        <>
          <p className="mb-2 text-[#333333]">Đồng chí đã dẫn dắt Trung tâm qua các giai đoạn chuyển dịch chiến lược quan trọng:</p>
          <ul className="space-y-2 text-[#333333]">
            <li>- <strong>Chiến lược "Rộng - Trẻ - Rẻ"</strong>: Xác định định hướng phát triển giai đoạn mới, tập trung vào việc tối ưu nhân lực trẻ và tạo lợi thế cạnh tranh về&nbsp;giá.</li>
            <li>- <strong>Vận hành mô hình BU</strong>: Kiện toàn Trung tâm Bán lẻ thành một Đơn vị kinh doanh độc lập (BU), tự chịu trách nhiệm toàn trình về hiệu quả kinh doanh và hạch toán.</li>
            <li>- <strong>Ứng dụng công nghệ</strong>: Triển khai hệ thống phần mềm quản lý <span className="text-[#EE0033] font-bold">ERP</span> trên toàn quốc và đưa ứng dụng chăm sóc khách hàng vào vận hành.</li>
            <li>- <strong>Xử lý tồn đọng</strong>: Quyết liệt trong việc xử lý dứt điểm hàng tồn xấu cũ và công nợ xấu, giúp hệ thống tài chính "sạch" hơn để phát triển bền&nbsp;vững.</li>
          </ul>
        </>
      )
    },
    {
      name: "Đồng chí Lê Quốc Tuấn",
      img: "/images/giamdoc/le-quoc-tuan.png",
      role: "Giám đốc Viettel Store",
      period: "(01/2015 - 08/2015) và giai đoạn (12/2015 - 05/2018)",
      description: (
        <>
          <ul className="space-y-2 text-[#333333]">
            <li>- <strong>Chuyển dịch cơ cấu sản phẩm</strong>: Chỉ đạo chuyển dịch từ bán máy điện thoại đơn thuần sang thiết bị viễn thông và các thiết bị thông minh (Smart Device).</li>
            <li>- <strong>Thay đổi mô hình quản lý</strong>: Chuyển đổi mô hình cấp siêu thị từ Trưởng siêu thị sang <span className="text-[#EE0033] font-bold">Giám đốc siêu thị</span> và áp dụng cơ chế khoán lương toàn diện để tăng tính chủ động.</li>
            <li>- <strong>Nâng cấp nhận diện</strong>: Hoàn thành cải tạo, nâng cấp hình ảnh cho toàn bộ hệ thống siêu thị theo nhận diện mới đồng bộ trên toàn quốc.</li>
          </ul>
        </>
      )
    },
    {
      name: "Đại Úy Phạm Thị Thanh Vân",
      img: "/images/pham-thi-van-v2.png",
      role: "Phó Giám đốc Công ty kiêm Giám đốc Trung tâm Viettel Store",
      period: "09/2015 - 11/2015",
      description: (
        <>
          <p className="text-[#333333]">- Trong thời gian ngắn kiêm nhiệm, đồng chí đã tập trung vào việc đẩy mạnh các chương trình truyền thông khuyến mại lớn, đặc biệt là chiến dịch <span className="text-[#EE0033] font-bold">"Back to School"</span> và các gói bundle dịch vụ viễn thông đi kèm thiết bị.</p>
        </>
      )
    },
    {
      name: "Thượng Tá Vũ Tam Hòa",
      img: "/images/giamdoc/vu-tam-hoa.jpg",
      role: "Giám đốc Công ty kiêm Phụ trách Trung tâm Viettel Store",
      period: "05/2018 - 09/2018",
      description: (
        <>
          <p className="mb-2 text-[#333333]">Trên cương vị Giám đốc Công ty kiêm phụ trách Trung tâm, đồng chí đã có những đóng góp trong việc thay đổi tư duy quản trị:</p>
          <ul className="space-y-2 text-[#333333]">
            <li>- <strong>Đối thoại dân chủ</strong>: Tổ chức các buổi hội thảo <span className="text-[#EE0033] font-bold">"Hội nghị Diên hồng"</span> để lắng nghe ý kiến từ nhân viên trực tiếp, tìm ra nguyên nhân yếu kém trong sản xuất kinh doanh.</li>
            <li>- <strong>Tối ưu hóa hệ thống</strong>: Kiên quyết dừng hoạt động các siêu thị lỗ kéo dài, tập trung nguồn lực để tối ưu hóa các vị trí hiện có thay vì mở rộng ồ ạt.</li>
          </ul>
        </>
      )
    },
  ];

  const getLeaderStyle = (index: number) => {
    const pos = positions.indexOf(index);
    switch (pos) {
      case 0: return { transform: 'translate3d(-130%, 220px, 0) scale(0.9)', zIndex: 10, opacity: 0.9, borderRadius: '2rem', brightness: 'brightness-90' };
      case 1: return { transform: 'translate3d(0, 0, 0) scale(1)', zIndex: 30, opacity: 1, borderRadius: '9999px', brightness: 'brightness-100' };
      case 2: return { transform: 'translate3d(130%, 220px, 0) scale(0.9)', zIndex: 10, opacity: 0.9, borderRadius: '2rem', brightness: 'brightness-90' };
      default: return {};
    }
  };

  const renderModals = () => {
    if (!mounted) return null;
    return createPortal(
      <>
        {selectedDept && (
          <div className="fixed inset-0 z-[2147483647] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300">
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('/images/diahinh.png')] bg-[length:200%_auto] bg-center mix-blend-screen"></div>
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(238,0,51,0.15) 0%, transparent 70%)' }}></div>

            <button onClick={() => { setSelectedDept(null); setDeptPopupPage(0); }} className="fixed top-6 right-6 md:top-10 md:right-10 text-white/70 hover:text-white z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full cursor-pointer transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>

            <div className="relative w-full max-w-[95vw] flex flex-col items-center">
              <div className="flex flex-col items-center mb-12">
                <h2 className="relative z-50 font-beausans font-black text-2xl md:text-4xl uppercase tracking-[0.15em] text-center" style={{ color: '#FFFFFF' }}>
                  {selectedDept.name}
                </h2>
                {deptPopupPage > 0 && selectedDept.details.extraPages[deptPopupPage - 1]?.title && (
                  <h3 className="relative z-50 font-beausans font-black text-xl md:text-3xl uppercase tracking-[0.15em] text-center mt-2" style={{ color: '#FFFFFF' }}>
                    {selectedDept.details.extraPages[deptPopupPage - 1].title}
                  </h3>
                )}
              </div>

              {deptPopupPage === 0 ? (
                selectedDept.details.useStaggeredOnMain ? (
                  <div className="w-full flex flex-col items-center justify-center px-4 md:px-10 animate-in fade-in zoom-in-95 duration-500">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-7xl">
                      {selectedDept.details.mainItems.map((item: any, idx: number) => {
                        const isWide = idx === 0 || idx === 4;
                        return (
                          <div
                            key={idx}
                            className={`flex flex-col items-center group w-full animate-in fade-in slide-in-from-bottom-8 duration-700 ${isWide ? "md:col-span-2" : "md:col-span-1"}`}
                            style={{
                              animationDelay: `${idx * 100}ms`,
                              transform: `scale(${item.scale || 1})`
                            }}
                          >
                            <div
                              className="relative w-full rounded-2xl overflow-hidden shadow-xl border-2 border-white/40 group-hover:border-[#EE0033] transition-all duration-500 bg-white/10"
                              style={{ height: '280px' }}
                            >
                              <Image
                                src={item.img || "/images/logo-viettel-store.png"}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                style={{ objectPosition: item.objectPosition || "center" }}
                                alt={item.name || "party image"}
                                unoptimized
                                priority
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div className={`w-full flex flex-col md:flex-row md:items-stretch justify-center ${popupConfig.gap} px-4 md:px-10 animate-in fade-in slide-in-from-right-8 duration-500`}>
                    {/* Trưởng phòng - chỉ hiển thị khi có ảnh thực */}
                    {!selectedDept.details.leader.img.includes('logo-viettel-store') && (
                      <div
                        className={`flex flex-col items-center group w-full shrink-0 ${popupConfig.leader.translateX}`}
                        style={{ maxWidth: popupConfig.leader.containerMaxWidth }}
                      >
                        <div
                          className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl border-2 border-white/80 group-hover:border-[#EE0033] transition-all duration-500"
                          style={{ height: popupConfig.leader.height, minHeight: popupConfig.leader.height }}
                        >
                          <Image
                            src={selectedDept.details.leader.img}
                            fill
                            className="object-cover"
                            alt="leader"
                            priority
                            unoptimized
                            onError={(e) => e.currentTarget.src = "/images/logo-viettel-store.png"}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                        <div className="mt-8 text-center h-[80px] flex flex-col justify-start">
                          <h4 className="text-[#FFFFFF] font-bold text-lg md:text-xl tracking-tight mb-1">{selectedDept.details.leader.name}</h4>
                          <p className="text-gray-200 font-roboto text-xs md:text-sm leading-tight">{selectedDept.details.leader.role}</p>
                        </div>
                      </div>
                    )}

                    {/* Tập thể - Ở giữa */}
                    <div
                      className="flex flex-col items-center group w-full shrink-0 scale-100 z-10"
                      style={{ maxWidth: popupConfig.group.containerMaxWidth }}
                    >
                      <div
                        className="relative shrink-0 rounded-[2rem] overflow-hidden shadow-[0_0_80px_rgba(238,0,51,0.2)] border-4 border-white transition-all duration-500 bg-white/5"
                        style={{
                          width: popupConfig.group.width,
                          height: popupConfig.group.height,
                          minHeight: popupConfig.group.height,
                        }}
                      >
                        <Image
                          src={selectedDept.details.group.img || "/images/logo-viettel-store.png"}
                          fill
                          className="object-cover"
                          style={{ objectPosition: "center" }}
                          alt="group"
                          priority
                          unoptimized
                        />
                      </div>

                      <div className="mt-8 text-center w-full h-[80px] flex flex-col justify-start">
                        <h4 className="text-[#FFFFFF] font-black text-xl md:text-2xl tracking-tight mb-2 leading-tight drop-shadow-md">
                          {selectedDept.details.group.name}
                        </h4>
                        {selectedDept.details.group.subName && (
                          <p className="text-white/80 font-bold text-sm md:text-base tracking-wider drop-shadow-sm">
                            {selectedDept.details.group.subName}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Phó phòng */}
                    {selectedDept.details.deputies && selectedDept.details.deputies.length > 0 && (
                      <div className="flex flex-col gap-6 shrink-0" style={{ width: popupConfig.deputy.containerMaxWidth, maxWidth: popupConfig.deputy.containerMaxWidth }}>
                        {selectedDept.details.deputies.map((deputy: any, index: number) => {
                          const isTwoDeputies = selectedDept.details.deputies.length === 2;
                          return (
                            <div
                              key={index}
                              className={`flex flex-col items-center group w-full shrink-0 ${popupConfig.deputy.translateX}`}
                              style={{ maxWidth: popupConfig.deputy.containerMaxWidth }}
                            >
                              <div
                                className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl border-2 border-white/80 group-hover:border-[#EE0033] transition-all duration-500"
                                style={{ height: isTwoDeputies ? "210px" : popupConfig.deputy.height }}
                              >
                                <Image
                                  src={deputy.img}
                                  fill
                                  className="object-cover"
                                  style={{ objectPosition: deputy.objectPosition || "center" }}
                                  alt="deputy"
                                  priority
                                  unoptimized
                                  onError={(e) => e.currentTarget.src = "/images/logo-viettel-store.png"}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                              </div>
                              <div className={`mt-8 text-center ${isTwoDeputies ? "h-auto" : "h-[80px] flex flex-col justify-start"}`}>
                                <h4 className={`text-[#FFFFFF] font-bold tracking-tight mb-0.5 ${isTwoDeputies ? "text-sm" : "text-lg md:text-xl"}`}>
                                  {deputy.name}
                                </h4>
                                <p className={`text-gray-200 font-roboto leading-tight ${isTwoDeputies ? "text-[10px]" : "text-xs md:text-sm"}`}>
                                  {deputy.role}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )
              ) : (
                <div className="w-full flex flex-col items-center justify-center px-4 md:px-10 animate-in fade-in zoom-in-95 duration-500">
                  {/* Extra Pages Rendering */}
                  {selectedDept.details.extraPages[deptPopupPage - 1]?.layout === "page2-special" ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl md:h-[450px] mx-auto">
                      {/* Left side: Image 7 (Narrower) */}
                      <div className="md:col-span-1 relative rounded-2xl overflow-hidden border-2 border-white/40 shadow-xl h-[400px] md:h-full bg-white/10">
                        <Image
                          src={selectedDept.details.extraPages[deptPopupPage - 1].items[0].img}
                          fill
                          className="object-cover"
                          style={{ objectPosition: selectedDept.details.extraPages[deptPopupPage - 1].items[0].objectPosition || "center" }}
                          alt="anh 7"
                          unoptimized
                          priority
                        />
                      </div>

                      {/* Right side: Nested Grid (Wider) */}
                      <div className="md:col-span-2 grid grid-rows-2 gap-6 h-auto md:h-full">
                        {/* Top row: 8 and 9 */}
                        <div className="grid grid-cols-2 gap-6 h-[200px] md:h-full">
                          <div className="relative rounded-2xl overflow-hidden border-2 border-white/40 shadow-xl bg-white/10 h-full">
                            <Image
                              src={selectedDept.details.extraPages[deptPopupPage - 1].items[1].img}
                              fill
                              className="object-cover"
                              alt="anh 8"
                              unoptimized
                            />
                          </div>
                          <div className="relative rounded-2xl overflow-hidden border-2 border-white/40 shadow-xl bg-white/10 h-full">
                            <Image
                              src={selectedDept.details.extraPages[deptPopupPage - 1].items[2].img}
                              fill
                              className="object-cover"
                              alt="anh 9"
                              unoptimized
                            />
                          </div>
                        </div>
                        {/* Bottom row: 10 */}
                        <div className="relative rounded-2xl overflow-hidden border-2 border-white/40 shadow-xl bg-white/10 h-[200px] md:h-full">
                          <Image
                            src={selectedDept.details.extraPages[deptPopupPage - 1].items[3].img}
                            fill
                            className="object-cover"
                            alt="anh 10"
                            unoptimized
                          />
                        </div>
                      </div>
                    </div>
                  ) : selectedDept.details.extraPages[deptPopupPage - 1]?.layout === "staggered" ? (
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-7xl">
                      {selectedDept.details.extraPages[deptPopupPage - 1]?.items.map((item: any, idx: number) => {
                        const isWide = idx === 0 || idx === 4;
                        return (
                          <div
                            key={idx}
                            className={`flex flex-col items-center group w-full animate-in fade-in slide-in-from-bottom-8 duration-700 ${isWide ? "md:col-span-2" : "md:col-span-1"}`}
                            style={{ animationDelay: `${idx * 100}ms` }}
                          >
                            <div
                              className="relative w-full rounded-2xl overflow-hidden shadow-xl border-2 border-white/40 group-hover:border-[#EE0033] transition-all duration-500 h-[280px] md:h-[280px]"
                            >
                              <Image
                                src={item.img || "/images/logo-viettel-store.png"}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                alt={item.name || ""}
                                unoptimized
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            {item.name && (
                              <div className="mt-4 text-center">
                                <h4 className="text-[#FFFFFF] font-bold text-base md:text-lg tracking-tight drop-shadow-md">{item.name}</h4>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full max-w-7xl">
                      {selectedDept.details.extraPages[deptPopupPage - 1]?.items.map((item: any, idx: number) => (
                        <div
                          key={idx}
                          className="flex flex-col items-center group w-full shrink-0 animate-in fade-in slide-in-from-bottom-8 duration-700"
                          style={{ maxWidth: popupConfig.leader.containerMaxWidth, animationDelay: `${idx * 150}ms` }}
                        >
                          <div
                            className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl border-2 border-white/80 group-hover:border-[#EE0033] transition-all duration-500"
                            style={{ height: popupConfig.leader.height, minHeight: popupConfig.leader.height }}
                          >
                            <Image
                              src={item.img || "/images/logo-viettel-store.png"}
                              fill
                              className="object-cover transition-transform duration-1000 group-hover:scale-110"
                              alt={item.name || ""}
                              unoptimized
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          </div>
                          <div className="mt-8 text-center h-[100px] flex flex-col justify-start">
                            <h4 className="text-[#FFFFFF] font-bold text-lg md:text-xl tracking-tight mb-1 drop-shadow-md">{item.name}</h4>
                            <p className="text-gray-200 font-roboto text-xs md:text-sm leading-tight">{item.role}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Show navigation buttons if extraPages exist */}
              {selectedDept.details.extraPages && selectedDept.details.extraPages.length > 0 && (
                <div className="flex gap-12 mt-16">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const totalPages = 1 + selectedDept.details.extraPages.length;
                      setDeptPopupPage(prev => (prev - 1 + totalPages) % totalPages);
                    }}
                    className="text-white/40 hover:text-white transition-all transform hover:scale-125 active:scale-95"
                  >
                    <ChevronLeft size={48} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const totalPages = 1 + selectedDept.details.extraPages.length;
                      setDeptPopupPage(prev => (prev + 1) % totalPages);
                    }}
                    className="text-white/40 hover:text-white transition-all transform hover:scale-125 active:scale-95"
                  >
                    <ChevronRight size={48} />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {selectedDirector && (
          <div className="fixed inset-0 z-[2147483647] flex items-center justify-center p-4 animate-in fade-in zoom-in-95 duration-300">
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedDirector(null)}></div>
            <div className="relative bg-white w-full max-w-4xl rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[450px]">
              <button onClick={() => setSelectedDirector(null)} className="absolute right-6 top-6 z-10 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg></button>
              <div className="w-full md:w-2/5 p-8 flex items-center justify-center">
                <div className="relative w-full aspect-[4/5] rounded-[40px] overflow-hidden shadow-lg"><Image src={selectedDirector.img} fill className="object-cover object-top" alt="director" priority /></div>
              </div>
              <div className="p-8 md:pl-0 md:pr-12 flex-1 flex flex-col justify-center">
                <div className="mb-6 font-beausans">
                  <h2 className="text-[#1A1A1A] font-black text-3xl md:text-4xl mb-2 uppercase leading-tight tracking-tight">{selectedDirector.name}</h2>
                  <p className="text-[#333333] font-roboto font-bold text-base md:text-lg mb-1 leading-tight">{selectedDirector.role}</p>
                  <p className="text-[#666666] font-roboto font-bold text-sm mb-4">{selectedDirector.period}</p>
                  <div className="w-14 h-1.5 bg-[#EE0033]"></div>
                </div>
                <div className="flex-1 overflow-y-auto max-h-[350px] pr-4 text-[#333333] font-roboto text-base md:text-[1.05rem] leading-relaxed scrollbar-thin text-pretty">
                  <div className="whitespace-pre-line space-y-4">
                    {selectedDirector.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {selectedBranch && (
          <div className="fixed inset-0 z-[2147483647] bg-black flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300">
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('/images/diahinh.png')] bg-[length:200%_auto] bg-center mix-blend-screen"></div>
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(238,0,51,0.15) 0%, transparent 70%)' }}></div>

            <button onClick={() => setSelectedBranch(null)} className="fixed top-6 right-6 md:top-10 md:right-10 text-white/70 hover:text-white z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full cursor-pointer transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>

            <div className="relative w-full max-w-7xl flex flex-col items-center">
              <h2 className="relative z-50 font-beausans font-black text-2xl md:text-4xl uppercase mb-32 tracking-[0.15em] text-center" style={{ color: '#FFFFFF' }}>
                {selectedBranch.name}
              </h2>

              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-end">
                <div className="flex flex-col items-center group">
                  <div className="relative w-full aspect-[3/4] max-w-[280px] rounded-[2rem] overflow-hidden shadow-2xl border-2 border-white/10 group-hover:border-[#EE0033]/50 transition-all duration-500">
                    <Image src={selectedBranch.details.leader.img} fill className="object-cover" alt="leader" onError={(e) => e.currentTarget.src = "/images/logo-viettel-store.png"} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="mt-6 text-center">
                    <h4 className="text-[#FFFFFF] font-bold text-lg md:text-xl uppercase tracking-tight mb-1">{selectedBranch.details.leader.name}</h4>
                    <p className="text-gray-400 font-roboto text-xs md:text-sm italic leading-tight">{selectedBranch.details.leader.role}</p>
                  </div>
                </div>

                <div className="flex flex-col items-center group order-first md:order-none">
                  <div className="relative w-full aspect-[16/10] rounded-[40px] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border-4 border-white/20 group-hover:border-white/40 transition-all duration-500">
                    <Image
                      src={selectedBranch.details.group.img}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-1000"
                      alt="group"
                      priority
                      onError={(e) => e.currentTarget.src = "/images/logo-viettel-store.png"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex flex-col justify-end p-6 md:p-10">
                      <p className="text-[#FFFFFF] font-beausans font-bold text-sm md:text-base opacity-70 mb-1">{selectedBranch.details.group.subName}</p>
                      <h3 className="text-[#FFFFFF] font-beausans font-black text-xl md:text-3xl uppercase tracking-tight leading-tight">{selectedBranch.details.group.name}</h3>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center group">
                  <div className="relative w-full aspect-[3/4] max-w-[280px] rounded-[2rem] overflow-hidden shadow-2xl border-2 border-white/10 group-hover:border-[#EE0033]/50 transition-all duration-500">
                    <Image src={selectedBranch.details.deputy.img} fill className="object-cover" alt="deputy" onError={(e) => e.currentTarget.src = "/images/logo-viettel-store.png"} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="mt-6 text-center">
                    <h4 className="text-[#FFFFFF] font-bold text-lg md:text-xl uppercase tracking-tight mb-1">{selectedBranch.details.deputy.name}</h4>
                    <p className="text-gray-400 font-roboto text-xs md:text-sm italic leading-tight">{selectedBranch.details.deputy.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>,
      document.body
    );
  };

  return (
    <>
      {renderModals()}

      <div className={`min-h-screen flex flex-col font-beausans bg-[#F2F2F2] overflow-x-hidden relative z-0 transition-all duration-700 ${isAnyModalOpen ? 'opacity-30 blur-[8px] scale-[0.98]' : 'opacity-100 blur-0 scale-100'}`} style={{ paddingTop: '80px' }}>
        <div className="absolute top-0 left-0 right-0 z-0 pointer-events-none opacity-[0.03]">
          <div className="w-full h-[1000px] bg-[url('/images/diahinh.png')] bg-cover bg-center"></div>
        </div>

        <div className="relative z-10 w-full pt-0">
          {/* Section: BAN GIÁM ĐỐC */}
          <section ref={leadersSectionRef} className="mb-24 w-full relative pt-24 md:pt-32 pb-0">
            <div className="container mx-auto max-w-7xl px-4 lg:px-8 mb-16 relative z-10">
              <h2 className="text-[#262626] font-black text-4xl md:text-5xl uppercase tracking-tighter text-left">BAN GIÁM ĐỐC</h2>
            </div>
            <div className="w-full mx-auto px-4 relative h-[500px] md:h-[570px] flex items-start justify-center">
              {leaders.map((leader, index) => {
                const style = getLeaderStyle(index);
                const isCenter = positions.indexOf(index) === 1;
                const pos = positions.indexOf(index);
                return (
                  <div key={index} className="absolute transition-all duration-[1500ms] cursor-pointer flex flex-col items-center" style={{ transform: style.transform, zIndex: style.zIndex, opacity: style.opacity, width: isCenter ? '400px' : '340px', top: '20px', transition: 'all 1500ms cubic-bezier(0.25, 1, 0.5, 1)' }} onClick={() => { if (!isCenter) rotateLeaders(pos === 0 ? 'cw' : 'ccw'); }}>

                    <div className={`relative aspect-square overflow-hidden shadow-2xl transition-all duration-[1500ms] ${style.brightness}`} style={{ borderRadius: style.borderRadius, width: '100%', backgroundColor: '#fff', padding: '0', borderWidth: isCenter ? '6px' : '2px', borderStyle: 'solid', borderColor: isCenter ? '#EE0033' : 'rgba(0,0,0,0.05)', boxShadow: isCenter ? '0 15px 45px rgba(238,0,51,0.2)' : 'none', transition: 'all 1500ms cubic-bezier(0.25, 1, 0.5, 1)' }}>
                      <div className="w-full h-full relative overflow-hidden transition-all duration-[1500ms]" style={{ borderRadius: style.borderRadius, transition: 'all 1500ms cubic-bezier(0.25, 1, 0.5, 1)' }}>
                        <Image
                          src={leader.img}
                          alt={leader.name}
                          fill
                          className="object-cover transform transition-all duration-[1500ms]"
                          style={{
                            transition: 'all 1500ms cubic-bezier(0.25, 1, 0.5, 1)',
                            objectPosition: leader.objectPosition || 'top',
                            transform: `scale(${leader.scale || 1.8})`
                          }}
                          onError={(e) => e.currentTarget.src = "/images/logo-viettel-store.png"}
                        />
                      </div>
                    </div>
                    <div className={`text-center px-4 max-w-[600px] mx-auto mt-10 transition-all duration-1000 ${isCenter ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-50'}`}>
                      <h3 className="text-xl md:text-4xl font-black text-[#262626] uppercase mb-2 tracking-tighter leading-tight whitespace-pre-line">{leader.name}</h3>
                      <p className="text-[12px] md:text-[18px] text-gray-600 font-roboto font-bold tracking-tight leading-relaxed whitespace-pre-line">{leader.role}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Section: GIÁM ĐỐC CÁC THỜI KÌ */}
          <section className="mb-32 container mx-auto px-4 max-w-5xl" style={{ marginTop: '200px' }}>
            <h2 className="text-gray-700 font-black text-3xl md:text-4xl uppercase mb-12 tracking-tight text-left">GIÁM ĐỐC CÁC THỜI KÌ</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
              {formerDirectorsData.map((director, idx) => (
                <div key={idx} className="group flex flex-col bg-white shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer hover:-translate-y-2 rounded-2xl overflow-hidden" onClick={() => setSelectedDirector(director)}>
                  <div className="relative w-full aspect-[4/5] bg-white overflow-hidden">
                    <Image src={director.img} alt={director.name} fill className="object-cover object-top transition-transform duration-1000 group-hover:scale-110" onError={(e) => e.currentTarget.src = "/images/logo-viettel-store.png"} />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                  </div>
                  <div className="bg-[#D9D9D9] group-hover:bg-[#EE0033] p-4 text-center min-h-[4.5rem] flex flex-col items-center justify-center transition-colors duration-500">
                    <h4 className="text-[10px] sm:text-xs md:text-sm font-bold text-black group-hover:text-white uppercase tracking-tight transition-colors duration-500">{director.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: VINH DANH NHÂN SỰ CỐNG HIẾN LÂU NĂM */}
          <section className="py-24 bg-black relative w-full overflow-hidden">
            <div className="absolute inset-0 opacity-20 mix-blend-screen bg-[url('/images/diahinh.png')] bg-cover bg-center"></div>
            <div className="absolute inset-0 pointer-events-none z-0" style={{ background: 'radial-gradient(ellipse 60% 50% at center, rgba(238,0,51,0.4) 0%, rgba(0,0,0,0) 100%)' }}></div>
            <div className="container mx-auto px-4 relative z-10 max-w-6xl">
              <h2 className="text-white font-beausans font-black text-2xl md:text-4xl uppercase mb-16 text-center tracking-wide">VINH DANH NHÂN SỰ CỐNG HIẾN LÂU NĂM</h2>
              <div className="relative overflow-hidden px-4 py-8">
                <div className="flex gap-4 md:gap-8 transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${vdIndex * (100 / 4)}%)` }}>
                  {longService.map((person, idx) => {
                    const isFlipped = selectedHonoree === idx;
                    return (
                      <div key={idx} onClick={() => setSelectedHonoree(isFlipped ? null : idx)} className="w-[calc(100%/1-1rem)] sm:w-[calc(100%/2-1.5rem)] md:w-[calc(100%/3-2rem)] lg:w-[calc(100%/4-2rem)] h-96 md:h-[480px] shrink-0 relative group transition-all duration-500 cursor-pointer" style={{ opacity: (idx >= vdIndex && idx < vdIndex + 4) ? 1 : 0.4, scale: (idx >= vdIndex && idx < vdIndex + 4) ? '1' : '0.9', perspective: '1500px' }}>
                        <div className="w-full h-full relative transition-all duration-1000" style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
                          <div className="absolute inset-0 w-full h-full z-20 rounded-[40px] overflow-hidden shadow-2xl bg-transparent" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
                            <Image src={person.img} fill className="object-cover transition-transform duration-1000 group-hover:scale-105 rounded-[40px]" alt={person.name} onError={(e) => e.currentTarget.src = "/images/logo-viettel-store.png"} />
                            <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 flex items-end p-6 ${isFlipped ? 'opacity-0' : 'opacity-100'}`}><p className="text-white font-beausans font-black text-lg md:text-xl uppercase tracking-tight leading-tight drop-shadow-md">{person.name}</p></div>
                          </div>
                          <div className="absolute inset-0 w-full h-full z-10 rounded-[40px] overflow-hidden shadow-2xl bg-[#EE0033] flex flex-col items-center justify-center p-6 text-center border-4 border-white/20" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                            <div className="absolute inset-0 opacity-15 bg-[url('/images/diahinh.png')] bg-cover bg-center"></div>
                            <div className="relative z-10 flex flex-col h-full w-full justify-between py-2">
                              <div className="flex flex-col items-center shrink-0">
                                <div className="w-14 h-14 md:w-16 md:h-16 relative rounded-full overflow-hidden border-2 border-white mb-2 shadow-md"><Image src={person.img} fill className="object-cover" alt={person.name} /></div>
                                <h2 className="text-white text-2xl md:text-4xl font-beausans font-black mb-1 drop-shadow-lg uppercase tracking-tighter leading-none">{person.years} NĂM</h2>
                                <p className="text-white/90 text-[10px] md:text-xs font-beausans font-bold">cống hiến</p>
                              </div>
                              <div className="my-auto flex flex-col justify-center py-2">
                                <p className="text-white/80 text-[10px] md:text-xs font-beausans font-bold mb-1 tracking-widest">Đồng chí</p>
                                <h3 className="text-white text-lg md:text-2xl font-beausans font-black mb-2 uppercase leading-tight drop-shadow-md tracking-tighter">{person.name.replace('ĐỒNG CHÍ ', '')}</h3>
                                <div className="w-8 h-1 bg-white/30 mx-auto mb-2"></div>
                                <p className="text-white text-[11px] md:text-sm font-beausans font-black tracking-tight px-2 leading-tight">{person.dept}</p>
                              </div>
                              <div className="shrink-0"><p className="text-white/80 text-[10px] md:text-xs font-roboto font-medium">Ngày gia nhập: {person.date}</p></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex justify-center gap-16 mt-12 text-white pb-8">
                <button onClick={handleVdPrev} className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white transition-all active:scale-95"><ChevronLeft /></button>
                <button onClick={handleVdNext} className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white transition-all active:scale-95"><ChevronRight /></button>
              </div>
            </div>
          </section>

          {/* Section: CÁC PHÒNG/KÊNH */}
          <section className="py-24 bg-[#F2F2F2] relative w-full overflow-hidden">
            <div className="container mx-auto px-4 relative z-10 max-w-[1500px]">
              <h2 className="text-[#4A4A4A] font-beausans font-black text-4xl md:text-5xl uppercase mb-16 text-center tracking-tight">CÁC PHÒNG/KÊNH</h2>

              <div className="flex items-center justify-center gap-4 md:gap-12 w-full max-w-[1700px] mx-auto relative px-4">
                {/* Left Arrow - Circle shape fixed */}
                <button
                  onClick={() => setActiveDeptPage(p => Math.max(0, p - 1))}
                  className="shrink-0 w-12 h-12 md:w-20 md:h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl border border-white/50 hover:bg-[#EE0033] group transition-all duration-500 z-30"
                >
                  <ChevronLeft size={32} className="text-gray-800 group-hover:text-white transition-colors duration-500" />
                </button>

                {/* 2x2 Grid Container - Center flex-1 with Slide Effect */}
                <div className="flex-1 relative overflow-hidden py-4">
                  <div
                    className="flex transition-transform duration-1000 ease-in-out"
                    style={{ transform: `translateX(-${activeDeptPage * 100}%)` }}
                  >
                    {/* Group departments into pages of 4 */}
                    {Array.from({ length: Math.ceil(departments.length / 4) }).map((_, pageIdx) => (
                      <div key={pageIdx} className="w-full shrink-0 px-1 md:px-2">
                        <div className="grid grid-cols-2 gap-4 md:gap-4 w-full">
                          {departments.slice(pageIdx * 4, pageIdx * 4 + 4).map((dept, idx) => (
                            <div
                              key={idx}
                              className="relative w-full rounded-[32px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] group cursor-pointer transition-all duration-500 hover:-translate-y-2"
                              style={{ aspectRatio: '4/3' }}
                              onClick={() => setSelectedDept(dept)}
                            >
                              <Image
                                src={dept.img}
                                fill
                                className="transition-transform duration-1000 group-hover:scale-105"
                                style={{
                                  objectFit: 'cover',
                                  objectPosition: dept.gridObjectPosition || 'center center',
                                  transform: dept.name.includes('Kế hoạch') ? 'scale(1.1)' : 'none'
                                }}
                                alt={dept.name}
                                priority={pageIdx === 0}
                                unoptimized
                                quality={100}
                                onError={(e) => e.currentTarget.src = "/images/logo-viettel-store.png"}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex items-end p-6 md:p-8">
                                <div className="text-white">
                                  <h3 className="text-lg md:text-xl font-bold leading-tight drop-shadow-md">
                                    {dept.name}
                                  </h3>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Arrow - Circle shape fixed */}
                <button
                  onClick={() => setActiveDeptPage(p => (p + 1) * 4 < departments.length ? p + 1 : p)}
                  className="shrink-0 w-12 h-12 md:w-20 md:h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl border border-white/50 hover:bg-[#EE0033] group transition-all duration-500 z-30"
                >
                  <ChevronRight size={32} className="text-gray-800 group-hover:text-white transition-colors duration-500" />
                </button>
              </div>
            </div>
          </section>

          {/* Section: CHI NHÁNH BÁN LẺ KHU VỰC PHÍA NAM */}
          <section className="py-24 bg-[#F2F2F2] relative w-full overflow-hidden">
            <div className="container mx-auto px-4 relative z-10 max-w-[1500px]">
              <h2 className="text-[#4A4A4A] font-beausans font-black text-4xl md:text-5xl uppercase mb-16 text-center tracking-tight">CHI NHÁNH BÁN LẺ KHU VỰC PHÍA NAM</h2>

              <div className="flex items-center justify-center gap-4 md:gap-12 w-full max-w-[1700px] mx-auto relative px-4">
                {/* Left Arrow */}
                <button
                  onClick={() => setActiveBranchPage(p => Math.max(0, p - 1))}
                  className="shrink-0 w-12 h-12 md:w-20 md:h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl border border-white/50 hover:bg-[#EE0033] group transition-all duration-500 z-30"
                >
                  <ChevronLeft size={32} className="text-gray-800 group-hover:text-white transition-colors duration-500" />
                </button>

                {/* 2x2 Grid Container with Slide Effect */}
                <div className="flex-1 relative overflow-hidden py-4">
                  <div
                    className="flex transition-transform duration-1000 ease-in-out"
                    style={{ transform: `translateX(-${activeBranchPage * 100}%)` }}
                  >
                    {Array.from({ length: Math.ceil(branches.length / 4) }).map((_, pageIdx) => (
                      <div key={pageIdx} className="w-full shrink-0 px-1 md:px-2">
                        <div className="grid grid-cols-2 gap-4 md:gap-4 w-full">
                          {branches.slice(pageIdx * 4, pageIdx * 4 + 4).map((branch, idx) => (
                            <div
                              key={idx}
                              className="relative w-full shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] bg-transparent group cursor-pointer transition-all duration-500 hover:-translate-y-2 border-0 outline-none isolate"
                              style={{
                                aspectRatio: '4/3',
                                clipPath: 'inset(0 round 40px)',
                                WebkitClipPath: 'inset(0 round 40px)'
                              }}
                              onClick={() => setSelectedBranch(branch)}
                            >
                              <div className="absolute inset-0 overflow-hidden" style={{ transform: 'translateZ(0)' }}>
                                <Image
                                  src={branch.img}
                                  fill
                                  className="object-cover scale-[1.01] transition-transform duration-1000 group-hover:scale-110"
                                  style={{ objectPosition: 'center' }}
                                  alt={branch.name}
                                  unoptimized
                                  quality={100}
                                  onError={(e) => e.currentTarget.src = "/images/logo-viettel-store.png"}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-8 md:p-12">
                                  {!branch.hasTextOnImage && (
                                    <div className="text-white">
                                      <h3 className="text-xl md:text-2xl font-bold leading-tight drop-shadow-md">
                                        {branch.name}
                                      </h3>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Arrow */}
                <button
                  onClick={() => setActiveBranchPage(p => (p + 1) * 4 < branches.length ? p + 1 : p)}
                  className="shrink-0 w-12 h-12 md:w-20 md:h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl border border-white/50 hover:bg-[#EE0033] group transition-all duration-500 z-30"
                >
                  <ChevronRight size={32} className="text-gray-800 group-hover:text-white transition-colors duration-500" />
                </button>
              </div>
            </div>
          </section>

          {/* Section: HỆ THỐNG SIÊU THỊ/CỬA HÀNG */}
          <section id="store-system" className="relative z-10 w-full overflow-hidden bg-black pt-16 pb-40 min-h-[1000px]">
            {/* Background Topographic Lines */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: "url('/images/provinces/background_hethongsieuthi.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />

            <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 text-center">
              <h2 className="text-white font-beausans font-black text-2xl md:text-4xl uppercase tracking-[0.15em] mt-0 mb-32 drop-shadow-2xl">
                HỆ THỐNG SIÊU THỊ/CỬA HÀNG
              </h2>

              {/* Carousel cards wrapper */}
              <div className="relative mx-auto w-full overflow-visible mb-20">
                <div className="relative flex h-[450px] md:h-[600px] items-start justify-center overflow-visible">
                  {[-3, -2, -1, 0, 1, 2, 3].map((offset) => {
                    const idx = (activeProvince + offset + provinces.length) % provinces.length;
                    const prov = provinces[idx];
                    const abs = Math.abs(offset);
                    const isCenter = offset === 0;

                    // Precision Arc Math to match screenshot
                    const translateX = offset * popupConfig.carousel.spacing;
                    const translateY = abs * 45 + (abs * abs * 20);
                    const rotate = offset * 12;
                    const scale = isCenter ? popupConfig.carousel.centerScale : 1 - (abs * 0.1);

                    return (
                      <div
                        key={`province-${idx}`}
                        onClick={() => {
                          if (isCenter) {
                            setSelectedProvince(prov);
                          } else {
                            setActiveProvince(idx);
                          }
                        }}
                        className={`
                          absolute left-1/2
                          bg-[#EE0033]
                          cursor-pointer
                          flex items-center justify-center
                          overflow-hidden
                          flex-shrink-0
                          shadow-[0_40px_100px_rgba(0,0,0,0.6)]
                        `}
                        style={{
                          transform: `translate3d(calc(-50% + ${translateX}px), ${translateY}px, 0) rotate(${rotate}deg) skewX(${-offset * 2}deg) scale(${scale})`,
                          opacity: 1 - (abs * 0.15),
                          zIndex: 50 - abs,
                          width: popupConfig.carousel.cardWidth,
                          height: popupConfig.carousel.cardHeight,
                          borderRadius: popupConfig.carousel.cardBorderRadius,
                          transition: "all 1500ms cubic-bezier(0.25, 1, 0.5, 1)",
                          willChange: "transform, opacity"
                        }}
                      >
                        <div className="relative w-full h-full flex flex-col items-center justify-center">
                          {/* Map Image - As is, no filters */}
                          <img
                            src={isCenter ? (prov.mapWithText || prov.map) : prov.map}
                            alt={prov.name}
                            className={`absolute w-[90%] h-[90%] object-contain pointer-events-none transition-all duration-1500 ${isCenter ? "opacity-100 scale-110" : "opacity-100 scale-90"}`}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Province name + arrows */}
              <div
                className="relative z-[200] flex justify-center"
                style={{ marginTop: "-110px", paddingBottom: "80px" }}
              >
                <div className="relative w-[600px] md:w-[900px] h-[80px] flex items-center justify-center text-white">

                  {/* LEFT - FIXED */}
                  <button
                    onClick={prevProvince}
                    className="absolute left-0 text-4xl md:text-5xl font-light hover:text-[#EE0033] transition-colors active:scale-90"
                  >
                    &lt;
                  </button>

                  {/* Province Name */}
                  <div className="w-[300px] md:w-[600px] flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    <span className="text-white font-beausans font-black text-2xl md:text-4xl uppercase tracking-[0.2em]">
                      {provinces[activeProvince].name}
                    </span>
                    <div className="h-1 w-24 bg-[#EE0033] mt-2 rounded-full"></div>
                  </div>

                  <button
                    onClick={nextProvince}
                    className="absolute right-0 text-4xl md:text-5xl font-light hover:text-[#EE0033] transition-colors active:scale-90"
                  >
                    &gt;
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Selected Province Modal */}
      {/* New Premium Popup Modal */}
      {selectedProvince && (
        <div
          style={{
            backgroundColor: '#050505',
            backgroundImage: 'url("/images/provinces/background_hethongsieuthi.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          className="fixed inset-0 z-[2147483647] flex flex-col items-center justify-around py-16 px-4"
        >
          {/* Artistic Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Dark Overlay for legibility */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Center Spotlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-white/[0.03] rounded-full blur-[120px]"></div>

            {/* Red Accent Glows */}
            <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-[#EE0033]/[0.07] rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-[20%] -right-[10%] w-[800px] h-[800px] bg-[#EE0033]/[0.05] rounded-full blur-[120px]"></div>

            {/* Fine Texture/Noise */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
          </div>

          {/* Top Title Section */}
          <div className="relative z-50 w-full text-center mb-12 md:mb-24">
            <h2 className="font-beausans font-black text-3xl md:text-6xl uppercase tracking-[0.1em]" style={{ color: '#FFFFFF' }}>
              {selectedProvince.stores && selectedProvince.stores[activeStoreIndex].id.includes('CH')
                ? `TẬP THỂ CÁC CỬA HÀNG TẠI TỈNH ${selectedProvince.name}`
                : `TẬP THỂ CÁC SIÊU THỊ TẠI TỈNH ${selectedProvince.name}`}
            </h2>
          </div>

          {/* Center Content Group (Image + Caption) */}
          <div className="flex-1 flex flex-col items-center justify-center gap-y-12 md:gap-y-20 w-full animate-in fade-in zoom-in-90 duration-1000 delay-200">
            {/* Center Image Section */}
            <div className="relative w-full max-w-[1400px] h-[600px] rounded-[2rem] overflow-hidden isolation-isolate transform translate-z-0 flex items-center justify-center -mt-8 md:-mt-16">
              {/* Navigation Arrows */}
              {selectedProvince.stores && selectedProvince.stores.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); setSlideDirection(-1); setActiveStoreIndex(prev => (prev - 1 + selectedProvince.stores.length) % selectedProvince.stores.length); }}
                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-[#EE0033] transition-all transform hover:scale-110 p-2"
                  >
                    <ChevronLeft size={70} strokeWidth={2.5} />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); setSlideDirection(1); setActiveStoreIndex(prev => (prev + 1) % selectedProvince.stores.length); }}
                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-[#EE0033] transition-all transform hover:scale-110 p-2"
                  >
                    <ChevronRight size={70} strokeWidth={2.5} />
                  </button>
                </>
              )}

              {/* Main Image Frame */}
              <div
                style={{ height: '600px', maxWidth: '1100px', borderRadius: '2rem', overflow: 'hidden', position: 'relative' }}
                className="w-full shadow-[0_0_120px_rgba(0,0,0,0.8)] border border-white/5 bg-black/40 group flex items-center justify-center isolation-isolate"
              >
                {/* Blurred Background Layer */}
                <AnimatePresence initial={false} custom={slideDirection}>
                  <motion.img
                    key={`blur-${activeStoreIndex}`}
                    src={selectedProvince.stores ? encodeURI(selectedProvince.stores[activeStoreIndex].img) : "/images/logo-viettel-store.png"}
                    alt=""
                    custom={slideDirection}
                    variants={{
                      enter: (direction: number) => ({ opacity: 0, x: direction > 0 ? 500 : -500 }),
                      center: { opacity: 0.4, x: 0 },
                      exit: (direction: number) => ({ opacity: 0, x: direction < 0 ? 500 : -500 })
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    style={{ borderRadius: '2rem', objectPosition: selectedProvince.stores[activeStoreIndex].objectPosition || 'center' }}
                    className="absolute inset-0 w-full h-full object-cover blur-2xl scale-125 pointer-events-none"
                  />
                </AnimatePresence>

                {/* Main Image Layer */}
                <AnimatePresence initial={false} custom={slideDirection}>
                  <motion.img
                    key={activeStoreIndex}
                    src={selectedProvince.stores ? encodeURI(selectedProvince.stores[activeStoreIndex].img) : "/images/logo-viettel-store.png"}
                    alt={selectedProvince.name}
                    custom={slideDirection}
                    variants={{
                      enter: (direction: number) => ({ opacity: 0, x: direction > 0 ? 1000 : -1000, scale: 1.1 }),
                      center: {
                        opacity: 1, x: 0, scale: (() => {
                          const s = selectedProvince.stores[activeStoreIndex].scale;
                          if (!s) return 1.25;
                          if (s.startsWith('scale-[')) return parseFloat(s.replace('scale-[', '').replace(']', ''));
                          if (s === 'scale-150') return 1.5;
                          if (s === 'scale-125') return 1.25;
                          if (s === 'scale-110') return 1.1;
                          if (s === 'scale-100') return 1.0;
                          return 1.25;
                        })()
                      },
                      exit: (direction: number) => ({ opacity: 0, x: direction < 0 ? 1000 : -1000, scale: 1.1 })
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    style={{
                      borderRadius: '2rem',
                      objectPosition: selectedProvince.stores[activeStoreIndex].objectPosition || 'center',
                    }}
                    className={`relative z-10 w-full h-full ${selectedProvince.stores[activeStoreIndex].objectFit || 'object-cover'} shadow-2xl`}
                  />
                </AnimatePresence>
                {/* Subtle Overlay (Darker at bottom) */}
                <div
                  style={{ borderRadius: '2rem' }}
                  className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 pointer-events-none"
                ></div>
              </div>
            </div>

            {/* Bottom Caption Section */}
            <div className="w-full text-center mt-4 md:mt-4">
              <h3 className="relative z-50 font-beausans font-bold text-2xl md:text-5xl tracking-wide" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                {selectedProvince.stores
                  ? (selectedProvince.stores[activeStoreIndex].id.includes('CH')
                    ? `Cửa hàng ${selectedProvince.stores[activeStoreIndex].id}`
                    : `Siêu thị ${selectedProvince.stores[activeStoreIndex].id}`)
                  : "Thông tin chi tiết"}
              </h3>
            </div>
          </div>

          {/* Close Button - Top Right */}
          <button
            onClick={() => { setSelectedProvince(null); setActiveStoreIndex(0); }}
            className="absolute top-6 right-6 md:top-10 md:right-10 z-[2147483648] text-white hover:text-[#EE0033] transition-all hover:scale-110 duration-300 p-3 bg-white/10 hover:bg-white/20 rounded-full cursor-pointer shadow-xl border border-white/20 backdrop-blur-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
          </button>
        </div>
      )}
    </>
  );
}