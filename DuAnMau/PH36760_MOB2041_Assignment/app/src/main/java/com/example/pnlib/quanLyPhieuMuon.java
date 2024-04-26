package com.example.pnlib;

import androidx.annotation.NonNull;
import androidx.appcompat.app.ActionBarDrawerToggle;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.core.view.GravityCompat;
import androidx.drawerlayout.widget.DrawerLayout;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;

import android.os.Bundle;
import android.view.MenuItem;
import android.widget.Toast;

import com.example.pnlib.Fragment.flLoaiSach;
import com.example.pnlib.Fragment.flPhieuMuon;
import com.example.pnlib.Fragment.flSach;
import com.google.android.material.navigation.NavigationView;

public class quanLyPhieuMuon extends AppCompatActivity {

    ActionBarDrawerToggle actionBarDrawerToggle;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_quan_ly_phieu_muon);
        Toolbar myToolbar = findViewById(R.id.toolbar);
        setSupportActionBar(myToolbar);

        DrawerLayout drawerLayout =  findViewById(R.id.navigationDrawer);

        actionBarDrawerToggle = new ActionBarDrawerToggle(this, drawerLayout, myToolbar, R.string.drawerOpen, R.string.drawerClose);

        drawerLayout.addDrawerListener(actionBarDrawerToggle);


        NavigationView navigationView = findViewById(R.id.nav_view);

        navigationView.setNavigationItemSelectedListener(new NavigationView.OnNavigationItemSelectedListener() {
            @Override
            public boolean onNavigationItemSelected(@NonNull MenuItem menuItem) {
                int id=menuItem.getItemId();
                //it's possible to do more actions on several items, if there is a large amount of items I prefer switch(){case} instead of if()

                FragmentManager fragmentManager = getSupportFragmentManager();
                FragmentTransaction fragmentTransaction = fragmentManager.beginTransaction();

                if (id == R.id.nav_PhieuMuon){
                    fragmentTransaction.replace(R.id.fl_content, new flPhieuMuon());
                } else if (id == R.id.nav_LoaiSach) {
                    fragmentTransaction.replace(R.id.fl_content, new flLoaiSach());
                } else if (id == R.id.nav_Sach) {
                    fragmentTransaction.replace(R.id.fl_content, new flSach());
                }

                drawerLayout.closeDrawers();

                return true;
            }
        });
    }

    @Override
    protected void onPostCreate(Bundle savedInstanceState) {
        super.onPostCreate(savedInstanceState);
        actionBarDrawerToggle.syncState();
    }
}