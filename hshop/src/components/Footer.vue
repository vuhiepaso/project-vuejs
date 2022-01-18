<template>
  <div class="containerFooter">
    <!-- Site footer -->
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>Introduce</h6>
            <p class="text-justify">
              Vue (pronounced /vju:/, like view) is a
              <i>progressive framework </i> for building user interfaces. Unlike
              other monolithic frameworks, Vue is designed from the ground up to
              be incrementally adoptable. The core library is focused on the
              view layer only, and is easy to pick up and integrate with other
              libraries or existing projects.
            </p>
          </div>
          <div class="col-xs-1 col-md-1"></div>
          <div class="col-xs-6 col-md-3">
            <h6>Contact Info</h6>
            <ul class="footer-links">
              <li>
                <i
                  class="fa fa-phone icon"
                  style="font-size: 17px; color: white"
                ></i>
                19008198***
              </li>
              <li>
                <i
                  class="fa fa-envelope icon"
                  style="font-size: 17px; color: white"
                ></i>
                abc@Gmail.com
              </li>
              <li>
                <i
                  class="fa fa-map-marker icon"
                  style="font-size: 17px; color: white"
                ></i>
                132 Nguyễn Dông Chi Cầu Giấy Hà Nội
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-xs-12">
            <p class="copyright-text">
              &copy; 2022 - Bản quyền thuộc về cửa hàng Hshop.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>

<style>
.containerFooter {
  background-color: gray;
  text-align: left;
}
.site-footer {
  background-color: #26272b;
  padding: 45px 0 20px;
  font-size: 15px;
  line-height: 24px;
  color: #737373;
}
.site-footer hr {
  border-top-color: #bbb;
  opacity: 0.5;
}
.site-footer hr.small {
  margin: 20px 0;
}
.site-footer h6 {
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 5px;
  letter-spacing: 2px;
}
.site-footer a {
  color: #737373;
}
.site-footer a:hover {
  color: #3366cc;
  text-decoration: none;
}
.footer-links {
  padding-left: 0;
  list-style: none;
}
.footer-links li {
  display: block;
}
.footer-links a {
  color: #737373;
}
.footer-links a:active,
.footer-links a:focus,
.footer-links a:hover {
  color: #3366cc;
  text-decoration: none;
}
.footer-links.inline li {
  display: inline-block;
}

.site-footer .social-icons {
  text-align: right;
}
.site-footer .social-icons a {
  width: 40px;
  height: 40px;
  line-height: 40px;
  margin-left: 6px;
  margin-right: 0;
  border-radius: 100%;
  background-color: #33353d;
}
.copyright-text {
  margin: 0;
}
.icon {
  margin-right: 5px;
  color: white;
}
@media (max-width: 991px) {
  .site-footer [class^="col-"] {
    margin-bottom: 30px;
  }
}
@media (max-width: 767px) {
  .site-footer {
    padding-bottom: 0;
  }
  .site-footer .copyright-text,
  .site-footer .social-icons {
    text-align: center;
  }
}
</style>