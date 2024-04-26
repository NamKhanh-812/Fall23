package com.example.pnlib.Database;

import android.content.ContentValues;
import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

import androidx.annotation.Nullable;

public class Dbhelper extends SQLiteOpenHelper {
    public Dbhelper(Context context) {
        super(context, "PBLIB", null, 1);
    }

    @Override
    public void onCreate(SQLiteDatabase database) {
        // tạo bảng Thành Viên
        String createTableThanhVien = ("CREATE TABLE ThanhVien\n" +
                "(\n" +
                "    maTV INTEGER PRIMARY KEY AUTOINCREMENT ,\n" +
                "    hoTen  TEXT NOT NULL ,\n" +
                "    namSinh TEXT NOT NULL\n" +
                ")");
//        database.insert("ThanhVien", null, values);
//        database.update("ThanhVien ", values, "maTV=?", new String[]{obj.maTV});
//        database.delete("ThanhVien ", "maTV=?", new String[]{maTV});
//        database.execSQL("SELECT * FROM ThanhVien WHERE maTV=?", new String[]{obj.maTV});
//        database.execSQL("SELECT * FROM ThanhVien");
        database.execSQL(createTableThanhVien);

        // tạo bảng thủ thư
        String createTableThuThu = ("CREATE TABLE ThuThu" +
                "(maTT INTEGER PRIMARY KEY AUTOINCREMENT, " +
                "hoTen TEXT NOT NULL, " +
                "matKhau TEXT NOT NULL)");
        database.execSQL(createTableThuThu);
//        database.insert("ThuThu", null, values);
//        database.update("ThuThu", values, "maTT=?", new String[]{obj.maTT});
//        database.delete("ThuThu", "maTT=?", new String[]{maTT});
//        database.execSQL("SELECT * FROM ThuThu WHERE maTT=?", new String[]{obj.maTT});
//        database.execSQL("SELECT * FROM ThuThu");

        //tạo bảng loại loại sách
        String createTableLoaiSach = ("CREATE TABLE LoaiSach" +
                "(maLoai INTEGER PRIMARY KEY AUTOINCREMENT, " +
                "tenLoai TEXT NOT NULL)");
//        database.insert("LoaiSach ", null, values);
//        database.update("LoaiSach ", values, "maLoai=?", new String[]{obj.maLoai});
//        database.delete("LoaiSach ", " maLoai =?", new String[]{maLoai});
//        database.execSQL("SELECT * FROM LoaiSach WHERE maLoai =?", new String[]{obj.maLoai});
//        database.execSQL("SELECT * FROM LoaiSach");
        database.execSQL(createTableLoaiSach);

        //tạo bảng sách
        String createTableSach = ("CREATE TABLE Sach" +
                "(maSach INTEGER PRIMARY KEY AUTOINCREMENT," +
                "maLoai  INTEGER  REFERENCES LoaiSach(maLoai)," +
                "tenSach TEXT NOT NULL," +
                "giaThue TEXT NOT NULL)");
//        database.insert("Sach", null, values);
//        database.update("Sach ", values, " maSach=?", new String[]{obj.maSach});
//        database.delete("Sach ", " maSach =?", new String[]{maSach});
//        database.execSQL("SELECT * FROM Sach WHERE maSach =?", new String[]{obj.maSach});
//        database.execSQL("SELECT * FROM Sach");
//        database.execSQL(createTableSach);

        //tạo bảng phiếu mượn
        String createTablePhieuMuon = ("CREATE TABLE PhieuMuon" +
                "(maPhieu INTEGER PRIMARY KEY AUTOINCREMENT," +
                "maTV INTEGER REFERENCES ThanhVien(maTV)," +
                "maTT TEXT REFERENCES ThuThu(maTT)," +
                "maSach INTEGER REFERENCES Sach(maSach)," +
                "ngayMuon DATE NOT NULL," +
                "traSach INTEGER NOT NULL," +
                "tienThue INTEGER NOT NULL)");
//        database.insert("PhieuMuon ", null, values);
//        database.update("PhieuMuon ", values, "maPM=?", new String[]{obj.maPM});
//        database.delete("PhieuMuon ", "maPM=?", new String[]{maPhieu});
//        database.execSQL("SELECT * FROM PhieuMuon WHERE maPM=?", new String[]{obj.maPM});
//        database.execSQL("SELECT * FROM PhieuMuon");
        database.execSQL(createTablePhieuMuon);
    }

    @Override
    public void onUpgrade(SQLiteDatabase database, int oldVersion, int newVersion) {
        //bảng thành viên
        database.execSQL("drop table if exists ThanhVien");
        //bảng thủ thư
        database.execSQL("drop table if exists ThuThu");
        //bảng loại sách
        database.execSQL("drop table if exists LoaiSach");
        //bảng sách
        database.execSQL("drop table if exists Sach");
        //bảng phiếu mượn
        database.execSQL("drop table if exists PhieuMuon");
        //gọi lại hàm onCreate
        onCreate(database);
    }
}
