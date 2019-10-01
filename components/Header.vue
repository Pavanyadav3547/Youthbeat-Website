<template>

    <!--------------------------------------------------------------
    Navigation section
    ---------------------------------------------------------------->

    <header>

        <nav class="navbar navbar-expand-lg  main-nav " id="main-nav">

            <div class="logo_bar all-pages">
                <img class="logo" src="~assets/img/logos.png">
                <span></span>
                <div id="mySidenav" class="sidenav">
                    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                    <nuxt-link class="nav-link active" :to="{name:'students-internships',params:{id:1}}">All Internship <span class="sr-only">(current)</span>
                    </nuxt-link>
                    <a href="/corporates">Corporates</a>
                    <a href="/students">Students</a>
                </div>
                <span class="nav_icon" onclick="openNav()"><svg  xmlns="http://www.w3.org/2000/svg" width="32" height="28" viewBox="0 0 204 107">
  <g id="Group_259" data-name="Group 259" transform="translate(-5021 1527)">
    <rect class="nav-btn" id="Rectangle_572" data-name="Rectangle 572" width="204" height="25" transform="translate(5021 -1527)" fill="#000000"/>
    <path class="nav-btn" id="Rectangle_572-2" data-name="Rectangle 572" d="M4,0H164a0,0,0,0,1,0,0V25a0,0,0,0,1,0,0H4a4,4,0,0,1-4-4V4A4,4,0,0,1,4,0Z" transform="translate(5061 -1486)" fill="#000000"/>
    <rect class="nav-btn" id="Rectangle_572-3" data-name="Rectangle 572" width="204" height="25" transform="translate(5021 -1445)" fill="#000000"/>
  </g>
</svg></span>
            </div>

        </nav>
    </header>

</template>
<style scoped>
    /*@import "@/assets/css/main-corporates.css";*/
    @import "@/assets/css/corporates-new.css";
</style>