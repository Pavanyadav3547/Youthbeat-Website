<template>

    <div>

    <!--------------------------------------------------------------
footer
---------------------------------------------------------------->

        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <ul class="footer-nav">
                            <li> <nuxt-link class="nav-link active" :to="{name:'students-internships'}">All Internships</nuxt-link></li>
                            <li><a href="#">STUDENTS SPEAK</a></li>
                            <li><a href="#why">WHY YOUTHBEAT</a></li>
                            <li><a href="#signup">contact us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        <div class="container sub-footer">
            <div class="row" style="margin: 0px;">
                <div class="col-md-12">Copyright © 2019 by Youthbeat</div>
            </div>
        </div>
        <a href="#0" class="cd-top js-cd-top">Top</a>

    </div>

</template>
<style scoped>
    /*@import "@/assets/css/main-corporates.css";*/
    @import "@/assets/css/corporates-new.css";
</style>

<script>
export default {
  mounted(){

        $('.menu-toggle').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        $('.mega-menu').toggleClass('open');

        $(document).one('click', function closeMenu (e){
            if($('.mega-menu').has(e.target).length === 0){
                $('.mega-menu').removeClass('open');
            } else {
                $(document).one('click', closeMenu);
            }
        });
    });
  }
}
</script>
