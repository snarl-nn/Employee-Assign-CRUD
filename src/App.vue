<template>
  <div>
    <nav class="navbar navbar-dark bg-success justify-content-between flex-nowrap flex-row">
      <div class="container">
        <router-link to="/" class="navbar-brand float-left">ระบบจัดการข้อมูลพนักงาน</router-link>
        <ul class="nav navbar-nav flex-row float-right ">
          <li class="nav-item">
            <router-link to="/" class="nav-link mr-4"><i class="fa-solid fa-user mr-1"></i>ลงทะเบียน</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/view" class="nav-link"><i class="fa-regular fa-clipboard mr-1"></i>ดูข้อมูลรวม</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>
